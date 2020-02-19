importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');


if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // workbox.loadModule('workbox-expiration');

  workbox.routing.registerRoute(
    // new RegExp('\\.png$'),
    new RegExp('\\.(?:png|jpg|jpeg|svg|gif)$'),
    new workbox.strategies.CacheFirst(),
    new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 10, // 10s
          // maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
    // new workbox.strategies.CacheFirst({
    //   cacheName: 'images',
    //   plugins: [
    //     new ExpirationPlugin({
    //       maxEntries: 60,
    //       maxAgeSeconds: 10, // 10s
    //       // maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
    //     }),
    //   ],
    // }),
    // new workbox.strategies.ExpirationPlugin({
    //   maxEntries: 60,
    //   maxAgeSeconds: 10, // 10s
    //   // maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
    // }),
  );
  
  // workbox.loadModule('workbox-strategies');
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

self.addEventListener('fetch', function (event) {
});

// const version = 'v1';

// // インストール時にキャッシュする
// self.addEventListener('install', (event) => {
// console.log('service worker install ...');

//   // キャッシュ完了までインストールが終わらないように待つ
//   // event.waitUntil(
//   // caches.open('v1').then((cache) => {
//   //   return cache.addAll([
//   //     '/',
//   //   ]);
//   // })
//   // );
// });


// self.addEventListener('activate', (event) => {
//   console.info('activate', event);
// });

// self.addEventListener('fetch', function(event) {
//   console.log('fetch', event.request.url);

//   event.respondWith(
//     // リクエストに一致するデータがキャッシュにあるかどうか
//     caches.match(event.request).then(function(cacheResponse) {
//       // キャッシュがあればそれを返す、なければリクエストを投げる
//       return cacheResponse || fetch(event.request).then(function(response) {
//         return caches.open('v1').then(function(cache) {
//           // レスポンスをクローンしてキャッシュに入れる
//           cache.put(event.request, response.clone());
//           // オリジナルのレスポンスはそのまま返す
//           return response;
//         });  
//       });
//     })
//   );
// });