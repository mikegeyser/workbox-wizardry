

*Big things to demo:*
1. Using the config approach to precaching
2. Template service worker
3. Runtime caching of external resources 
4. Caching strategies
5. Caching of SSR stuff.
6. Background sync and replay
7. Streams API.

# Level 1: Precaching

- Start of with a simple polymer app.
- Build it.
- Install workbox
- Run Workbox wizard to generate config.
- Install service worker.

```bash
>> npm install -g workbox-cli
```

We can generate a service worker using `workbox`

```bash
>> workbox wizard
? What is the root of your web app (i.e. which directory do you deploy)? dist/
? Which file types would you like to precache? txt, png, ico, html, js, json, css
? Where would you like your service worker file to be saved? dist/sw.js
? Where would you like to save these configuration options? workbox-config.js
```

Update the directory to `build/default/`

```
module.exports = {
  "globDirectory": "build/default",
  "globPatterns": [
    "**/*.{html,js}"
  ],
  "swDest": "build/default/sw.js"
};
```

Install the `sw.js` and rebuild

```
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js');
    }
  </script>
```

Generate the service worker.

```bash
>> workbox generateSW workbox-config.js
```

# Level 2: Template service worker

- Create a templated service worker.
- Create the injection point.
- Install libraries.
- Inject manifest.

A more powerful way to do this is not via config alone, but a template `sw.js`.

#### src/sw.js
```js
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
```

Change the config to respect the inject manifest.

```js
  "swSrc": "src/sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
```

```bash
>> workbox injectManifest workbox-config.js

>> workbox copyLibraries build/default/

>> http-server build/default/ -c 0
```

# Level 3: Runtime caching

```js
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images'
    }),
  );
```

```js
plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
```

# Level 4: Caching strategies

Use staleWhileRevalidate for the JSON data.

```js
workbox.routing.registerRoute(
    /\.json$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'data'
    }),
  );
```

# Level 5: Broadcast channel

Need to find a reason to use broadcast channel? 
For sw install step.

```js
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
```

```js
const channel = new BroadcastChannel('service-worker-channel');
channel.onmessage = (message) => {
  if (message.data.promptToReload) {
    if (confirm('Updates available. Would you like to reload?')) {
      channel.postMessage({ skipWaiting: true });
    };
  }
}

navigator.serviceWorker.addEventListener('controllerchange', () => {
  window.location.reload();
});
```

# Level 6: Traditional


# Level 7:  Background Sync


# Level 8: Streams




