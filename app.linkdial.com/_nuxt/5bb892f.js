(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{441:function(t,e,n){"use strict";n(88),n(44),n(21);var o={name:"OButton",props:{tag:{type:String,default:"button"},theme:{type:String,validator:function(t){return["primary","radio","outline-primary","vradio","none","danger","white","notice","skip"].includes(t)},default:"primary"},type:{type:String,default:"button"},size:{type:String,validator:function(t){return["sm","md"].includes(t)},default:"md"},to:{default:null,type:Object}},computed:{classes:function(){return["o-btn",this.theme&&"o-btn--".concat(this.theme),this.size&&"o-btn--".concat(this.size)].filter(Boolean)},component:function(){return this.to?"router-link":this.tag}}},r=(n(466),n(6)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)(t.component,t._g({tag:"button",class:t.classes,attrs:{type:t.type,to:t.to}},t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},442:function(t,e,n){"use strict";var o={name:"OTitle",props:{desktopOnly:n(78).a.bool.def(!1)}},r=(n(449),n(6)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"o-title",class:{"o-title-desktop":t.desktopOnly}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},443:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c76bb1ac",content,!0,{sourceMap:!1})},444:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4baa8d9d",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";var o={name:"FormButtons",props:{variant:String}},r=(n(464),n(6)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"btn-group",class:"btn-group--".concat(t.variant)},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},449:function(t,e,n){"use strict";n(444)},450:function(t,e,n){var o=n(25)((function(i){return i[1]}));o.push([t.i,'.o-title{color:#15b76c;display:block;font-size:1.5rem;font-weight:400;line-height:1.35;margin:0 0 30px;padding:0;position:relative;text-align:center;text-transform:uppercase}@media(min-width:60em){.o-title{margin-bottom:60px}}.o-title:before{border-top:1px solid #15b76c}.o-title:after{border-bottom:1px solid #15b76c}.o-title:after,.o-title:before{content:"";display:block;height:.7rem}.o-title-desktop{display:none}@media(min-width:60em){.o-title-desktop{display:block}}',""]),o.locals={},t.exports=o},455:function(t,e,n){"use strict";n(47),n(34),n(44),n(21),n(52),n(35),n(53);var o=n(22),r=n(12),l=(n(54),n(78)),c=n(36),d=n(445),f=n(441);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"AuthOnly",components:{FormButtons:d.a,OButton:f.a},props:{fetchInfo:l.a.bool.def(!0)},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.fetchInfo){e.next=7;break}if(!t.isLoggedIn){e.next=6;break}return e.next=4,t.dispatchFetchInfo();case 4:e.next=7;break;case 6:!1===t.isLoggedIn&&t.$router.push({name:"login",query:{redirect:t.$route.fullPath}});case 7:case"end":return e.stop()}}),e)})))()},fetchDelay:0,fetchOnServer:!1,computed:m({},Object(c.c)({isLoggedIn:"session/isLoggedIn",isActive:"info/isActive"})),watch:{isLoggedIn:{handler:function(){this.$nextTick(this.$fetch)}}},methods:m({},Object(c.b)({dispatchFetchInfo:"info/fetchInfo"}))},y=n(458),w=n(6);var component=Object(w.a)(v,(function(){var t=this,e=t._self._c;return e("div",[t.$fetchState.pending?t._t("loading",(function(){return[t._v("\n    Loading...\n  ")]})):t.$fetchState.error?t._t("error",(function(){return[e("div",{staticClass:"mt-2 mb-2",class:t.$style.errorMessage},[t._v("\n      An error occured while trying to load the content. Please check your internet connection and try again.\n    ")]),t._v(" "),e("form-buttons",[e("o-button",{on:{click:t.$fetch}},[t._v("Refresh")])],1)]}),{error:t.$fetchState.error}):t.isLoggedIn?e("div",[t._t("default")],2):t._e()],2)}),[],!1,(function(t){this.$style=y.default.locals||y.default}),null,null);e.a=component.exports},456:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5e35ee0a",content,!0,{sourceMap:!1})},457:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("783b43dc",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";var o=n(443),r=n.n(o);n.d(e,"default",(function(){return r.a}))},459:function(t,e,n){var o=n(25)((function(i){return i[1]}));o.push([t.i,".errorMessage--o3Rl{text-align:center}",""]),o.locals={errorMessage:"errorMessage--o3Rl"},t.exports=o},460:function(t,e,n){"use strict";n(47),n(34),n(44),n(21),n(52),n(35),n(53);var o=n(22),r=n(78),l=n(36),c=n(441),d=n(111),f=n(442);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{OButton:c.a,OCColumn:d.a,OTitle:f.a},props:{title:r.a.string,requireVerified:r.a.bool.def(!1)},computed:m(m({},Object(l.c)({info:"info/getInfo",isActive:"info/isActive"})),{},{profile:function(){return this.info.profiles&&this.info.profiles[0]},isVerified:function(){return this.profile&&this.profile.phone&&this.isActive},hasProfile:function(){return this.requireVerified?this.isVerified:!!this.profile}})},y=n(6),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("div",[t.hasProfile?t._t("default"):e("OCColumn",[t.title?e("OTitle",[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.requireVerified&&!t.isVerified?e("div",[e("p",[t._v("\n        You need to have a complete profile in order to access this page.\n        Please make sure you fill all data needed including verified phone number.\n      ")]),t._v(" "),e("o-button",{attrs:{to:{path:"/dashboard"}}},[t._v("\n        view profile\n      ")])],1):e("div",[e("p",[t._v("\n        You have to complete your profile in order to access this page.\n        Please create a profile first.\n      ")]),t._v(" "),e("o-button",{attrs:{to:{path:"/dashboard"}}},[t._v("\n        Create profile\n      ")])],1)],1)],2)}),[],!1,null,null,null);e.a=component.exports},464:function(t,e,n){"use strict";n(456)},465:function(t,e,n){var o=n(25)((function(i){return i[1]}));o.push([t.i,".btn-group{display:flex;flex-direction:row;flex-wrap:nowrap;margin-bottom:1.5rem;padding-top:.5rem}.btn-group>*{flex:1 1 auto}.btn-group--horizontal .o-btn+.o-btn{margin-left:.5rem}",""]),o.locals={},t.exports=o},466:function(t,e,n){"use strict";n(457)},467:function(t,e,n){var o=n(25)((function(i){return i[1]}));o.push([t.i,".o-btn{border:1px solid transparent;border-radius:10px;cursor:pointer;display:block;font-family:inherit;font-size:1rem;font-weight:inherit;line-height:1.2;margin:0;padding:1.05rem;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.o-btn:hover{-webkit-text-decoration:none;text-decoration:none}.o-btn.focus,.o-btn:focus{box-shadow:none;outline:0}.o-btn.disabled,.o-btn:disabled{cursor:not-allowed;opacity:.6}.o-btn--sm{font-size:.75rem;line-height:2;margin:.5em 0;padding:2px .75em 0}.btn-group .o-btn{border-radius:0}.btn-group .o-btn:first-child{border-bottom-left-radius:10px;border-top-left-radius:10px}.btn-group .o-btn:last-child{border-bottom-right-radius:10px;border-top-right-radius:10px}.o-btn--none{background-color:transparent;color:#15b76c}.o-btn--primary{background-color:#15b76c;color:#fff}.o-btn--danger{background-color:red;color:#fff}.o-btn--notice{background-color:#b9e9d3;color:#0d6e41}.o-btn--skip{border:1px solid #15b76c}.o-btn--skip,.o-btn--white{background-color:#fff;color:#15b76c}.o-btn--outline-primary{background-color:transparent;border-color:#15b76c;color:#15b76c}.o-btn--radio,.o-btn--vradio{background-color:#fff;border:1px solid #15b76c;color:#15b76c}.o-btn--radio[aria-checked],.o-btn--vradio[aria-checked]{background-color:#15b76c;color:#fff}.o-btn--radio{border-right-color:transparent}.o-btn--radio:last-child{border-right-color:#15b76c}.o-btn--vradio{border-bottom-color:transparent}.o-btn--vradio:last-child{border-bottom-color:#15b76c}.button-with-input{border-bottom-left-radius:0;border-top-left-radius:0}",""]),o.locals={},t.exports=o},471:function(t,e,n){var content=n(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3a24e9bd",content,!0,{sourceMap:!1})},488:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return h}));n(21),n(35),n(87),n(309);var o,r,l,c=[];if(t.document){void 0!==document.hidden?(r="hidden",l="visibilitychange"):void 0!==document.msHidden?(r="msHidden",l="msvisibilitychange"):void 0!==document.webkitHidden&&(r="webkitHidden",l="webkitvisibilitychange"),void 0!==document.addEventListener&&void 0!==r&&document.addEventListener(l,(function(){o=!!document[r],c.slice().forEach((function(t){t(o)}))}),!1)}var d=function(){return o},f=function(t){return c.push(t),function(){return h(t)}},h=function(t){var e=c.indexOf(t);e>=0&&c.splice(e,1)}}).call(this,n(45))},555:function(t,e,n){"use strict";var o=n(471),r=n.n(o);n.d(e,"default",(function(){return r.a}))},556:function(t,e,n){var o=n(25)((function(i){return i[1]}));o.push([t.i,".call-record-container--AMh2{align-items:flex-start;display:flex;flex-flow:row nowrap;margin-bottom:1em}.status-icon--Xvmx{color:#15b76c;height:32px;margin-right:1em;margin-top:.2em;width:32px}.icon-warning--cYpW{color:red}.info-container--rMil{display:flex;flex:1 0;flex-flow:row nowrap}.info-name--fII4{color:#000;font-size:18px;font-weight:500;padding-right:8px}.info-date--VttM{color:gray}.main-info-container--ohOD{display:flex;flex:1 0;flex-flow:column nowrap}.media-container--MsLT{align-items:center;display:flex;flex-flow:column nowrap}.media-icon--lsK0{cursor:pointer;height:40px;width:40px}.play-icon---AoX,.stop-icon--wbGt{color:red}.info-duration--O4Wn{font-size:18px}",""]),o.locals={"call-record-container":"call-record-container--AMh2","status-icon":"status-icon--Xvmx","icon-warning":"icon-warning--cYpW","info-container":"info-container--rMil","info-name":"info-name--fII4","info-date":"info-date--VttM","main-info-container":"main-info-container--ohOD","media-container":"media-container--MsLT","media-icon":"media-icon--lsK0","play-icon":"play-icon---AoX","stop-icon":"stop-icon--wbGt","info-duration":"info-duration--O4Wn"},t.exports=o},585:function(t,e,n){"use strict";n(208),n(521);var o=n(78),r=n(612),l={name:"IconOutgoingCall"},c=n(6),d={name:"IconIncomingCall"},f={name:"IconArrowRight"},h={name:"IconPlay"},m={name:"IconStop"},v={name:"CCallRecord",components:{IconOutgoingCall:Object(c.a)(l,(function(){var t=this._self._c;return t("svg",{attrs:{fill:"#15B6C",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.06,1.06,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1ZM21.86,2.68a1,1,0,0,0-.54-.54,1,1,0,0,0-.38-.08h-4a1,1,0,1,0,0,2h1.58l-3.29,3.3a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l3.3-3.29V7.06a1,1,0,0,0,2,0v-4A1,1,0,0,0,21.86,2.68Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"0"}})])}),[],!1,null,null,null).exports,IconIncomingCall:Object(c.a)(d,(function(){var t=this._self._c;return t("svg",{attrs:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M21 3L15 9M15 9V4M15 9H20M5 3C3.89543 3 3 3.89543 3 5V6C3 14.2843 9.71573 21 18 21H19C20.1046 21 21 20.1046 21 19V15.7208C21 15.2903 20.7246 14.9082 20.3162 14.7721L15.8228 13.2743C15.3507 13.1169 14.8347 13.3306 14.6121 13.7757L13.4835 16.033C11.0388 14.9308 9.06925 12.9612 7.96701 10.5165L10.2243 9.38787C10.6694 9.16531 10.8831 8.64932 10.7257 8.17721L9.22792 3.68377C9.09181 3.27543 8.70967 3 8.27924 3H5Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])}),[],!1,null,null,null).exports,IconMissedCall:Object(c.a)(f,(function(){var t=this._self._c;return t("svg",{attrs:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M16 8L18 6M18 6L20 4M18 6L16 4M18 6L20 8M5 3C3.89543 3 3 3.89543 3 5V6C3 14.2843 9.71573 21 18 21H19C20.1046 21 21 20.1046 21 19V15.7208C21 15.2903 20.7246 14.9082 20.3162 14.7721L15.8228 13.2743C15.3507 13.1169 14.8347 13.3306 14.6121 13.7757L13.4835 16.033C11.0388 14.9308 9.06925 12.9612 7.96701 10.5165L10.2243 9.38787C10.6694 9.16531 10.8831 8.64932 10.7257 8.17721L9.22792 3.68377C9.09181 3.27543 8.70967 3 8.27924 3H5Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])}),[],!1,null,null,null).exports,IconPlay:Object(c.a)(h,(function(){var t=this._self._c;return t("svg",{attrs:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),this._v(" "),t("path",{attrs:{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])}),[],!1,null,null,null).exports,IconStop:Object(c.a)(m,(function(){var t=this._self._c;return t("svg",{attrs:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),this._v(" "),t("path",{attrs:{d:"M9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])}),[],!1,null,null,null).exports,OLink:n(61).a},props:{callRecord:o.a.object.def(null)},data:function(){return{recording:null}},computed:{to:function(){return this.callRecord.source.startsWith("anonymous")?this.callRecord.location:this.callRecord.destination},prettyDuration:function(){var t=this.callRecord.duration,e=Math.floor(t/3600);t%=3600;var n=Math.floor(t/60),o=t%60,r=String(n).padStart(2,"0"),l=String(e).padStart(2,"0");return(e>0?l+":":"")+r+":"+String(o).padStart(2,"0")},isPlaying:function(){return this.callRecord.isPlaying}},watch:{isPlaying:function(){var t,e;this.isPlaying?(this.prepare(),null===(t=this.recording)||void 0===t||t.play()):null===(e=this.recording)||void 0===e||e.stop()}},methods:{playAudio:function(t){this.$emit("play",{sid:this.callRecord.sid})},stopAudio:function(){this.$emit("stop",{sid:this.callRecord.sid})},onAudioEnded:function(){this.$emit("end",{sid:this.callRecord.sid})},prepare:function(){this.recording||(this.recording=new r.Howl({src:[this.callRecord.recording_url],html5:!0,onend:this.onAudioEnded}))}}},y=n(555);var w=Object(c.a)(v,(function(){var t=this,e=t._self._c;return e("div",{class:t.$style["call-record-container"]},[e("o-link",{attrs:{to:"/call/?to="+encodeURIComponent(t.to)}},["outbound"===t.callRecord.direction?e("icon-outgoing-call",{class:t.$style["status-icon"]}):"ok"!==t.callRecord.status||t.callRecord.recording_url?e("icon-missed-call",{class:[t.$style["status-icon"],t.$style["icon-warning"]]}):e("icon-incoming-call",{class:t.$style["status-icon"]})],1),t._v(" "),e("div",{class:t.$style["info-container"]},[e("div",{class:t.$style["main-info-container"]},[e("o-link",{attrs:{to:"/call/?to="+encodeURIComponent(t.to)}},[e("div",{class:t.$style["info-name"]},[t._v("\n          "+t._s(t.to)+"\n        ")]),t._v(" "),e("div",{class:t.$style["info-date"]},[t._v("\n          "+t._s(new Date(1e3*t.callRecord.start_time).toLocaleString())+"\n        ")])])],1),t._v(" "),e("div",{class:t.$style["right-info-container"]},[t.callRecord.recording_url?e("div",{class:t.$style["media-container"]},[t.callRecord.isPlaying?e("icon-stop",{class:[t.$style["media-icon"],t.$style["stop-icon"]],nativeOn:{click:function(e){return t.stopAudio.apply(null,arguments)}}}):e("icon-play",{class:[t.$style["media-icon"],t.$style["play-icon"]],nativeOn:{click:function(e){return t.playAudio.apply(null,arguments)}}})],1):e("div",{class:t.$style["info-duration"]},[t._v("\n        "+t._s("ok"===t.callRecord.status?t.prettyDuration:"00:00")+"\n      ")])])])],1)}),[],!1,(function(t){this.$style=y.default.locals||y.default}),null,null);e.a=w.exports},810:function(t,e,n){"use strict";n.r(e);var o=n(455),r=n(12),l=n(22),c=(n(54),n(21),n(58),n(59),n(47),n(34),n(44),n(52),n(35),n(53),n(36)),d=n(585),f=n(488),h=n(204);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"CCalls",components:{OAlert:h.a,CCallRecord:d.a},data:function(){return{callRecords:{},audioContext:null,currentTrack:null,currentRecordPlaying:null}},computed:v(v({},Object(c.c)({userInfo:"info/getInfo"})),{},{profile:function(){return this.userInfo.profiles[0]}}),created:function(){f.a(this.onPageVisibilityChange)},mounted:function(){this.fetchLogs()},beforeDestroy:function(){f.c(this.onPageVisibilityChange)},methods:{fetchLogs:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(1),n.e(0)]).then(n.bind(null,433));case 2:return r=e.sent,e.next=5,r.fetchLogs({user:t.$store.getters["session/getEmail"],pass:t.$store.getters["session/getPassword"],profileId:t.profile.id,limit:50});case 5:l=e.sent,t.callRecords=l&&l.success&&(null===(o=l.data)||void 0===o?void 0:o.reduce((function(t,e){return e.isPlaying=!1,t[e.sid]=e,t}),{}));case 7:case"end":return e.stop()}}),e)})))()},onCallRecordPlay:function(t){var e=t.sid;this.callRecords[e].isPlaying=!0,this.currentRecordPlaying!==e&&(this.currentRecordPlaying&&(this.callRecords[this.currentRecordPlaying].isPlaying=!1),this.currentRecordPlaying=e)},onCallRecordStop:function(t){var e=t.sid;this.callRecords[e].isPlaying=!1},onCallRecordEnd:function(t){var e=t.sid;this.callRecords[e].isPlaying=!1,this.currentRecordPlaying=null},onPageVisibilityChange:function(t){this.currentRecordPlaying&&this.callRecords[this.currentRecordPlaying].isPlaying&&(this.callRecords[this.currentRecordPlaying].isPlaying=!1)}}},w=n(6),O=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",[t.callRecords?t._e():e("OAlert",{attrs:{variant:"info"}},[t._v("\n    You have no client calls yet. Remember to link and share your linkdial profile so clients can find you.\n  ")]),t._v(" "),t._l(t.callRecords,(function(n,o){return e("div",{key:o},[e("CCallRecord",{attrs:{"call-record":n},on:{play:t.onCallRecordPlay,stop:t.onCallRecordStop,end:t.onCallRecordEnd}})],1)}))],2)}),[],!1,null,null,null).exports,x=n(442),k=n(460),_={components:{AuthOnly:o.a,OTitle:x.a,CCalls:O,RequireProfile:k.a}},C=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e("auth-only",[e("o-title",[t._v("Call logs")]),t._v(" "),e("require-profile",[e("CCalls")],1)],1)}),[],!1,null,null,null);e.default=C.exports}}]);