(function(t){function e(e){for(var r,a,i=e[0],s=e[1],l=e[2],c=0,d=[];c<i.length;c++)a=i[c],o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},u=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0575982e":"897fc4ac","chunk-2d22d746":"13e8ce9d"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-0575982e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0575982e":"2bd352db","chunk-2d22d746":"31d6cfe0"}[t]+".css",o=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===r||c===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),l=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t._m(0),t._m(1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/todo"}},[t._v("Todo")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])])]),n("div",{staticClass:"container mt-5"},[n("router-view")],1)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[r("img",{attrs:{src:n("cf05"),width:"25",alt:"todo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],u=n("2877"),i={},s=Object(u["a"])(i,a,o,!1,null,null,null),l=s.exports,c=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("vue-headful",{attrs:{title:"Home"}}),n("h1",[t._v("This is a Home page!")])],1)},f=[],p={name:"home",components:{}},h=p,m=Object(u["a"])(h,d,f,!1,null,null,null),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center"},[n("vue-headful",{attrs:{title:"404 | Page Not Found"}}),n("h1",{staticClass:"text-info"},[t._v("404: Page Not Found!")])],1)},g=[],y={},_=Object(u["a"])(y,b,g,!1,null,null,null),C=_.exports;r["default"].use(c["a"]);var w=new c["a"]({routes:[{path:"/404",component:C},{path:"*",redirect:"/404"},{path:"/",name:"home",component:v},{path:"/home/:name",name:"home",component:v},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/todo",name:"todo",component:function(){return n.e("chunk-0575982e").then(n.bind(null,"a3b3"))}}]}),k=n("2f62");r["default"].use(k["a"]);var x=new k["a"].Store({state:{items:[],newItem:""},mutations:{},actions:{},getters:{items:function(t){return t.items},newItem:function(t){return t.newItem}}}),j=n("1e18"),E=(n("4989"),n("ec02")),O=n.n(E);n("f9e3"),n("2dd8");r["default"].component("vue-headful",O.a),r["default"].use(j["a"]),r["default"].config.productionTip=!1,new r["default"]({router:w,store:x,render:function(t){return t(l)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c0325bb1.js.map