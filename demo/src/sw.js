// Importing dependencies from local, in case the conference wifi sucks.
importScripts('workbox-v4.3.1/workbox-sw.js', 'idb/idb-keyval-iife.min.js');

workbox.setConfig({ modulePathPrefix: 'workbox-v4.3.1/', debug: true });

// Level 0. Force skip waiting... ¯\_(ツ)_/¯
self.skipWaiting();

// Level 1. Precaching... (-_-)

// Level 2. Runtime routing... (◉‿◉)

// Level 3. Exception handling... \(^-^)/

// Level 4. Background Sync... (⌐■_■)

// Level 5. Offline streams... (ノಠ益ಠ)ノ彡┻━┻
