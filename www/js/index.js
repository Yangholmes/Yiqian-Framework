(function(n){function e(e){for(var o,i,a=e[0],c=e[1],u=e[2],l=0,d=[];l<a.length;l++)i=a[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var n,e=0;e<s.length;e++){for(var t=s[e],o=!0,i=1;i<t.length;i++){var a=t[i];0!==r[a]&&(o=!1)}o&&(s.splice(e--,1),n=c(c.s=t[0]))}return n}var o={},i={index:0},r={index:0},s=[];function a(n){return c.p+"js/"+({}[n]||n)+".js"}function c(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(n){var e=[],t={"chunk-30fe":1,"chunk-7ad6":1,"chunk-d76c":1,"chunk-7d7b":1,"chunk-a823":1};i[n]?e.push(i[n]):0!==i[n]&&t[n]&&e.push(i[n]=new Promise(function(e,t){for(var o="css/"+({}[n]||n)+".css",i=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var a=r[s],u=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(u===o||u===i))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){a=l[s],u=a.getAttribute("data-href");if(u===o||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+n+" failed.\n("+o+")");r.request=o,t(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){i[n]=0}));var o=r[n];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise(function(e,t){o=r[n]=[e,t]});e.push(o[2]=s);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=a(n),u=function(e){d.onerror=d.onload=null,clearTimeout(f);var t=r[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+n+" failed.\n("+o+": "+i+")");s.type=o,s.request=i,t[1](s)}r[n]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=n,c.c=o,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)c.d(t,o,function(e){return n[e]}.bind(null,o));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/android_asset/www/",c.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"060f":function(n,e,t){"use strict";t("55dd"),t("f751");var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{name:"fade"}},[n.show?t("div",{staticClass:"message-box"},[t("div",{staticClass:"content"},[t("div",{staticClass:"message"},[n._v("\n                "+n._s(n.message)+"\n            ")]),t("div",{staticClass:"btn-group"},[n._t("btn-group",[t("Button",{on:{touchend:n.onCancel}},[n._v(n._s(n.cancleText))]),t("Button",{on:{touchend:n.onConfirm}},[t("span",{staticClass:"danger"},[n._v(n._s(n.confirmText))])])])],2)]),t("div",{staticClass:"mask",on:{touchend:n.onClose}})]):n._e()])},i=[],r=(t("cadf"),t("551c"),t("097d"),t("ed48")),s={components:{Button:r["a"]},props:{message:{type:String,default:"这是消息"},cancleText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"}},mounted:function(){},data:function(){return{show:!1}},methods:{onShow:function(){this.show=!0},onClose:function(){var n=this;this.show=!1,window.setTimeout(function(){n.onDestory()},500)},onDestory:function(){this.$destroy(),document.body.removeChild(this.$el)},onConfirm:function(){this.jet("onConfirm"),this.onClose()},onCancel:function(){this.jet("onCancel"),this.onClose()},jet:function(n){this.$emit(n)}}},a=s,c=(t("2627"),t("2877")),u=Object(c["a"])(a,o,i,!1,null,null,null);u.options.__file="MessageBox.vue";var l=u.exports,d=t("2b0e"),f=function(n){var e=Object.assign({},n.props),t=Object.assign({},n.fns),o=d["a"].extend({render:function(n){var t=e.cancelEnable?[]:[n(r["a"],{slot:"btn-group",on:{touchend:function(){return this.$children[0].onConfirm()}.bind(this)}},[e.confirmText])];return n(l,{props:e,on:{onCancel:this.onCancel,onConfirm:this.onConfirm}},t)},methods:{onShow:function(){this.$children[0].onShow()},onCancel:function(){t.onCancel&&t.onCancel()},onConfirm:function(){t.onConfirm&&t.onConfirm()}}}),i=function(){var n=(new o).$mount();return document.body.appendChild(n.$el),n};return i()};e["a"]={confirm:function(n){n.cancelEnable=!0;var e=f(this.sort(n));e.onShow()},info:function(n){n.cancelEnable=!1;var e=f(this.sort(n));e.onShow()},sort:function(n){var e={},t={};for(var o in n)n[o].constructor===Function?t[o]=n[o]:e[o]=n[o];return{props:e,fns:t}}}},2627:function(n,e,t){"use strict";var o=t("9bd7"),i=t.n(o);i.a},"263a":function(n,e,t){"use strict";var o=t("4b43"),i=t.n(o);i.a},"48ab":function(n,e,t){},"4b43":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),i=t("8c4f"),r=[{path:"/",name:"default",redirect:"home"},{path:"/home",name:"home",component:function(){return t.e("chunk-7ad6").then(t.bind(null,"5c28"))}},{path:"/list",name:"list",component:function(){return t.e("chunk-30fe").then(t.bind(null,"f039"))}},{path:"/newQian",name:"newQian",component:function(){return Promise.all([t.e("chunk-d76c"),t.e("chunk-a823")]).then(t.bind(null,"b01f"))}},{path:"/readQian",name:"readQian",component:function(){return Promise.all([t.e("chunk-d76c"),t.e("chunk-7d7b")]).then(t.bind(null,"8c76"))}}],s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view",{staticClass:"main",class:{hide:n.hide}}),t("MainToolbar",{staticClass:"toolbar",class:{hide:n.hide}}),t("AddQian",{attrs:{hide:n.hide,position:{x:16,y:-64}}})],1)},a=[],c=(t("7f7f"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"add-qian",class:{hide:n.hide},style:n.transform,on:{touchstart:function(e){n.onStart(e)}}},[t("span")])}),u=[],l=(t("c7c6"),{props:{position:{x:0,y:0},hide:!1},computed:{screenSize:function(){return{x:document.body.clientWidth,y:document.body.clientHeight}},size:function(){return{x:this.$el.clientWidth,y:this.$el.clientHeight}},transform:function(){return"transform: translateX(".concat(this.movePosition.x,"px) ")+"translateY(".concat(this.movePosition.y,"px) ")+"scale(".concat(this.hide?0:1,");")+"opacity: ".concat(this.moveEnable?"1":".8")}},data:function(){return{moveEnable:!1,clickEnable:!0,startPosition:{x:0,y:0},movePosition:{x:0,y:0},offset:{x:0,y:0}}},mounted:function(){this.init()},methods:{init:function(){this.movePosition=this.position||{x:0,y:0}},onStart:function(n){n.preventDefault(),this.moveEnable=!0,this.startPosition={x:n.touches[0].clientX,y:n.touches[0].clientY},this.offset={x:this.movePosition.x,y:this.movePosition.y},document.body.addEventListener("touchmove",this.onMove,!1),document.body.addEventListener("touchend",this.onEnd,!1)},onMove:function(n){var e=this;if(console.log("move"),!this.moveEnable)return!1;this.clickEnable=!1;var t=n.touches[0].clientX-this.startPosition.x+this.offset.x,o=n.touches[0].clientY-this.startPosition.y+this.offset.y;t=t>this.screenSize.x-this.size.x?this.screenSize.x-this.size.x:t,t=t>0?t:0,o=o<-1*(this.screenSize.y-this.size.y)?-1*(this.screenSize.y-this.size.y):o,o=o<0?o:0,requestAnimationFrame(function(){e.movePosition={x:t,y:o}})},onEnd:function(n){console.log("end");var e={x:n.changedTouches[0].clientX-this.startPosition.x,y:n.changedTouches[0].clientY-this.startPosition.y};this.clickEnable=this.clickEnable||Math.hypot(e.x,e.y)<5,this.clickEnable&&this.$router.push("newQian"),this.clickEnable=!0,this.moveEnable=!1,document.body.removeEventListener("touchmove",this.onMove,!1),document.body.removeEventListener("touchend",this.onEnd,!1)}}}),d=l,f=(t("9a12"),t("2877")),h=Object(f["a"])(d,c,u,!1,null,null,null);h.options.__file="AddQian.vue";var m=h.exports,p=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"toolbar-main"},[t("ul",n._l(n.menus,function(e,o){return e.hidden?n._e():t("li",{key:o+e.name},[t("router-link",{attrs:{to:e.name,replace:"",tag:"div"}},[e.icon?t("div",{staticClass:"icon"},[t("img",{attrs:{src:"menu.icon"}})]):n._e(),t("div",{staticClass:"label"},[t("span",[n._v(n._s(e.label))])])])],1)}))])},v=[],b={home:{label:"一堑",name:"home",icon:"",hidden:!1},list:{label:"列表",name:"list",icon:"",hidden:!1},me:{label:"我",name:"me",icon:"",hidden:!0},newQian:{label:"新堑",name:"newQian",icon:"",hidden:!0}},y={data:function(){return{menus:b}}},g=y,w=(t("acee"),Object(f["a"])(g,p,v,!1,null,null,null));w.options.__file="MainToolbar.vue";var x=w.exports,C={name:"app",components:{AddQian:m,MainToolbar:x},data:function(){return{hide:!1}},watch:{$route:function(n){"newQian"===n.name||"readQian"===n.name?this.hide=!0:this.hide=!1}}},_=C,E=(t("7c55"),Object(f["a"])(_,s,a,!1,null,null,null));E.options.__file="App.vue";var k=E.exports,P={init:function(){return new Promise(function(n){document.addEventListener("deviceready",function(e){console.log("Device is ready!"),n({code:0,data:e,msg:"Device is ready!"})},!1)})},checkVersion:function(){return new Promise(function(n,e){chcp.fetchUpdate(function(t,o){t?e({code:t.code,data:t,msg:t.description}):n({code:0,data:o,msg:"New version was found!"})}),chcp.getVersionInfo(function(n,e){console.log("Current web version: "+e.currentWebVersion),console.log("Previous web version: "+e.previousWebVersion),console.log("Loaded and ready for installation web version: "+e.readyToInstallWebVersion),console.log("Application version name: "+e.appVersion),console.log("Application build version: "+e.buildVersion)})})},installNewVersion:function(){return new Promise(function(n,e){chcp.installUpdate(function(t){t?e({code:t.code,data:t,msg:"Failed to install the update!"}):n({code:0,data:{},msg:"Update installed!"})})})}},T=P,j=t("060f");T.init().then(function(){return T.checkVersion()}).then(function(n){console.debug(n),j["a"].confirm({message:"有新版本，想不想更新？",cancleText:"不更",confirmText:"更之",onConfirm:function(){T.installNewVersion()}})}).catch(function(n){console.error(n)}),o["a"].use(i["a"]),o["a"].config.productionTip=!1;var S=new i["a"]({routes:r});new o["a"]({router:S,render:function(n){return n(k)}}).$mount("#app")},"7c55":function(n,e,t){"use strict";var o=t("d3dd"),i=t.n(o);i.a},"9a12":function(n,e,t){"use strict";var o=t("48ab"),i=t.n(o);i.a},"9bd7":function(n,e,t){},acee:function(n,e,t){"use strict";var o=t("eee5"),i=t.n(o);i.a},d3dd:function(n,e,t){},ed48:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flat-button",attrs:{onselectstart:"return false;"},on:{touchend:n.jet}},[t("span",{staticClass:"button-value"},[n._t("default",[n._v("好")])],2)])},i=[],r={data:function(){return{}},methods:{jet:function(){this.$emit("touchend")}}},s=r,a=(t("263a"),t("2877")),c=Object(a["a"])(s,o,i,!1,null,null,null);c.options.__file="FlatButton.vue";e["a"]=c.exports},eee5:function(n,e,t){}});
//# sourceMappingURL=index.js.map