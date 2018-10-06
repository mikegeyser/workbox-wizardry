module.exports = {
  "globDirectory": "build/default",
  "globPatterns": [
    "**/*.{html,js}"
  ],
  "swDest": "build/default/sw.js",
  "swSrc": "src/sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};