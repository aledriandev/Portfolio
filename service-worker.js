"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Portfolio/index.html","60be96f5a15e0d9494c94eedb15a14ae"],["/Portfolio/static/css/main.10811c16.css","d3dee036bdb8741bc53a0c619046dfde"],["/Portfolio/static/js/main.76a9c995.js","82ac65f08947bbb58268bfa2c2aa3b95"],["/Portfolio/static/media/5mejores2.8dbd0463.png","8dbd0463c82bdf656ac60836de3104c7"],["/Portfolio/static/media/adapta.f4003d7e.png","f4003d7e58a7b1a130c213c409bc3ff5"],["/Portfolio/static/media/agil.aa3a2221.png","aa3a222106ef213bbc8d0000cfb5d6f6"],["/Portfolio/static/media/ale6.4f9df454.png","4f9df45458c55ccad13f8698851d17a8"],["/Portfolio/static/media/autodidact.3cdaaabd.png","3cdaaabd3ed575cddfd6b0dee1ad2947"],["/Portfolio/static/media/buscaminas.ee637c95.png","ee637c95abc3be90dcf68e9e44f49b3d"],["/Portfolio/static/media/comunica.5daaca78.png","5daaca789625e9169594b6e67e2e7f08"],["/Portfolio/static/media/creative.b2c1039c.png","b2c1039cb7964bbfc9d73683640d5c29"],["/Portfolio/static/media/girlcode5.423d1db0.png","423d1db025138ec2e61d8551c33cc8c5"],["/Portfolio/static/media/git.4d8a6733.png","4d8a67337f9177e86f7da73e8e7cdfa6"],["/Portfolio/static/media/lyft.a70f71b4.png","a70f71b42948a00f721f48aacc59cd57"],["/Portfolio/static/media/mejorSquad.222a811a.png","222a811a83c8e883df15a75f2b12c325"],["/Portfolio/static/media/memory.a02dd472.png","a02dd472f24b2246410f26624736b104"],["/Portfolio/static/media/out.ac1d7d71.png","ac1d7d7181257943c267ef251b6333ab"],["/Portfolio/static/media/proact.44bd4227.png","44bd422757d6eaff2ae53a05cb1948c3"],["/Portfolio/static/media/ps.a7d30b70.png","a7d30b70484ec318aec75c31d8b4b7ff"],["/Portfolio/static/media/react.7f147596.png","7f147596e96ada348f00532faa3f1875"],["/Portfolio/static/media/reserva.eb73b9b2.png","eb73b9b2236d8c486c49bb007873aa65"],["/Portfolio/static/media/resilien.907655f5.png","907655f50736fdeb34a0ba01a93820ca"],["/Portfolio/static/media/responsive.2aed0daf.png","2aed0daf9eef29c03c9785b8b3f4a7b4"],["/Portfolio/static/media/rocking.17e6456c.png","17e6456c59af13cb0db9cd983390c4c9"],["/Portfolio/static/media/sass.b85cfad3.png","b85cfad3e6c4eb0dff3db253a68e40eb"],["/Portfolio/static/media/slack.30febccd.png","30febccd0bf7b5798706e06178653b90"],["/Portfolio/static/media/teamw.03fbe4c7.png","03fbe4c799de52032105afc7898ed8a0"],["/Portfolio/static/media/trello.23c7fe49.png","23c7fe4955d957ba04e9e98345106dd2"],["/Portfolio/static/media/trivia.79d572d1.png","79d572d17bd2e75d9c39a5a27a2a5305"],["/Portfolio/static/media/youtube.cd43ff35.png","cd43ff354a2539a74ad648412e2032aa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/Portfolio/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});