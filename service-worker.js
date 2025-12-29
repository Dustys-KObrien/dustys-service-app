self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(self.skipWaiting()); // skip waiting state
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Basic fetch passthrough (can upgrade to cache strategy later)
});
