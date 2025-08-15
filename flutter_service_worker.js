'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "87fd1dcae266892efd59830cee121daf",
"assets/AssetManifest.bin.json": "99825201e5462b2b9400993951c5666f",
"assets/AssetManifest.json": "b99f4d29e4fd5758283d4082434cacc2",
"assets/assets/amino_acids/alanine.png": "0ba5100b1bf7403c2d998b20650320ec",
"assets/assets/amino_acids/arginine.png": "6b9f22bbbc888ec4748bec87df224f97",
"assets/assets/amino_acids/asparagine.png": "3850be6bb8d3d8c07813cc956d15e44a",
"assets/assets/amino_acids/aspartate.png": "f861ae9d858fd79fa33e625d911b510f",
"assets/assets/amino_acids/cysteine.png": "d1a50ea0a93ff707f9c497a69987e9c7",
"assets/assets/amino_acids/glutamate.png": "9eb7c1ba38bdb21dc9cb6db98b140539",
"assets/assets/amino_acids/glutamine.png": "93fc80911fd3bc074987e1179379e240",
"assets/assets/amino_acids/glycine.png": "6cc10398498fb97bb87dd96c152932e5",
"assets/assets/amino_acids/histidine.png": "2b56ffaf67e7a7adf4fdf76a5f1042d6",
"assets/assets/amino_acids/isoleucine.png": "6a97aa93c0d70e1589afab4ba0ad46e7",
"assets/assets/amino_acids/leucine.png": "1ff0ba82b5d64624672b71bc3ce17fe0",
"assets/assets/amino_acids/lysine.png": "23123c17204bcf0a451956c0c9f83475",
"assets/assets/amino_acids/methionine.png": "42f197b208bd08af111c8ecff14fe023",
"assets/assets/amino_acids/phenylalanine.png": "c7f19fa9c898939475d8c4735b9aeffb",
"assets/assets/amino_acids/proline.png": "dca12d15f1c3850eb8416a8b4e9e96fb",
"assets/assets/amino_acids/serine.png": "3c6309dfcc63872f0015aefb732065fc",
"assets/assets/amino_acids/threonine.png": "87ba9af15a01dbf91da719431c98196d",
"assets/assets/amino_acids/tryptophan.png": "eee7f1f993f40d835ba18da0db895084",
"assets/assets/amino_acids/tyrosine.png": "8a9d48acd6d6a4b5d3ea2bddfd424976",
"assets/assets/amino_acids/valine.png": "e6fe235e1316dc2e26dffac5d6eedf7a",
"assets/assets/functional_groups/acetal.png": "eb5b158b76865e54187350391f196d84",
"assets/assets/functional_groups/acyl_halide.png": "d5cda21254f3ab1bcdbc95f8674bc945",
"assets/assets/functional_groups/alcohol.png": "44286b1b9091bb9c1a30430abea870a9",
"assets/assets/functional_groups/aldehyde.png": "2258fb2396c663d880d90ec13fad5d48",
"assets/assets/functional_groups/alkenyl.png": "d143f7d1180481fe9839d917210b2177",
"assets/assets/functional_groups/alkyl.png": "4390e22bd4796d263165e69c1ac6ff78",
"assets/assets/functional_groups/alkynyl.png": "a21608a663affbbf9f796e03a6ba9cf7",
"assets/assets/functional_groups/amide.png": "03abfb4e39fd83ad52fb44485cf2a685",
"assets/assets/functional_groups/amidine.png": "111d952afae43677c021002773e28dbc",
"assets/assets/functional_groups/amine.png": "cb5a682e2ae4a782413c39de9e146a16",
"assets/assets/functional_groups/azide.png": "75ec8be7c450ec81e9b361b2e49b45aa",
"assets/assets/functional_groups/azo.png": "bd35b639a8874fc51fbe0e3392d95d6e",
"assets/assets/functional_groups/carbamate.png": "8eec08f000451b160ec07b2a0d4b2526",
"assets/assets/functional_groups/carbonate.png": "484a84669bc6965c538e3b51093a1fe5",
"assets/assets/functional_groups/carboxyl.png": "3da7bd1a5952dde24ff2d629172bbb9b",
"assets/assets/functional_groups/carboxylate.png": "37770a33d54a13766255ed595aef8974",
"assets/assets/functional_groups/carboxylic_anhydride.png": "139b4c965409a8d0c40bdc8ac0ba7517",
"assets/assets/functional_groups/cyanate.png": "53c4fc327422810b92de302c45eadda7",
"assets/assets/functional_groups/disulfide.png": "dd24c651ee1dbd32148f549e46f5d34c",
"assets/assets/functional_groups/ester.png": "06097000bc1d00601a9120807b0ef475",
"assets/assets/functional_groups/ether.png": "0983268bf583dd0c005f6cad91727fd0",
"assets/assets/functional_groups/guanidine.png": "8367364f226e3fb4db27529b09224cc5",
"assets/assets/functional_groups/hemiacetal.png": "cd83e2c3d903c0e8e7adf3615498698f",
"assets/assets/functional_groups/hemiketal.png": "3bcaf061753f97b8ea05cf9afab8dc85",
"assets/assets/functional_groups/hydroperoxide.png": "0e342c14796325351761df30c1993084",
"assets/assets/functional_groups/imide.png": "e16b21040abdb44d462765212b5cf30e",
"assets/assets/functional_groups/imine.png": "765970aebb0475eb24b95fd4002f48a1",
"assets/assets/functional_groups/isocyanate.png": "afe3893a3f1ec280d272d9ccee5fb74c",
"assets/assets/functional_groups/isonitrile.png": "c6e9fd93abea78b394021c2d4e3f3ea8",
"assets/assets/functional_groups/ketal.png": "c56dde296937d1c0da1c5b9e13203230",
"assets/assets/functional_groups/ketone.png": "813fa2a2260012f295480ca681cd2df0",
"assets/assets/functional_groups/nitrate.png": "f470294457f93b9b1962a3508044e10e",
"assets/assets/functional_groups/nitrile.png": "430029fad2694b4054d0837a97942284",
"assets/assets/functional_groups/nitrile.svg": "029608d5d2ca8cdd234e9dd293b9510a",
"assets/assets/functional_groups/nitrite.png": "c21e98bf6a9435504d49930db01fe417",
"assets/assets/functional_groups/nitro.png": "1a4b84877ad4bc35023690607e5c08ce",
"assets/assets/functional_groups/nitroso.png": "82cc44588536069d88b420b4b52c8cb8",
"assets/assets/functional_groups/orthocarbonate_ester.png": "c1a1325e7a319a37ac830aa921b969d9",
"assets/assets/functional_groups/orthoester.png": "65c25eb26bd39d4bc264598f432a6af1",
"assets/assets/functional_groups/peroxide.png": "118e5222c5d3a84412113b580d0a98fe",
"assets/assets/functional_groups/phenyl.png": "fa910302e42f6e77a1f6bd89c6cca6e2",
"assets/assets/functional_groups/phosphodiester.png": "8f1723d3c34f67259369f1fe8c41b572",
"assets/assets/functional_groups/sulfide.png": "10464665ccfb8b1befaa7a0eb3d90416",
"assets/assets/functional_groups/sulfone.png": "64189f4c1723011b905bd9f21e334a82",
"assets/assets/functional_groups/sulfoxide.png": "d08234cc37257a1cf113e5b5bd970410",
"assets/assets/functional_groups/thiocyanate.png": "da23349ad8cff2d031cb4bd04e0f2a3f",
"assets/assets/functional_groups/thioester.png": "96727349065f59f6cefb874ab085ebc7",
"assets/assets/functional_groups/thiol.png": "22fffbd6dab7ef2d9234be4163291e6e",
"assets/assets/iupac_naming/(2R)-4-amino-2-methylbutan-1-ol.png": "48c4b2926c683ac2d9b4f1f8d5aff57c",
"assets/assets/iupac_naming/(4R)-2-chloro-1-ethyl-4-methylcyclohexene.png": "9e4cc4a9d17fdda6ca227b3bd81ba958",
"assets/assets/iupac_naming/1,1-Dibromopentane.png": "298cc6b11692d30aec69bb9f08dfe791",
"assets/assets/iupac_naming/1H-imidazole.png": "bbd47a815930bb3d4221a6c322ddf7f5",
"assets/assets/iupac_naming/1H-pyrrole.png": "fa68765e2a8d0c0483f9ecf32030c64e",
"assets/assets/iupac_naming/3,5-dihydroxy-3-methylpentanoate.png": "62887434de711f04839f641601d7d9ac",
"assets/assets/iupac_naming/3-ethylhept-3-ene.png": "eeab092c22518eb73639005f157b3c1b",
"assets/assets/iupac_naming/4-Chloro-1-butene.png": "8d141e29f6dc62f2e8d73919d014946b",
"assets/assets/iupac_naming/5-methylcyclopenta-1,3-diene.png": "a3b708a516b71a67a0d949ea370a594b",
"assets/assets/iupac_naming/5-sulfanylpentanoic_acid.png": "44300bb41dba9f919526112c564a5e57",
"assets/assets/iupac_naming/7H-purine.png": "4326b7d77e8768b50577368cff518a20",
"assets/assets/iupac_naming/But-1-yne.png": "8db02e6f197baf5259ce35e4c9f14fc3",
"assets/assets/iupac_naming/Furan.png": "614440d6a96544fb26c2402114dd1d6c",
"assets/assets/iupac_naming/Phenol.png": "d3113cef5586c30072567a05b6f04437",
"assets/assets/iupac_naming/Pyrimidine.png": "b71849c4368df3f41101140f76cc6c09",
"assets/assets/logo/mm_logo.png": "65743805ed41e52ce51d067f2e343ef8",
"assets/assets/logo/mm_logo_noA.jpg": "9473d2962d949641c3100fb9cc5cdc85",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ee307bdeed7cb283f0cabc89340d0bc3",
"assets/NOTICES": "3be736fd55e5e082ca6a5698a715e330",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "d46a677da6de45129ff906b835b7bdfc",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5c60668041704e695aaf31b44b8ed6e1",
"icons/Icon-192.png": "e98553c39dbcbd378df632ce585c3d72",
"icons/Icon-512.png": "559837aa8016870c8f4f6d8decf76141",
"icons/Icon-maskable-192.png": "e98553c39dbcbd378df632ce585c3d72",
"icons/Icon-maskable-512.png": "559837aa8016870c8f4f6d8decf76141",
"index.html": "687113b74151da1e3b3cadf8dbcdbc25",
"/": "687113b74151da1e3b3cadf8dbcdbc25",
"main.dart.js": "626a9c6095db93c8bcd04a5c6af377a9",
"manifest.json": "49ccfdb228d400b7e3e457b54e2912cc",
"splash/img/light-background.png": "65743805ed41e52ce51d067f2e343ef8",
"version.json": "6b252811578eaa0aa9c8904d01fa5134"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
