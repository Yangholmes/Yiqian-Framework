(function(e){function t(t){for(var i,o,c=t[0],s=t[1],u=t[2],l=0,h=[];l<c.length;l++)o=c[l],r[o]&&h.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={index:0},r={index:0},a=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-75b7":"0180cae4","chunk-b649":"74bfdcbe","chunk-0189":"8cd4e195","chunk-1a27":"c658d973"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-75b7":1,"chunk-b649":1,"chunk-0189":1,"chunk-1a27":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-75b7":"59366632","chunk-b649":"af3ce988","chunk-0189":"2b611ea1","chunk-1a27":"99953c12"}[e]+".css",o=s.p+i,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var c=r[a],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===o))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){c=l[a],u=c.getAttribute("data-href");if(u===i||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.request=i,n(r)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){o[e]=0}));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise(function(t,n){i=r[e]=[t,n]});t.push(i[2]=a);var u,l=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,s.nc&&h.setAttribute("nonce",s.nc),h.src=c(e),u=function(t){h.onerror=h.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+o+")");a.type=i,a.request=o,n[1](a)}r[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:h})},12e4);h.onerror=h.onload=u,l.appendChild(h)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/android_asset/www/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"48ab":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=n("8c4f"),r=[{path:"/",name:"default",redirect:"home"},{path:"/home",name:"home",component:function(){return n.e("chunk-75b7").then(n.bind(null,"5c28"))}},{path:"/list",name:"list",component:function(){return Promise.all([n.e("chunk-b649"),n.e("chunk-1a27")]).then(n.bind(null,"f039"))}},{path:"/newQian",name:"newQian",component:function(){return Promise.all([n.e("chunk-b649"),n.e("chunk-0189")]).then(n.bind(null,"b01f"))}}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"main",class:{hide:e.hide}}),n("MainToolbar",{staticClass:"toolbar",class:{hide:e.hide}}),n("AddQian",{attrs:{hide:e.hide,position:{x:16,y:-64}}})],1)},c=[],s=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-qian",class:{hide:e.hide},style:e.transform,on:{touchstart:function(t){e.onStart(t)},touchmove:function(t){e.onMove(t)},touchend:function(t){e.onEnd(t)},touchcancel:function(t){e.onEnd(t)}}},[n("span")])}),u=[],l=(n("c7c6"),{props:{position:{x:0,y:0},hide:!1},computed:{screenSize:function(){return{x:document.body.clientWidth,y:document.body.clientHeight}},size:function(){return{x:this.$el.clientWidth,y:this.$el.clientHeight}},transform:function(){return"transform: translateX(".concat(this.movePosition.x,"px) ")+"translateY(".concat(this.movePosition.y,"px) ")+"scale(".concat(this.hide?0:1,");")+"opacity: ".concat(this.moveEnable?"1":".8")}},data:function(){return{moveEnable:!1,clickEnable:!0,startPosition:{x:0,y:0},movePosition:{x:0,y:0},offset:{x:0,y:0}}},mounted:function(){this.init()},methods:{init:function(){this.movePosition=this.position||{x:0,y:0}},onStart:function(e){e.preventDefault(),this.moveEnable=!0,this.startPosition={x:e.touches[0].clientX,y:e.touches[0].clientY},this.offset={x:this.movePosition.x,y:this.movePosition.y}},onMove:function(e){if(!this.moveEnable)return!1;this.clickEnable=!1;var t=e.touches[0].clientX-this.startPosition.x+this.offset.x,n=e.touches[0].clientY-this.startPosition.y+this.offset.y;t=t>this.screenSize.x-this.size.x?this.screenSize.x-this.size.x:t,t=t>0?t:0,n=n<-1*(this.screenSize.y-this.size.y)?-1*(this.screenSize.y-this.size.y):n,n=n<0?n:0,this.movePosition={x:t,y:n}},onEnd:function(e){e.preventDefault();var t={x:e.changedTouches[0].clientX-this.startPosition.x,y:e.changedTouches[0].clientY-this.startPosition.y};this.clickEnable=this.clickEnable||Math.hypot(t.x,t.y)<5,this.clickEnable&&this.$router.push("newQian"),this.clickEnable=!0,this.moveEnable=!1}}}),h=l,d=(n("9a12"),n("2877")),f=Object(d["a"])(h,s,u,!1,null,null,null);f.options.__file="AddQian.vue";var p=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toolbar-main"},[n("ul",e._l(e.menus,function(t,i){return t.hidden?e._e():n("li",{key:i+t.name},[n("router-link",{attrs:{to:t.name,replace:"",tag:"div"}},[t.icon?n("div",{staticClass:"icon"},[n("img",{attrs:{src:"menu.icon"}})]):e._e(),n("div",{staticClass:"label"},[n("span",[e._v(e._s(t.label))])])])],1)}))])},v=[],b={home:{label:"一堑",name:"home",icon:"",hidden:!1},list:{label:"列表",name:"list",icon:"",hidden:!1},me:{label:"我",name:"me",icon:"",hidden:!0},newQian:{label:"新堑",name:"newQian",icon:"",hidden:!0}},y={data:function(){return{menus:b}}},g=y,x=(n("acee"),Object(d["a"])(g,m,v,!1,null,null,null));x.options.__file="MainToolbar.vue";var k=x.exports,w={name:"app",components:{AddQian:p,MainToolbar:k},data:function(){return{hide:!1}},watch:{$route:function(e){"newQian"===e.name?this.hide=!0:this.hide=!1}},methods:{}},E=w,P=(n("7c55"),Object(d["a"])(E,a,c,!1,null,null,null));P.options.__file="App.vue";var _=P.exports;i["a"].use(o["a"]),i["a"].config.productionTip=!1;var S=new o["a"]({routes:r});new i["a"]({router:S,render:function(e){return e(_)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var i=n("d3dd"),o=n.n(i);o.a},"9a12":function(e,t,n){"use strict";var i=n("48ab"),o=n.n(i);o.a},acee:function(e,t,n){"use strict";var i=n("eee5"),o=n.n(i);o.a},d3dd:function(e,t,n){},eee5:function(e,t,n){}});
//# sourceMappingURL=index.35ca2636.js.map