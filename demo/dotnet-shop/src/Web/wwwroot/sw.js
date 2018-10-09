/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/_variables.scss",
    "revision": "5721e26dba74852766432fd3988ad443"
  },
  {
    "url": "css/app.component.css",
    "revision": "61560b408c00eba9dabcdcfa6f5fa8cb"
  },
  {
    "url": "css/app.component.min.css",
    "revision": "d8c3b7eb32f2f6c2f9960fd85eec80b2"
  },
  {
    "url": "css/app.component.scss",
    "revision": "ea055ee3d895c56d23bf55108c77a832"
  },
  {
    "url": "css/app.css",
    "revision": "159e5e5f39939683f3dc4b809a30a3b9"
  },
  {
    "url": "css/app.min.css",
    "revision": "3db97812f6551e9de4941d6202423095"
  },
  {
    "url": "css/basket/basket-status/basket-status.component.css",
    "revision": "a7ff17c4c5f415a10eb11c7f2b6c9687"
  },
  {
    "url": "css/basket/basket-status/basket-status.component.min.css",
    "revision": "618c5b31b9d3751db605a955c7ac6cd8"
  },
  {
    "url": "css/basket/basket-status/basket-status.component.scss",
    "revision": "8c07de72defa9f664b75cfd7e8b0d2e4"
  },
  {
    "url": "css/basket/basket.component.css",
    "revision": "b7e682e4e44aba82be43afd82813ce43"
  },
  {
    "url": "css/basket/basket.component.min.css",
    "revision": "f352e1bcf7bbd3225cab663459611934"
  },
  {
    "url": "css/basket/basket.component.scss",
    "revision": "aa2e9dc67196ec83fd36ccf538722050"
  },
  {
    "url": "css/catalog/catalog.component.css",
    "revision": "c069e7ab6c9e6bd009c5e8e45abf019a"
  },
  {
    "url": "css/catalog/catalog.component.min.css",
    "revision": "806c94bcd913d2edc37b40aa093e0507"
  },
  {
    "url": "css/catalog/catalog.component.scss",
    "revision": "461f719efc0f60bb2ec0c969a7044938"
  },
  {
    "url": "css/catalog/pager.css",
    "revision": "1aa50c1acd5f274756a4e6fc07c7f0f1"
  },
  {
    "url": "css/orders/orders.component.css",
    "revision": "e483a01963a5dc6cf3fc7b427e134bee"
  },
  {
    "url": "css/orders/orders.component.min.css",
    "revision": "83c4f9fafddb450b5bc040d12c703374"
  },
  {
    "url": "css/orders/orders.component.scss",
    "revision": "c812765782dbd39bc45b58a4e3aab591"
  },
  {
    "url": "favicon.ico",
    "revision": "4859e39ae6c0f1f428f2126a6bb32bd9"
  },
  {
    "url": "fonts/Montserrat-Bold.eot",
    "revision": "65e03151914e450958061cbb762eebe1"
  },
  {
    "url": "fonts/Montserrat-Bold.svg",
    "revision": "c20dd39cba8ec82ff472a06a139af9ca"
  },
  {
    "url": "fonts/Montserrat-Bold.ttf",
    "revision": "d3085f686df272f9e1a267cc69b2d24f"
  },
  {
    "url": "fonts/Montserrat-Bold.woff",
    "revision": "57f17c74bfbb64a9df24ec7854252504"
  },
  {
    "url": "fonts/Montserrat-Bold.woff2",
    "revision": "d439438a390efd0d3d881c5584698cb2"
  },
  {
    "url": "fonts/Montserrat-Regular.eot",
    "revision": "c330043b3f9ace258d44c975f2a98b2a"
  },
  {
    "url": "fonts/Montserrat-Regular.svg",
    "revision": "221f7e911ca70126a458cb455d2abf96"
  },
  {
    "url": "fonts/Montserrat-Regular.ttf",
    "revision": "07689d4eaaa3d530d58826b5d7f84735"
  },
  {
    "url": "fonts/Montserrat-Regular.woff",
    "revision": "4889ec5f0aca42530472e3b8216688f9"
  },
  {
    "url": "fonts/Montserrat-Regular.woff2",
    "revision": "11bc0790ec1547abe1b7730ba0880e24"
  },
  {
    "url": "images/arrow-down.png",
    "revision": "035d0f6399392174a21b966212758a6a"
  },
  {
    "url": "images/arrow-right.svg",
    "revision": "f7ab8ba47ac25925fd42044c1f0c2295"
  },
  {
    "url": "images/brand.png",
    "revision": "74aa37bca6480b898eabff1a2538a27b"
  },
  {
    "url": "images/cart.png",
    "revision": "acd987f2a579c517eac208b688a7b1f0"
  },
  {
    "url": "images/logout.png",
    "revision": "afea83c5cdd015f2d4447c8690d40cfb"
  },
  {
    "url": "images/main_banner_text.png",
    "revision": "5b33150ee2bbfb5c5540684209524aa4"
  },
  {
    "url": "images/main_banner_text.svg",
    "revision": "b345dbd0d0cc40673ff9d972eb452825"
  },
  {
    "url": "images/main_banner.png",
    "revision": "385cfddab6d7cfa708178120c276be12"
  },
  {
    "url": "images/my_orders.png",
    "revision": "4e682bf35d3c355ab640bf368e22f2f7"
  },
  {
    "url": "images/products/1.png",
    "revision": "63e09edc567041fd0ca98847b00f6dc6"
  },
  {
    "url": "images/products/10.png",
    "revision": "25858256d234cd7fccf5ab5e3632c417"
  },
  {
    "url": "images/products/11.png",
    "revision": "3d71b13b65fbbec3597b9f21873bd338"
  },
  {
    "url": "images/products/12.png",
    "revision": "a8e6a25a8e47a084290a9f806175cd5d"
  },
  {
    "url": "images/products/2.png",
    "revision": "6888b0b8df21f3d223b7113360f61d30"
  },
  {
    "url": "images/products/3.png",
    "revision": "a9eb7aedcd23ea45fa249c0c4a5d174e"
  },
  {
    "url": "images/products/4.png",
    "revision": "2c903da112607bb470891f9241b7863d"
  },
  {
    "url": "images/products/5.png",
    "revision": "197057e3bb364da1494379b2d71cf8dc"
  },
  {
    "url": "images/products/6.png",
    "revision": "911524806769b5bd5ed5ac63578e4d59"
  },
  {
    "url": "images/products/7.png",
    "revision": "0159023f0d2c9cf0713eb84de87d9ec4"
  },
  {
    "url": "images/products/8.png",
    "revision": "659bcb510b467345dcc3d6c903986d25"
  },
  {
    "url": "images/products/9.png",
    "revision": "17f1a1657c371f4dd797db34694f4577"
  },
  {
    "url": "images/refresh.svg",
    "revision": "2e48ba727eb4d4819f6295c44272bbbe"
  },
  {
    "url": "js/site.js",
    "revision": "a1db960868b573d1398e463ecd45eb03"
  },
  {
    "url": "js/site.min.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "lib/bootstrap/dist/css/bootstrap-theme.css",
    "revision": "b9b46bcc4dad6cc90fc4f95073c50735"
  },
  {
    "url": "lib/bootstrap/dist/css/bootstrap-theme.min.css",
    "revision": "ab6b02efeaf178e0247b9504051472fb"
  },
  {
    "url": "lib/bootstrap/dist/css/bootstrap.css",
    "revision": "2a31dca112f26923b51676cb764c58d5"
  },
  {
    "url": "lib/bootstrap/dist/css/bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "lib/bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "lib/bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "lib/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "lib/bootstrap/dist/js/bootstrap.js",
    "revision": "fb81549ee2896513a1ed5714b1b1a0f0"
  },
  {
    "url": "lib/bootstrap/dist/js/bootstrap.min.js",
    "revision": "5869c96cc8f19086aee625d670d741f9"
  },
  {
    "url": "lib/bootstrap/dist/js/npm.js",
    "revision": "ccb7f3909e30b1eb8f65a24393c6e12b"
  },
  {
    "url": "lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js",
    "revision": "79ca56d4af2c2986b8a886790945805f"
  },
  {
    "url": "lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js",
    "revision": "887fa31edd0b7b835b9dce2658a83321"
  },
  {
    "url": "lib/jquery-validation/dist/additional-methods.js",
    "revision": "3f408fdce534232bed3f33708ba0b6e6"
  },
  {
    "url": "lib/jquery-validation/dist/additional-methods.min.js",
    "revision": "424557ef2a8b89693026b3b43d4b1e1c"
  },
  {
    "url": "lib/jquery-validation/dist/jquery.validate.js",
    "revision": "9fe5472760a25b494481408bb9a637d6"
  },
  {
    "url": "lib/jquery-validation/dist/jquery.validate.min.js",
    "revision": "3b00d60f87e893caf2649eff0d48813a"
  },
  {
    "url": "lib/jquery-validation/LICENSE.md",
    "revision": "f683602956cb1dbd6269076b875f7aba"
  },
  {
    "url": "lib/jquery/dist/jquery.js",
    "revision": "56f1d01ee4bb68d1572cfd60755cf67a"
  },
  {
    "url": "lib/jquery/dist/jquery.min.js",
    "revision": "6fc159d00dc3cea4153c038739683f93"
  },
  {
    "url": "lib/jquery/LICENSE.txt",
    "revision": "dbcc2c190962327ad79a758ce6bea6f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
