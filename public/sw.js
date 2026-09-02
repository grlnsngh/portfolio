// Basic service worker for PWA functionality.
//
// Caching strategy matters here: a cache-first document means a returning
// visitor keeps seeing an old build, and the stale HTML it serves references
// hashed /_next/static chunks that no longer exist after a deploy — a blank
// page. So navigations are network-first (cache is only the offline
// fallback), and only content-addressed static assets are cache-first.
const CACHE_NAME = "portfolio-v3";
const OFFLINE_URLS = ["/", "/manifest.json"];

// Hashed build output and images are immutable: the URL changes when the
// content does, so serving them from cache can never go stale.
function isImmutableAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/images/")
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      // addAll() is atomic — one 404 would reject the whole install and
      // leave the worker permanently uninstalled — so add entries
      // individually and tolerate failures.
      .then((cache) =>
        Promise.allSettled(OFFLINE_URLS.map((url) => cache.add(url)))
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Never intercept POSTs or API calls (e.g. the contact form) — only cache
  // static GETs. Falling through here means the browser handles the request
  // as if there were no service worker at all.
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Same-origin only: cross-origin responses are opaque and pollute the cache.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  if (isImmutableAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return response;
          })
      )
    );
    return;
  }

  // Everything else (documents above all) is network-first, so a deploy is
  // picked up on the very next visit. The cache is refreshed on each success
  // and only read when the network is unavailable.
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        caches
          .match(request)
          .then((cached) => cached || caches.match("/").then((r) => r || Response.error()))
      )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      // Take over already-open tabs so the stale-cache fix applies without
      // requiring every client to be closed first.
      .then(() => self.clients.claim())
  );
});
