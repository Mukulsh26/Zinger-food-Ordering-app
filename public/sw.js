if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,a,n)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return s;case"module":return c;default:return e(i)}}))).then((e=>{const i=n(...e);return s.default||(s.default=i),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UAKEFYxon4MU_BF69AmZg/_buildManifest.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/UAKEFYxon4MU_BF69AmZg/_ssgManifest.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/221.bf2aae9b5aa23f04b0ef.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/630-bf68db769895f4b1a9b6.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/75fc9c18-5c1929f66343f0a636cd.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/998-f3927a95f832edeb9422.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/main-1b0f1fd287f08bad6012.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/404-6bd78738bb3eae7b9af9.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/500-c6b3cd6e2d26a7b9bf22.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/_app-11e7562d0a4ce95353fd.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/about-31565c4f2afa9137819c.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin-0b322ce56bcdb0eb224f.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin/add-category-1aed70f291feb0cb5526.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin/add-dish-f0b94b6c6385a9729dec.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin/dashboard-46dc99a47de2fd34d91a.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin/dishes-9bbdd6b13a718a58e177.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin/order-details/%5Bid%5D-acd3e088e4a4760f22e4.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin/update-dish/%5Bid%5D-8cf10b18597d805c58cf.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/admin/users-80ffcbb9c66c25b888a9.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/cart-61e6011121d1e53417bd.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/index-293d21d9f5d13e531178.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/order-details/%5Bid%5D-3456c0b1b1561b2f8d5d.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/orders-dba6be14c20887a5675b.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/profile-a7910db323a4296b9c41.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/pages/success-9222116c518c52fbad77.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/chunks/webpack-c3c2cdf4c63b9e25c05b.js",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/_next/static/css/431c6a858ca942b708aa.css",revision:"UAKEFYxon4MU_BF69AmZg"},{url:"/img/Zinger.svg",revision:"d8fa6f9d01b93f8fb3ff35a896f8f720"},{url:"/img/authentication.svg",revision:"2943685be0b2bfc2c91073d360b0f1da"},{url:"/img/circle.svg",revision:"9aa38ebdf1b529c384c11edf527e3bf8"},{url:"/img/dishes/anaar_juice.jpg",revision:"5484f6c9c1cfee33716cbccca74874ca"},{url:"/img/dishes/blueberry_cake.jpg",revision:"70c5014a40145217d1cb5088ab8bd0ae"},{url:"/img/dishes/butterscotch_cake.jpg",revision:"a45bfe353ecca1b3b103de86d413e040"},{url:"/img/dishes/chicken_clear_soup.jpg",revision:"797b2aba107938b9727f3f64138d6627"},{url:"/img/dishes/chicken_crispy.jpg",revision:"281befb365b3f6640dd51eaf20aa4f59"},{url:"/img/dishes/chicken_dominator.jpg",revision:"0a5364e6dde44a36d38f9767f2849586"},{url:"/img/dishes/chicken_dragon.jpg",revision:"3fa7b44ff0de1cfc8458180567617448"},{url:"/img/dishes/chicken_golden_delight.jpg",revision:"08c262debdbc1679ca1b909f04b1b8ae"},{url:"/img/dishes/chicken_hot_and_sour_soup.jpg",revision:"fc2063ec997e9eb96936d63f9e53da8f"},{url:"/img/dishes/chicken_lollipop.jpg",revision:"edd7b5ee43e70b4c94dea7dac0919e98"},{url:"/img/dishes/chicken_manchow_soup.jpg",revision:"743a846d3ece4032898aa6950c3c96af"},{url:"/img/dishes/chicken_mongolian.jpg",revision:"3ba2dda0dca5c1df8350ddc7535fe62b"},{url:"/img/dishes/chicken_sangrila.jpg",revision:"3f03261c7049db14990addc81eec4b07"},{url:"/img/dishes/choco_truffle_cake.jpg",revision:"f6fa6446f0e300ceaa3fdff85f222748"},{url:"/img/dishes/coconut_juice.jpg",revision:"38aa3319377bc831c9fe527500c1784f"},{url:"/img/dishes/deluxe_veggie.jpg",revision:"6cc50e718fbaf027900a38736b95e8df"},{url:"/img/dishes/indi_tandoori_paneer.jpg",revision:"fafd4f27828691731c54b0e8af79d385"},{url:"/img/dishes/kiwi_juice.jpg",revision:"e631c2fdfac76ca5d66b8225cf3cfcd0"},{url:"/img/dishes/mix_fruit_juice.jpg",revision:"f2270c4bd1117cbf266818b076b7720e"},{url:"/img/dishes/mosambi_juice.jpg",revision:"7f1ab3842a9956ec0b81c1c5d831bde8"},{url:"/img/dishes/movie_marathons_specials.jpg",revision:"b30160e60d2a90d2f22f60d83c515d9e"},{url:"/img/dishes/non_veg_supremer.jpg",revision:"1371cee900be10d6886c1eface3e9af1"},{url:"/img/dishes/pineapple_cake.jpg",revision:"28fdc0c23314ad2de4bb4a72ffc4a46f"},{url:"/img/dishes/tomato_soup.jpg",revision:"20e465cf8becdd8e68d41354f9ddb560"},{url:"/img/dishes/veg_clear_soup.jpg",revision:"0570ac0f9ac1a6da15dcb52c1556f0d0"},{url:"/img/dishes/veg_hot_and_sour_soup.jpg",revision:"d8bdebc7c6d36cc3cbf8323d4b13e978"},{url:"/img/dishes/veg_manchow_soup.jpg",revision:"caf2435ed1316ee19419bef4daaa83b5"},{url:"/img/eating_together.svg",revision:"67850055a144c6fcd2707a4b7fb68034"},{url:"/img/empty.svg",revision:"9b7f6d24051fb40b627312e203c76e7d"},{url:"/img/empty_cart.svg",revision:"86fd3fcc04dcaba2619589132e6fed7d"},{url:"/img/favicons/android-chrome-192x192.png",revision:"52aef979840e62e48cfaa79986b356f8"},{url:"/img/favicons/android-chrome-512x512.png",revision:"7294363f87a541d12209749b48a557d4"},{url:"/img/favicons/apple-touch-icon.png",revision:"6c9a471d3ba0328b087433103c96f385"},{url:"/img/favicons/browserconfig.xml",revision:"38e0d5e6889d7aa3815fe68056fb3fcc"},{url:"/img/favicons/favicon-16x16.png",revision:"d3dc17371b2165408cbe09e11f9182c8"},{url:"/img/favicons/favicon-32x32.png",revision:"1846c7e18caf5befbc42bfafa6a473ef"},{url:"/img/favicons/favicon.ico",revision:"746a1fa43712e585dfa8dadb961ef4a7"},{url:"/img/favicons/mstile-144x144.png",revision:"3ce87f17ebb0db2d7ad88f895937f678"},{url:"/img/favicons/mstile-150x150.png",revision:"667fd740e4c4a85c13a5b1cda9b76c2c"},{url:"/img/favicons/mstile-310x150.png",revision:"434d3a77b13b2a06cb409fdb7a27ca5b"},{url:"/img/favicons/mstile-310x310.png",revision:"bd4a30ddc5b1cd1783803c02f6e3b953"},{url:"/img/favicons/mstile-70x70.png",revision:"6beb9b2e74d44b39a6dbc003ae29f93c"},{url:"/img/favicons/safari-pinned-tab.svg",revision:"1b7483e46076772a023c741ae6a966d1"},{url:"/img/favicons/site.webmanifest",revision:"164190e4e2a6a53cb39e7278a282b3a3"},{url:"/img/food gallery/1.jpg",revision:"ec4871fac5f8b622a6f5243352affdd7"},{url:"/img/food gallery/2.jpg",revision:"5d8068eb14cea195d405a361f4eecb66"},{url:"/img/food gallery/3.jpg",revision:"b92586dc030ceb44bc304401ac8c4727"},{url:"/img/food gallery/4.jpg",revision:"d2b48ab94a7b069460230c6a39f083f1"},{url:"/img/food gallery/5.jpg",revision:"3a7dc31cd1986592c850f5c6efa48332"},{url:"/img/food gallery/6.jpg",revision:"db4c17bfcfd8568dd9716e1b264f900e"},{url:"/img/food gallery/7.jpg",revision:"0d0e0bf3945510b34f1c83a652eee2a8"},{url:"/img/food gallery/8.jpg",revision:"30d387f17b860ae8c8afc5b8b5f91d4d"},{url:"/img/profile_pic.svg",revision:"60874d81471e1678529d34989b63dfcb"},{url:"/img/programming.svg",revision:"44a199da636e7348c1674549b58ba176"},{url:"/img/social/email.svg",revision:"4af15de585c06a5be03669d66eda3b1d"},{url:"/img/social/github.svg",revision:"c43c197b5418b5cbba66bb327ecdab2c"},{url:"/img/social/linkedin.svg",revision:"c6681bcbd77af1ba984875187d522485"},{url:"/img/testimonials/customer-1.jpg",revision:"b56b435116658f4521f1a9a16d482501"},{url:"/img/testimonials/customer-2.jpg",revision:"9b6c894aa65ca6695c00f356c02555bb"},{url:"/img/testimonials/customer-3.jpg",revision:"551bd8759a47c13a1c8f6243dec89d1d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
