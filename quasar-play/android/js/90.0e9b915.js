(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{sCbh:function(o,t,a){"use strict";a.r(t);var i=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("q-page",{attrs:{padding:""}},[a("p",{staticClass:"caption"},[a("span",{staticClass:"desktop-only"},[o._v("Click")]),a("span",{staticClass:"mobile-only"},[o._v("Tap")]),o._v("\n    on each inline FABs below.\n    The one that opens on the right also has a backdrop.\n  ")]),a("div",{staticClass:"column items-center",staticStyle:{"margin-top":"100px","margin-bottom":"100px"}},[a("q-fab",{attrs:{color:"purple",icon:"keyboard_arrow_up",direction:"up"}},[a("q-fab-action",{attrs:{color:"primary",click:"notify('mail')",icon:"mail"}}),a("q-fab-action",{attrs:{color:"secondary",icon:"alarm"},on:{click:function(t){o.notify("alarm")}}})],1),a("br"),a("q-fab",{attrs:{color:"amber","text-color":"black",icon:"keyboard_arrow_left",direction:"left"}},[a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"mail"},on:{click:function(t){o.notify("mail")}}}),a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"alarm"},on:{click:function(t){o.notify("alarm")}}})],1),a("br"),a("q-fab",{attrs:{color:"secondary",push:"",icon:"keyboard_arrow_right",direction:"right"}},[a("q-fab-action",{attrs:{color:"primary",icon:"mail"},on:{click:function(t){o.notify("mail")}}}),a("q-fab-action",{attrs:{color:"tertiary",icon:"alarm"},on:{click:function(t){o.notify("alarm")}}})],1),a("br"),a("q-fab",{attrs:{color:"tertiary",glossy:"",icon:"keyboard_arrow_down",direction:"down"}},[a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"mail"},on:{click:function(t){o.notify("mail")}}}),a("q-fab-action",{attrs:{color:"amber","text-color":"black",icon:"alarm"},on:{click:function(t){o.notify("alarm")}}})],1)],1),a("p",{staticClass:"caption",staticStyle:{"margin-bottom":"100px"}},[o._v("\n    There's also the absolute positioned one on bottom\n    right of screen which maintains position on Page scroll.\n    It has a click/tap event injected on itself when expanded.\n  ")]),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{icon:"add",direction:"up",color:"primary"}},[a("q-fab-action",{staticClass:"white",attrs:{color:"blue",icon:"person add"},on:{click:o.alert}}),a("q-fab-action",{staticClass:"white",attrs:{color:"blue",icon:"mail"},on:{click:function(t){o.notify("mail")}}})],1)],1),a("div",{staticStyle:{height:"1000px"}})],1)},n=[];i._withStripped=!0;var c={methods:{alert:function(){this.$q.dialog({title:"FAB",message:"Good job! Keep it going."})},notify:function(o){this.$q.notify({icon:o,message:"So you want your "+o+"s, huh?"})}}},r=c,l=a("KHd+"),e=Object(l["a"])(r,i,n,!1,null,null,null);t["default"]=e.exports}}]);