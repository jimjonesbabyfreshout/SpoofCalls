(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41425a33"],{"2b80":function(i,e,o){var a;(function(r,n){"use strict";var t="1.0.2",s="",b="?",w="function",l="undefined",d="object",u="string",c="major",p="model",m="name",f="type",h="vendor",g="version",v="architecture",x="console",k="mobile",y="tablet",_="smarttv",S="wearable",T="embedded",q=255,z="Amazon",N="Apple",A="ASUS",C="BlackBerry",E="Browser",O="Chrome",U="Edge",j="Firefox",R="Google",M="Huawei",P="LG",V="Microsoft",B="Motorola",D="Opera",I="Samsung",W="Sony",F="Xiaomi",G="Zebra",L="Facebook",Z=function(i,e){var o={};for(var a in i)e[a]&&e[a].length%2===0?o[a]=e[a].concat(i[a]):o[a]=i[a];return o},$=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},H=function(i,e){return typeof i===u&&-1!==X(e).indexOf(X(i))},X=function(i){return i.toLowerCase()},J=function(i){return typeof i===u?i.replace(/[^\d\.]/g,s).split(".")[0]:n},K=function(i,e){if(typeof i===u)return i=i.replace(/^\s\s*/,s).replace(/\s\s*$/,s),typeof e===l?i:i.substring(0,q)},Q=function(i,e){var o,a,r,t,s,b,l=0;while(l<e.length&&!s){var u=e[l],c=e[l+1];o=a=0;while(o<u.length&&!s)if(s=u[o++].exec(i),s)for(r=0;r<c.length;r++)b=s[++a],t=c[r],typeof t===d&&t.length>0?2===t.length?typeof t[1]==w?this[t[0]]=t[1].call(this,b):this[t[0]]=t[1]:3===t.length?typeof t[1]!==w||t[1].exec&&t[1].test?this[t[0]]=b?b.replace(t[1],t[2]):n:this[t[0]]=b?t[1].call(this,b,t[2]):n:4===t.length&&(this[t[0]]=b?t[3].call(this,b.replace(t[1],t[2])):n):this[t]=b||n;l+=2}},Y=function(i,e){for(var o in e)if(typeof e[o]===d&&e[o].length>0){for(var a=0;a<e[o].length;a++)if(H(e[o][a],i))return o===b?n:o}else if(H(e[o],i))return o===b?n:o;return i},ii={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},ei={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},oi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[g,[m,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[g,[m,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[m,g],[/opios[\/ ]+([\w\.]+)/i],[g,[m,D+" Mini"]],[/\bopr\/([\w\.]+)/i],[g,[m,D]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[m,g],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[g,[m,"UC"+E]],[/\bqbcore\/([\w\.]+)/i],[g,[m,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[g,[m,"WeChat"]],[/konqueror\/([\w\.]+)/i],[g,[m,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[g,[m,"IE"]],[/yabrowser\/([\w\.]+)/i],[g,[m,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[m,/(.+)/,"$1 Secure "+E],g],[/\bfocus\/([\w\.]+)/i],[g,[m,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[g,[m,D+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[g,[m,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[g,[m,"Dolphin"]],[/coast\/([\w\.]+)/i],[g,[m,D+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[g,[m,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[g,[m,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[m,"360 "+E]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[m,/(.+)/,"$1 "+E],g],[/(comodo_dragon)\/([\w\.]+)/i],[[m,/_/g," "],g],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[m,g],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[m],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[m,L],g],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[m,g],[/\bgsa\/([\w\.]+) .*safari\//i],[g,[m,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[g,[m,O+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[m,O+" WebView"],g],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[g,[m,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[m,g],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[g,[m,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[g,m],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[m,[g,Y,ii]],[/(webkit|khtml)\/([\w\.]+)/i],[m,g],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[m,"Netscape"],g],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[g,[m,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[m,g]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,X]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[v,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[v,"armhf"]],[/windows (ce|mobile); ppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[v,/ower/,s,X]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[v,X]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[p,[h,I],[f,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[p,[h,I],[f,k]],[/\((ip(?:hone|od)[\w ]*);/i],[p,[h,N],[f,k]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[p,[h,N],[f,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[p,[h,M],[f,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[p,[h,M],[f,k]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[p,/_/g," "],[h,F],[f,k]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[p,/_/g," "],[h,F],[f,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[p,[h,"OPPO"],[f,k]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[p,[h,"Vivo"],[f,k]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[p,[h,"Realme"],[f,k]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[p,[h,B],[f,k]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[p,[h,B],[f,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[p,[h,P],[f,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[p,[h,P],[f,k]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[p,[h,"Lenovo"],[f,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[p,/_/g," "],[h,"Nokia"],[f,k]],[/(pixel c)\b/i],[p,[h,R],[f,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[p,[h,R],[f,k]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[p,[h,W],[f,k]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[p,"Xperia Tablet"],[h,W],[f,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[p,[h,"OnePlus"],[f,k]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[p,[h,z],[f,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[p,/(.+)/g,"Fire Phone $1"],[h,z],[f,k]],[/(playbook);[-\w\),; ]+(rim)/i],[p,h,[f,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[p,[h,C],[f,k]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[p,[h,A],[f,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[p,[h,A],[f,k]],[/(nexus 9)/i],[p,[h,"HTC"],[f,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[h,[p,/_/g," "],[f,k]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[p,[h,"Acer"],[f,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[p,[h,"Meizu"],[f,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[p,[h,"Sharp"],[f,k]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[h,p,[f,k]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,p,[f,y]],[/(surface duo)/i],[p,[h,V],[f,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[p,[h,"Fairphone"],[f,k]],[/(u304aa)/i],[p,[h,"AT&T"],[f,k]],[/\bsie-(\w*)/i],[p,[h,"Siemens"],[f,k]],[/\b(rct\w+) b/i],[p,[h,"RCA"],[f,y]],[/\b(venue[\d ]{2,7}) b/i],[p,[h,"Dell"],[f,y]],[/\b(q(?:mv|ta)\w+) b/i],[p,[h,"Verizon"],[f,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[p,[h,"Barnes & Noble"],[f,y]],[/\b(tm\d{3}\w+) b/i],[p,[h,"NuVision"],[f,y]],[/\b(k88) b/i],[p,[h,"ZTE"],[f,y]],[/\b(nx\d{3}j) b/i],[p,[h,"ZTE"],[f,k]],[/\b(gen\d{3}) b.+49h/i],[p,[h,"Swiss"],[f,k]],[/\b(zur\d{3}) b/i],[p,[h,"Swiss"],[f,y]],[/\b((zeki)?tb.*\b) b/i],[p,[h,"Zeki"],[f,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],p,[f,y]],[/\b(ns-?\w{0,9}) b/i],[p,[h,"Insignia"],[f,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[p,[h,"NextBook"],[f,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],p,[f,k]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],p,[f,k]],[/\b(ph-1) /i],[p,[h,"Essential"],[f,k]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[p,[h,"Envizen"],[f,y]],[/\b(trio[-\w\. ]+) b/i],[p,[h,"MachSpeed"],[f,y]],[/\btu_(1491) b/i],[p,[h,"Rotor"],[f,y]],[/(shield[\w ]+) b/i],[p,[h,"Nvidia"],[f,y]],[/(sprint) (\w+)/i],[h,p,[f,k]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[h,V],[f,k]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[p,[h,G],[f,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[p,[h,G],[f,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,p,[f,x]],[/droid.+; (shield) bui/i],[p,[h,"Nvidia"],[f,x]],[/(playstation [345portablevi]+)/i],[p,[h,W],[f,x]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[p,[h,V],[f,x]],[/smart-tv.+(samsung)/i],[h,[f,_]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[h,I],[f,_]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,P],[f,_]],[/(apple) ?tv/i],[h,[p,N+" TV"],[f,_]],[/crkey/i],[[p,O+"cast"],[h,R],[f,_]],[/droid.+aft(\w)( bui|\))/i],[p,[h,z],[f,_]],[/\(dtv[\);].+(aquos)/i],[p,[h,"Sharp"],[f,_]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[h,K],[p,K],[f,_]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[f,_]],[/((pebble))app/i],[h,p,[f,S]],[/droid.+; (glass) \d/i],[p,[h,R],[f,S]],[/droid.+; (wt63?0{2,3})\)/i],[p,[h,G],[f,S]],[/(quest( 2)?)/i],[p,[h,L],[f,S]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[f,T]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[p,[f,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[p,[f,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,y]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[f,k]],[/(android[-\w\. ]{0,9});.+buil/i],[p,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[g,[m,U+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[g,[m,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[m,g],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[g,m]],os:[[/microsoft (windows) (vista|xp)/i],[m,g],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[m,[g,Y,ei]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,"Windows"],[g,Y,ei]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[g,/_/g,"."],[m,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[m,"Mac OS"],[g,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[g,m],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[m,g],[/\(bb(10);/i],[g,[m,C]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[g,[m,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[g,[m,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[g,[m,"webOS"]],[/crkey\/([\d\.]+)/i],[g,[m,O+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[m,"Chromium OS"],g],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[m,g],[/(sunos) ?([\w\.\d]*)/i],[[m,"Solaris"],g],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[m,g]]},ai=function(i,e){if(typeof i===d&&(e=i,i=n),!(this instanceof ai))return new ai(i,e).getResult();var o=i||(typeof r!==l&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),a=e?Z(oi,e):oi;return this.getBrowser=function(){var i={};return i[m]=n,i[g]=n,Q.call(i,o,a.browser),i.major=J(i.version),i},this.getCPU=function(){var i={};return i[v]=n,Q.call(i,o,a.cpu),i},this.getDevice=function(){var i={};return i[h]=n,i[p]=n,i[f]=n,Q.call(i,o,a.device),i},this.getEngine=function(){var i={};return i[m]=n,i[g]=n,Q.call(i,o,a.engine),i},this.getOS=function(){var i={};return i[m]=n,i[g]=n,Q.call(i,o,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=typeof i===u&&i.length>q?K(i,q):i,this},this.setUA(o),this};ai.VERSION=t,ai.BROWSER=$([m,g,c]),ai.CPU=$([v]),ai.DEVICE=$([p,h,f,x,k,_,y,S,T]),ai.ENGINE=ai.OS=$([m,g]),typeof e!==l?(typeof i!==l&&i.exports&&(e=i.exports=ai),e.UAParser=ai):"function"===w&&o("3c35")?(a=function(){return ai}.call(e,o,e,i),a===n||(i.exports=a)):typeof r!==l&&(r.UAParser=ai);var ri=typeof r!==l&&(r.jQuery||r.Zepto);if(ri&&!ri.ua){var ni=new ai;ri.ua=ni.getResult(),ri.ua.get=function(){return ni.getUA()},ri.ua.set=function(i){ni.setUA(i);var e=ni.getResult();for(var o in e)ri.ua[o]=e[o]}}})("object"===typeof window?window:this)},"3c35":function(i,e){(function(e){i.exports=e}).call(this,{})}}]);
//# sourceMappingURL=chunk-41425a33.050d8740.js.map