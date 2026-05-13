/* ============================================================
   Petit Mot — Service Worker
   Caches all app assets for full offline use.
   ============================================================ */

var CACHE_NAME = 'petit-mot-v1';

var ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/audio.js',
  '/js/calendar.js',
  '/js/curriculum.js',
  '/js/dictionary.js',
  '/js/flashcards.js',
  '/js/guide.js',
  '/js/journal.js',
  '/js/ornaments.js',
  '/js/progress.js',
  '/js/stories.js',
  '/js/tooltips.js',
  '/img/banner.webp',
  '/img/favicon.png',
  '/site.webmanifest'
];

// Install — cache all assets
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request);
    })
  );
});
