(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27a25898","chunk-1f7d5c65"],{"0583":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".o-form__message{color:tomato;margin:0 0 1.4rem;overflow:visible;-webkit-animation:mb-in .125s;animation:mb-in .125s}.o-form__message__text{margin:0;display:inline-block;-webkit-animation:pulse .25s .125s 6,scale-in .125s;animation:pulse .25s .125s 6,scale-in .125s}@-webkit-keyframes mb-in{0%{margin-bottom:-1.5em}to{margin-bottom:1.4rem}}@keyframes mb-in{0%{margin-bottom:-1.5em}to{margin-bottom:1.4rem}}@-webkit-keyframes scale-in{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-in{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:25% 50%;transform-origin:25% 50%}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:25% 50%;transform-origin:25% 50%}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},"0e11":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.message||e.$slots.default?a("div",{staticClass:"o-form__message",class:"o-form__message--"+e.type},[a("p",{staticClass:"o-form__message__text"},[e._t("default",(function(){return[e._v(e._s(e.message))]}))],2)]):e._e()},r=[],o={name:"OFormMessage",props:{message:String,type:String}},n=o,i=(a("ae59"),a("2877")),l=Object(i["a"])(n,s,r,!1,null,null,null);t["default"]=l.exports},3587:function(e,t,a){var s=a("0583");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=a("499e").default;r("314a50fe",s,!0,{sourceMap:!1,shadowMode:!1})},"3df0":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'.o-title{display:block;font-size:1.5rem;line-height:1.25;text-align:center;color:tomato;padding:0;margin:0 0 1.5rem;text-transform:uppercase;font-weight:400;position:relative}.o-title:before{border-top:1px solid tomato}.o-title:after{border-bottom:1px solid tomato}.o-title:after,.o-title:before{content:"";display:block;height:.7rem}@media (min-width:60em){.o-title{display:none}}',""])},4808:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"o-title"},[e._t("default")],2)},r=[],o={name:"OTitle"},n=o,i=(a("c210"),a("2877")),l=Object(i["a"])(n,s,r,!1,null,null,null);t["a"]=l.exports},"6f8e":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("OFormMessage",e._g(e._b({attrs:{type:"error"}},"OFormMessage",e.$attrs,!1),e.$listeners))},r=[],o=a("0e11"),n={name:"OFormError",components:{OFormMessage:o["default"]}},i=n,l=a("2877"),m=Object(l["a"])(i,s,r,!1,null,null,null);t["a"]=m.exports},"78df":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("LDefault",[a("OTitle",[e._v("Change email")]),a("CFormChangeEmail",{on:{success:e.onSuccess}})],1)},r=[],o=a("392e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("OForm",{class:{submitting:e.submitting},on:{submit:e.submit}},[a("OFormInput",{attrs:{id:"newEmail",name:"newEmail",type:"email",autocomplete:"email",required:"",placeholder:"Enter your new email"},model:{value:e.form.newEmail,callback:function(t){e.$set(e.form,"newEmail",t)},expression:"form.newEmail"}},[e._v("\n    New email\n  ")]),a("OFormError",{attrs:{message:e.error}}),a("FormButtons",[a("OFormSubmitButton",{attrs:{disabled:e.submitting}},[e._v("\n      Change email\n    ")])],1)],1)},i=[],l=a("73a1"),m=a("f17f"),c=a("597e"),u=a("299a"),f=a("6f8e"),b=a("0077"),p={name:"CFormChangeEmail",components:{OFormError:f["a"],OFormSubmitButton:c["a"],OForm:m["a"],FormButtons:u["a"],OFormInput:b["a"]},mixins:[l["a"]],data:function(){return{form:{email:this.$store.getters.getEmail,password:this.$store.getters.getPassword,newEmail:null}}},methods:{submit(){this.$callApi(e=>e.changeEmail(this.form))}}},g=p,d=a("2877"),w=Object(d["a"])(g,n,i,!1,null,null,null),_=w.exports,h=a("4808"),k={name:"PageChangeEmail",components:{OTitle:h["a"],LDefault:o["a"],CFormChangeEmail:_},methods:{onSuccess(e){e.message;this.$router.push({name:"verify"})}}},v=k,E=Object(d["a"])(v,s,r,!1,null,null,null);t["default"]=E.exports},"985b":function(e,t,a){var s=a("3df0");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=a("499e").default;r("8da90e36",s,!0,{sourceMap:!1,shadowMode:!1})},ae59:function(e,t,a){"use strict";a("3587")},c210:function(e,t,a){"use strict";a("985b")}}]);
//# sourceMappingURL=chunk-27a25898.44de84fd.js.map