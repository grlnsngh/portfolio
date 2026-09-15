import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

// Generated at build time so shared links (LinkedIn, Slack, X) render a card
// instead of a bare URL. `twitter:card` is summary_large_image, which needs
// an image to be worth anything.
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #2b3a55 0%, #435270 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#aebbd4",
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 86, fontWeight: 700, marginTop: 16 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 44, color: "#d5dcea", marginTop: 8 }}>
          {siteConfig.role}
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            fontSize: 28,
            color: "#aebbd4",
          }}
        >
          React · Next.js · TypeScript · React Native
        </div>
      </div>
    ),
    size
  );
}
