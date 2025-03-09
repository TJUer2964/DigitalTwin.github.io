(function(){"use strict";var t={1336:function(t,e,n){var r=n(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("navTop",{staticClass:"nav"}),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.imgSrc,width:"100%",height:"100%",alt:""}})]),e("router-view",{staticClass:"content2"})],1)},a=[],o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"demo"}},[e("p",{staticStyle:{display:"inline-block",float:"left","margin-left":"20px","font-size":"25px","font-weight":"bold"}},[t._v(" Sense-Air空压系统数字孪生与智能运维平台 ")]),e("div",{staticStyle:{display:"inline-block",float:"right","margin-top":"15px","margin-left":"20px"}},[e("div",{staticStyle:{display:"inline-block",float:"left","margin-right":"160px"}},[e("el-button",{on:{click:t.dataAna}},[t._v("数据分析")]),e("el-button",{on:{click:t.waySele}},[t._v("策略选择")]),e("el-button",{on:{click:t.digiTwin}},[t._v("数字孪生")]),e("el-button",{on:{click:t.statiForm}},[t._v("统计报表")]),e("el-button",{on:{click:t.dataRecord}},[t._v("数据记录")]),e("el-button",{on:{click:t.alarmStatus}},[t._v("报警状态")]),e("el-button",{on:{click:t.deviceRecord}},[t._v("仪表统计")])],1),e("p",{staticClass:"pTime"},[t._v(" "+t._s(t.dateFormat(t.date))+" ")])])])},u=[],c=(n(7658),{data(){return{date:new Date}},mounted(){let t=this;this.timer=setInterval((function(){t.date=(new Date).toLocaleString()}))},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},methods:{dateFormat(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,r=t.getDate()<10?"0"+t.getDate():t.getDate();return e+"-"+n+"-"+r},dataAna(){this.$router.push("/digitalAnalytics")},waySele(){this.$router.push("/waysSelect")},digiTwin(){this.$router.push("/digitalTwin")},statiForm(){this.$router.push("/statisticalForm")},dataRecord(){this.$router.push("/dataRecord")},alarmStatus(){this.$router.push("/alarmStatus")},deviceRecord(){this.$router.push("/deviceRecord")}}}),l=c,d=n(1001),s=(0,d.Z)(l,o,u,!1,null,null,null),f=s.exports,p={components:{navTop:f},data(){return{imgSrc:n(9122)}}},h=p,m=(0,d.Z)(h,i,a,!1,null,"284aa232",null),v=m.exports,g=n(2631);r["default"].use(g.ZP);const b=[{path:"/",name:"home",redirect:"/digitalAnalytics"},{path:"/digitalAnalytics",name:"digitalAnalytics",component:()=>Promise.all([n.e(558),n.e(20)]).then(n.bind(n,1020))},{path:"/waysSelect",name:"waysSelect",component:()=>Promise.all([n.e(558),n.e(99)]).then(n.bind(n,7099))},{path:"/digitalTwin",name:"digitalTwin",component:()=>Promise.all([n.e(558),n.e(411)]).then(n.bind(n,2411))},{path:"/dataTest",name:"dataTest",component:()=>Promise.all([n.e(558),n.e(605)]).then(n.bind(n,3605))},{path:"/statisticalForm",name:"statisticalForm",component:()=>n.e(772).then(n.bind(n,6772))},{path:"/dataRecord",name:"dataRecord",component:()=>n.e(344).then(n.bind(n,3344))},{path:"/alarmStatus",name:"alarmStatus",component:()=>n.e(970).then(n.bind(n,3970))},{path:"/deviceRecord",name:"deviceRecord",component:()=>n.e(62).then(n.bind(n,62))}],y=new g.ZP({routes:b});var w=y,k=n(8499),S=n.n(k),T=n(750);r["default"].prototype.$echarts=T,r["default"].config.productionTip=!1,r["default"].use(S()),new r["default"]({data:{iftemp:"false"},router:w,render:t=>t(v)}).$mount("#app")},9122:function(t,e,n){t.exports=n.p+"img/background.e3da5854.jpg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(d=0;d<t.length;d++){r=t[d][0],i=t[d][1],a=t[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<o&&(o=a));if(u){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{20:"33cf8e30",62:"9a851fd4",99:"c2c92dea",344:"b8d3491b",411:"53a21c4d",558:"13254089",605:"9e63fba5",772:"efdb6d90",970:"2e8d6555"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{20:"23f622fe",62:"412f3325",99:"07232ac9",411:"e4ca99bb",772:"bff0ca29",970:"a647b977"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="digitaltwin:";n.l=function(r,i,a,o){if(t[r])t[r].push(i);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var s=l[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+a){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[i];var f=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/DigitalTwin.github.io/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=o,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===e))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],a=i.getAttribute("data-href");if(a===t||a===e)return i}},r=function(r){return new Promise((function(i,a){var o=n.miniCssF(r),u=n.p+o;if(e(o,u))return i();t(r,u,null,i,a)}))},i={143:0};n.f.miniCss=function(t,e){var n={20:1,62:1,99:1,411:1,772:1,970:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,i[1](u)}};n.l(o,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],u=r[1],c=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(c)var d=c(n)}for(e&&e(r);l<o.length;l++)a=o[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},r=self["webpackChunkdigitaltwin"]=self["webpackChunkdigitaltwin"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1336)}));r=n.O(r)})();
//# sourceMappingURL=app.22bbe1a5.js.map