importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3576aa8fd72afd73eeb5.js",
    "revision": "278cb7138385d9c510122e9f08302234"
  },
  {
    "url": "/_nuxt/97e2f6197098c85bae54.js",
    "revision": "44ada1f28610653bedcb0f20530b1c3f"
  },
  {
    "url": "/_nuxt/bca3f0846ac3e8ac8f40.js",
    "revision": "7175f845838c9f0fb331f9f5d0b5455b"
  },
  {
    "url": "/_nuxt/ea8f39277da3d4008158.js",
    "revision": "207c63455aaadab5c4a574d014dd2494"
  }
], {
  "cacheId": "mtm-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
