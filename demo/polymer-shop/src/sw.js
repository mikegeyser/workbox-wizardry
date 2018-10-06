importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images'
    }),
);

workbox.routing.registerRoute(
    /\.json$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'data'
    }),
);

self.addEventListener('install', (event) => {
    console.log('Service worker is being installed.');

    const channel = new BroadcastChannel('service-worker-channel');
    channel.postMessage({ promptToReload: true });

    channel.onmessage = (message) => {
        if (message.data.skipWaiting) {
            console.log('Skipping waiting and installing service worker.');
            self.skipWaiting();
        }
    };
});
