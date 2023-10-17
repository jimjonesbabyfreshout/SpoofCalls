var lotameIsCompatible = function() { return ( typeof Object.keys !== 'undefined' && typeof window.postMessage !== 'undefined' && typeof XMLHttpRequest !== 'undefined' && typeof(new XMLHttpRequest().withCredentials) !== 'undefined' && typeof console !== 'undefined' && typeof console.log !== 'undefined' && typeof document.createElement !== 'undefined' ); }; if(!lotameIsCompatible()){ if(console && console.error){ console.error('Lotame: This browser does not meet the minimum requirements.'); } } else { function sync16621_a(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function sync16621_b(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:sync16621_a(a)}}var sync16621_aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},sync16621_c; if("function"==typeof Object.setPrototypeOf)sync16621_c=Object.setPrototypeOf;else{var sync16621_d;a:{var sync16621_ba={Qa:!0},sync16621_e={};try{sync16621_e.__proto__=sync16621_ba;sync16621_d=sync16621_e.Qa;break a}catch(a){}sync16621_d=!1}sync16621_c=sync16621_d?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sync16621_f=sync16621_c; function sync16621_g(a,b){a.prototype=sync16621_aa(b.prototype);a.prototype.constructor=a;if(sync16621_f)sync16621_f(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.fb=b.prototype}var sync16621_h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function sync16621_i(a,b){return Object.prototype.hasOwnProperty.call(a,b)} var sync16621_ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)sync16621_i(d,f)&&(a[f]=d[f])}return a},sync16621_j="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)}; function sync16621_k(a,b){if(b){var c=sync16621_h;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&sync16621_j(c,a,{configurable:!0,writable:!0,value:b})}}sync16621_k("Object.assign",function(a){return a||sync16621_ca});function sync16621_l(){sync16621_l=function(){};sync16621_h.Symbol||(sync16621_h.Symbol=sync16621_da)} function sync16621_m(a,b){this.Ia=a;sync16621_j(this,"description",{configurable:!0,writable:!0,value:b})}sync16621_m.prototype.toString=function(){return this.Ia};var sync16621_da=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new sync16621_m("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}(); function sync16621_n(){sync16621_l();var a=sync16621_h.Symbol.iterator;a||(a=sync16621_h.Symbol.iterator=sync16621_h.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&sync16621_j(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sync16621_o(sync16621_a(this))}});sync16621_n=function(){}}function sync16621_o(a){sync16621_n();a={next:a};a[sync16621_h.Symbol.iterator]=function(){return this};return a} sync16621_k("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});sync16621_k("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var k=d[c];if(k===b||Object.is(k,b))return!0}return!1}});sync16621_k("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)sync16621_i(b,d)&&c.push([d,b[d]]);return c}}); sync16621_k("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var f=d.length,k=0;k<f;k++){var g=d[k];if(b.call(c,g,k,d)){b=g;break a}}b=void 0}return b}}); sync16621_k("WeakMap",function(a){function b(e){this.S=(g+=Math.random()+1).toString();if(e){e=sync16621_b(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(e){if(!sync16621_i(e,k)){var h=new c;sync16621_j(e,k,{value:h})}}function f(e){var h=Object[e];h&&(Object[e]=function(l){if(l instanceof c)return l;d(l);return h(l)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),h=Object.seal({}),l=new a([[e,2],[h,3]]);if(2!=l.get(e)||3!=l.get(h))return!1; l.delete(e);l.set(h,4);return!l.has(e)&&4==l.get(h)}catch(m){return!1}}())return a;var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(e,h){d(e);if(!sync16621_i(e,k))throw Error("WeakMap key fail: "+e);e[k][this.S]=h;return this};b.prototype.get=function(e){return sync16621_i(e,k)?e[k][this.S]:void 0};b.prototype.has=function(e){return sync16621_i(e,k)&&sync16621_i(e[k],this.S)};b.prototype.delete=function(e){return sync16621_i(e,k)&& sync16621_i(e[k],this.S)?delete e[k][this.S]:!1};return b}); sync16621_k("Map",function(a){function b(){var e={};return e.w=e.next=e.head=e}function c(e,h){var l=e.s;return sync16621_o(function(){if(l){for(;l.head!=e.s;)l=l.w;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}function d(e,h){var l=h&&typeof h;"object"==l||"function"==l?k.has(h)?l=k.get(h):(l=""+ ++g,k.set(h,l)):l="p_"+h;var m=e.R[l];if(m&&sync16621_i(e.R,l))for(e=0;e<m.length;e++){var n=m[e];if(h!==h&&n.key!==n.key||h===n.key)return{id:l,list:m, index:e,g:n}}return{id:l,list:m,index:-1,g:void 0}}function f(e){this.R={};this.s=b();this.size=0;if(e){e=sync16621_b(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),h=new a(sync16621_b([[e,"s"]]));if("s"!=h.get(e)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var l=h.entries(),m=l.next();if(m.done||m.value[0]!=e||"s"!=m.value[1])return!1; m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;sync16621_n();var k=new WeakMap;f.prototype.set=function(e,h){e=0===e?0:e;var l=d(this,e);l.list||(l.list=this.R[l.id]=[]);l.g?l.g.value=h:(l.g={next:this.s,w:this.s.w,head:this.s,key:e,value:h},l.list.push(l.g),this.s.w.next=l.g,this.s.w=l.g,this.size++);return this};f.prototype.delete=function(e){e=d(this,e);return e.g&&e.list?(e.list.splice(e.index,1),e.list.length||delete this.R[e.id], e.g.w.next=e.g.next,e.g.next.w=e.g.w,e.g.head=null,this.size--,!0):!1};f.prototype.clear=function(){this.R={};this.s=this.s.w=b();this.size=0};f.prototype.has=function(e){return!!d(this,e).g};f.prototype.get=function(e){return(e=d(this,e).g)&&e.value};f.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};f.prototype.keys=function(){return c(this,function(e){return e.key})};f.prototype.values=function(){return c(this,function(e){return e.value})};f.prototype.forEach=function(e, h){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,e.call(h,m[1],m[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var g=0;return f}); sync16621_k("Promise",function(a){function b(g){this.T=0;this.qa=void 0;this.M=[];var e=this.na();try{g(e.resolve,e.reject)}catch(h){e.reject(h)}}function c(){this.B=null}function d(g){return g instanceof b?g:new b(function(e){e(g)})}if(a)return a;c.prototype.ya=function(g){if(null==this.B){this.B=[];var e=this;this.za(function(){e.Ua()})}this.B.push(g)};var f=sync16621_h.setTimeout;c.prototype.za=function(g){f(g,0)};c.prototype.Ua=function(){for(;this.B&&this.B.length;){var g=this.B;this.B=[];for(var e= 0;e<g.length;++e){var h=g[e];g[e]=null;try{h()}catch(l){this.Ra(l)}}}this.B=null};c.prototype.Ra=function(g){this.za(function(){throw g;})};b.prototype.na=function(){function g(l){return function(m){h||(h=!0,l.call(e,m))}}var e=this,h=!1;return{resolve:g(this.ab),reject:g(this.pa)}};b.prototype.ab=function(g){if(g===this)this.pa(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.bb(g);else{a:switch(typeof g){case "object":var e=null!=g;break a;case "function":e=!0;break a; default:e=!1}e?this.$a(g):this.Ea(g)}};b.prototype.$a=function(g){var e=void 0;try{e=g.then}catch(h){this.pa(h);return}"function"==typeof e?this.cb(e,g):this.Ea(g)};b.prototype.pa=function(g){this.Ga(2,g)};b.prototype.Ea=function(g){this.Ga(1,g)};b.prototype.Ga=function(g,e){if(0!=this.T)throw Error("Cannot settle("+g+", "+e+"): Promise already settled in state"+this.T);this.T=g;this.qa=e;this.Va()};b.prototype.Va=function(){if(null!=this.M){for(var g=0;g<this.M.length;++g)k.ya(this.M[g]);this.M= null}};var k=new c;b.prototype.bb=function(g){var e=this.na();g.X(e.resolve,e.reject)};b.prototype.cb=function(g,e){var h=this.na();try{g.call(e,h.resolve,h.reject)}catch(l){h.reject(l)}};b.prototype.then=function(g,e){function h(p,q){return"function"==typeof p?function(r){try{l(p(r))}catch(t){m(t)}}:q}var l,m,n=new b(function(p,q){l=p;m=q});this.X(h(g,l),h(e,m));return n};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.X=function(g,e){function h(){switch(l.T){case 1:g(l.qa); break;case 2:e(l.qa);break;default:throw Error("Unexpected state: "+l.T);}}var l=this;null==this.M?k.ya(h):this.M.push(h)};b.resolve=d;b.reject=function(g){return new b(function(e,h){h(g)})};b.race=function(g){return new b(function(e,h){for(var l=sync16621_b(g),m=l.next();!m.done;m=l.next())d(m.value).X(e,h)})};b.all=function(g){var e=sync16621_b(g),h=e.next();return h.done?d([]):new b(function(l,m){function n(r){return function(t){p[r]=t;q--;0==q&&l(p)}}var p=[],q=0;do p.push(void 0),q++,d(h.value).X(n(p.length- 1),m),h=e.next();while(!h.done)})};return b});function sync16621_p(){this.Da=-1!==window.location.href.indexOf("lotameDebug\x3dtrue");this.name="LT.JS"}sync16621_p.prototype.debug=function(a,b){this.Da&&a&&"undefined"!==typeof console&&"undefined"!==typeof console.log&&(b?console.log(this.name+": "+a,b):console.log(this.name+": "+a))}; sync16621_p.prototype.error=function(a,b){a&&"undefined"!==typeof console&&"undefined"!==typeof console.error&&(null!=b?console.error(this.name+": "+a,b):console.error(this.name+": "+a))};var sync16621_=new sync16621_p;function sync16621_q(){this.ca=23328E3}sync16621_q.prototype.H=function(a,b,c,d){d=void 0===d?this.ca:d;document.cookie=a+"\x3d"+b+"; Domain\x3d"+c+"; path\x3d/; SameSite\x3dLax; expires\x3d"+(new Date(Date.now()+1E3*d)).toUTCString()};sync16621_q.prototype.G=function(a){var b=null,c=""+document.cookie;0!==c.length&&(a=c.match(a+"\x3d([^;]*)"),"undefined"!==typeof a&&null!==a&&(b=a[1]));return b};function sync16621_r(a,b,c){a=void 0===a?{}:a;b=void 0===b?{}:b;this.a=Object.assign({},{bcpClient:16621,audienceExtractionEnabled:!1,consentClientIds:[16621],panoramaIdEnabled:!0,enableAudienceMatching:!0,usPrivacyEnabled:!1,googleEspEnabled:!1,enableDeclaredIds:!1,enableDeclaredIdsOnEvents:!1,namespace:window[(void 0===c?"lotame_":c)+"16621"],cookieDomain:sync16621_ea(),protocol:"https",tagsDomain:"tags.crwdcntrl.net",privacyDomain:"privacy.crwdcntrl.net",firstPartyOnlyDomain:"ltmsphrcl.net",firstPartyOnlyCollectionPrefix:"c", bcpVersion:"6",sharedS3Path:"lt/shared/2",cookieNames:["_cc_id","_cc_aud","_cc_cc"],profileIdCookieName:"_cc_id",panoramaIdName:"panoramaId",panoramaIdTypeName:"panoramaIdType",declaredIdName:"lotame_16621_did",cmpWaitMillis:250,sensitivePrefix:"st"},a);a=this.a.namespace;if(!a)throw"Configuration Error! Please verify that your code and configuration match the specs and check for syntax errors in the console.";b=Object.assign({},{onProfileReady:null,bcpPrefix:"bcp"},b);this.Sa=sync16621_fa(a,b);Object.assign(this.a, this.Sa);this.a.iframeOrigin=this.a.protocol+"://tags.crwdcntrl.net";this.a.bcpDomain=this.a.bcpPrefix+".crwdcntrl.net";this.a.sensitiveDomain=this.a.bcpPrefix+"."+this.a.sensitivePrefix+".crwdcntrl.net";this.a.bcpFirstPartyOnlyDomain=this.a.firstPartyOnlyCollectionPrefix+".ltmsphrcl.net";this.a.sensitiveFirstPartyOnlyDomain=this.a.firstPartyOnlyCollectionPrefix+"."+this.a.sensitivePrefix+".ltmsphrcl.net";this.a.privacyFirstPartyOnlyDomain=this.a.firstPartyOnlyCollectionPrefix+".ltmsphrcl.net"} function sync16621_fa(a,b){var c={},d=Object.keys(b),f=a.config;f&&(Object.keys(f).filter(function(k){return!d.includes(k)}).forEach(function(k){return sync16621_.error("'"+k+"' is an unsupported config option.")}),c=Object.keys(f).filter(function(k){return d.includes(k)}).reduce(function(k,g){switch(g){case "audienceLocalStorage":"boolean"===typeof f[g]?k[g]=f[g]?"lotame_16621_auds":!1:"string"===typeof f[g]?k[g]=f[g]:sync16621_.error("The audienceLocalStorage config option is being ignored as it is neither a boolean nor a string. The default value of false will be used instead."); break;case "onTagReady":"function"!==typeof f[g]?sync16621_.error("The onTagReady config option is being ignored as it is not a function."):k[g]=f[g];break;case "onProfileReady":"function"!==typeof f[g]?sync16621_.error("The onProfileReady config option is being ignored as it is not a function."):k[g]=f[g];break;case "autoRun":"boolean"!==typeof f[g]?sync16621_.error("The autoRun config option is being ignored as it is not a boolean. The default value of true will be used instead."):k[g]=f[g];break; case "bcpPrefix":-1===["bcp","cn"].indexOf(f[g])?sync16621_.error("The bcpPrefix config option is being ignored as it is not valid. The default value of bcp will be used instead."):k[g]=f[g];break;case "clientId":sync16621_.debug("The clientId config option is not needed anymore");break;default:sync16621_.error("'"+g+"' is an unsupported config option.")}return k},{}));return Object.assign({},b,c)} function sync16621_ea(){var a=String(document.domain).toLowerCase(),b=new sync16621_q,c=a.split(".");if(2==c.length)return a;var d=-2;do{var f=a=c.slice(d).join(".");b.H("lotame_domain_check",f,a,10);b.G("lotame_domain_check")===f?f=!1:(d+=-1,f=Math.abs(d)<=c.length)}while(f);return a}sync16621_r.prototype.C=function(){return JSON.parse(JSON.stringify(this.a))};function sync16621_s(){sync16621_r.call(this,{lastProfileUpdateMillisKey:"_cc_id_update_ts",profileRefreshMillis:6048E5,autoRunSyncJs:!1},{},"lotame_sync_")}sync16621_g(sync16621_s,sync16621_r);function sync16621_t(a){a=void 0===a?{}:a;this.A=null;if(a=a.thirdParty){var b=!0;"object"!=typeof a&&(b=!1,sync16621_.error("tagInput.data.thirdParty should be an object"));a.namespace||(b=!1,sync16621_.error("tagInput.data.thirdParty.namespace is not defined"));a.value||(b=!1,sync16621_.error("tagInput.data.thirdParty.value is not defined"));a.namespace&&"string"!=typeof a.namespace&&(b=!1,sync16621_.error("tagInput.data.thirdParty.namespace should be defined and have a string as its value"));a.value&& "string"!=typeof a.value&&(b=!1,sync16621_.error("tagInput.data.thirdParty.value should be defined and have a string as its value"));b&&(this.A={},this.A[a.namespace]=a.value)}}function sync16621_u(a){return!!(a.A&&0<Object.keys(a.A).length)}sync16621_t.prototype.Y=function(){return{tp:sync16621_u(this)?this.A:void 0}};sync16621_t.prototype.u=function(){return!sync16621_u(this)}; sync16621_t.prototype.C=function(){if(sync16621_u(this)){var a=null;if(this.A){a={};var b=Object.keys(this.A);a.namespace=b[0];a.value=this.A[b[0]]}}else a=void 0;return{gb:a}};var sync16621_ga=new RegExp(/^.{1,64}@.{1,255}$/),sync16621_v=["EMAIL","EE"]; function sync16621_w(a){a=void 0===a?{}:a;sync16621_t.call(this,a);this.h=this.P=this.O=this.j=null;sync16621_ha(this,a.behaviorIds);sync16621_ia(this,a.behaviors);sync16621_ja(this,a.ruleBuilder);a=a.declaredId;var b;if(b=a)b=!1,a&&sync16621_x(a)?"undefined"===typeof a.id||"undefined"===typeof a.type?sync16621_.error("Declared ID object must contain both 'id' and 'type' attributes."):2<Object.keys(a).length?sync16621_.error("Declared ID object may only contain 'id' and 'type' attributes, got "+Object.keys(a).join(",")): sync16621_v.includes(a.type)?"EMAIL"!=a.type||sync16621_ga.test(a.id)?b=!0:sync16621_.error("In declared ID, supplied id must be valid email address, was '"+a.id+"'"):sync16621_.error("Declared ID object type must one of "+sync16621_v.join()+", found '"+a.type+"'"):sync16621_.error("Declared ID should be an object");b&&(this.h=a)}sync16621_g(sync16621_w,sync16621_t); function sync16621_ha(a,b){b&&(Array.isArray(b)&&b.every(function(c){return"number"===typeof c})?a.j=b:sync16621_.error("tagInput.data.behaviorIds should be an array of numbers"))} function sync16621_ia(a,b){if(b){var c=!0;"object"!=typeof b&&sync16621_.error("tagInput.data.behaviors should be an object");for(var d=sync16621_b(Object.entries(b)),f=d.next();!f.done;f=d.next()){var k=sync16621_b(f.value);f=k.next().value;k=k.next().value;if(!Array.isArray(k)||!k.every(function(g){return"string"===typeof g})){sync16621_.error("tagInput.data.behaviors."+f+" should be an array of strings");c=!1;break}}c&&(a.O=b)}}function sync16621_y(a){return!!(a.O&&0<Object.keys(a.O).length)} function sync16621_ja(a,b){if(b){for(var c=!0,d=sync16621_b(Object.entries(b)),f=d.next();!f.done;f=d.next()){var k=sync16621_b(f.value);f=k.next().value;k=k.next().value;if(!Array.isArray(k)||!k.every(function(g){return"string"===typeof g})){sync16621_.error("tagInput.data.ruleBuilder."+f+" should be an array of strings");c=!1;break}}c&&(a.P=b)}}function sync16621_z(a){return!!(a.P&&0<Object.keys(a.P).length)}function sync16621_A(a){return!!(a.h&&0<Object.keys(a.h).length)} sync16621_w.prototype.Y=function(){return Object.assign({},{b:this.j&&0<this.j.length?this.j:void 0,bt:sync16621_y(this)?this.O:void 0,db:sync16621_z(this)?this.P:void 0,did:sync16621_A(this)?this.h:void 0},sync16621_t.prototype.Y.call(this))};sync16621_w.prototype.u=function(){return!(this.j&&0<this.j.length)&&!sync16621_y(this)&&!sync16621_z(this)&&!sync16621_A(this)&&sync16621_t.prototype.u.call(this)}; sync16621_w.prototype.C=function(){return Object.assign({},{behaviorIds:this.j&&0<this.j.length?this.j:void 0,behaviors:sync16621_y(this)?this.O:void 0,ruleBuilder:sync16621_z(this)?this.P:void 0,declaredId:sync16621_A(this)?this.h:void 0},sync16621_t.prototype.C.call(this))};function sync16621_x(a){return"[object Object]"===Object.prototype.toString.call(a)}function sync16621_B(a){return 0===Object.keys(a).length&&a.constructor===Object} function sync16621_ka(a,b){var c=void 0===c?!0:c;b=b||{};var d=Object.assign({method:"GET",Ha:sync16621_C,error:sync16621_C,complete:sync16621_C},b),f=new XMLHttpRequest;f.onreadystatechange=function(){if(4==f.readyState){var k={};if(200==f.status){var g={};try{g=JSON.parse(f.response)}catch(e){sync16621_.error("Could not parse the following response from Lotame's servers: "+f.response)}d.Ha(g,f.statusText,k);d.complete(g,f.statusText,k)}else d.error(k,f.statusText,f.response),d.complete(k,f.statusText, f.response)}};b="undefined"===typeof d.data?"":JSON.stringify(d.data);f.open(d.method,a,!0);f.setRequestHeader("Content-Type","text/plain;charset\x3dUTF-8");c&&(f.withCredentials=!0);f.send(b)}function sync16621_C(){}function sync16621_D(){this.l=[]}sync16621_D.prototype.enqueue=function(a){this.l.push(a)};sync16621_D.prototype.u=function(){return 0===this.l.length};function sync16621_E(){this.wa=new sync16621_D}sync16621_E.prototype.enqueue=function(a){sync16621_x(a)&&this.wa.enqueue(new sync16621_w(a))}; sync16621_E.prototype.u=function(){return this.wa.u()};function sync16621_F(a){this.ua=this.Oa=this.Pa=!1;this.Ja="unknown";this.La=new sync16621_E;this.Ma=!1;this.Ka=a}sync16621_F.prototype.C=function(){return JSON.parse(JSON.stringify({running:this.Pa,runRequested:this.Oa,pageLoaded:this.ua,dataCollectionEnvironment:this.Ja,internalDataQueue:this.La,internalDataQueueBeingProcessed:this.Ma,dataCollectionOnlyUseCase:this.Ka}))};function sync16621_G(a){this.f=a;this.Ba=new sync16621_q;this.Za=this.f.a.profileIdCookieName;try{var b=window.localStorage;b.setItem("__storage_test__","__storage_test__");b.removeItem("__storage_test__");var c=!0}catch(d){c=d instanceof DOMException&&(22===d.code||1014===d.code||"QuotaExceededError"===d.name||"NS_ERROR_DOM_QUOTA_REACHED"===d.name)&&b&&0!==b.length}this.oa=c;this.eb=this.f.a.cookieNames;this.ca=23328E3;this.ba="_exp"}function sync16621_H(a){return sync16621_I(a,a.Za)} function sync16621_I(a,b){var c=a.G(b);c||(c=sync16621_J(a,b));return c}function sync16621_K(a,b,c,d){a.H(b,c,void 0===d?a.ca:Math.ceil((d-(new Date).getTime())/1E3));sync16621_L(a,b,c,d)}sync16621_G.prototype.H=function(a,b,c){this.Ba.H(a,b,this.f.a.cookieDomain,c)};function sync16621_L(a,b,c,d){a.oa&&(window.localStorage.setItem(b,c||""),void 0!==d&&window.localStorage.setItem(b+a.ba,String(d)))} function sync16621_M(a,b){a.oa&&(window.localStorage.removeItem(b),window.localStorage.removeItem(b+a.ba))}sync16621_G.prototype.G=function(a){return this.Ba.G(a)};function sync16621_J(a,b){return a.oa&&(a=window.localStorage.getItem(b+a.ba),!a||""===a||(new Date(a)).getTime()>Date.now())?window.localStorage.getItem(b):null}function sync16621_la(a,b){b&&b.forEach(function(c){var d=c.k,f=c.v;c=c.e;a.H(d,f,c);0<c?sync16621_L(a,d,f):sync16621_M(a,d)})} sync16621_G.prototype.L=function(){var a=this,b=[];a.eb.forEach(function(c){var d=sync16621_I(a,c);d&&b.push({k:c,v:d})});return b};sync16621_G.prototype.D=function(){return this.f.a.panoramaIdEnabled?sync16621_I(this,this.f.a.panoramaIdName):null};function sync16621_N(a){return a.f.a.panoramaIdEnabled?sync16621_I(a,a.f.a.panoramaIdTypeName):null};function sync16621_O(a,b){this.f=a;this.storage=b;this.Aa=250;this.Z=0}sync16621_O.prototype.N=function(){console.error("Class extending BaseConsentHandler must implement pollForConsent()")};sync16621_h.Object.defineProperties(sync16621_O,{ra:{configurable:!0,enumerable:!0,get:function(){return 60}}});function sync16621_P(a,b){this.id=a;this.Xa=b}sync16621_P.prototype.$=function(){var a=this;return{getId:function(){return a.id},getIdType:function(){return a.id?a.Xa||"UNKNOWN":null}}};var sync16621_Q=new Map(Object.entries({i:"panoIndiv",c:"panoDevice"}));function sync16621_ma(a){if(null==a)return null;for(var b=sync16621_b(sync16621_Q),c=b.next();!c.done;c=b.next()){var d=sync16621_b(c.value);c=d.next().value;d=d.next().value;if(a===d)return c}return null};function sync16621_R(a,b){a=a||{};this.f=b||{};this.V=this.I=this.U=this.ja=this.va=this.da=null;if(b=a.aud)Array.isArray(b)?this.da=b:sync16621_.error("profileData.audienceIds should be an array");if(b=a.pid)"string"!==typeof b?sync16621_.error("if defined, profileData.profileId should be a string"):this.va=b;if(b=a.tc)Array.isArray(b)?this.ja=b:sync16621_.error("profileData.targetingCodes should be an array");(b=a.spx)&&!Array.isArray(b)&&sync16621_.error("profileData.syncPixels should be an array"); if(b=a.e)Array.isArray(b)?(this.U=b,Array.isArray(b)&&b.forEach(this.Na)):sync16621_.error("profileData.errorCodes should be an array");(b=a.exb)&&!Array.isArray(b)&&sync16621_.error("profileData.exportBeaconIds should be an array");sync16621_na(this,a.c);sync16621_oa(this,a.ids)} function sync16621_na(a,b){if(b)if(Array.isArray(b)){var c=[];b.forEach(function(d){var f=!0,k=d.k,g=d.v,e=d.e;"string"!==typeof k&&(sync16621_.error("profileData.cookies key attribute should be a string but was "+k),f=!1);"string"!==typeof g&&(sync16621_.error("profileData.cookies value attribute should be a string but was "+g),f=!1);"number"!==typeof e&&(sync16621_.error("profileData.cookies expiration attribute should be a number but was "+e),f=!1);f&&c.push(d)});a.I=c}else sync16621_.error("profileData.cookies ("+ b+") should be an array")} function sync16621_oa(a,b){if(b)if(Array.isArray(b)){var c=[];b.forEach(function(d){var f=!0,k=d.c,g=d.i,e=d.t,h=d.e;"string"!==typeof k&&(sync16621_.error("profileData.ids category attribute should be a string but was "+k),f=!1);"string"!==typeof g&&"core"!==k&&(sync16621_.error("profileData.ids id attribute should be a string but was "+g),f=!1);e&&"string"!==typeof e&&(sync16621_.error("if set, profileData.ids type attribute should be a string but was "+e),f=!1);-1==["undefined","string"].indexOf(typeof h)&& (sync16621_.error("if set, profileData.ids expiry attribute should be a string but was "+h),f=!1);f&&c.push(d)});a.V=c}else sync16621_.error("profileData.ids ("+b+") should be an array")}function sync16621_pa(a,b){var c=[];a.ja?c=a.ja:a.da&&(c=a.da.join(",").split(","));return"number"===typeof b&&0<b?c.slice(0,b):c}function sync16621_S(a){return(a.V||[]).find(function(b){return"core"==b.c})}sync16621_R.prototype.D=function(){var a=sync16621_S(this);return a?a.i:null}; function sync16621_qa(a){var b=sync16621_S(a);a=b?b.i:null;b?(b=b.t,b=null==b?null:(b=sync16621_Q.get(b))?b:"UNKNOWN"):b=null;return(new sync16621_P(a,b)).$()}function sync16621_ra(a){return(a.V||[]).find(function(b){return"did"==b.c})}sync16621_R.prototype.L=function(){return this.I};function sync16621_sa(a,b){return(a=(a.V||[]).find(function(c){return b==c.t&&"sync"==c.c}))?a.i:null} sync16621_R.prototype.$=function(){var a=this,b={};return b.getProfileId=function(){return a.va},b.getAudienceString=function(c,d){return(d=sync16621_pa(a,d))&&d!==[]?d.join(void 0===c?",":c):null},b.getAudiences=function(c){return sync16621_pa(a,c)},b.getErrorCodes=function(){return a.U},b.getThirdParty=function(c){return sync16621_sa(a,c)},b.getPanoramaId=function(){return a.D()},b.getPanorama=function(){return sync16621_qa(a)},b}; sync16621_R.prototype.Na=function(a){var b=void 0;switch(a){case 100:b="Audience extraction calls are not enabled.";break;case 101:b="Appropriate consent for audience extraction is not present.";break;case 102:b="Data collection is not enabled.";break;case 103:b="Id syncing is not enabled.";break;case 104:b="Data collection client id validation failed.";break;case 105:b="Audience extraction client id validation failed.";break;case 106:b="Linked parent id for audience extraction is invalid.";break; case 107:b="Aborting because third party cookies are disabled and domain is not configured to use first party storage.";break;case 111:b="Aborting because no consent was present on the request or stored server-side";break;case 112:break;case 113:b="Received Error Code 113";break;case 114:b="Aborting because TCF string was expected but not present.";break;case 115:b="Declared Ids are not enabled for this client - the request contained a Declared ID but the indicated data collection client is not enabled for this feature."; break;case 116:b="The request contained a Declared ID that was not properly formatted.";break;default:b="Unhandled error code "+a+" was received from the data collection call."}b&&sync16621_.error(b)};function sync16621_ta(a){return Array.isArray(a.U)?!!a.U.some(function(b){return-1!==[102,104,111].indexOf(b)}):!1};var sync16621_ua=new RegExp(/^.{1,64}@.{1,255}$/),sync16621_va=["EMAIL","EE"]; function sync16621_T(a){a=void 0===a?{}:a;this.fa=null;this.W=!1;if(a&&sync16621_x(a)){var b=!1;a&&sync16621_x(a)?"undefined"===typeof a.id||"undefined"===typeof a.type?sync16621_.error("id object must contain both 'id' and 'type' attributes."):2<Object.keys(a).length?sync16621_.error("id object may only contain 'id' and 'type' attributes, got "+Object.keys(a).join(",")):sync16621_va.includes(a.type)?"EMAIL"!=a.type||sync16621_ua.test(a.id)?b=!0:sync16621_.error("supplied id must be valid email address, was '"+ a.id+"'"):sync16621_.error("id object type must one of "+sync16621_va.join()+", found '"+a.type+"'"):sync16621_.error("id should be an object");b&&(this.fa=a,this.W=!0)}else sync16621_.error("idInput should be an object")}sync16621_T.prototype.u=function(){return!(this.W&&"string"===typeof this.fa)};sync16621_T.prototype.C=function(){return{did:this.fa}};function sync16621_U(){this.ga=this.ea=void 0;this.sa=this.ha=this.xa=!1;this.ia=!0;this.h=this.I=this.l=void 0;this.la=!1;this.ka=this.J=this.o=void 0}function sync16621_wa(){var a=new sync16621_U;a.xa=!1;return a}function sync16621_V(a,b){a.sa=b;return a}function sync16621_W(a,b){a.ea=b;return a}function sync16621_X(a,b){a.ha=b;return a}function sync16621_Y(a,b){a.I=b;return a}function sync16621_xa(a,b){"undefined"!==typeof b&&(a.h=b);return a} function sync16621_Z(a,b){"undefined"!==typeof b&&(a.J=b);return a}function sync16621__(a,b){"undefined"!==typeof b&&(a.o=b);return a}function sync16621_0(a,b){"undefined"!==typeof b&&(a.ka=b);return a}function sync16621_1(a){var b=Object.assign({},a.l,sync16621_ya(a));return Object.assign({r:{rpr:a.xa,rpx:a.ia,rid:a.ha},m:{ref:a.ga,pv:a.sa,dcc:a.ea,co:a.la},d:b,c:a.I},sync16621_za(a))} function sync16621_Aa(a){var b=Object.assign({},a.l,sync16621_ya(a));return Object.assign({r:{rid:a.ha},m:{dcc:a.ea},d:b,c:a.I},sync16621_za(a))}function sync16621_ya(a){return"object"===typeof a.h?a.h.C():{}}function sync16621_2(a){return"object"===typeof a.h||"object"===typeof a.l&&"object"===typeof a.l.did} function sync16621_za(a){var b="boolean"===typeof a.o,c="string"===typeof a.J,d="string"===typeof a.ka;return b||c?{consent:{gdpr_applies:b?a.o:null,gdpr_consent:c?a.J:null}}:d?{consent:{us_privacy:d?a.ka:null}}:{}};function sync16621_3(a,b){sync16621_O.call(this,a,b);this.J=this.o=null;this.N()}sync16621_g(sync16621_3,sync16621_O);function sync16621_4(a){var b=a.J;b||(b=a.storage.G("eupubconsent-v2"));b||(b=a.storage.G("euconsent-v2"));return b} sync16621_3.prototype.N=function(){var a=this;if("undefined"!==typeof window.__tcfapi){var b=function(c,d){d&&c&&"tcloaded"===c.eventStatus&&(c.tcString&&"string"==typeof c.tcString&&(a.J=c.tcString),c.gdprApplies&&"boolean"==typeof c.gdprApplies&&(a.o=c.gdprApplies))};window.__tcfapi("getTCData",2,b);window.__tcfapi("addEventListener",2,b)}else this.Z<sync16621_3.ra&&setTimeout(function(){a.N();a.Z++},this.Aa)};function sync16621_5(a,b,c){sync16621_O.call(this,a,b);this.Ta=c;this.ma=null;(this.ta=a.a.usPrivacyEnabled)&&this.N()}sync16621_g(sync16621_5,sync16621_O);function sync16621_6(a){var b=a.ma;!b&&a.ta&&(b=a.storage.G("usprivacy"));return b} sync16621_5.prototype.N=function(){var a=this;"undefined"!==typeof window.__uspapi?(window.__uspapi("registerDeletion",1,function(b){sync16621_.debug("Received a deletion request "+JSON.stringify(b));a.ma="1YYY";b=a.Ta;var c=void 0===c?sync16621_C:c;var d=sync16621_wa();d.ga=sync16621_Ba();d=sync16621_W(sync16621_X(sync16621_V(d,!0),!1),b.f.a.bcpClient);d.la=b.f.a.cookieDomain?!1:!0;d.ia=!1;d=sync16621_Y(sync16621_0(sync16621_Z(sync16621__(d,b.F.o),sync16621_4(b.F)),sync16621_6(b.aa)),b.storage.L()); sync16621_7(b,d);sync16621_8(b,sync16621_1(d),sync16621_9(b,d),"data",c)}),window.__uspapi("getUSPData",1,function(b,c){c&&b&&b.uspString&&"string"==typeof b.uspString&&(a.ma=b.uspString)})):this.Z<sync16621_5.ra&&setTimeout(function(){a.N();a.Z++},this.Aa)};function sync16621_Ca(a,b,c){this.f=a||{};this.storage=b||{};this.state=c;this.F=new sync16621_3(this.f,this.storage);this.aa=new sync16621_5(this.f,this.storage,this);this.Ya=!(!navigator.userAgent||-1==navigator.userAgent.indexOf("Safari")||-1!=navigator.userAgent.indexOf("Chrome"));this.Fa=null} function sync16621_Da(a,b,c){c=void 0===c?sync16621_C:c;var d=sync16621_0(sync16621_Z(sync16621__(sync16621_Y(sync16621_V(sync16621_X(sync16621_W(new sync16621_U,a.f.a.bcpClient),!0),!1),a.storage.L()),a.F.o),sync16621_4(a.F)),sync16621_6(a.aa));b&&(b=b.Y(),sync16621_B(b)||(d.l=b));sync16621_7(a,d);sync16621_8(a,sync16621_Aa(d),sync16621_9(a,d),"map",c)}function sync16621_Ba(){var a=window.location.href,b=a.indexOf("?");-1!==b&&(a=a.substring(0,b));return a} function sync16621_8(a,b,c,d,f){f=void 0===f?sync16621_C:f;sync16621_ka(sync16621_Ea(a,void 0===d?"data":d,c),{method:"POST",data:b,Ha:function(k){a.Fa=new sync16621_R(k,a.f);f(a.Fa)},error:function(k,g){sync16621_.error("Aborting due to error contacting Lotame's servers. Error reason was '"+(void 0===g?" not provided":g)+"'.")}})} sync16621_Ca.prototype.ping=function(a){if(a&&sync16621_x(a)&&!sync16621_B(a)&&!a.u()){var b=!1;if(window.navigator&&window.navigator.sendBeacon){b=sync16621_Fa(this,a);var c=sync16621_Ea(this,"data",sync16621_9(this,b));sync16621_.debug("Using navigator.sendBeacon() to send the following data on page exit",a);b=navigator.sendBeacon(c,JSON.stringify(sync16621_1(b)))}if(!b){sync16621_.debug("Falling back to ajax to send the following data on page exit",a);var d=void 0===d?sync16621_C:d;a&&sync16621_x(a)&& !sync16621_B(a)&&!a.u()&&(a=sync16621_Fa(this,a),sync16621_8(this,sync16621_1(a),sync16621_9(this,a),"data",d))}}};function sync16621_Fa(a,b){var c=sync16621_wa();c.ga=sync16621_Ba();c=sync16621_X(sync16621_W(sync16621_V(c,!1),a.f.a.bcpClient),!1);c.ia=!1;b=b.Y();c.l=b;c.la=a.f.a.cookieDomain?!1:!0;b=sync16621_0(sync16621_Z(sync16621__(sync16621_Y(c,a.storage.L()),a.F.o),sync16621_4(a.F)),sync16621_6(a.aa));sync16621_7(a,b);return b} function sync16621_Ga(a,b,c){c=void 0===c?sync16621_C:c;if(a.f.a.enableDeclaredIds){var d=!1;sync16621_x(b)&&(b=new sync16621_T(b),d=b.W)&&(b=sync16621_xa(sync16621_0(sync16621_Z(sync16621__(sync16621_Y(sync16621_V(sync16621_X(sync16621_W(new sync16621_U,a.f.a.bcpClient),!1),!1),a.storage.L()),a.F.o),sync16621_4(a.F)),sync16621_6(a.aa)),b),sync16621_8(a,sync16621_Aa(b),sync16621_9(a,b),"map",c));d||sync16621_.error("Call to identify must include a properly formatted ID object.")}else sync16621_.error("Client "+ a.f.a.bcpClient+" is not enabled to declare identifiers. Please contact a Lotame representative.")}function sync16621_Ea(a,b,c){return a.f.a.protocol+"://"+a.f.a[c]+"/"+a.f.a.bcpVersion+"/"+b}function sync16621_9(a,b){return a.Ya?sync16621_2(b)?"sensitiveFirstPartyOnlyDomain":"bcpFirstPartyOnlyDomain":sync16621_2(b)?"sensitiveDomain":"bcpDomain"} function sync16621_7(a,b){if(a.f.a.enableDeclaredIds&&a.f.a.enableDeclaredIdsOnEvents&&!sync16621_2(b)){a:{a=a.storage;if(a=sync16621_J(a,a.f.a.declaredIdName))try{var c=Object(JSON.parse(a));break a}catch(d){sync16621_.debug("Error parsing declared ID from local storage: "+a)}c=null}c&&(c=new sync16621_T(c),c.W&&sync16621_xa(b,c))}};function sync16621_Ha(a,b){this.enabled=!0===a.a.googleEspEnabled&&!0===a.a.panoramaIdEnabled&&!0;this.storage=b;sync16621_.Da&&sync16621_.debug("Google Esp Module Enabled: "+this.enabled);!0===this.enabled&&(window.googletag=window.googletag||{cmd:[]},window.googletag.encryptedSignalProviders=window.googletag.encryptedSignalProviders||[],(a=this.storage.D())&&sync16621_Ia(this,a))} function sync16621_Ia(a,b){b=b||"";a.enabled&&window.googletag.encryptedSignalProviders.push({id:"crwdcntrl.net",collectorFunction:function(){sync16621_.debug("panoramaId provided to googleEsp: "+b);return Promise.resolve(b)}})};function sync16621_Ja(a,b){this.f=a;this.storage=b} function sync16621_Ka(a,b){var c=b.L();c&&sync16621_la(a.storage,c);var d;if(d=(c=sync16621_S(b))?c.e:null){c=sync16621_qa(b);var f=b.D(),k=c?c.getIdType():null,g=a.f.a.panoramaIdName;c=a.f.a.panoramaIdTypeName;var e=parseInt(d,10);sync16621_K(a.storage,g+"_expiry",d,e);"string"===typeof f&&f?sync16621_K(a.storage,g,f,e):(d=a.storage,d.H(g,"",0),sync16621_M(d,g));"string"===typeof k&&k&&"UNKNOWN"!==k?sync16621_K(a.storage,c,k,e):(d=a.storage,d.H(c,"",0),sync16621_M(d,c))}a.f.a.enableDeclaredIds&& a.f.a.enableDeclaredIdsOnEvents&&(b=sync16621_ra(b))&&(b.i?(a=a.storage,sync16621_L(a,a.f.a.declaredIdName,JSON.stringify({id:b.i,type:b.t}))):(a=a.storage,sync16621_M(a,a.f.a.declaredIdName)))}function sync16621_$(a,b){if("function"===typeof a.f.a.onProfileReady)try{(0,a.f.a.onProfileReady)(b.$())}catch(c){c&&sync16621_.error("The following error occurred in the onProfileReady callback: "+c)}} function sync16621_La(a){var b=a.f.a.namespace;Array.isArray(b.cmd)?b.cmd.forEach(function(c){if("function"===typeof c)try{c.apply(a)}catch(d){d&&sync16621_.error("The following error occurred when executing queued commands: "+d)}}):b.cmd=[];b.cmd.push=function(c){if("function"===typeof c)try{c.apply(a)}catch(d){d&&sync16621_.error("The following error occurred when executing a command: "+d)}}};function sync16621_Ma(){var a=this.f=new sync16621_s;this.state=new sync16621_F(!(a.a.audienceExtractionEnabled&&a.a.enableAudienceMatching&&(null!==a.a.onProfileReady||!1!==a.a.audienceLocalStorage)));this.storage=new sync16621_G(this.f);this.Ca=new sync16621_Ca(this.f,this.storage,this.state);this.K=new sync16621_Ja(this.f,this.storage);this.Wa=new sync16621_Ha(this.f,this.storage);"complete"===document.readyState&&(this.state.ua=!0);sync16621_Na(this);sync16621_La(this.K);!0===this.f.a.autoRunSyncJs&& this.sync({})}function sync16621_Na(a){var b=a.f.a.namespace;b.getProfileId=function(){return sync16621_H(a.storage)};b.getPanoramaId=function(){return a.storage.D()};b.sync=function(c){return a.sync(c)};b.setIdentity=function(c){return sync16621_Oa(a,c)};b.getInternalState=function(){return a.state.C()};b.getInternalConfigs=function(){return a.f.C()};b.getPanorama=function(){return(new sync16621_P(a.storage.D(),sync16621_N(a.storage))).$()}} sync16621_Ma.prototype.sync=function(a){var b=this,c=!0,d=void 0;d=sync16621_x(a)&&!sync16621_B(a)?new sync16621_t(a):new sync16621_t;if(d.u())if(this.f.a.panoramaIdEnabled){if(a=sync16621_I(this.storage,this.f.a.panoramaIdName+"_expiry"),(parseInt(a,10)||0)>Date.now()){c={};c.pid=sync16621_H(this.storage);var f={c:"core"};f.i=this.storage.D();f.t=sync16621_ma(sync16621_N(this.storage));f.e=a;c.ids=[f];sync16621_$(this.K,new sync16621_R(c,this.f));c=!1}}else a=sync16621_H(this.storage),f=sync16621_I(this.storage, this.f.a.lastProfileUpdateMillisKey),a&&f&&Date.now()-this.f.a.profileRefreshMillis<f&&(sync16621_$(this.K,new sync16621_R({pid:a},this.f)),c=!1);c&&sync16621_Da(this.Ca,d,function(k){sync16621_L(b.storage,b.f.a.lastProfileUpdateMillisKey,String(Date.now()));sync16621_Ka(b.K,k);sync16621_ta(k)?sync16621_.error("Aborting due to above errors."):sync16621_Ia(b.Wa,b.storage.D());sync16621_$(b.K,k)})};function sync16621_Oa(a,b){sync16621_Ga(a.Ca,b,function(c){sync16621_Ka(a.K,c)})};sync16621_.name="SYNC.JS";try{new sync16621_Ma}catch(a){sync16621_.error(a)};} 