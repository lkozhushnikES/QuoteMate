// Basic Workbox-like placeholder (CRA will inject precache in build)
declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', () => {
  console.log('[SW] Installed');
});

self.addEventListener('activate', () => {
  console.log('[SW] Activated');
});

self.addEventListener('fetch', () => {
  // Could add caching strategies here
});