(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{eFZL:function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("div",{staticClass:"row gutter-md",staticStyle:{"max-width":"550px"}},[a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("p",{staticClass:"caption text-center q-my-xs"},[e._v("Hex model")]),a("q-color-picker",{model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}})],1),a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("p",{staticClass:"caption text-center q-my-xs"},[e._v("Hex (+ alpha) model")]),a("q-color-picker",{model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}})],1),a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("p",{staticClass:"caption text-center q-my-xs"},[e._v("RGB model")]),a("q-color-picker",{model:{value:e.modelRgb,callback:function(l){e.modelRgb=l},expression:"modelRgb"}})],1),a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("p",{staticClass:"caption text-center q-my-xs"},[e._v("RGBA model")]),a("q-color-picker",{model:{value:e.modelRgba,callback:function(l){e.modelRgba=l},expression:"modelRgba"}})],1)]),a("p",{staticClass:"caption"},[e._v("\n      Lazy input\n      "),a("span",{staticClass:"chip-container"},[a("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("\n          Model: "+e._s(e.lazy)+"\n        ")])],1)]),a("q-color-picker",{attrs:{value:e.lazy,clearable:""},on:{change:function(l){return e.lazy=l}}}),a("p",{staticClass:"caption"},[e._v("On Dark Background")]),a("div",{staticClass:"dark-example bg-black row justify-center"},[a("q-color-picker",{staticClass:"q-mt-lg q-ma-md",attrs:{dark:""},model:{value:e.modelRgba,callback:function(l){e.modelRgba=l},expression:"modelRgba"}})],1),a("p",{staticClass:"caption"},[e._v("Inside Field")]),a("q-field",{staticStyle:{"max-width":"530px"},attrs:{label:"Car color",helper:"Touch to select a color",icon:"brush"}},[a("q-color-picker",{model:{value:e.modelRgba,callback:function(l){e.modelRgba=l},expression:"modelRgba"}})],1),a("p",{staticClass:"caption"},[e._v("Readonly")]),a("div",{staticClass:"row gutter-md"},[a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("q-color-picker",{attrs:{readonly:""},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}})],1),a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("q-color-picker",{attrs:{readonly:""},model:{value:e.modelRgb,callback:function(l){e.modelRgb=l},expression:"modelRgb"}})],1)]),a("p",{staticClass:"caption"},[e._v("Disable")]),a("div",{staticClass:"row gutter-md"},[a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("q-color-picker",{attrs:{disable:""},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}})],1),a("div",{staticClass:"col-12 col-sm-6 column items-center"},[a("q-color-picker",{attrs:{disable:""},model:{value:e.modelRgba,callback:function(l){e.modelRgba=l},expression:"modelRgba"}})],1)])],1)])},o=[];t._withStripped=!0;var c={data:function(){return{modelHex:"#C7044B",modelHexa:"#F0FF1CBF",modelRgb:{r:112,g:204,b:55},modelRgba:{r:138,g:36,b:138,a:64},lazy:null}},methods:{rgb:function(e){return"rgb".concat(void 0!==e.a?"a":"","(").concat(e.r,",").concat(e.g,",").concat(e.b).concat(void 0!==e.a?",".concat(e.a/100):"",")")}}},s=c,i=a("KHd+"),n=Object(i["a"])(s,t,o,!1,null,null,null);l["default"]=n.exports}}]);