!function(){"use strict";var e={},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}},a=!0;try{e[r].call(i.exports,i,i.exports,n),a=!1}finally{a&&delete t[r]}return i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,f=0;f<r.length;f++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[f])}))?r.splice(f--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return r[e]}}));return a.default=function(){return r},n.d(i,a),i}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return 774===e?"static/chunks/framework-64b8678db95e83965559.js":"static/chunks/"+({33:"c78d26b1",117:"d9daaaae",906:"06447f4e",971:"9598fa14"}[e]||e)+"."+{33:"ec875d282b4e7e828e0c",117:"cb8d9729b01bafd6db4f",160:"c2ce6665d4ec91b2c3d3",164:"9314c5b9d71e5e402a86",209:"6e53a73573a4e24328db",225:"5865ebdb6a1935fb6cc9",640:"b2fa80cefde12b32303d",906:"d672d12e97453816194a",965:"537491b6ccd1d4b664b0",971:"3bc4c9b0046ecd0e5f7b"}[e]+".js"},n.miniCssF=function(e){return"static/css/"+{245:"7d098b8d162156058bea",888:"90cc66ac064ddd688e6f",965:"976265c23c05510191a7"}[e]+".css"},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="_N_E:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,f;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var s=function(t,n){u.onerror=u.onload=null,clearTimeout(b);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),f&&document.head.appendChild(u)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="/blog/_next/",function(){var e=function(e){return new Promise((function(t,r){var o=n.miniCssF(e),i=n.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(o,i))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=a,f.request=u,o.parentNode.removeChild(o),r(f)}},o.href=t,document.head.appendChild(o)}(e,i,t,r)}))},t={272:0};n.f.miniCss=function(n,r){t[n]?r.push(t[n]):0!==t[n]&&{965:1}[n]&&r.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}(),function(){var e={272:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(272!=t){var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error;n.l(a,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}}),"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],f=r[2],c=0;for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(f)var l=f(n);for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return n.O(l)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();