(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{B6BM:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[i("q-ajax-bar",{ref:"bar",attrs:{position:t.position,reverse:t.reverse,size:t.computedSize}}),i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[i("p",{staticClass:"caption"},[t._v("Ajax Bar component captures Ajax calls automatically. This page here triggers events manually for demonstrating purposes only.")]),i("q-card",{staticStyle:{"margin-top":"25px"}},[i("q-card-title",{staticClass:"bg-primary text-center"},[i("q-btn",{attrs:{push:"",color:"orange"},on:{click:function(e){t.trigger()}}},[t._v("Trigger Event")])],1),i("p",{staticClass:"caption text-center"},[t._v("\n        Try out some combinations for Ajax Bar.\n        "),i("br"),t._v("Color is customizable too through 'color' prop.\n      ")]),i("q-card-main",[i("q-field",{attrs:{label:"Position"}},[i("div",{staticClass:"flex",staticStyle:{margin:"-5px"}},[i("div",{staticClass:"column group"},[i("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),i("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),i("div",{staticClass:"column group"},[i("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),i("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1)])]),i("q-field",{attrs:{label:"Reverse?"}},[i("q-checkbox",{attrs:{label:"Reverse Direction"},model:{value:t.reverse,callback:function(e){t.reverse=e},expression:"reverse"}})],1),i("q-field",{attrs:{label:"Size"}},[i("q-slider",{attrs:{min:2,max:20,"label-always":"","label-value":t.size+"px"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1)],1)],1)],1)],1)},o=[];a._withStripped=!0;var s={data:function(){return{position:"bottom",reverse:!1,size:4,timeouts:[]}},computed:{computedSize:function(){return this.size+"px"}},methods:{trigger:function(){var t=this;this.$refs.bar.start(),setTimeout(function(){t.$refs.bar&&t.$refs.bar.stop()},5e3*Math.random()+2e3)}}},r=s,l=i("KHd+"),n=Object(l["a"])(r,a,o,!1,null,null,null);e["default"]=n.exports}}]);