(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fde297a","chunk-1f7d5c65"],{"020f":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("l-default",[r("OTitle",[t._v("Status")]),t.isActive?t._e():r("CVerifyEmail"),t.isActive?r("div",{staticClass:"u-mb-3"},[t.order?r("div",[r("CSwitchereOrder",{attrs:{order:t.order}})],1):r("div",[r("OForm",[r("div",{staticClass:"c-grid__item"},[r("OFormError",{attrs:{message:t.error}})],1)])],1)]):t._e()],1)},i=[],s=(r("ac6a"),r("1da1")),a=r("ade3"),n=r("392e"),l=r("4808"),c=r("2f62"),d=r("200d"),u=r("6f8e"),f=r("f17f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.isSuccess?t._e():o("OAlert",{attrs:{variant:"info"}},[o("strong",[t._v("\n      Sending duplicate transactions to the same "+t._s(t.order.payin_currency)+" address is strongly discouraged. The\n      second transaction may not be accepted, risking potential loss of funds.\n    ")])]),o("div",{staticStyle:{display:"flex","justify-content":"center"}},[t.isSuccess?o("img",{attrs:{width:"75",src:r("f29b")}}):o("img",{attrs:{width:"75",src:r("035c")}})]),o("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"5px"}},[o("div",{staticClass:"order-status"},[t._v(t._s(t.statusMessage))])]),o("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"20px"}},[o("div",[t._v("Amount:")]),o("div",[o("strong",[t._v(t._s(t.order.payin_amount)+" "+t._s(t.order.payin_currency))])])]),o("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"5px"}},[o("div",{staticStyle:{"word-break":"break-all"}},[t._v("Order ID:")]),o("div",[t._v("\n      "+t._s(t.order.client_order_id)+"\n      "),o("img",{staticClass:"copy2clipboard",attrs:{width:"16",src:r("84cb")},on:{click:function(e){return t.doCopyOrderId()}}}),t.showCopyOrderId?o("div",{staticClass:"p-toast"},[t._v("Copied!")]):t._e()])]),t.order.txid?o("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"5px"}},[o("div",[t._v("Transaction:")]),o("div",[t._v("\n      "+t._s(t.shortenString(t.order.txid,16))+"\n      "),o("img",{staticClass:"copy2clipboard",attrs:{width:"16",src:r("84cb")},on:{click:function(e){return t.doCopyTxId()}}}),t.showCopyTxId?o("div",{staticClass:"p-toast"},[t._v("Copied!")]):t._e()])]):t._e(),t.isSuccess?o("div",{staticStyle:{"margin-top":"20px"}},[o("OButton",{attrs:{to:"/",theme:"primary",type:"button"}},[t._v("\n      HOME\n    ")])],1):t._e()],1)},p=[],b=r("a403"),h=r("8468"),g={name:"CSwitcherePayment",components:{OAlert:h["a"],OButton:b["a"]},props:{order:{type:Object,required:!0}},data:()=>({showCopyTxId:!1,showCopyOrderId:!1}),computed:{isSuccess(){return"running"===this.order.status||"paid"===this.order.status},statusMessage(){return this.isSuccess?"Success":"Waiting for payment"}},methods:{doCopyOrderId(){this.$copyText(this.order.client_order_id),this.showCopyOrderId=!0;let t=this;setTimeout((function(){t.showCopyOrderId=!1}),1e3)},doCopyTxId(){this.$copyText(this.order.txid),this.showCopyTxId=!0;let t=this;setTimeout((function(){t.showCopyTxId=!1}),1e3)},shortenString(t,e){if(t.length<=e)return t;const r="...",o=t.substring(0,e/2),i=t.substring(t.length-e/2);return o+r+i}}},y=g,v=(r("bf86"),r("2877")),_=Object(v["a"])(y,m,p,!1,null,null,null),O=_.exports;function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const k=()=>Promise.all([r.e("chunk-83afc924"),r.e("chunk-2d0ba87d")]).then(r.bind(null,"7424"));var C={name:"PageCreditCardOrder",components:{CSwitchereOrder:O,OForm:f["a"],OFormError:u["a"],LDefault:n["a"],OTitle:l["a"],CVerifyEmail:d["a"]},data:function(){return{error:"",order:null,interval:null}},computed:x(x({},Object(c["d"])({credits:"getCredits",isActive:"isActive",email:"getEmail"})),{},{parameters:function(){return this.$route.query}}),methods:{load(){var t=this;return Object(s["a"])((function*(){t.order&&"pending"!==t.order.status&&clearInterval(t.interval);const e=yield k(),r=yield e.getSwitchereOrder({user:t.$store.getters.getEmail,pass:t.$store.getters.getPassword,id:t.parameters.id});if(r.error)return t.error=r.message,!1;t.order=r.data}))()},showLoader(){this.loader=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,color:"#f00",width:125,height:125})},hideLoader(){this.loader.hide()}},mounted(){let t=this;t.load(),this.interval=setInterval((function(){this.order&&"pending"!==this.order.status?clearInterval(this.interval):t.load()}),3e4)},beforeDestroy(){clearInterval(this.interval)}},j=C,S=(r("45f9"),Object(v["a"])(j,o,i,!1,null,null,null));e["default"]=S.exports},"035c":function(t,e,r){t.exports=r.p+"img/pending.b1c5029e.svg"},"0583":function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".o-form__message{color:tomato;margin:0 0 1.4rem;overflow:visible;-webkit-animation:mb-in .125s;animation:mb-in .125s}.o-form__message__text{margin:0;display:inline-block;-webkit-animation:pulse .25s .125s 6,scale-in .125s;animation:pulse .25s .125s 6,scale-in .125s}@-webkit-keyframes mb-in{0%{margin-bottom:-1.5em}to{margin-bottom:1.4rem}}@keyframes mb-in{0%{margin-bottom:-1.5em}to{margin-bottom:1.4rem}}@-webkit-keyframes scale-in{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-in{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:25% 50%;transform-origin:25% 50%}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:25% 50%;transform-origin:25% 50%}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},"0e11":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.message||t.$slots.default?r("div",{staticClass:"o-form__message",class:"o-form__message--"+t.type},[r("p",{staticClass:"o-form__message__text"},[t._t("default",(function(){return[t._v(t._s(t.message))]}))],2)]):t._e()},i=[],s={name:"OFormMessage",props:{message:String,type:String}},a=s,n=(r("ae59"),r("2877")),l=Object(n["a"])(a,o,i,!1,null,null,null);e["default"]=l.exports},"200d":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CMessage",{attrs:{title:"Verify email",message:"In order to use our service you need to verify your email.","link-to":{name:"verify"},"link-label":"Verify email"}})},i=[],s=r("03c5"),a={name:"CVerifyEmail",components:{CMessage:s["a"]}},n=a,l=r("2877"),c=Object(l["a"])(n,o,i,!1,null,null,null);e["a"]=c.exports},"2ad8":function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".copy2clipboard{cursor:pointer}.order-status{font-weight:700;font-size:1.5em}.p-toast{position:absolute;margin-top:-30px;margin-left:-30px;border-radius:4px;background-color:#333;padding:4px;color:#fff;font-size:.8em}",""])},3466:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,"h2{color:tomato}.c-grid{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;margin:0 0 1rem}.c-grid__title{margin:0;padding:.25em 0;text-transform:uppercase}.c-grid__item{margin:0 0 .5rem}.u-ml-auto{margin-left:auto}.u-mb-3{margin-bottom:1.5rem}",""])},3587:function(t,e,r){var o=r("0583");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("499e").default;i("314a50fe",o,!0,{sourceMap:!1,shadowMode:!1})},"3df0":function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,'.o-title{display:block;font-size:1.5rem;line-height:1.25;text-align:center;color:tomato;padding:0;margin:0 0 1.5rem;text-transform:uppercase;font-weight:400;position:relative}.o-title:before{border-top:1px solid tomato}.o-title:after{border-bottom:1px solid tomato}.o-title:after,.o-title:before{content:"";display:block;height:.7rem}@media (min-width:60em){.o-title{display:none}}',""])},"45f9":function(t,e,r){"use strict";r("b389")},4808:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"o-title"},[t._t("default")],2)},i=[],s={name:"OTitle"},a=s,n=(r("c210"),r("2877")),l=Object(n["a"])(a,o,i,!1,null,null,null);e["a"]=l.exports},"502f":function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".OAlert_alert_1cSCV{position:relative;padding:1em 1em;margin-bottom:1em;border:1px solid transparent;border-radius:10px}.OAlert_alert_1cSCV,.OAlert_alert_1cSCV a{text-transform:none;letter-spacing:normal}.OAlert_alert_1cSCV a{color:inherit;font-weight:700;text-decoration:underline}.OAlert_alert-info_2QWmx{background-color:#ffe0da;border-color:#ffd0c8;color:#993b2b}.OAlert_alert-success_zP7jQ{background-color:#d0f1e2;border-color:#b9e9d3;color:#0d6e41}.OAlert_alert-error_2s_qF{background-color:red;border-color:red;color:#fff}",""]),e.locals={alert:"OAlert_alert_1cSCV","alert-info":"OAlert_alert-info_2QWmx OAlert_alert_1cSCV","alert-success":"OAlert_alert-success_zP7jQ OAlert_alert_1cSCV","alert-error":"OAlert_alert-error_2s_qF OAlert_alert_1cSCV"}},"61dc":function(t,e,r){var o=r("2ad8");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("499e").default;i("18c25756",o,!0,{sourceMap:!1,shadowMode:!1})},"6f8e":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("OFormMessage",t._g(t._b({attrs:{type:"error"}},"OFormMessage",t.$attrs,!1),t.$listeners))},i=[],s=r("0e11"),a={name:"OFormError",components:{OFormMessage:s["default"]}},n=a,l=r("2877"),c=Object(l["a"])(n,o,i,!1,null,null,null);e["a"]=c.exports},7654:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".o-btn{font-size:1rem;line-height:1.2;display:block;font-family:inherit;font-weight:inherit;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:1.05rem;text-transform:uppercase;cursor:pointer;margin:0;white-space:nowrap}.o-btn:hover{text-decoration:none}.o-btn.focus,.o-btn:focus{outline:0;-webkit-box-shadow:none;box-shadow:none}.o-btn.disabled,.o-btn:disabled{cursor:not-allowed;opacity:.6}.o-btn--notice{background-color:#b9e9d3;color:#0d6e41}.o-btn--none{background-color:transparent;color:tomato}.o-btn--primary{background-color:tomato;color:#fff}.o-btn--outline-primary{background-color:transparent;color:tomato;border-color:tomato}.o-btn--radio,.o-btn--vradio{background-color:#fff;color:tomato;border:1px solid tomato}.o-btn--radio[aria-checked],.o-btn--vradio[aria-checked]{background-color:tomato;color:#fff}.o-btn--radio{border-right-color:transparent}.o-btn--radio:last-child{border-right-color:tomato}.o-btn--vradio{border-bottom-color:transparent}.o-btn--vradio:last-child{border-bottom-color:tomato}",""])},8468:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style["alert-"+t.variant],attrs:{role:"alert"}},[t._t("default")],2)},i=[],s={name:"OAlert",props:{variant:[]}},a=s,n=r("d785"),l=r("2877");function c(t){this["$style"]=n["default"].locals||n["default"]}var d=Object(l["a"])(a,o,i,!1,c,null,null);e["a"]=d.exports},"84cb":function(t,e,r){t.exports=r.p+"img/copy2clipboard.bd2cb06a.svg"},"911d":function(t,e,r){"use strict";r("9b3b")},"985b":function(t,e,r){var o=r("3df0");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("499e").default;i("8da90e36",o,!0,{sourceMap:!1,shadowMode:!1})},"9b3b":function(t,e,r){var o=r("7654");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("499e").default;i("453f8d49",o,!0,{sourceMap:!1,shadowMode:!1})},a403:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.component,t._g({tag:"button",class:t.classes,attrs:{type:t.type,to:t.to,disabled:t.disabled}},t.$listeners),[t._t("default")],2)},i=[],s={name:"OButton",props:{disabled:{type:Boolean,default:!1},tag:{type:String,default:"button"},theme:{type:String,validator:t=>["primary","radio","outline-primary","vradio","none","notice"].includes(t),default:"primary"},type:{type:String,default:"button"},to:{type:Object}},computed:{classes(){return["o-btn","o-btn--"+this.theme]},component(){return this.to?"router-link":this.tag}}},a=s,n=(r("911d"),r("2877")),l=Object(n["a"])(a,o,i,!1,null,null,null);e["a"]=l.exports},ae59:function(t,e,r){"use strict";r("3587")},b389:function(t,e,r){var o=r("3466");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("499e").default;i("b4c1fb48",o,!0,{sourceMap:!1,shadowMode:!1})},bf86:function(t,e,r){"use strict";r("61dc")},c210:function(t,e,r){"use strict";r("985b")},c454:function(t,e,r){var o=r("502f");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("499e").default;i("39387d80",o,!0,{sourceMap:!1,shadowMode:!1})},d785:function(t,e,r){"use strict";var o=r("c454"),i=r.n(o);r.d(e,"default",(function(){return i.a}))},f17f:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",t._g({class:t.classes,attrs:{novalidate:""}},t.listeners),[t._t("default")],2)},i=[],s=(r("ac6a"),r("ade3"));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"OForm",provide(){return{form:this}},data:function(){return{dirty:!1,showValidity:!1,submitted:!1,valid:!1}},computed:{classes(){return["o-form",this.dirty?"form-is-dirty":"form-is-pristine",this.showValidity?"form-show-validity":"form-hide-validity",this.submitted?"form-is-submitted":"form-is-fresh",this.valid?"form-is-valid":"form-is-invalid"]},listeners(){return n(n({},this.$listeners),{},{change:this.onChange,input:this.onInput,submit:this.onSubmit})}},methods:{checkValidity(){return this.valid=this.$el.checkValidity(),this.valid&&(this.showValidity=!0),this.valid},reportValidity(){if(this.checkValidity())return!0;for(const t of this.$el.elements)if(!t.checkValidity())return t.focus(),t.reportValidity(),!1;throw new Error("Invalid state - form.checkValidity reported invalid, but form.elements did not find it")},onChange(t){t.target.form===this.$el&&(this.dirty=!0,this.checkValidity(),this.$emit("change",this))},onInput(t){t.target.form===this.$el&&(this.dirty=!0,this.checkValidity(),this.valid&&(this.showValidity=!0),this.$emit("input",this))},onSubmit(t){t.preventDefault(),this.showValidity=!0,this.reportValidity(),this.$emit("submit",this)}}},c=l,d=r("2877"),u=Object(d["a"])(c,o,i,!1,null,null,null);e["a"]=u.exports},f29b:function(t,e,r){t.exports=r.p+"img/ok.7b8f8691.svg"}}]);
//# sourceMappingURL=chunk-6fde297a.ebe9a17d.js.map