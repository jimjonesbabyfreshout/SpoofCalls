(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8a73"],{3033:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("l-default",[r("OTitle",[e._v("Login")]),r("CShareThisInline"),r("c-form-login",{on:{success:e.onSuccess}}),r("CAdLinkdial")],1)},n=[],a=(r("ac6a"),r("ade3")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("OForm",{attrs:{submitting:e.submitting},on:{submit:e.submit}},[r("CSocialLogin",{on:{login:e.onSocialLogin}}),r("OFormInput",{attrs:{id:"email",name:"email",type:"text",autocomplete:"username",minlength:"3",inputmode:"email",required:"",placeholder:"Enter your email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[e._v("\n    Email / Username\n  ")]),r("OFormInput",{attrs:{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",placeholder:"Enter your password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[e._v("\n    Password\n  ")]),r("OFormError",{attrs:{message:e.error}}),r("FormButtons",[r("OFormSubmitButton",{attrs:{disabled:e.submitting}},[e._v("\n      Login\n    ")])],1),r("p",{staticClass:"info"},[r("o-link",{attrs:{to:{name:"forgot"}}},[e._v("Forgot password")])],1)],1)},i=[],l=r("1da1"),c=r("2f62"),u=r("73a1"),m=r("f17f"),p=r("0077"),f=r("597e"),d=r("299a"),g=r("8a82"),b=r("6f8e"),O=r("4a2a");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const y=()=>r.e("chunk-83afc924").then(r.bind(null,"7424"));var j={name:"CFormLogin",components:{OFormError:b["a"],OLink:g["a"],FormButtons:d["a"],OFormSubmitButton:f["a"],OFormInput:p["a"],OForm:m["a"],CSocialLogin:O["a"]},mixins:[u["a"]],data:function(){return{form:{email:"",password:""}}},methods:w(w({},Object(c["e"])(["setAuth","clearPhones"])),{},{afterLogin(){this.clearPhones()},submit(){this.$callApi(e=>e.login(this.form))},onSocialLogin(e){let t=e.social,r=e.credential;"google"===t?this.onGoogleLogin(r):"apple"===t&&this.onAppleLogin(r)},onGoogleLogin(e){var t=this;return Object(l["a"])((function*(){const r=yield y(),o=yield r.googleLogin({token:e});if(o.error)return t.error=o.error.message,!1;t.setAuth({email:o.data.username,password:o.data.password}),t.afterLogin(),t.$emit("success",o.data)}))()},onAppleLogin(e){var t=this;return Object(l["a"])((function*(){const r=yield y(),o=yield r.appleLogin({code:e});if(o.error)return t.error=o.error.message,!1;t.setAuth({email:o.data.username,password:o.data.password}),t.afterLogin(),t.$emit("success",o.data)}))()}}),formSubmitted(){this.setAuth(this.form),this.afterLogin()}},L=j,v=r("2877"),P=Object(v["a"])(L,s,i,!1,null,null,null),S=P.exports,k=r("392e"),F=r("4808"),C=r("e704"),A=r("e116");function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={name:"PageLogin",components:{OTitle:F["a"],LDefault:k["a"],CFormLogin:S,CShareThisInline:C["a"],CAdLinkdial:A["a"]},metaInfo:{title:"Spoof Call And Caller ID Faker | Login",meta:[{name:"description",content:"Spoof Call And Caller ID Faker - Login"},{name:"keywords",content:"myphonerobot login"}]},props:{redirect:String},methods:E(E({},Object(c["e"])({setGlobalMessage:"setMessage"})),{},{onSuccess(e){let t=e.message,r="home";this.$isMobile()&&(r="spoof-call"),"spoof-call"===this.$store.getters.getPage&&(r="spoof-call"),this.$router.push(this.redirect?{path:this.redirect}:{name:r}),this.setGlobalMessage({message:t})}})},_=$,I=Object(v["a"])(_,o,n,!1,null,null,null);t["default"]=I.exports}}]);
//# sourceMappingURL=chunk-2d0b8a73.118f9487.js.map