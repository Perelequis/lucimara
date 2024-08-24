self.addEventListener('install', event => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    // This will ensure the video continues playing even if the network goes offline
    event.respondWith(
        fetch(event.request).catch(() => new Response('Offline'))
    );
});
