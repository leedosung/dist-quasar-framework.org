(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{"/6Cx":function(t,e,n){"use strict";var i=n("OgGE"),a=n.n(i);a.a},OgGE:function(t,e,n){},t8nN:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"docs-ripple row justify-center",attrs:{padding:""}},[n("div",{staticStyle:{width:"500px","max-width":"90vw"}},[n("p",{staticClass:"caption"},[n("span",{staticClass:"desktop-only"},[t._v("Click")]),n("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n      on the area below to see it in action.\n    ")]),n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"relative-position",class:t.classes})])])},a=[];i._withStripped=!0;var s=["primary","amber","secondary","orange","tertiary","lime","cyan","purple","brown","blue"],r={data:function(){return{color:s[0],index:0}},computed:{classes:function(){return"bg-".concat(this.color)}},mounted:function(){var t=this;this.timer=setInterval(function(){t.index=(t.index+1)%s.length,t.color=s[t.index]},3e3)},beforeDestroy:function(){clearInterval(this.timer)}},o=r,c=(n("/6Cx"),n("KHd+")),l=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=l.exports}}]);