const cacheName = 'v1';
const cacheAssets = [
    'index.html',
    'assets/css/main.css',
    'assets/js/main.js',
    'assets/img/1.jpg',
    'assets/img/12.jpg',
    'assets/img/13.jpg',
    'assets/img/14.png',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
    'assets/img/9.jpg',
]

//Install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(cacheName).then((cache) => {  //Open cache and put all files in the cacheAssets
         cache.addAll(
            cacheAssets
         );
         })
        .then(()=>self.skipWaiting())
      );
  });


//intercept all fetch requests with service worker
  self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {  //first check cache for file that matches url request
      return resp || fetch(event.request).then((response) => {   // return that file if found otherwise fetch files from server
        return caches.open(cacheName).then((cache) => {  //if file is taken from server create a clone of it and put it in cache for next time
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );
});;

//clean up old cache for space
self.addEventListener('activate', (e)=>{
    e.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache=>{
                    if(cache !== cacheName){
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})