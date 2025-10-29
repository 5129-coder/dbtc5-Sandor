// This is your Service Worker file

// When the service worker is installed
self.addEventListener('install', (event) => {
  console.log('✅ Service Worker installed.');

  // You can add files to cache here (optional)
  event.waitUntil(
    caches.open('sandor-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './script.js',
        './icon-512.png',
        './manifest.json'
      ]);
    })
  );
});

// When files are requested, serve them from cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached version if there is one, else fetch from network
      return response || fetch(event.request);
    })
  );
});

// When the service worker is activated
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activated.');
});
