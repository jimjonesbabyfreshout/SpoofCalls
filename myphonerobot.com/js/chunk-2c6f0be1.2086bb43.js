(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6f0be1"],{"0d1b":function(e,t,s){var a=s("0e74");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=s("499e").default;n("969be23e",a,!0,{sourceMap:!1,shadowMode:!1})},"0e74":function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,'.conversation-item-container[data-v-b033bc52]{display:block;color:#7f7f7f;font-size:1rem;padding:1em 0}@media (min-width:60em){.conversation-item-container[data-v-b033bc52]{margin:0 -53px 0 -5px}}.conversation-item-number[data-v-b033bc52]{color:#0f0f0f;font-size:1.2em}.conversation-item-message[data-v-b033bc52]{overflow:hidden;text-transform:none;text-overflow:ellipsis;white-space:nowrap}.conversation-item-remove[data-v-b033bc52]{float:right;height:100%;width:50px;padding:0;font-size:2em;line-height:6.2rem;border-color:transparent}@media (pointer:fine){.conversation-item-remove[data-v-b033bc52]{display:none}.conversation-item-root:hover .conversation-item-remove[data-v-b033bc52]{display:block}}.conversation-item-root[data-v-b033bc52]:after{content:"";clear:both;display:table}',""])},"2d4b":function(e,t,s){"use strict";s("63af")},"2f4e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAAFbdsFbdsFbdsFbdsFbdsFbdsFbdsFbdsFbdsFbdsFbdsIyEKoAAAAAx0Uk5TAPD/YNCwwBBwQDBQM57TqwAAAOxJREFUeJztk80NwjAMRk0R/xdGiIKEVMZgBCZgBG5cOVbigpigYgJGLCmBOK4dnxF+pyh+/eq4KYBhGIbx44x8wgFUn/WakyuP2QDs0aNlOSgTL+uegre06BBYobUSXQqfMrZD9lFpJARKrXAytj1jkxcxJbRF2+Jq37oT7Lw43JidA6eifQGeOWsL8rvxgX0T5IXSd07xlHEitWwv0cTI/OK8W3qQGEftu/TlX2z5C5bbSeFtJ9gtex/JvND+QWtEa4VEo3Du16BySnQwVqMBHimI9LIbysmpic4k96yawLVfN5Gn4BqGYfwlHYR7ZQHr236iAAAAAElFTkSuQmCC"},"4da1":function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,".acontainer{margin-bottom:15px;margin-top:15px}.ad{border:1px solid #15b76c;max-width:220px;margin:auto}.acenter,.alogo,.atitle{text-align:center;margin-top:.5rem;margin-bottom:.5rem}.atitle a,.unlimited{color:#15b76c}.asubtitle{text-align:center;margin:.5rem .2rem}.asubtitle a{font-size:.9em;color:#15b76c}",""])},"52d5":function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,".conversations-list-container[data-v-9e5baa0e]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.conversations-list-list[data-v-9e5baa0e]{list-style:none;margin:0;padding:0}@media (min-width:60em){.conversations-list-list[data-v-9e5baa0e]{padding:0 53px 0 5px}}.conversations-list-item[data-v-9e5baa0e]{border-bottom:1px solid #7f7f7f}",""])},"56c0":function(e,t,s){"use strict";s("c2ac")},"63af":function(e,t,s){var a=s("736f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=s("499e").default;n("54e95b26",a,!0,{sourceMap:!1,shadowMode:!1})},6886:function(e,t,s){"use strict";s("e33c")},"736f":function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,".aweb[data-v-12eec0a4]{margin-bottom:1rem}",""])},"8db3":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("l-default",[s("em",[e._v("We are suspending our texting service starting the 5th of July.")]),s("CStickyBtnGroup",{attrs:{position:"top"}},[s("CNewConverstionButton")],1),s("CConversationsList"),s("CAdLinkdial")],1)},n=[],i=s("392e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("OCColumn",{staticClass:"conversations-list-container"},[e.loading?s("CLoading"):e._e(),!e.loading&&e.messages&&0===e.messages.length?s("div",[e._v("\n    No conversations.\n  ")]):e._e(),e.success?e._e():s("div",[e._v("\n    Error loading conversations. Please try again later.\n  ")]),e.messages&&e.messages.length>0?s("OCUncontainer",[s("ul",{staticClass:"conversations-list-list"},e._l(e.messages,(function(t){return s("li",{key:t.logid,staticClass:"conversations-list-item"},[s("CConversationListItem",{attrs:{message:t},on:{remove:function(s){return e.onRemoveItem(t.target)}}})],1)})),0)]):e._e()],1)},r=[],c=s("1da1"),l=s("fb5c"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("OContainer",{staticClass:"conversation-item-root"},[s("OButton",{staticClass:"conversation-item-remove",attrs:{theme:"outline-primary"},on:{click:function(t){return e.$emit("remove",this)}}},[e._v("✕")]),s("OLink",{staticClass:"conversation-item-container",attrs:{to:{name:"messages",params:{target:e.message.target}}}},[s("div",{staticClass:"conversation-item-number"},[e._v(e._s(e.message.target))]),s("div",{staticClass:"conversation-item-message",attrs:{title:e.displayMessage}},[e._v(e._s(e.displayMessage))]),s("div",{staticClass:"conversation-item-date"},[e._v(e._s(e.displayDate))])])],1)},u=[],m=(s("ac6a"),s("ade3")),g=s("2420"),b=s("fd3a"),v=s("8c86");function f(e){Object(v["a"])(1,arguments);var t=Object(b["a"])(e);return t.setHours(0,0,0,0),t}var p=864e5;function h(e,t){Object(v["a"])(2,arguments);var s=f(e),a=f(t),n=s.getTime()-Object(g["a"])(s),i=a.getTime()-Object(g["a"])(a);return Math.round((n-i)/p)}var A=s("b166"),C=s("8a82"),w=s("9c73"),O=s("2f62"),y=s("a403");function x(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?x(Object(s),!0).forEach((function(t){Object(m["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var j={name:"CConversationListItem",components:{OButton:y["a"],OContainer:w["a"],OLink:C["a"]},props:{message:{type:Object,required:!0}},computed:_(_({},Object(O["d"])({credits:"getCredits"})),{},{displayDate(){const e=new Date(1e3*this.message.when),t=h(e,new Date);return 0===t?Object(A["a"])(e,"p"):1===t?"yesterday":Object(A["a"])(e,"P")},displayMessage(){const e=this.message.status,t=this.message.scenario;if("hidden"===e&&0===this.credits)return"*** Message received but hidden, since you do not have enough credits. Please, purchase to reveal hidden messages ***";switch(t){case"atext":return this.message.text;case"mms":return"Multimedia message";case"call":return"outgoing"===this.message.direction?"Outgoing Call":"no-answer"===this.message.status?"Missed Call":"Incoming Call"}return"Unsupported message type"}})},k=j,M=(s("c4cd"),s("2877")),B=Object(M["a"])(k,d,u,!1,null,"b033bc52",null),L=B.exports,F=s("df45"),E=s("9485"),D=s("aeab"),I={name:"CConversationsList",components:{OCUncontainer:D["a"],OCColumn:E["a"],CLoading:F["a"],CConversationListItem:L},data:()=>({loading:!1,success:!0,messages:null}),methods:{load(){var e=this;return Object(c["a"])((function*(){e.loading=!0,e.success=!0;try{const t=yield Object(l["listConversations"])({user:e.$store.getters.getEmail,pass:e.$store.getters.getPassword}),s=t.success,a=t.data.logs;e.success=s,e.messages=a}catch(t){e.success=!1}finally{e.loading=!1}}))()},onRemoveItem(e){var t=this;return Object(c["a"])((function*(){if(window.confirm(`Are you sure you want to delete conversation with ${e}? All messages will be lost!`)){t.loading=!0,t.success=!0;try{yield Object(l["deleteConversation"])({user:t.$store.getters.getEmail,pass:t.$store.getters.getPassword,target:e})}catch(s){console.log(s)}finally{yield t.load()}}}))()}},mounted(){this.load()}},P=I,J=(s("56c0"),Object(M["a"])(P,o,r,!1,null,"9e5baa0e",null)),S=J.exports,G=s("71bc"),R=s("a833"),N=s("e116"),Q={name:"PageConversations",components:{CStickyBtnGroup:R["a"],CNewConverstionButton:G["a"],CConversationsList:S,LDefault:i["a"],CAdLinkdial:N["a"]}},T=Q,$=(s("2d4b"),Object(M["a"])(T,a,n,!1,null,"12eec0a4",null));t["default"]=$.exports},c2ac:function(e,t,s){var a=s("52d5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=s("499e").default;n("500f8493",a,!0,{sourceMap:!1,shadowMode:!1})},c4cd:function(e,t,s){"use strict";s("0d1b")},e116:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"acontainer"},[a("div",{staticClass:"ad"},[a("div",{staticClass:"atitle"},[a("a",{attrs:{href:"https://linkdial.com",title:"linkdial"}},[e._v("\n        LINKDIAL")])]),a("div",{staticClass:"alogo"},[a("a",{attrs:{href:"https://linkdial.com",title:"linkdial"}},[a("img",{attrs:{src:s("2f4e"),width:"90",height:"90",alt:"linkdial"}})])]),a("div",{staticClass:"asubtitle"},[a("a",{staticClass:"asubtitle",attrs:{href:"https://linkdial.com",title:"linkdial"}},[e._v("\n        Accept calls via click to call profile\n      ")])])])])}],i={name:"CAdLinkdial"},o=i,r=(s("6886"),s("2877")),c=Object(r["a"])(o,a,n,!1,null,null,null);t["a"]=c.exports},e33c:function(e,t,s){var a=s("4da1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=s("499e").default;n("44bfd7f5",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-2c6f0be1.2086bb43.js.map