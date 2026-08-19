// Basic service worker for PWA functionality
const CACHE_NAME = "portfolio-v2";
const urlsToCache = ["/", "/manifest.json", "/favicon.ico"];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Never intercept POSTs or API calls (e.g. the contact form) — only cache
  // static GETs. Falling through here means the browser handles the request
  // as if there were no service worker at all.
  if (request.method !== "GET" || new URL(request.url).pathname.startsWith("/api/")) {
    return;
  }

  event.respondWith(
    caches.match(request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(request);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
