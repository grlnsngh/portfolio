import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(5000),
  // Honeypot: real visitors never see or fill this field. See contact.tsx.
  website: z.string().max(200).optional(),
});

// Per-instance sliding-window limiter. Resets on cold start and isn't shared
// across concurrent instances, but it's free and backstops Resend's own
// account-wide 10 req/s cap. Swap for Upstash if abuse becomes a problem.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

// Without this the map keeps one key per IP that ever hit the route, for as
// long as the instance lives — entries were filtered but never removed.
function evictExpired(now: number) {
  for (const [key, timestamps] of hits) {
    if (timestamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
      hits.delete(key);
    }
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Sweeping on every request is fine at this volume: the map is bounded by
  // the number of distinct IPs seen within a single 10-minute window.
  evictExpired(now);

  const timestamps = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
        },
      }
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { name, email, message, website } = parsed.data;

  // Bots fill hidden fields; humans never do. Pretend success, send nothing.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["grlnsngh@gmail.com"],
      reply_to: email,
      // Subject lines are a header field: newlines in attacker-controlled
      // input are the classic header-injection vector, so collapse them.
      subject: `Portfolio contact from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => "");
    console.error("Resend send failed:", res.status, errorText);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
