(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b649"],{"0a49":function(t,e,n){var i=n("9b43"),r=n("626a"),o=n("4bf8"),a=n("9def"),c=n("cd1c");t.exports=function(t,e){var n=1==t,s=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l,g=e||c;return function(e,c,h){for(var m,p,v=o(e),b=r(v),y=i(c,h,3),w=a(b.length),x=0,S=n?g(e,w):s?g(e,0):void 0;w>x;x++)if((d||x in b)&&(m=b[x],p=y(m,x,v),t))if(n)S[x]=p;else if(p)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:S.push(m)}else if(f)return!1;return l?-1:u||f?f:S}}},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var i=n("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"11e9":function(t,e,n){var i=n("52a7"),r=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=o(t),e=a(e,!0),s)try{return u(t,e)}catch(t){}if(c(t,e))return r(!i.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";var i=n("32e9"),r=n("2aba"),o=n("79e5"),a=n("be13"),c=n("2b4c");t.exports=function(t,e,n){var s=c(t),u=n(a,s,""[t]),f=u[0],l=u[1];o(function(){var e={};return e[s]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,f),i(RegExp.prototype,s,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)}))}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d"),n("f751"),n("7f7f"),n("ac6a"),n("c5f6");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.name=e.constructor===String?e:"",this.config=n.constructor===Object?n:"",this.initDb()}return o(t,[{key:"initDb",value:function(){this.db=null,this.store=this.config.store&&this.config.store.constructor===String?this.config.store:"",this.key=this.config.key&&this.config.key.constructor===Object?this.config.key:{keyPath:null,autoIncrement:!1},this.indexs=this.config.indexs&&this.config.indexs.constructor===Array?this.config.indexs:[],this.version=this.config.version&&this.config.version.constructor===Number?this.config.version:1}},{key:"compatibility",value:function(){return window.indexedDB?(console.debug("indexedDB is ready"),!0):(console.error("Your browser do not support indexedDB"),!1)}},{key:"openIndexedDb",value:function(){var t=this;return new Promise(function(e,n){!t.compatibility()&&n({code:-1,msg:"浏览器不支持indexedDB，无法存储数据",data:{}});var i=window.indexedDB.open(t.name,t.version);i.onsuccess=function(){t.db=i.result,e(t.db)},i.onupgradeneeded=function(e){if(console.log("upgrade"),t.db=e.target.result,!t.db.objectStoreNames.contains(t.store)){var n=t.db.createObjectStore(t.store,{keyPath:t.key.keyPath,autoIncrement:t.key.autoIncrement});t.indexs.forEach(function(t){n.createIndex(t.key,t.key,{unique:t.unique})})}},i.onerror=function(t){n(t)}})}},{key:"setStore",value:function(t){this.store=t&&t.constructor===String?t:""}},{key:"insertData",value:function(t){var e=this;return new Promise(function(n,i){e.openIndexedDb().then(function(){var r=e.db.transaction(e.store,"readwrite"),o=r.objectStore(e.store),a=o.add(t);a.onsuccess=function(t){n(t)},a.onerror=function(t){i(t)}}).catch(function(t){i(t)})})}},{key:"getAllData",value:function(){var t=this;return new Promise(function(e,n){t.openIndexedDb().then(function(){var i=t.db.transaction(t.store,"readwrite"),r=i.objectStore(t.store),o=r.getAll();o.onsuccess=function(t){e(t)},o.onerror=function(t){n(t)}}).catch(function(t){n(t)})})}},{key:"updateData",value:function(t){var e=this;return new Promise(function(n,i){e.openIndexedDb().then(function(){var r=e.db.transaction(e.store,"readwrite"),o=r.objectStore(e.store),a=o.put(t);a.onsuccess=function(t){n(t)},a.onerror=function(t){i(t)}}).catch(function(t){i(t)})})}},{key:"deleteOne",value:function(t){var e=this;return new Promise(function(n,i){e.openIndexedDb().then(function(){var r=e.db.transaction(e.store,"readwrite"),o=r.objectStore(e.store),a=o.delete(t);a.onsuccess=function(t){n(t)},a.onerror=function(t){i(t)}}).catch(function(t){i(t)})})}}]),t}(),c=a,s=(n("6b54"),{storeName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",e=new Date,n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"".concat(t,"{").concat(n,"-").concat(i,"-").concat(r,":").concat(this.genId(),"}")},genId:function(){var t=1*(1e5*Math.random()).toFixed(0),e=(new Date).getTime();return"".concat(t.toString(16),"-").concat(e.toString(16))}}),u=function(){var t=window.localStorage.getItem("store");return t||(t=s.storeName("article"),window.localStorage.setItem("store",t)),t},f={database:"yiqian",version:1,store:u(),key:{keyPath:"id",autoIncrement:!1},indexs:[{key:"title",unique:!1},{key:"tags",unique:!1}]},l={instantiationDB:function(){return new c(f.name,{version:f.version,key:f.key,store:f.store,indexs:f.indexs})},addNewQian:function(t){var e=this.instantiationDB();return new Promise(function(n,i){t=Object.assign({},t,{id:s.genId()}),e.insertData(t).then(function(t){"success"===t.type?n({code:0,msg:"insert done",data:""}):i({code:-1,msg:"insert fail",data:t})}).catch(function(t){i({code:-1,msg:"insert fail",data:t})})})},getAllQian:function(){var t=this.instantiationDB();return new Promise(function(e,n){t.getAllData().then(function(t){var n=t.target.result;e({code:0,msg:"",data:n})}).catch(function(t){n({code:-1,msg:"query fail!",data:t})})})},updateQian:function(t){var e=this.instantiationDB();return new Promise(function(n,i){e.updateData(t).then(function(t){var e=t.target.result;n({code:0,msg:"",data:e})}).catch(function(t){i({code:-1,msg:"update fail!",data:t})})})},deleteQian:function(t){var e=this.instantiationDB();return new Promise(function(n,i){e.deleteOne(t).then(function(t){var e=t.target.result;n({code:0,msg:"",data:e})}).catch(function(t){i({code:-1,msg:"delete fail!",data:t})})})}};e["a"]={addNewQian:function(t){return l.addNewQian(t)},getAllQian:function(){return l.getAllQian()},updateQian:function(t){return l.updateQian(t)},deleteQian:function(t){return l.deleteQian(t)}}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var i=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),r=n("0bfb"),o=n("9e1e"),a="toString",c=/./[a],s=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):c.name!=a&&s(function(){return c.call(this)})},7333:function(t,e,n){"use strict";var i=n("0d58"),r=n("2621"),o=n("52a7"),a=n("4bf8"),c=n("626a"),s=Object.assign;t.exports=!s||n("79e5")(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=i})?function(t,e){var n=a(t),s=arguments.length,u=1,f=r.f,l=o.f;while(s>u){var d,g=c(arguments[u++]),h=f?i(g).concat(f(g)):i(g),m=h.length,p=0;while(m>p)l.call(g,d=h[p++])&&(n[d]=g[d])}return n}:s},"7d54":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"frame",staticClass:"main-img",style:"width: "+t.frameWidth+"; height: "+t.frameHeight,on:{click:t.chooseMain}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.mainImg,expression:"mainImg"}],ref:"img",style:"width: "+t.imgWidth+"; height: "+t.imgHeight,attrs:{alt:"我是封面",src:t.mainImg}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.mainImg,expression:"!mainImg"}],staticClass:"no-img"},[t._v("我是封面")]),n("input",{ref:"input",attrs:{type:"file",accept:"image/*"},on:{change:t.onInputChange}})])},r=[],o=(n("a481"),{image:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:720;if(/^data:image\/gif/.test(t))return new Promise(function(e){e(t)});var n=document.createElement("canvas"),i=n.getContext("2d"),r=new Image;return r.src=t,new Promise(function(t){r.onload=function(){var o=r.width,a=r.height;o>e&&(a*=e/o,o=e),n.width=o,n.height=a,i.drawImage(r,0,0,o,a);var c=n.toDataURL("image/jpeg",.7);i=null,n=null,r=null,t(c)}})}}),a={model:{prop:"value",event:"modified"},props:{value:{type:String,default:null},readonly:{type:Boolean,default:!1}},computed:{frame:function(){return this.$refs.frame},img:function(){return this.$refs.img},input:function(){return this.$refs.input}},watch:{value:function(){this.mainImg=this.value||null}},data:function(){return{mainImg:null,frameWidth:"100%",frameHeight:"100%",imgWidth:"auto",imgHeight:"auto"}},mounted:function(){this.init(),this.mainImg=this.value||null},methods:{init:function(){this.frameResize(),this.img.onload=this.imgLoaded},frameResize:function(){var t=window.getComputedStyle(this.frame),e=t.width.replace("px",""),n=t.height.replace("px","");e/n>=1?(this.frameHeight=n+"px",this.frameWidth=n+"px"):(this.frameWidth=e+"px",this.frameHeight=e+"px")},imgLoaded:function(){var t=window.getComputedStyle(this.img),e=t.width.replace("px",""),n=t.height.replace("px","");e/n>=1?(this.imgWidth="100%",this.imgHeight="auto"):(this.imgWidth="auto",this.imgHeight="100%")},chooseMain:function(){!this.readonly&&this.input.click()},onInputChange:function(t){var e=this,n=t.target.files[0];if(window.FileReader&&n){var i=new FileReader;i.readAsDataURL(n),i.onloadend=function(t){o.image(t.target.result).then(function(t){e.mainImg=t,e.jet()})}}},jet:function(){this.$emit("modified",this.mainImg)}}},c=a,s=(n("cfa0"),n("2877")),u=Object(s["a"])(c,i,r,!1,null,null,null);u.options.__file="MainImg.vue";e["a"]=u.exports},"81a0":function(t,e,n){},"8b97":function(t,e,n){var i=n("d3f4"),r=n("cb7c"),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var i=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},a481:function(t,e,n){n("214f")("replace",2,function(t,e,n){return[function(i,r){"use strict";var o=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,o,r):n.call(String(o),i,r)},n]})},aa77:function(t,e,n){var i=n("5ca1"),r=n("be13"),o=n("79e5"),a=n("fdef"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var r={},c=o(function(){return!!a[t]()||s[t]()!=s}),u=r[t]=c?e(d):a[t];n&&(r[n]=u),i(i.P+i.F*c,"String",r)},d=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),d=s.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(g),m=0;m<h.length;m++){var p,v=h[m],b=g[v],y=a[v],w=y&&y.prototype;if(w&&(w[f]||c(w,f,d),w[l]||c(w,l,v),s[v]=d,b))for(p in i)w[p]||o(w,p,i[p],!0)}},c5f6:function(t,e,n){"use strict";var i=n("7726"),r=n("69a8"),o=n("2d95"),a=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,f=n("11e9").f,l=n("86cc").f,d=n("aa77").trim,g="Number",h=i[g],m=h,p=h.prototype,v=o(n("2aeb")(p))==g,b="trim"in String.prototype,y=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var a,s=e.slice(2),u=0,f=s.length;u<f;u++)if(a=s.charCodeAt(u),a<48||a>r)return NaN;return parseInt(s,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?s(function(){p.valueOf.call(n)}):o(n)!=g)?a(new m(y(e)),n,h):y(e)};for(var w,x=n("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)r(m,w=x[S])&&!r(h,w)&&l(h,w,f(m,w));h.prototype=p,p.constructor=h,n("2aba")(i,g,h)}},cd1c:function(t,e,n){var i=n("e853");t.exports=function(t,e){return new(i(t))(e)}},cfa0:function(t,e,n){"use strict";var i=n("81a0"),r=n.n(i);r.a},e853:function(t,e,n){var i=n("d3f4"),r=n("1169"),o=n("2b4c")("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},f751:function(t,e,n){var i=n("5ca1");i(i.S+i.F,"Object",{assign:n("7333")})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-b649.js.map