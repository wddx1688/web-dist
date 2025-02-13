!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(j){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return $()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var f={};function d(){}function g(){}function p(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==n&&o.call(m,a)&&(v=m);var b=p.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,c,u){var l=h(r[i],r,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:$}}function $(){return{value:void 0,done:!0}}return g.prototype=p,l(b,"constructor",p),l(p,"constructor",g),g.displayName=l(p,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},e}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void e(l)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.3e1302ab.js","./useTitle-legacy.e3196d7a.js","./DeletePopover-legacy.23fcdb66.js"],(function(t){"use strict";var e,i,a,c,u,l,s,h,f,d,g,p,v,y,m,b,w,x,k,L,_,E,S,$,j,O,C,A,G,P,T,N,I,F,B,D,H,Y,q,M,X,z,U,W;return{setters:[function(t){e=t.a,i=t.h,a=t.Y,c=t.aq,u=t.aj,l=t.a6,s=t.co,h=t.aE,f=t.ac,d=t.a7,g=t.ds,p=t.dp,v=t.b,y=t.a$,m=t.bg,b=t.C,w=t.b2,x=t.bh,k=t.n,L=t.m,_=t.k,E=t.ck,S=t.S,$=t.bw,j=t.bx,O=t.by,C=t.bz,A=t.bA,G=t.bB,P=t.bC,T=t.H,N=t.bD,I=t.bE,F=t.bF,B=t.bG,D=t.a0,H=t.a1,Y=t.d8,q=t.dm,M=t.dn,X=t.dq,z=t.dr},function(t){U=t.b},function(t){W=t.D}],execute:function(){function J(t){var a,c,u=e(),l=v().to,s=o(y((function(){return m.post("/admin/storage/delete?id=".concat(t.storage.id))})),2),h=s[0],f=s[1],d=o(y((function(){return m.post("/admin/storage/".concat(t.storage.disabled?"enable":"disable","?id=").concat(t.storage.id))})),2),g=d[0],p=d[1];return[i(b,{onClick:function(){l("/@manage/storages/edit/".concat(t.storage.id))},get children(){return u("global.edit")}}),i(b,{get loading(){return g()},get colorScheme(){return t.storage.disabled?"success":"warning"},onClick:(c=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p();case 2:n=r.sent,w(n,(function(){t.refresh()}));case 4:case"end":return r.stop()}}),e)}))),function(){return c.apply(this,arguments)}),get children(){return u("global.".concat(t.storage.disabled?"enable":"disable"))}}),i(W,{get name(){return t.storage.mount_path},get loading(){return h()},onClick:(a=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f();case 2:n=r.sent,x(n,(function(){k.success(u("global.delete_success")),t.refresh()}));case 4:case"end":return r.stop()}}),e)}))),function(){return a.apply(this,arguments)})})]}function K(t){var r=e();return i(d,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return a("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:"1px solid ".concat(c())}},get children(){return[i(u,{spacing:"$2",get children(){return[i(l,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return t.storage.mount_path}}),i(s,{colorScheme:"info",get children(){return r("drivers.drivers.".concat(t.storage.driver))}})]}}),i(u,{get children(){return[i(l,{get children(){return[h((function(){return r("storages.common.status")})),": "]}}),i(f,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return t.storage.status}})]}}),i(l,{css:{wordBreak:"break-all"},get children(){return t.storage.remark}}),i(u,{spacing:"$2",get children(){return i(J,t)}})]}})}function Q(t){var r=e();return i(p,{get children(){return[i(g,{get children(){return t.storage.mount_path}}),i(g,{get children(){return r("drivers.drivers.".concat(t.storage.driver))}}),i(g,{get children(){return t.storage.order}}),i(g,{get children(){return t.storage.status}}),i(g,{get children(){return t.storage.remark}}),i(g,{get children(){return i(u,{spacing:"$2",get children(){return i(J,t)}})}})]}})}t("default",(function(){var t=e();U("manage.sidemenu.storages");var a=v().to,c=o(y((function(){return m.get("/admin/storage/list")})),2),l=c[0],s=c[1],h=o(L([]),2),g=h[0],w=h[1],W=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:e=t.sent,x(e,(function(t){return w(t.content)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=o(L([]),2),R=J[0],V=J[1],Z=o(L([]),2),tt=Z[0],rt=Z[1],et=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("/admin/driver/names");case 2:e=t.sent,x(e,(function(t){return V(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();et(),W();var nt=function(){var e=n(r().mark((function e(){var n;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.post("/admin/storage/load_all");case 2:n=r.sent,x(n,(function(){k.success(t("storages.other.start_load_success"))}));case 4:case"end":return r.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ot=_((function(){return g().filter((function(t){return 0===tt().length||tt().includes(t.driver)}))})),it=o(E("storages-layout","grid"),2),at=it[0],ct=it[1];return i(d,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[i(u,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[i(b,{colorScheme:"accent",get loading(){return l()},onClick:W,get children(){return t("global.refresh")}}),i(b,{onClick:function(){a("/@manage/storages/add")},get children(){return t("global.add")}}),i(b,{colorScheme:"warning",get loading(){return l()},onClick:nt,get children(){return t("storages.other.load_all")}}),i(S,{get when(){return R().length>0},get children(){return i($,{multiple:!0,get value(){return tt()},onChange:rt,get children(){return[i(j,{get children(){return[i(O,{get children(){return t("storages.other.filter_by_driver")}}),i(C,{}),i(A,{})]}}),i(G,{get children(){return i(P,{get children(){return i(T,{get each(){return R()},children:function(r){return i(N,{value:r,get children(){return[i(I,{get children(){return t("drivers.drivers.".concat(r))}}),i(F,{})]}})}})}})}})]}})}}),i(B,{get checked(){return"table"===at()},onChange:function(t){ct(t.currentTarget.checked?"table":"grid")},get children(){return t("storages.other.table_layout")}})]}}),i(D,{get children(){return[i(H,{get when(){return"grid"===at()},get children(){return i(Y,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return i(T,{get each(){return ot()},children:function(t){return i(K,{storage:t,refresh:W})}})}})}}),i(H,{get when(){return"table"===at()},get children(){return i(f,{w:"$full",overflowX:"auto",get children(){return i(q,{highlightOnHover:!0,dense:!0,get children(){return[i(M,{get children(){return i(p,{get children(){return[i(T,{each:["mount_path","driver","order","status","remark"],children:function(r){return i(X,{get children(){return t("storages.common.".concat(r))}})}}),i(X,{get children(){return t("global.operations")}})]}})}}),i(z,{get children(){return i(T,{get each(){return ot()},children:function(t){return i(Q,{storage:t,refresh:W})}})}})]}})}})}})]}})]}})}))}}}))}();
