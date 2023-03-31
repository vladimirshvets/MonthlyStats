(function(){"use strict";var e={3479:function(e,n,t){var r=t(9242),o=t(3396);function a(e,n,t,r,a,i){const u=(0,o.up)("nav-bar"),c=(0,o.up)("overlay-component"),l=(0,o.up)("snackbar-component"),s=(0,o.up)("router-view"),d=(0,o.up)("v-main"),f=(0,o.up)("v-app");return(0,o.wg)(),(0,o.j4)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u),(0,o.Wm)(c),(0,o.Wm)(l),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1})])),_:1})}function i(e,n,t,r,a,i){const u=(0,o.up)("v-icon"),c=(0,o.up)("v-btn"),l=(0,o.up)("router-link"),s=(0,o.up)("v-app-bar-title"),d=(0,o.up)("v-spacer"),f=(0,o.up)("v-app-bar");return(0,o.wg)(),(0,o.j4)(f,{id:"nav-bar",elevation:2,density:"compact"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{class:"nav-link",to:{name:"Home"}},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{icon:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-calculator-variant")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)("MONTHLY STATS")])),_:1}),(0,o.Wm)(d)])),_:1})}var u={name:"NavBar"},c=t(89);const l=(0,c.Z)(u,[["render",i],["__scopeId","data-v-8abefa34"]]);var s=l;function d(e,n,t,r,a,i){const u=(0,o.up)("v-progress-circular"),c=(0,o.up)("v-overlay");return(0,o.wg)(),(0,o.j4)(c,{modelValue:e.overlay,"onUpdate:modelValue":n[0]||(n[0]=n=>e.overlay=n),class:"align-center justify-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"primary",indeterminate:"",size:"64"})])),_:1},8,["modelValue"])}var f=t(65),p={name:"OverlayComponent",computed:(0,f.rn)({overlay:e=>e.isLoading})};const m=(0,c.Z)(p,[["render",d]]);var v=m,b=t(7139);function h(e,n,t,r,a,i){const u=(0,o.up)("v-snackbar");return(0,o.wg)(),(0,o.j4)(u,{modelValue:i.model,"onUpdate:modelValue":n[0]||(n[0]=e=>i.model=e),timeout:3e3,color:"#6a0101",rounded:"pill"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,b.zw)(e.snackbarText),1)])),_:1},8,["modelValue"])}var g={name:"SnackbarComponent",computed:{model:{get(){return this.snackbar},set(){this.hideSnackbar()}},...(0,f.Se)(["snackbar","snackbarText"])},methods:{...(0,f.OI)(["hideSnackbar"])}};const k=(0,c.Z)(g,[["render",h]]);var y=k,w={name:"App",components:{NavBar:s,OverlayComponent:v,SnackbarComponent:y}};const O=(0,c.Z)(w,[["render",a]]);var S=O,C=t(2483);const _=[{path:"/",name:"Home",component:()=>Promise.all([t.e(163),t.e(598)]).then(t.bind(t,2025))},{path:"/month/:id",name:"MonthStats",component:()=>Promise.all([t.e(163),t.e(254)]).then(t.bind(t,9010))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>t.e(691).then(t.bind(t,691))}],j=(0,C.p7)({history:(0,C.PO)(),routes:_,linkActiveClass:"router-link-active"});t(9773);var T=t(8957),x=t(1850),N=t(8600);const A=(0,T.Rd)({components:x,directives:N,icons:{defaultSet:"mdi"}}),L=(0,f.MT)({state:{isLoading:!1,snackbar:{show:!1,text:""}},getters:{isLoading:e=>e.isLoading,snackbar:e=>e.snackbar.show,snackbarText:e=>e.snackbar.text},mutations:{setIsLoading(e,n){e.isLoading=n},snackbar(e,n){e.snackbar.show=!0,e.snackbar.text=n},hideSnackbar(e){e.snackbar.show=!1}}});(0,r.ri)(S).use(j).use(A).use(L).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{163:"4172d0ba",254:"b058978b",598:"ea002726",691:"ec391399"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{254:"9e50b7b6",598:"eea04def",691:"689b9152"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="client:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={826:0};t.f.miniCss=function(e,n){var t={254:1,598:1,691:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={826:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(r);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3479)}));r=t.O(r)})();
//# sourceMappingURL=index.0eb6e14b.js.map