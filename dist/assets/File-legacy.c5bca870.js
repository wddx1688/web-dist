!function(){function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.3e1302ab.js","./icon-legacy.1c7577c5.js","./index-legacy.caa3a0ab.js"],(function(t,r){"use strict";var o,i,a,u,c,s,f,l,d,h,g,p,v,m,w,y,E,b,A,C,I,P,B,M,T,N,x,R,j,S,L,k,O,U,_,D,z,$,F,H,Y,J,K,V,Q,q,X,W,Z,G,tt,et,rt;return{setters:[function(t){o=t.h,i=t.az,a=t.aC,u=t.aq,c=t.a2,s=t.a7,f=t.bS,l=t.a6,d=t.aE,h=t.cp,g=t.cY,p=t.a,v=t.k,m=t.cZ,w=t.aa,y=t.ay,E=t.ao,b=t.C,A=t.au,C=t.H,I=t.av,P=t.cw,B=t.S,M=t.aN,T=t.m,N=t.aj,x=t.c_,R=t.c$,j=t.ap,S=t.d0,L=t.d1,k=t.d2,O=t.d3,U=t.cC,_=t.N,D=t.d4,z=t.W,$=t.X,F=t.al,H=t.am,Y=t.cE,J=t.aL,K=t.b,V=t.cD,Q=t.d5,q=t.bj,X=t.Z,W=t.$,Z=t.aw},function(t){G=t.g,tt=t.O},function(t){et=t.u,rt=t.v}],execute:function(){var nt,ot=t("F",(function(t){return o(s,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(i,{boxSize:"$20",get fallback(){return o(a,{get color(){return u()},boxSize:"$20",get as(){return G(c.obj)}})},get src(){return c.obj.thumb}}),o(s,{spacing:"$2",get children(){return[o(f,{size:"lg",css:{wordBreak:"break-all"},get children(){return c.obj.name}}),o(l,{color:"$neutral10",size:"sm",get children(){return[d((function(){return h(c.obj.size)}))," · ",d((function(){return g(c.obj.modified)}))]}})]}}),o(s,{spacing:"$2",get children(){return t.children}})]}})})),it=function(){var t=p(),e=v((function(){return m(c.obj.name)})),r=w().currentObjLink;return o(B,{get when(){return e().length},get children(){return o(y,{get children(){return[o(E,{as:b,colorScheme:"success",get rightIcon(){return o(a,{as:et})},get children(){return t("home.preview.open_with")}}),o(A,{get children(){return o(C,{get each(){return e()},children:function(t){return o(I,{as:"a",target:"_blank",get href(){return P(t.value,{raw_url:c.raw_url,name:c.obj.name,d_url:r(!0)})},get children(){return t.key}})}})}})]}})}})},at={},ut={},ct={},st=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];ct.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},ct.getSymbolTotalCodewords=function(t){return st[t]},ct.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},ct.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');nt=t},ct.isKanjiModeEnabled=function(){return void 0!==nt},ct.toSJIS=function(t){return nt(t)};var ft={};function lt(){this.buffer=[],this.length=0}!function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(n){return r}}}(ft),lt.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var dt=lt;function ht(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ht.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},ht.prototype.get=function(t,e){return this.data[t*this.size+e]},ht.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},ht.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var gt=ht,pt={};!function(t){var e=ct.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];for(var r=Math.floor(t/7)+2,n=e(t),o=145===n?26:2*Math.ceil((n-13)/(2*r-2)),i=[n-7],a=1;a<r-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){for(var r=[],n=t.getRowColCoords(e),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}}(pt);var vt={},mt=ct.getSymbolSize;vt.getPositions=function(t){var e=mt(t);return[[0,0],[e-7,0],[0,e-7]]};var wt={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var e=3,r=3,n=40,o=10;function i(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){for(var r=t.size,n=0,o=0,i=0,a=null,u=null,c=0;c<r;c++){o=i=0,a=u=null;for(var s=0;s<r;s++){var f=t.get(c,s);f===a?o++:(o>=5&&(n+=e+(o-5)),a=f,o=1),(f=t.get(s,c))===u?i++:(i>=5&&(n+=e+(i-5)),u=f,i=1)}o>=5&&(n+=e+(o-5)),i>=5&&(n+=e+(i-5))}return n},t.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*r},t.getPenaltyN3=function(t){for(var e=t.size,r=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var u=0;u<e;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*n},t.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o},t.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,i(t,o,n))},t.getBestMask=function(e,r){for(var n=Object.keys(t.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),t.applyMask(a,e);var u=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),u<i&&(i=u,o=a)}return o}}(wt);var yt={},Et=ft,bt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],At=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];yt.getBlocksCount=function(t,e){switch(e){case Et.L:return bt[4*(t-1)+0];case Et.M:return bt[4*(t-1)+1];case Et.Q:return bt[4*(t-1)+2];case Et.H:return bt[4*(t-1)+3];default:return}},yt.getTotalCodewordsCount=function(t,e){switch(e){case Et.L:return At[4*(t-1)+0];case Et.M:return At[4*(t-1)+1];case Et.Q:return At[4*(t-1)+2];case Et.H:return At[4*(t-1)+3];default:return}};var Ct={},It={},Pt=new Uint8Array(512),Bt=new Uint8Array(256);!function(){for(var t=1,e=0;e<255;e++)Pt[e]=t,Bt[t]=e,256&(t<<=1)&&(t^=285);for(var r=255;r<512;r++)Pt[r]=Pt[r-255]}(),It.log=function(t){if(t<1)throw new Error("log("+t+")");return Bt[t]},It.exp=function(t){return Pt[t]},It.mul=function(t,e){return 0===t||0===e?0:Pt[Bt[t]+Bt[e]]},function(t){var e=It;t.mul=function(t,r){for(var n=new Uint8Array(t.length+r.length-1),o=0;o<t.length;o++)for(var i=0;i<r.length;i++)n[o+i]^=e.mul(t[o],r[i]);return n},t.mod=function(t,r){for(var n=new Uint8Array(t);n.length-r.length>=0;){for(var o=n[0],i=0;i<r.length;i++)n[i]^=e.mul(r[i],o);for(var a=0;a<n.length&&0===n[a];)a++;n=n.slice(a)}return n},t.generateECPolynomial=function(r){for(var n=new Uint8Array([1]),o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}}(Ct);var Mt=Ct;function Tt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Tt.prototype.initialize=function(t){this.degree=t,this.genPoly=Mt.generateECPolynomial(this.degree)},Tt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=Mt.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){var o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var Nt=Tt,xt={},Rt={},jt={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},St={},Lt="[0-9]+",kt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",Ot="(?:(?![A-Z0-9 $%*+\\-./:]|"+(kt=kt.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";St.KANJI=new RegExp(kt,"g"),St.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),St.BYTE=new RegExp(Ot,"g"),St.NUMERIC=new RegExp(Lt,"g"),St.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var Ut=new RegExp("^"+kt+"$"),_t=new RegExp("^[0-9]+$"),Dt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");St.testKanji=function(t){return Ut.test(t)},St.testNumeric=function(t){return _t.test(t)},St.testAlphanumeric=function(t){return Dt.test(t)},function(t){var e=jt,r=St;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,r){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return r.testNumeric(e)?t.NUMERIC:r.testAlphanumeric(e)?t.ALPHANUMERIC:r.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(n){return r}}}(Rt),function(t){var e=ct,r=yt,n=ft,o=Rt,i=jt,a=e.getBCHDigit(7973);function u(t,e){return o.getCharCountIndicator(t,e)+4}function c(t,e){var r=0;return t.forEach((function(t){var n=u(t.mode,e);r+=n+t.getBitsLength()})),r}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,n,a){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===a&&(a=o.BYTE);var c=8*(e.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,n));if(a===o.MIXED)return c;var s=c-u(a,t);switch(a){case o.NUMERIC:return Math.floor(s/10*3);case o.ALPHANUMERIC:return Math.floor(s/11*2);case o.KANJI:return Math.floor(s/13);case o.BYTE:default:return Math.floor(s/8)}},t.getBestVersionForData=function(e,r){var i,a=n.from(r,n.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(var n=1;n<=40;n++)if(c(e,n)<=t.getCapacity(n,r,o.MIXED))return n}(e,a);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,n){for(var o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}(i.mode,i.getLength(),a)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;e.getBCHDigit(r)-a>=0;)r^=7973<<e.getBCHDigit(r)-a;return t<<12|r}}(xt);var zt={},$t=ct,Ft=$t.getBCHDigit(1335);zt.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,n=r<<10;$t.getBCHDigit(n)-Ft>=0;)n^=1335<<$t.getBCHDigit(n)-Ft;return 21522^(r<<10|n)};var Ht={},Yt=Rt;function Jt(t){this.mode=Yt.NUMERIC,this.data=t.toString()}Jt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},Jt.prototype.getLength=function(){return this.data.length},Jt.prototype.getBitsLength=function(){return Jt.getBitsLength(this.data.length)},Jt.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var Kt=Jt,Vt=Rt,Qt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function qt(t){this.mode=Vt.ALPHANUMERIC,this.data=t}qt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},qt.prototype.getLength=function(){return this.data.length},qt.prototype.getBitsLength=function(){return qt.getBitsLength(this.data.length)},qt.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*Qt.indexOf(this.data[e]);r+=Qt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(Qt.indexOf(this.data[e]),6)};var Xt=qt,Wt=Rt;function Zt(t){this.mode=Wt.BYTE,this.data="string"==typeof t?(new TextEncoder).encode(t):new Uint8Array(t)}Zt.getBitsLength=function(t){return 8*t},Zt.prototype.getLength=function(){return this.data.length},Zt.prototype.getBitsLength=function(){return Zt.getBitsLength(this.data.length)},Zt.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var Gt=Zt,te=Rt,ee=ct;function re(t){this.mode=te.KANJI,this.data=t}re.getBitsLength=function(t){return 13*t},re.prototype.getLength=function(){return this.data.length},re.prototype.getBitsLength=function(){return re.getBitsLength(this.data.length)},re.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=ee.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var ne=re,oe={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var a,u,c,s,f,l,d,h=e.PriorityQueue.make();for(h.push(r,0);!h.empty();)for(c in u=(a=h.pop()).value,s=a.cost,f=t[u]||{})f.hasOwnProperty(c)&&(l=s+f[c],d=i[c],(void 0===i[c]||d>l)&&(i[c]=l,h.push(c,l),o[c]=u));if(void 0!==n&&void 0===i[n]){var g=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(oe),function(t){var e=Rt,r=Kt,n=Xt,o=Gt,i=ne,a=St,u=ct,c=oe.exports;function s(t){return unescape(encodeURIComponent(t)).length}function f(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function l(t){var r,n,o=f(a.NUMERIC,e.NUMERIC,t),i=f(a.ALPHANUMERIC,e.ALPHANUMERIC,t);return u.isKanjiModeEnabled()?(r=f(a.BYTE,e.BYTE,t),n=f(a.KANJI,e.KANJI,t)):(r=f(a.BYTE_KANJI,e.BYTE,t),n=[]),o.concat(i,r,n).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function d(t,a){switch(a){case e.NUMERIC:return r.getBitsLength(t);case e.ALPHANUMERIC:return n.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function h(t,a){var c,s=e.getBestModeForData(t);if((c=e.from(a,s))!==e.BYTE&&c.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(c)+".\n Suggested mode is: "+e.toString(s));switch(c!==e.KANJI||u.isKanjiModeEnabled()||(c=e.BYTE),c){case e.NUMERIC:return new r(t);case e.ALPHANUMERIC:return new n(t);case e.KANJI:return new i(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(h(e,null)):e.data&&t.push(h(e.data,e.mode)),t}),[])},t.fromString=function(r,n){for(var o=function(t){for(var r=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case e.NUMERIC:r.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:r.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:r.push([o,{data:o.data,mode:e.BYTE,length:s(o.data)}]);break;case e.BYTE:r.push([{data:o.data,mode:e.BYTE,length:s(o.data)}])}}return r}(l(r,u.isKanjiModeEnabled())),i=function(t,r){for(var n={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],c=[],s=0;s<u.length;s++){var f=u[s],l=""+a+s;c.push(l),n[l]={node:f,lastCount:0},o[l]={};for(var h=0;h<i.length;h++){var g=i[h];n[g]&&n[g].node.mode===f.mode?(o[g][l]=d(n[g].lastCount+f.length,f.mode)-d(n[g].lastCount,f.mode),n[g].lastCount+=f.length):(n[g]&&(n[g].lastCount=f.length),o[g][l]=d(f.length,f.mode)+4+e.getCharCountIndicator(f.mode,r))}}i=c}for(var p=0;p<i.length;p++)o[i[p]].end=0;return{map:o,table:n}}(o,n),a=c.find_path(i.map,"start","end"),f=[],h=1;h<a.length-1;h++)f.push(i.table[a[h]].node);return t.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(f))},t.rawSplit=function(e){return t.fromArray(l(e,u.isKanjiModeEnabled()))}}(Ht);var ie=ct,ae=ft,ue=dt,ce=gt,se=pt,fe=vt,le=wt,de=yt,he=Nt,ge=xt,pe=zt,ve=Rt,me=Ht;function we(t,e,r){var n,o,i=t.size,a=pe.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function ye(t,e,r){var n=new ue;r.forEach((function(e){n.put(e.mode.bit,4),n.put(e.getLength(),ve.getCharCountIndicator(e.mode,t)),e.write(n)}));var o=8*(ie.getSymbolTotalCodewords(t)-de.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var i=(o-n.getLengthInBits())/8,a=0;a<i;a++)n.put(a%2?17:236,8);return function(t,e,r){for(var n=ie.getSymbolTotalCodewords(e),o=de.getTotalCodewordsCount(e,r),i=n-o,a=de.getBlocksCount(e,r),u=a-n%a,c=Math.floor(n/a),s=Math.floor(i/a),f=s+1,l=c-s,d=new he(l),h=0,g=new Array(a),p=new Array(a),v=0,m=new Uint8Array(t.buffer),w=0;w<a;w++){var y=w<u?s:f;g[w]=m.slice(h,h+y),p[w]=d.encode(g[w]),h+=y,v=Math.max(v,y)}var E,b,A=new Uint8Array(n),C=0;for(E=0;E<v;E++)for(b=0;b<a;b++)E<g[b].length&&(A[C++]=g[b][E]);for(E=0;E<l;E++)for(b=0;b<a;b++)A[C++]=p[b][E];return A}(n,t,e)}function Ee(t,e,r,n){var o;if(Array.isArray(t))o=me.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var i=e;if(!i){var a=me.rawSplit(t);i=ge.getBestVersionForData(a,r)}o=me.fromString(t,i||40)}var u=ge.getBestVersionForData(o,r);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;var c=ye(e,r,o),s=ie.getSymbolSize(e),f=new ce(s);return function(t,e){for(var r=t.size,n=fe.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var c=-1;c<=7;c++)a+c<=-1||r<=a+c||(u>=0&&u<=6&&(0===c||6===c)||c>=0&&c<=6&&(0===u||6===u)||u>=2&&u<=4&&c>=2&&c<=4?t.set(i+u,a+c,!0,!0):t.set(i+u,a+c,!1,!0))}(f,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(f),function(t,e){for(var r=se.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}(f,e),we(f,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=ge.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(f,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var c=0;c<2;c++)if(!t.isReserved(o,u-c)){var s=!1;a<e.length&&(s=1==(e[a]>>>i&1)),t.set(o,u-c,s),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(f,c),isNaN(n)&&(n=le.getBestMask(f,we.bind(null,f,r))),le.applyMask(n,f),we(f,r,n),{modules:f,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}ut.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,o=ae.M;return void 0!==e&&(o=ae.from(e.errorCorrectionLevel,ae.M),r=ge.from(e.version),n=le.from(e.maskPattern),e.toSJISFunc&&ie.setToSJISFunction(e.toSJISFunc)),Ee(t,r,o,n)};var be={},Ae={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});var r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:r,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,r){var n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){for(var o=r.modules.size,i=r.modules.data,a=t.getScale(o,n),u=Math.floor((o+2*n.margin)*a),c=n.margin*a,s=[n.color.light,n.color.dark],f=0;f<u;f++)for(var l=0;l<u;l++){var d=4*(f*u+l),h=n.color.light;if(f>=c&&l>=c&&f<u-c&&l<u-c)h=s[i[Math.floor((f-c)/a)*o+Math.floor((l-c)/a)]?1:0];e[d++]=h.r,e[d++]=h.g,e[d++]=h.b,e[d]=h.a}}}(Ae),function(t){var e=Ae;t.render=function(t,r,n){var o=n,i=r;void 0!==o||r&&r.getContext||(o=r,r=void 0),r||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);var a=e.getImageWidth(t.modules.size,o),u=i.getContext("2d"),c=u.createImageData(a,a);return e.qrToImageData(c.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(u,i,a),u.putImageData(c,0,0),i},t.renderToDataURL=function(e,r,n){var o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=t.render(e,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}(be);var Ce={},Ie=Ae;function Pe(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function Be(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}Ce.render=function(t,e,r){var n=Ie.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,u=n.color.light.a?"<path "+Pe(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Pe(n.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,i=!1,a=0,u=0;u<t.length;u++){var c=Math.floor(u%e),s=Math.floor(u/e);c||i||(i=!0),t[u]?(a++,u>0&&c>0&&t[u-1]||(n+=i?Be("M",c+r,.5+s+r):Be("m",o,0),o=0,i=!1),c+1<e&&t[u+1]||(n+=Be("h",a),a=0)):o++}return n}(i,o,n.margin)+'"/>',s='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+s+' shape-rendering="crispEdges">'+u+c+"</svg>\n";return"function"==typeof r&&r(null,f),f};var Me=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Te=ut,Ne=be,xe=Ce;function Re(t,e,r,n,o){var i=[].slice.call(arguments,1),a=i.length,u="function"==typeof i[a-1];if(!u&&!Me())throw new Error("Callback required as last argument");if(!u){if(a<1)throw new Error("Too few arguments provided");return 1===a?(r=e,e=n=void 0):2!==a||e.getContext||(n=r,r=e,e=void 0),new Promise((function(o,i){try{var a=Te.create(r,n);o(t(a,e,n))}catch(u){i(u)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=r,r=e,e=n=void 0):3===a&&(e.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{var c=Te.create(r,n);o(null,t(c,e,n))}catch(s){o(s)}}at.create=Te.create,at.toCanvas=Re.bind(null,Ne.render),at.toDataURL=Re.bind(null,Ne.renderToDataURL),at.toString=Re.bind(null,(function(t,e,r){return xe.render(t,r)}));var je=function(t){var e=p(),r=M().copyCurrentRawLink,a=n(T(""),2),u=a[0],s=a[1];at.toDataURL(c.raw_url,{type:"image/jpeg",scale:2}).then((function(t){return s(t)}));var f=n(T(!1),2),l=f[0],d=f[1],h=n(T(!1),2),g=h[0],v=h[1];return o(ot,{get children(){return[o(N,{spacing:"$2",get children(){return[o(b,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return e("home.toolbar.copy_link")}}),o(b,{as:"a",get href(){return c.raw_url},target:"_blank",get children(){return e("home.preview.download")}}),o(x,{get opened(){return l()||g()},motionPreset:"none",get children(){return[o(R,{as:j,get icon(){return o(S,{})},"aria-label":"QRCode",colorScheme:"success",onClick:function(){d(!l())},onMouseOver:function(){return v(!0)},onMouseOut:function(){return v(!1)}}),o(L,{width:"fit-content",get children(){return[o(k,{}),o(O,{get children(){return o(i,{maxWidth:"300px",get src(){return u()},alt:"QR Code of download link",objectFit:"cover"})}})]}})]}})]}}),o(B,{get when(){return t.openWith},get children(){return o(it,{})}})]}})},Se=Object.freeze(Object.defineProperty({__proto__:null,Download:je,default:je},Symbol.toStringTag,{value:"Module"})),Le=function(t){var e=w().currentObjLink,r=v((function(){return P(t.scheme,{raw_url:c.raw_url,name:c.obj.name,d_url:e(!0),ts:!0})}));return o(D,{w:"$full",h:"70vh",get children(){return[o(U.iframe,{w:"$full",h:"$full",get src(){return r()}}),o(a,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:rt,onClick:function(){window.open(r(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return _()},p:"$1",boxSize:"$7"})]}})},ke=[{name:"HTML render",exts:["html"],component:z((function(){return $((function(){return r.import("./html-legacy.70cda813.js")}),void 0)}))},{name:"Aliyun Video Previewer",type:tt.VIDEO,provider:/^Aliyundrive(Open)?$/,component:z((function(){return $((function(){return r.import("./aliyun_video-legacy.8df5f942.js")}),void 0)}))},{name:"Markdown",type:tt.TEXT,component:z((function(){return $((function(){return r.import("./markdown-legacy.0ea61896.js")}),void 0)}))},{name:"Markdown with word wrap",type:tt.TEXT,component:z((function(){return $((function(){return r.import("./markdown_with_word_wrap-legacy.fdf1e549.js")}),void 0)}))},{name:"Url Open",exts:["url"],component:z((function(){return $((function(){return r.import("./url-legacy.8b709c02.js")}),void 0)}))},{name:"Text Editor",type:tt.TEXT,exts:["url"],component:z((function(){return $((function(){return r.import("./text-editor-legacy.a39aa46a.js")}),void 0)}))},{name:"Image",type:tt.IMAGE,component:z((function(){return $((function(){return r.import("./image-legacy.d9916ccc.js")}),void 0)}))},{name:"Video",type:tt.VIDEO,component:z((function(){return $((function(){return r.import("./video-legacy.7d1de627.js")}),void 0)}))},{name:"Audio",type:tt.AUDIO,component:z((function(){return $((function(){return r.import("./audio-legacy.aff65b77.js")}),void 0)}))},{name:"Ipa",exts:["ipa","tipa"],component:z((function(){return $((function(){return r.import("./ipa-legacy.85d5cd06.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:z((function(){return $((function(){return r.import("./plist-legacy.675935b5.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:z((function(){return $((function(){return r.import("./aliyun_office-legacy.d8e512e9.js")}),void 0)}))},{name:"Asciinema",exts:["cast"],component:z((function(){return $((function(){return r.import("./asciinema-legacy.0ad7280f.js")}),void 0)}))},{name:"Video360",type:tt.VIDEO,component:z((function(){return $((function(){return r.import("./video360-legacy.2f15ca36.js")}),void 0)}))},{name:"Archive Preview",exts:function(){var t=J.findIndex((function(t){return"read_archives"===t}));return F.can(H(),t)?Y():[]},component:z((function(){return $((function(){return r.import("./archive-legacy.7fda2ddb.js")}),void 0)}))}],Oe=function(t){var e,r=K().searchParams,n=tt[null===(e=r.type)||void 0===e?void 0:e.toUpperCase()],i=[];return ke.forEach((function(e){var r,o;e.provider&&!e.provider.test(t.provider)||(e.type===t.type||n&&e.type===n||(r=e.exts,o=V(t.name).toLowerCase(),void 0!==r&&("*"===r||("function"==typeof r?r().includes(o):r.includes(o)))))&&i.push({name:e.name,component:e.component})})),Q(t.name).forEach((function(t){var e;i.push({name:t.key,component:(e=t.value,function(){return o(Le,{scheme:e})})})})),i.push({name:"Download",component:z((function(){return $((function(){return Promise.resolve().then((function(){return Se}))}),void 0)}))}),i},Ue=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var t=v((function(){return Oe(e(e({},c.obj),{},{provider:c.provider}))})),r=n(T(t()[0]),2),i=r[0],a=r[1];return o(B,{get when(){return t().length>1},get fallback(){return o(je,{openWith:!0})},get children(){return o(s,{w:"$full",spacing:"$2",get children(){return[o(N,{w:"$full",spacing:"$2",get children(){return[o(q,{alwaysShowBorder:!0,get value(){return i().name},onChange:function(e){a(t().find((function(t){return t.name===e})))},get options(){return t().map((function(t){return{value:t.name}}))}}),o(it,{})]}}),o(X,{get fallback(){return o(W,{})},get children(){return o(Z,{get component(){return i().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));t("a",Ue)}}}))}();
