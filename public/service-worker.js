const FILES_TO_CACHE = [
  "/",
  "index.html",
 //"index.js",  // for prod include bundle.js
  "dist/bundle.js",  // for prod include bundle.js
  "styles.css",
  "icons/icon-192x192.png",
  "icons/icon-512x512.png"
    //"/manifest.webmanifest"
]

const CACHE_NAME = "app-budget-cache-v2";
const DATA_CACHE_NAME = "app-budget-cache-v1";

// install
self.addEventListener("install", function(evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

//
//  update the cache if their is a change in name

self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

//
// determine if we are off or on line with a fetch
// fetch

self.addEventListener("fetch", function(evt) {
  // cache successful requests to the API
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            //
            // Network request failed, try to get it from the cache.

            return cache.match(evt.request);
          });
      }).catch(err => console.log(err))
    );

    return;
  }

  //
  // we are off line
  // if the request is not for the API, serve static assets using "offline-first" approach.
  // see https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network

  console.log("offline event ",evt.request)

  evt.respondWith(
     // caches.match(evt.request).then(function(response) {
    //   return response || fetch(evt.request);
    caches.open(CACHE_NAME).then(cache=>{
      return cache.match(evt.request)
      .then(response =>{
        return response || fetch(evt.request)
      })
   
    })
  );
});

