// Service Worker for critical resource caching
const CACHE_NAME = 'prestige-japan-v1';
const CRITICAL_RESOURCES = [
  '/assets/fonts/nohemi-regular-webfont.woff2',
  '/Experiencia-cultural-con-kimono-tradicionalXL.webp',
  '/Experiencia-cultural-con-kimono-tradicional.webp',
  '/Tablet-Experiencia-cultural-con-kimono-tradicional.webp',
  '/Movil-Experiencia-cultural-con-kimono-tradicional.webp',
  '/assets/titulosDorados/index/PremiumJapan2024Black.webp'
];

// Helper function to cache resources that exist
async function cacheAvailableResources(cache) {
  const promises = CRITICAL_RESOURCES.map(async (resource) => {
    try {
      const response = await fetch(resource);
      if (response.ok) {
        await cache.put(resource, response);
      }
    } catch (error) {
      console.log(`Skipping cache for ${resource}: ${error.message}`);
    }
  });
  
  await Promise.allSettled(promises);
}

// Install event - cache critical resources with error handling
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cacheAvailableResources(cache);
      })
      .catch((error) => {
        console.log('Service worker cache failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
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
  self.clients.claim();
});

// Fetch event - serve from cache first for images and fonts
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image' || 
      event.request.destination === 'font' ||
      event.request.url.includes('.webp') ||
      event.request.url.includes('.woff2')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then((response) => {
            if (response.ok) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
            }
            return response;
          });
        })
    );
  }
});