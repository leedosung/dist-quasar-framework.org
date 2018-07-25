(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[80,94],{j0rW:function(n,i,t){"use strict";t.r(i);var a=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("q-page",{staticClass:"docs-touch row justify-center",attrs:{padding:""}},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("p",{staticClass:"caption"},[t("span",{staticClass:"desktop-only"},[n._v("Click then pan in a direction with your mouse")]),t("span",{staticClass:"mobile-only"},[n._v("Touch and pan in a direction")]),n._v("\n      on the area below to see it in action.\n      "),t("br"),n._v("\n      Page scrolling is prevented, but you can opt out if you wish.\n    ")]),t("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.prevent",value:n.handlePan,expression:"handlePan",modifiers:{prevent:!0}}],ref:"area",staticClass:"custom-area row flex-center"},[n.info?t("div",{staticClass:"custom-info"},[t("pre",[n._v(n._s(n.info))])]):t("div",{staticClass:"text-center"},[t("q-icon",{attrs:{name:"arrow_upward"}}),t("div",{staticClass:"row items-center"},[t("q-icon",{attrs:{name:"arrow_back"}}),t("div",[n._v("Pan in any direction")]),t("q-icon",{attrs:{name:"arrow_forward"}})],1),t("q-icon",{attrs:{name:"arrow_downward"}})],1),n.panning?t("div",{staticClass:"touch-signal"},[t("q-icon",{attrs:{name:"touch_app"}})],1):n._e()]),t("p",{staticClass:"caption"},[n._v("\n      Panning works both with a mouse or a native touch action.\n      "),t("br"),n._v("\n      You can also capture pan to certain directions (any) only as you'll see below.\n    ")]),t("p",{staticClass:"caption"},[n._v("\n      Example on capturing only horizontal panning.\n      "),t("br"),n._v("\n      Notice that on touch capable devices the scrolling is automatically not blocked, since\n      we are only capturing horizontally.\n    ")]),t("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.horizontal.prevent",value:n.panHorizontally,expression:"panHorizontally",modifiers:{horizontal:!0,prevent:!0}}],staticClass:"custom-area row flex-center"},[n.infoHorizontal?t("div",{staticClass:"custom-info"},[t("pre",[n._v(n._s(n.infoHorizontal))])]):t("div",{staticClass:"row items-center"},[t("q-icon",{attrs:{name:"arrow_back"}}),t("div",[n._v("Pan to left or right only")]),t("q-icon",{attrs:{name:"arrow_forward"}})],1),n.panningHorizontal?t("div",{staticClass:"touch-signal"},[t("q-icon",{attrs:{name:"touch_app"}})],1):n._e()]),t("p",{staticClass:"caption"},[n._v("\n      Example on capturing only vertically panning.\n      Page scrolling is prevented, but you can opt out if you wish.\n    ")]),t("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.vertical.prevent",value:n.panVertically,expression:"panVertically",modifiers:{vertical:!0,prevent:!0}}],staticClass:"custom-area row flex-center"},[n.infoVertical?t("div",{staticClass:"custom-info"},[t("pre",[n._v(n._s(n.infoVertical))])]):t("div",{staticClass:"text-center"},[t("q-icon",{attrs:{name:"arrow_upward"}}),t("div",[n._v("\n          Pan to up or down only\n        ")]),t("q-icon",{attrs:{name:"arrow_downward"}})],1),n.panningVertical?t("div",{staticClass:"touch-signal"},[t("q-icon",{attrs:{name:"touch_app"}})],1):n._e()]),t("p",{staticClass:"caption"},[n._v("For desktops, you can configure to avoid capturing mouse pans if you wish.")])])])},o=[];a._withStripped=!0;t("mT6g");var e={data:function(){return{info:null,panning:!1,infoHorizontal:null,panningHorizontal:!1,infoVertical:null,panningVertical:!1}},methods:{handlePan:function(n){var i=n.position,t=n.direction,a=n.duration,o=n.distance,e=n.delta,s=n.isFirst,r=n.isFinal;n.evt;this.info={position:i,direction:t,duration:a,distance:o,delta:e,isFirst:s,isFinal:r},s?this.panning=!0:r&&(this.panning=!1)},panHorizontally:function(n){var i=n.position,t=n.direction,a=n.duration,o=n.distance,e=n.delta,s=n.isFirst,r=n.isFinal;n.evt;this.infoHorizontal={position:i,direction:t,duration:a,distance:o,delta:e,isFirst:s,isFinal:r},s?this.panningHorizontal=!0:r&&(this.panningHorizontal=!1)},panVertically:function(n){var i=n.position,t=n.direction,a=n.duration,o=n.distance,e=n.delta,s=n.isFirst,r=n.isFinal;n.evt;this.infoVertical={position:i,direction:t,duration:a,distance:o,delta:e,isFirst:s,isFinal:r},s?this.panningVertical=!0:r&&(this.panningVertical=!1)}}},s=e,r=t("KHd+"),c=Object(r["a"])(s,a,o,!1,null,null,null);i["default"]=c.exports},mT6g:function(n,i,t){}}]);