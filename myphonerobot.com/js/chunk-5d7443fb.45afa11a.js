(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d7443fb","chunk-4349a34b"],{"02f4":function(t,e,o){var r=o("4588"),n=o("be13");t.exports=function(t){return function(e,o){var i,a,l=String(n(e)),c=r(o),s=l.length;return c<0||c>=s?t?"":void 0:(i=l.charCodeAt(c),i<55296||i>56319||c+1===s||(a=l.charCodeAt(c+1))<56320||a>57343?t?l.charAt(c):i:t?l.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,o){"use strict";var r=o("02f4")(!0);t.exports=function(t,e,o){return e+(o?r(t,e).length:1)}},"10ef":function(t,e,o){var r=o("775c");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=o("499e").default;n("6e06bb84",r,!0,{sourceMap:!1,shadowMode:!1})},"10f1":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".c-credits-line{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.c-credits-line__buy{margin-left:auto}",""])},"28a5":function(t,e,o){"use strict";var r=o("aae3"),n=o("cb7c"),i=o("ebd6"),a=o("0390"),l=o("9def"),c=o("5f1b"),s=o("520a"),u=o("79e5"),p=Math.min,d=[].push,f="split",h="length",v="lastIndex",b=4294967295,g=!u((function(){RegExp(b,"y")}));o("214f")("split",2,(function(t,e,o,u){var m;return m="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return o.call(n,t,e);var i,a,l,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===e?b:e>>>0,g=new RegExp(t.source,u+"g");while(i=s.call(g,n)){if(a=g[v],a>p&&(c.push(n.slice(p,i.index)),i[h]>1&&i.index<n[h]&&d.apply(c,i.slice(1)),l=i[0][h],p=a,c[h]>=f))break;g[v]===i.index&&g[v]++}return p===n[h]?!l&&g.test("")||c.push(""):c.push(n.slice(p)),c[h]>f?c.slice(0,f):c}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:o.call(this,t,e)}:o,[function(o,r){var n=t(this),i=void 0==o?void 0:o[e];return void 0!==i?i.call(o,n,r):m.call(String(n),o,r)},function(t,e){var r=u(m,t,this,e,m!==o);if(r.done)return r.value;var s=n(t),d=String(this),f=i(s,RegExp),h=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"y":"g"),y=new f(g?s:"^(?:"+s.source+")",v),_=void 0===e?b:e>>>0;if(0===_)return[];if(0===d.length)return null===c(y,d)?[d]:[];var w=0,O=0,x=[];while(O<d.length){y.lastIndex=g?O:0;var k,P=c(y,g?d:d.slice(O));if(null===P||(k=p(l(y.lastIndex+(g?0:O)),d.length))===w)O=a(d,O,h);else{if(x.push(d.slice(w,O)),x.length===_)return x;for(var j=1;j<=P.length-1;j++)if(x.push(P[j]),x.length===_)return x;O=w=k}}return x.push(d.slice(w)),x}]}))},"2ffc":function(t,e,o){"use strict";o("96df")},3150:function(t,e,o){"use strict";o("759b")},"32a4":function(t,e,o){var r=o("e6f6");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=o("499e").default;n("54dd95fb",r,!0,{sourceMap:!1,shadowMode:!1})},"386b":function(t,e,o){var r=o("5ca1"),n=o("79e5"),i=o("be13"),a=/"/g,l=function(t,e,o,r){var n=String(i(t)),l="<"+e;return""!==o&&(l+=" "+o+'="'+String(r).replace(a,"&quot;")+'"'),l+">"+n+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(l),r(r.P+r.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",o)}},4012:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".c_follow{margin-bottom:2rem}",""])},"4c70":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".o-cost{text-transform:lowercase;background:#333;color:#fff;border-radius:.6666em;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:.3333em;margin:-.3333em .25em}",""])},"4e70":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.classes},[t._t("default")],2)},n=[],i=(o("8449"),{name:"OTooltip",props:{anchor:{type:String,validator:t=>["left","right","center"].includes(t),default:"center"}},computed:{classes(){return["o-tooltip","o-tooltip--"+this.anchor]}}}),a=i,l=(o("3150"),o("2877")),c=Object(l["a"])(a,r,n,!1,null,null,null);e["default"]=c.exports},"5e44":function(t,e,o){var r=o("4012");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=o("499e").default;n("ed84e376",r,!0,{sourceMap:!1,shadowMode:!1})},6019:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"o-form__help"},[t._t("default")],2)},n=[],i={name:"OFormHelp"},a=i,l=o("2877"),c=Object(l["a"])(a,r,n,!1,null,null,null);e["a"]=c.exports},"759b":function(t,e,o){var r=o("c980");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=o("499e").default;n("5d1855c5",r,!0,{sourceMap:!1,shadowMode:!1})},7659:function(t,e,o){var r=o("10f1");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=o("499e").default;n("0e8dd011",r,!0,{sourceMap:!1,shadowMode:!1})},"775c":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".btn-icon[data-v-06953bf5]{display:inline-block;height:1.3em;margin:-.3em 0}.btn-icon[data-v-06953bf5]:focus{outline:none}",""])},8449:function(t,e,o){"use strict";o("386b")("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},"96df":function(t,e,o){var r=o("4c70");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=o("499e").default;n("2100513f",r,!0,{sourceMap:!1,shadowMode:!1})},9827:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(t.btnType,t._g({tag:"o-button",attrs:{disabled:t.disabled||t.credits<t.value,type:t.type}},t.$listeners),[t._t("default"),o("OCost",{attrs:{value:t.value,division:t.division}})],2)},n=[],i=(o("ac6a"),o("ade3")),a=o("a403"),l=o("2f62"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"o-cost"},[t._v(t._s(t.value)+" cr"),t.division?[t._v("/"+t._s(t.division))]:t._e()],2)},s=[],u={name:"OCost",props:{value:Number,division:String}},p=u,d=(o("2ffc"),o("2877")),f=Object(d["a"])(p,c,s,!1,null,null,null),h=f.exports,v=o("597e");function b(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?b(Object(o),!0).forEach((function(e){Object(i["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m={name:"CCreditButton",components:{OCost:h,OButton:a["a"]},props:{disabled:Boolean,division:String,type:String,value:Number},computed:g(g({},Object(l["d"])({credits:"getCredits"})),{},{btnType(){return"submit"===this.type?v["a"]:a["a"]}})},y=m,_=Object(d["a"])(y,r,n,!1,null,"66716a7d",null);e["a"]=_.exports},a481:function(t,e,o){"use strict";var r=o("cb7c"),n=o("4bf8"),i=o("9def"),a=o("4588"),l=o("0390"),c=o("5f1b"),s=Math.max,u=Math.min,p=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};o("214f")("replace",2,(function(t,e,o,v){return[function(r,n){var i=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):o.call(String(i),r,n)},function(t,e){var n=v(o,t,this,e);if(n.done)return n.value;var p=r(t),d=String(this),f="function"===typeof e;f||(e=String(e));var g=p.global;if(g){var m=p.unicode;p.lastIndex=0}var y=[];while(1){var _=c(p,d);if(null===_)break;if(y.push(_),!g)break;var w=String(_[0]);""===w&&(p.lastIndex=l(d,i(p.lastIndex),m))}for(var O="",x=0,k=0;k<y.length;k++){_=y[k];for(var P=String(_[0]),j=s(u(a(_.index),d.length),0),S=[],C=1;C<_.length;C++)S.push(h(_[C]));var E=_.groups;if(f){var M=[P].concat(S,j,d);void 0!==E&&M.push(E);var $=String(e.apply(void 0,M))}else $=b(P,d,j,S,E,e);j>=x&&(O+=d.slice(x,j)+$,x=j+P.length)}return O+d.slice(x)}];function b(t,e,r,i,a,l){var c=r+t.length,s=i.length,u=f;return void 0!==a&&(a=n(a),u=d),o.call(l,u,(function(o,n){var l;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":l=a[n.slice(1,-1)];break;default:var u=+n;if(0===u)return o;if(u>s){var d=p(u/10);return 0===d?o:d<=s?void 0===i[d-1]?n.charAt(1):i[d-1]+n.charAt(1):o}l=i[u-1]}return void 0===l?"":l}))}}))},aae3:function(t,e,o){var r=o("d3f4"),n=o("2d95"),i=o("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},bcf8:function(t,e,o){"use strict";o("32a4")},c980:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'.o-tooltip-container{position:relative}.o-tooltip{position:absolute;bottom:100%;display:none;margin:.25em .25em 1em;background:#3e474f;border-radius:5px;padding:.75em .5em;color:#fff;text-transform:none;font-size:1em;place-self:center;text-align:center;z-index:100;-webkit-box-shadow:0 0 10px rgba(0,0,0,.55);box-shadow:0 0 10px rgba(0,0,0,.55)}.o-tooltip:before{border-style:solid;border-width:1em .75em 0 .75em;border-color:#3e474f transparent transparent transparent;content:"";position:absolute;top:100%;left:50%;margin:0 0 0 -.75em}.o-tooltip--left .o-tooltip,.o-tooltip.o-tooltip--left{left:0}.o-tooltip--left .o-tooltip:before,.o-tooltip.o-tooltip--left:before{left:20%}.o-tooltip--right .o-tooltip,.o-tooltip.o-tooltip--right{right:0}.o-tooltip--right .o-tooltip:before,.o-tooltip.o-tooltip--right:before{left:90%}.o-tooltip-trigger.o-tooltip-show,.o-tooltip-trigger.o-tooltip-trigger--hover:hover,.o-tooltip-trigger:active,.o-tooltip-trigger:focus{cursor:pointer}.o-tooltip-trigger.o-tooltip-show .o-tooltip,.o-tooltip-trigger.o-tooltip-show~.o-tooltip,.o-tooltip-trigger.o-tooltip-trigger--hover:hover .o-tooltip,.o-tooltip-trigger.o-tooltip-trigger--hover:hover~.o-tooltip,.o-tooltip-trigger:active .o-tooltip,.o-tooltip-trigger:active~.o-tooltip,.o-tooltip-trigger:focus .o-tooltip,.o-tooltip-trigger:focus~.o-tooltip{display:block}',""])},d104:function(t,e,o){"use strict";o("5e44")},d9af:function(t,e,o){"use strict";o("7659")},dcc4:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-credits-line"},[o("div",{staticClass:"c-credits-line__credits"},[t._v(t._s(t.credits)+" credits")]),o("OLink",{staticClass:"c-credits-line__buy",attrs:{to:{name:"credits"},theme:"primary"}},[t._v("Buy credits")])],1)},n=[],i=(o("ac6a"),o("ade3")),a=o("8a82"),l=o("2f62");function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){Object(i["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={name:"CCreditsInfoLine",components:{OLink:a["a"]},computed:s({},Object(l["d"])({credits:"getCredits"}))},p=u,d=(o("d9af"),o("2877")),f=Object(d["a"])(p,r,n,!1,null,null,null);e["a"]=f.exports},dd33:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("FormGroup",{staticClass:"o-form__input o-singlechoice",class:{"is-valid":t.showValidity&&t.valid,"is-invalid":t.showValidity&&!t.valid}},[o("OFormLabel",{staticClass:"o-singlechoice__label",attrs:{for:t.htmlId}},[t._t("default")],2),o("FormButtons",{staticClass:"o-singlechoice__group",attrs:{role:"radiogroup",id:t.htmlId}},t._l(t.options,(function(e,r){return o("o-button",{key:r,staticClass:"o-singlechoice__item",attrs:{role:"radio",theme:"vradio",type:"button","aria-label":e,"aria-checked":t.value===e,disabled:t.disabled},on:{click:function(o){return t.$emit("change",e,r,t.options)}}},[t._t("option",(function(){return[t._v(t._s(e))]}),{option:e})],2)})),1)],1)},n=[],i=o("2d65"),a=o("299a"),l=o("a403"),c=o("1f7e"),s=o("9d54"),u={name:"OFormSingleChoice",components:{OFormLabel:s["a"],FormGroup:c["a"],OButton:l["a"],FormButtons:a["a"]},mixins:[i["a"]],model:{prop:"value",event:"change"},props:{value:[String,Number,Object],options:[Array,Object],disabled:{type:Boolean,default:!1}},data:function(){return{dirty:!1,internalValue:null,valid:!1,showValidity:!1}}},p=u,d=(o("bcf8"),o("2877")),f=Object(d["a"])(p,r,n,!1,null,null,null);e["a"]=f.exports},e6f6:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".o-singlechoice__group{padding:0;margin:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap}",""])},e704:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c_follow"},[o("div",{staticClass:"sharethis-inline-share-buttons"})])}],i={name:"CShareThisInline",mounted(){window&&window.__sharethis__&&window.__sharethis__.initialize()}},a=i,l=(o("d104"),o("2877")),c=Object(l["a"])(a,r,n,!1,null,null,null);e["a"]=c.exports},eac1:function(t,e,o){"use strict";o("10ef")},ead9:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("OFormInput",t._g(t._b({ref:"input",attrs:{type:"tel",value:t.internalValue},on:{blur:t.onBlur,change:t.onChange,focus:function(e){t.pickerError=null},input:t.onInput},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._t("tooltip")]},proxy:!0},t.contactPickerEnabled||t.contactPickerPossible?{key:"after",fn:function(){return[t.contactPickerEnabled?o("OButton",{class:t.pickerError?"o-tooltip-container o-tooltip-trigger o-tooltip-show":"",attrs:{type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.selectContact.apply(null,arguments)}}},[o("svg",{staticClass:"svg-inline--fa fa-address-book fa-w-14",class:"btn-icon",attrs:{"aria-hidden":"true","data-prefix":"far","data-icon":"address-book",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[o("path",{attrs:{fill:"currentColor",d:"M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"}})]),t.pickerError?o("o-tooltip",{attrs:{anchor:"right"},nativeOn:{click:function(e){e.preventDefault(),e.stopPropagation(),t.pickerError=null}}},[t._v(t._s(t.pickerError)+"\n      ")]):t._e()],1):t._e(),t.contactPickerPossible?o("OButton",{staticClass:"o-tooltip-container o-tooltip-trigger",class:{"o-tooltip-show":t.contactPicketTooltipShow},attrs:{type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.toggleTooltip.apply(null,arguments)}}},[o("svg",{staticClass:"svg-inline--fa fa-address-book fa-w-14",class:"btn-icon",attrs:{"aria-hidden":"true","data-prefix":"far","data-icon":"address-book",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[o("path",{attrs:{fill:"currentColor",d:"M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"}})]),o("o-tooltip",{staticStyle:{width:"75vw","white-space":"initial","text-align":"initial"},attrs:{anchor:"right"},nativeOn:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.hideTooltip.apply(null,arguments)}}},[t._v("\n        Your browser may support contact picker functionality as experimental option."),o("br"),o("br"),t._v("\n        For Mobile Safari 14.5 or newer:\n        "),o("ol",{staticStyle:{"margin-top":"0"}},[o("li",[t._v("Open "),o("em",[t._v("Settings")])]),o("li",[t._v("Open "),o("em",[t._v("Safari")]),t._v(" settings")]),o("li",[t._v("Open "),o("em",[t._v("Advanced")]),t._v(" settings")]),o("li",[t._v("Open "),o("em",[t._v("Experimental Features")])]),o("li",[t._v("Enable "),o("em",[t._v("Contact Picker API")])]),o("li",[t._v("Reload the page")])])])],1):t._e()]},proxy:!0}:null],null,!0)},"OFormInput",t.$attrs,!1),t.$listeners),[t._t("default")],2)},n=[],i=(o("28a5"),o("1da1")),a=o("3835");o("ac6a");const l=Promise.all([o.e("chunk-2d230e03").then(o.bind(null,"edc1")),o.e("chunk-2d0decb6").then(o.t.bind(null,"86bd",3))]),c=function(){var t=Object(i["a"])((function*(t){const e=yield l,o=Object(a["a"])(e,2),r=o[0].parsePhoneNumberFromString,n=o[1],i=r(t,"US",n);return i||r(t,"BG",n)}));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(i["a"])((function*(t){const e=yield c(t);return e?e.number:t}));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(i["a"])((function*(t){const e=yield c(t);return e?"US"===e.country?e.formatNational():e.formatInternational():t}));return function(e){return t.apply(this,arguments)}}();function p(t){return d.apply(this,arguments)}function d(){return d=Object(i["a"])((function*(t){if(!t)return!1;const e=yield c(t);return!!e&&("US"===e.country&&10===e.nationalNumber.length||"BG"===e.country)})),d.apply(this,arguments)}var f=o("0077"),h=o("a403"),v=o("4e70");let b=null;var g={name:"OFormPhoneNumberInput",components:{OTooltip:v["default"],OButton:h["a"],OFormInput:f["a"]},inheritAttrs:!1,model:{prop:"value",event:"change"},props:{value:{default:"",type:[String,Number]}},data:function(){return{contactPickerEnabled:!1,contactPickerPossible:!1,contactPicketTooltipShow:!1,pickerError:null,internalValue:null}},methods:{checkTelSupported(){var t=this;return Object(i["a"])((function*(){if(t.contactPickerEnabled=!1,t.contactPickerPossible=!1,"contacts"in navigator)try{const e=yield navigator.contacts.getProperties();t.contactPickerEnabled=e.includes("tel")}catch(e){}else{const e=yield o.e("chunk-41425a33").then(o.t.bind(null,"2b80",7)),r=e.UAParser,n=r();if("Mobile Safari"===n.browser.name){const e=n.browser.version.split(".");(e[0]>=15||"14"===e[0]&&e[1]>=5)&&(console.log("Detected mobile safari 14.5 or newer"),t.contactPickerPossible=!0)}}}))()},hideTooltip(){this.contactPicketTooltipShow=!1,b===this&&(b=null)},toggleTooltip(){this.contactPicketTooltipShow?this.hideTooltip():(b&&(b.contactPicketTooltipShow=!1),b=this,this.contactPicketTooltipShow=!0)},selectContact(){var t=this;return Object(i["a"])((function*(){if(t.contactPickerEnabled)try{t.pickerError=null;const e=yield navigator.contacts.select(["tel"],{multiple:!1});if(Array.isArray(e)&&e.length>1)return void(t.pickerError="Multiple contacts selected");const o=Array.isArray(e)?e.shift():e;if(o){const e=Array.isArray(o.tel)?o.tel.shift():o.tel;e?(t.internalValue=e&&(yield u(e)),yield t.onChange()):t.pickerError="Selected contact does not have a phone number"}}catch(e){"TypeError"===e.name&&"Unable to open a contact selector"===e.message?t.pickerError="Unable to open contact selector":"InvalidStateError"===e.name&&/Contacts Picker is already in use/.test(e.message)?t.pickerError="Contacts Picker is already in use":t.pickerError="There was an error using the contact selector"}else t.pickerError="Contact picker is not supported on this browser"}))()},onBlur(){var t=this;return Object(i["a"])((function*(){t.internalValue=t.internalValue&&(yield u(t.internalValue))}))()},onChange(){var t=this;return Object(i["a"])((function*(){t.$emit("change",yield s(t.internalValue))}))()},onInput(t){this.dirty=!0,this.internalValue=t},updateFromModel(){var t=this;return Object(i["a"])((function*(){t.internalValue=t.value&&(yield u(t.value))}))()}},watch:{internalValue(t){var e=this;return Object(i["a"])((function*(){const o=yield p(t);e.$refs.input.setCustomValidity(o?"":"Invalid phone number")}))()},value(){this.updateFromModel()}},created(){this.updateFromModel(),this.checkTelSupported()}},m=g,y=(o("eac1"),o("2877")),_=Object(y["a"])(m,r,n,!1,null,"06953bf5",null);e["a"]=_.exports},ebd6:function(t,e,o){var r=o("cb7c"),n=o("d8e8"),i=o("2b4c")("species");t.exports=function(t,e){var o,a=r(t).constructor;return void 0===a||void 0==(o=r(a)[i])?e:n(o)}}}]);
//# sourceMappingURL=chunk-5d7443fb.45afa11a.js.map