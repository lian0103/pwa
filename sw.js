importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const SW_VERSION = '1.0.0';
self.addEventListener('message', (event) => {
  if (event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage(SW_VERSION);
  }
});

// 触发安装事件
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

// 触发激活事件
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 使用cache功能
// 存任何的.js
console.log('workbox.strategies',workbox.strategies)
workbox.routing.registerRoute(
  new RegExp('.*\\.js'),
  new workbox.strategies.CacheFirst({
    cacheName: 'js-cache'
  })
);

// 存任何的css
workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  new workbox.strategies.CacheFirst({
    cacheName: 'css-cache'
  })
);

// 存任何的images
workbox.routing.registerRoute(
  new RegExp('.*\.(?:png|jpg|jpeg|svg|gif)'),
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache'
  })
);