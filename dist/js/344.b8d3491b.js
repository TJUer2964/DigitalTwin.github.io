"use strict";(self["webpackChunkdigitaltwin"]=self["webpackChunkdigitaltwin"]||[]).push([[344],{3344:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{"padding-top":"40px","padding-left":"4px"}},[e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"700px"},on:{select:t.handleSelect1},model:{value:t.activeIndex1,callback:function(e){t.activeIndex1=e},expression:"activeIndex1"}},[e("el-menu-item",{attrs:{index:"1"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("4#空压站流量计&电表1")])]),e("el-menu-item",{attrs:{index:"2"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("4#空压站流量计&电表2")])]),e("el-menu-item",{attrs:{index:"3"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("4#空压站流量计&电表3")])]),e("el-menu-item",{attrs:{index:"4"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("4#空压站薄板中心")])]),e("el-menu-item",{attrs:{index:"5"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("4#空压站8、9平台")])]),e("el-menu-item",{attrs:{index:"6"}},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("4#空压站")])])],1)],1),e("el-container",[e("el-header",[e("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect2},model:{value:t.activeIndex2,callback:function(e){t.activeIndex2=e},expression:"activeIndex2"}},[e("el-menu-item",{attrs:{index:"1"}},[t._v("瞬时流量")]),e("el-menu-item",{attrs:{index:"2"}},[t._v("瞬时压力")]),e("el-menu-item",{attrs:{index:"3"}},[t._v("瞬时耗电")]),e("el-menu-item",{attrs:{index:"4"}},[t._v("流量&压力耗电量")]),e("el-menu-item",{staticStyle:{"margin-left":"40px"},attrs:{index:"5"}},[t._v("显示气压比")])],1)],1),e("el-main",["1"===t.activeIndex2?e("Echarts5A",{attrs:{"active-index1":t.activeIndex1}}):"2"===t.activeIndex2?e("Echarts5B",{attrs:{"active-index1":t.activeIndex1}}):"3"===t.activeIndex2?e("Echarts5C",{attrs:{"active-index1":t.activeIndex1}}):"4"===t.activeIndex2?e("Echarts5D",{attrs:{"active-index1":t.activeIndex1}}):"5"===t.activeIndex2?e("Echarts5E",{attrs:{"active-index1":t.activeIndex1}}):t._e()],1)],1)],1)],1)])},n=[],i=function(){var t=this,e=t._self._c;return e("div",{ref:"chart",staticStyle:{width:"100%",height:"100%"}})},o=[],s=a(750),h={props:{activeIndex1:{type:String,required:!0}},data(){return{chart:null}},mounted(){this.chart=s.init(this.$refs.chart),this.drawChart()},watch:{activeIndex1(){this.drawChart()}},methods:{drawChart(){const t=this.getOptionBasedOnIndex(this.activeIndex1);this.chart.setOption(t)},getOptionBasedOnIndex(t){let e="",a=[];switch(t){case"1":e="4#空压站流量计&电表1",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"2":e="4#空压站流量计&电表2",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"3":e="4#空压站流量计&电表3",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"4":e="4#空压站薄板中心",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"5":e="4#空压站8、9平台",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"6":e="4#空压站",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break}return{title:{text:e},tooltip:{trigger:"axis",formatter:"{b}<br/>{a}: {c} m³/h"},xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{name:"流量 (m³/h)"},series:[{name:"流量",type:"line",data:a}]}}}},l=h,d=a(1001),c=(0,d.Z)(l,i,o,!1,null,null,null),m=c.exports,u=function(){var t=this,e=t._self._c;return e("div",{ref:"chart",staticStyle:{width:"100%",height:"100%"}})},x=[],f={props:{activeIndex1:{type:String,required:!0}},data(){return{chart:null}},mounted(){this.chart=s.init(this.$refs.chart),this.drawChart()},watch:{activeIndex1(){this.drawChart()}},methods:{drawChart(){const t=this.getOptionBasedOnIndex(this.activeIndex1);this.chart.setOption(t)},getOptionBasedOnIndex(t){let e="",a=[];switch(t){case"1":e="4#空压站流量计&电表1",a=Array.from({length:7},(()=>Math.floor(100*Math.random())));break;case"2":e="4#空压站流量计&电表2",a=Array.from({length:7},(()=>Math.floor(100*Math.random())));break;case"3":e="4#空压站流量计&电表3",a=Array.from({length:7},(()=>Math.floor(100*Math.random())));break;case"4":e="4#空压站薄板中心",a=Array.from({length:7},(()=>Math.floor(100*Math.random())));break;case"5":e="4#空压站8、9平台",a=Array.from({length:7},(()=>Math.floor(100*Math.random())));break;case"6":e="4#空压站",a=Array.from({length:7},(()=>Math.floor(100*Math.random())));break;default:e="默认标题",a=[20,40,60,80,100,120,140]}return{title:{text:e},tooltip:{trigger:"axis",formatter:"{b}<br/>{a}: {c} kPa"},xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{name:"压力 (kPa)"},series:[{name:"压力",type:"line",data:a}]}}}},g=f,v=(0,d.Z)(g,u,x,!1,null,null,null),M=v.exports,p=function(){var t=this,e=t._self._c;return e("div",{ref:"chart",staticStyle:{width:"100%",height:"100%"}})},y=[],A={props:{activeIndex1:{type:String,required:!0}},data(){return{chart:null}},mounted(){this.chart=s.init(this.$refs.chart),this.drawChart()},watch:{activeIndex1(){this.drawChart()}},methods:{drawChart(){const t=this.getOptionBasedOnIndex(this.activeIndex1);this.chart.setOption(t)},getOptionBasedOnIndex(t){let e="",a=[];switch(t){case"1":e="4#空压站流量计&电表1",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"2":e="4#空压站流量计&电表2",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"3":e="4#空压站流量计&电表3",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"4":e="4#空压站薄板中心",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"5":e="4#空压站8、9平台",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"6":e="4#空压站",a=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;default:e="默认标题",a=[200,400,600,800,1e3,1200,1400]}return{title:{text:e},tooltip:{trigger:"axis",formatter:"{b}<br/>{a}: {c} 度"},xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{name:"耗电量 (度)"},series:[{name:"耗电量",type:"line",data:a}]}}}},I=A,b=(0,d.Z)(I,p,y,!1,null,null,null),k=b.exports,w=function(){var t=this,e=t._self._c;return e("div",{ref:"chart",staticStyle:{width:"100%",height:"100%"}})},C=[],S={props:{activeIndex1:{type:String,required:!0}},data(){return{chart:null}},mounted(){this.chart=s.init(this.$refs.chart),this.drawChart()},watch:{activeIndex1(){this.drawChart()}},methods:{drawChart(){const t=this.getOptionBasedOnIndex(this.activeIndex1);this.chart.setOption(t)},getOptionBasedOnIndex(t){let e="",a=[],r=[];switch(t){case"1":e="4#空压站流量计&电表1",a=Array.from({length:7},(()=>Math.floor(100*Math.random()))),r=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"2":e="4#空压站流量计&电表2",a=Array.from({length:7},(()=>Math.floor(100*Math.random()))),r=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"3":e="4#空压站流量计&电表3",a=Array.from({length:7},(()=>Math.floor(100*Math.random()))),r=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"4":e="4#空压站薄板中心",a=Array.from({length:7},(()=>Math.floor(100*Math.random()))),r=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"5":e="4#空压站8、9平台",a=Array.from({length:7},(()=>Math.floor(100*Math.random()))),r=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;case"6":e="4#空压站",a=Array.from({length:7},(()=>Math.floor(100*Math.random()))),r=Array.from({length:7},(()=>Math.floor(1e3*Math.random())));break;default:e="默认标题",a=[20,40,60,80,100,120,140],r=[200,400,600,800,1e3,1200,1400]}return{title:{text:e},tooltip:{trigger:"axis"},xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:[{name:"流量",type:"value",axisLabel:{formatter:"{value} m³/h"}},{name:"耗电量",type:"value",axisLabel:{formatter:"{value} 度"}}],series:[{name:"流量",type:"line",data:a,yAxisIndex:0},{name:"耗电量",type:"line",data:r,yAxisIndex:1}]}}}},O=S,_=(0,d.Z)(O,w,C,!1,null,null,null),B=_.exports,E=function(){var t=this,e=t._self._c;return e("div",{ref:"chart",staticStyle:{width:"100%",height:"100%"}})},F=[],T={props:{activeIndex1:{type:String,required:!0}},data(){return{chart:null}},mounted(){this.chart=s.init(this.$refs.chart),this.drawChart()},watch:{activeIndex1(){this.drawChart()}},methods:{drawChart(){const t=this.getOptionBasedOnIndex(this.activeIndex1);this.chart.setOption(t)},getOptionBasedOnIndex(t){let e="",a=[];switch(t){case"1":e="4#空压站流量计&电表1",a=Array.from({length:7},(()=>Math.random().toFixed(2)));break;case"2":e="4#空压站流量计&电表2",a=Array.from({length:7},(()=>Math.random().toFixed(2)));break;case"3":e="4#空压站流量计&电表3",a=Array.from({length:7},(()=>Math.random().toFixed(2)));break;case"4":e="4#空压站薄板中心",a=Array.from({length:7},(()=>Math.random().toFixed(2)));break;case"5":e="4#空压站8、9平台",a=Array.from({length:7},(()=>Math.random().toFixed(2)));break;case"6":e="4#空压站",a=Array.from({length:7},(()=>Math.random().toFixed(2)));break;default:e="默认标题",a=[.2,.4,.6,.8,1,1.2,1.4]}return{title:{text:e},tooltip:{trigger:"axis",formatter:"{b}<br/>{a}: {c}"},xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{name:"气压比"},series:[{name:"气压比",type:"line",data:a}]}}}},Z=T,q=(0,d.Z)(Z,E,F,!1,null,null,null),W=q.exports,$={data(){return{activeIndex1:"1",activeIndex2:"1"}},methods:{handleSelect1(t){this.activeIndex1=t},handleSelect2(t){this.activeIndex2=t}},components:{Echarts5A:m,Echarts5B:M,Echarts5C:k,Echarts5D:B,Echarts5E:W}},D=$,L=(0,d.Z)(D,r,n,!1,null,null,null),P=L.exports}}]);
//# sourceMappingURL=344.b8d3491b.js.map