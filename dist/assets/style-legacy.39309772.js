!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,i,r=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return r}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var a=document.createElement("style");a.innerHTML=".solid-contextmenu{position:fixed;user-select:none;background-color:#fff;box-sizing:border-box;box-shadow:0 10px 30px -5px rgba(0,0,0,.3);border-radius:6px;padding:6px 0;min-width:200px;z-index:100}.solid-contextmenu__submenu--is-open,.solid-contextmenu__submenu--is-open>.solid-contextmenu__item__content{color:#fff;background-color:#4393e6}.solid-contextmenu__submenu--is-open>.solid-contextmenu__submenu{pointer-events:initial;opacity:1}.solid-contextmenu .solid-contextmenu__submenu{position:fixed;pointer-events:none;transition:opacity .275s}.solid-contextmenu__submenu-arrow{margin-left:auto;font-size:12px}.solid-contextmenu__separator{width:100%;height:1px;cursor:default;margin:4px 0;background-color:rgba(0,0,0,.2)}.solid-contextmenu__will-leave--disabled{pointer-events:none}.solid-contextmenu__item{cursor:pointer;position:relative}.solid-contextmenu__item:focus{outline:0}.solid-contextmenu__item:not(.solid-contextmenu__item--disabled):hover>.solid-contextmenu__item__content,.solid-contextmenu__item:not(.solid-contextmenu__item--disabled):focus>.solid-contextmenu__item__content{color:#fff;background-color:#4393e6}.solid-contextmenu__item:not(.solid-contextmenu__item--disabled):hover>.solid-contextmenu__submenu{pointer-events:initial;opacity:1}.solid-contextmenu__item--disabled{cursor:default;opacity:.5}.solid-contextmenu__item__content{padding:6px 12px;display:flex;align-items:center;white-space:nowrap;color:#333;position:relative}.solid-contextmenu__theme--dark,.solid-contextmenu__theme--dark .solid-contextmenu__submenu{background-color:rgba(40,40,40,.98)}.solid-contextmenu__theme--dark .solid-contextmenu__separator{background-color:#eee}.solid-contextmenu__theme--dark .solid-contextmenu__item__content{color:#fff}.solid-contextmenu__theme--light .solid-contextmenu__separator{background-color:#eee}.solid-contextmenu__theme--light .solid-contextmenu__submenu--is-open,.solid-contextmenu__theme--light .solid-contextmenu__submenu--is-open>.solid-contextmenu__item__content{color:#4393e6;background-color:#e0eefd}.solid-contextmenu__theme--light .solid-contextmenu__item:not(.solid-contextmenu__item--disabled):hover>.solid-contextmenu__item__content,.solid-contextmenu__theme--light .solid-contextmenu__item:not(.solid-contextmenu__item--disabled):focus>.solid-contextmenu__item__content{color:#4393e6;background-color:#e0eefd}.solid-contextmenu__theme--light .solid-contextmenu__item__content{color:#666}@keyframes solid-contextmenu__scaleIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:1}}@keyframes solid-contextmenu__scaleOut{0%{opacity:1}to{opacity:0;transform:scale3d(.3,.3,.3)}}.solid-contextmenu-scale-enter-active{transform-origin:top left;animation:solid-contextmenu__scaleIn .3s}.solid-contextmenu-scale-exit-active{transform-origin:top left;animation:solid-contextmenu__scaleOut .3s}@keyframes solid-contextmenu__fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes solid-contextmenu__fadeOut{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}.solid-contextmenu-fade-enter-active{animation:solid-contextmenu__fadeIn .3s ease}.solid-contextmenu-fade-exit-active{animation:solid-contextmenu__fadeOut .3s ease}@keyframes solid-contextmenu__flipInX{0%{transform:perspective(800px) rotateX(45deg)}to{transform:perspective(800px)}}@keyframes solid-contextmenu__flipOutX{0%{transform:perspective(800px)}to{transform:perspective(800px) rotateX(45deg);opacity:0}}.solid-contextmenu-flip-enter-active{backface-visibility:visible!important;transform-origin:top center;animation:solid-contextmenu__flipInX .3s}.solid-contextmenu-flip-exit-active{transform-origin:top center;animation:solid-contextmenu__flipOutX .3s;backface-visibility:visible!important}@keyframes swing-in-top-fwd{0%{transform:rotateX(-100deg);transform-origin:top;opacity:0}to{transform:rotateX(0);transform-origin:top;opacity:1}}@keyframes solid-contextmenu__slideIn{0%{opacity:0;transform:scale3d(1,.3,1)}to{opacity:1}}@keyframes solid-contextmenu__slideOut{0%{opacity:1}to{opacity:0;transform:scale3d(1,.3,1)}}.solid-contextmenu-slide-enter-active{transform-origin:top center;animation:solid-contextmenu__slideIn .3s}.solid-contextmenu-slide-exit-active{transform-origin:top center;animation:solid-contextmenu__slideOut .3s}\n",document.head.appendChild(a),System.register(["./index-legacy.bbdfdab1.js"],(function(r){"use strict";var s,a,c,l,u,d,m,f,p,_,v,x,h,y,b,g,w,$,k,O;return{setters:[function(e){s=e.cT,a=e.cU,c=e.m,l=e.G,u=e.e,d=e.k,m=e.h,f=e.bK,p=e.S,_=e.cV,v=e.cd,x=e.cW,h=e.aQ,y=e.j,b=e.q,g=e.i,w=e.bQ,$=e.bM,k=e.an,O=e.t}],execute:function(){var A=function(e){return e.menu="solid-contextmenu",e.submenu="solid-contextmenu solid-contextmenu__submenu",e.submenuArrow="solid-contextmenu__submenu-arrow",e.submenuOpen="solid-contextmenu__submenu--is-open",e.separator="solid-contextmenu__separator",e.item="solid-contextmenu__item",e.itemDisabled="solid-contextmenu__item--disabled",e.itemContent="solid-contextmenu__item__content",e.theme="solid-contextmenu__theme--",e.animationWillEnter="solid-contextmenu__will-enter--",e.animationWillLeave="solid-contextmenu__will-leave--",e}(A||{});function C(e){requestAnimationFrame((function(){requestAnimationFrame(e)}))}var L=function(e){var t,n=!0,r=i(c(),2),s=r[0],a=r[1],u=i(c(),2),d=u[0],m=u[1],f=y((function(){return e.children})),p=e.name||"s",_=e=l({name:p,enterActiveClass:p+"-enter-active",enterClass:p+"-enter",enterToClass:p+"-enter-to",exitActiveClass:p+"-exit-active",exitClass:p+"-exit",exitToClass:p+"-exit-to"},e),v=_.onBeforeEnter,x=_.onEnter,h=_.onAfterEnter,w=_.onBeforeExit,$=_.onExit,k=_.onAfterExit;function A(t,i){if(!n||e.appear){var r,c,l=function n(r){var c,l;t&&(!r||r.target===t)&&(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),(c=t.classList).remove.apply(c,o(f)),(l=t.classList).remove.apply(l,o(p)),O((function(){s()!==t&&a(t),d()===t&&m(void 0)})),h&&h(t),"inout"===e.mode&&L(t,i))},u=e.enterClass.split(" "),f=e.enterActiveClass.split(" "),p=e.enterToClass.split(" ");v&&v(t),(r=t.classList).add.apply(r,o(u)),(c=t.classList).add.apply(c,o(f)),C((function(){var e,n;(e=t.classList).remove.apply(e,o(u)),(n=t.classList).add.apply(n,o(p)),x&&x(t,(function(){return l()})),(!x||x.length<2)&&(t.addEventListener("transitionend",l),t.addEventListener("animationend",l))}))}i&&!e.mode?m(t):a(t)}function L(t,n){var i,r,c=e.exitClass.split(" "),l=e.exitActiveClass.split(" "),u=e.exitToClass.split(" ");if(!n.parentNode)return d();function d(i){var r,c;(!i||i.target===n)&&(n.removeEventListener("transitionend",d),n.removeEventListener("animationend",d),(r=n.classList).remove.apply(r,o(l)),(c=n.classList).remove.apply(c,o(u)),s()===n&&a(void 0),k&&k(n),"outin"===e.mode&&A(t,n))}w&&w(n),(i=n.classList).add.apply(i,o(c)),(r=n.classList).add.apply(r,o(l)),C((function(){var e,t;(e=n.classList).remove.apply(e,o(c)),(t=n.classList).add.apply(t,o(u))})),$&&$(n,(function(){return d()})),(!$||$.length<2)&&(n.addEventListener("transitionend",d),n.addEventListener("animationend",d))}return b((function(o){for(t=f();"function"==typeof t;)t=t();return g((function(){return t&&t!==o&&("outin"!==e.mode?A(t,o):n&&a(t)),o&&o!==t&&"inout"!==e.mode&&L(t,o),n=!1,t}))})),[s,d]};var E,j={all:E=E||new Map,on:function(e,t){var n=E.get(e);n?n.push(t):E.set(e,[t])},off:function(e,t){var n=E.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):E.set(e,[]))},emit:function(e,t){var n=E.get(e);n&&n.slice().map((function(e){e(t)})),(n=E.get("*"))&&n.slice().map((function(n){n(e,t)}))}},S=w(),P=function(){return $(S)};function I(e){var t,o,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==n(e))if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=I(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function X(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=I(e))&&(o&&(o+=" "),o+=t);return o}var D=k("<div></div>"),T=function(e,t,n){return e+t<=n?e:e<t?n-t:e-t};r("w",(function(e){var n,o=i(a(e,["id","theme","animation","onShown","onHidden"]),2),r=o[0],s=o[1],h=i(c(!1),2),y=h[0],b=h[1],g=i(c({x:0,y:0}),2),w=g[0],$=g[1],k=i(c(),2),O=k[0],C=k[1];j.on("show",(function(e){var t;e.id===r.id&&(e.event.preventDefault(),C(e.props),b(!0),$(null!==(t=e.position)&&void 0!==t?t:function(e,t){var n={width:window.innerWidth,height:window.innerHeight};return{x:T(e.x,t.width,n.width),y:T(e.y,t.height,n.height)}}({x:e.event.clientX,y:e.event.clientY},{width:n.offsetWidth,height:n.offsetHeight})))}));var E=function(){j.emit("hide",r.id),b(!1)},P=l({shown:y,animation:"scale",hide:E,props:O},r);j.on("hideAll",(function(){E()})),u((function(){j.off("show"),j.off("hideAll")}));var I=d((function(){var e="";return r.animation&&(e="solid-contextmenu-".concat(r.animation)),console.log(e),e})),W=d((function(){return{enterActiveClass:I()+"-enter-active",exitActiveClass:I()+"-exit-active"}}));return m(S.Provider,{value:P,get children(){return m(f,{get children(){return m(L,l(W,{get children(){return m(p,{get when(){return y()},get children(){var e=D.cloneNode(!0);return"function"==typeof n?n(e):n=e,function(e,t){var n=function(n){var o;return!e.contains(n.target)&&(null===(o=t())||void 0===o?void 0:o())};document.body.addEventListener("click",n),u((function(){return document.body.removeEventListener("click",n)}))}(e,(function(){return E()})),_(e,s,!1,!1),v((function(n){var o=X(A.menu,s.class,t({},"".concat(A.theme).concat(r.theme),r.theme)),i=w().x+"px",a=w().y+"px";return o!==n._v$&&x(e,n._v$=o),i!==n._v$2&&e.style.setProperty("left",n._v$2=i),a!==n._v$3&&e.style.setProperty("top",n._v$3=a),n}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}})}}))}})}})}));function W(e,t){return function(e){return"function"==typeof e}(e)?e(t):e}var H=k("<div><div></div></div>");r("x",(function(n){var o=i(a(n,["hidden","disabled","onClick","data","children"]),2),r=o[0],s=o[1],c=l({hidden:!1,disabled:!1},r),u=P(),f=u.props,y=u.hide,b=d((function(){return{props:f(),data:n.data}})),g=d((function(){return W(c.disabled,b())})),w=d((function(){return W(c.hidden,b())})),$=function(o){var i;g()||(null!==(i=n.onClick)&&void 0!==i&&i.call(n,function(n){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?e(Object(i),!0).forEach((function(e){t(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}({event:o},b())),y())};return m(p,{get when(){return!w()},get children(){var e=H.cloneNode(!0),n=e.firstChild;return e.$$click=$,_(e,s,!1,!0),h(n,(function(){return r.children})),v((function(o){var i=X(A.item,t({},A.itemDisabled,g())),r=A.itemContent;return i!==o._v$&&x(e,o._v$=i),r!==o._v$2&&x(n,o._v$2=r),o}),{_v$:void 0,_v$2:void 0}),e}})}));s(["click"]);var N=k("<div></div>"),Y=k("<div><div><span></span></div></div>");r("C",(function(e){var n,o,r=i(a(e,["arrow","children","disabled","hidden","label","class"]),2),s=r[0],f=r[1],y=l({arrow:"▶️",disabled:!1,hidden:!1},s),b=P(),g=b.props,w=b.id,$=d((function(){return{props:g()}})),k=d((function(){return W(y.disabled,$())})),O=d((function(){return W(y.hidden,$())})),C=i(c({x:0,y:0}),2),L=C[0],E=C[1],S=i(c(!1),2),I=S[0],D=S[1],T=function(){D(!0),function(){var e=n.getBoundingClientRect(),t=o.getBoundingClientRect(),i=window.innerWidth,r=window.innerHeight,s=e.right;s+t.width>i&&(s=e.left-t.width>0?e.left-t.width:i-t.width);var a=e.top;a+t.height>r&&(a=e.bottom-t.height>0?e.bottom-t.height:r-t.height),E({x:s,y:a}),console.log(L())}()};return j.on("hide",(function(e){e===w&&D(!1)})),u((function(){j.off("hide")})),m(p,{get when(){return!O()},get children(){var e=Y.cloneNode(!0),i=e.firstChild,r=i.firstChild;e.$$click=function(){return I()?D(!1):T()},e.addEventListener("mouseleave",(function(){return D(!1)})),e.addEventListener("mouseenter",(function(){return T()})),_(e,f,!1,!0);return"function"==typeof n?n(i):n=i,h(i,(function(){return y.label}),r),h(r,(function(){return y.arrow})),h(e,m(p,{get when(){return I()},get children(){var e=N.cloneNode(!0);return"function"==typeof o?o(e):o=e,h(e,(function(){return y.children})),v((function(t){var n=A.submenu,o=L().x+"px",i=L().y+"px";return n!==t._v$&&x(e,t._v$=n),o!==t._v$2&&e.style.setProperty("left",t._v$2=o),i!==t._v$3&&e.style.setProperty("top",t._v$3=i),t}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}}),null),v((function(n){var o=X(A.item,s.class,t({},A.itemDisabled,k())),a=A.itemContent,c=A.submenuArrow;return o!==n._v$4&&x(e,n._v$4=o),a!==n._v$5&&x(i,n._v$5=a),c!==n._v$6&&x(r,n._v$6=c),n}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),e}})}));s(["click"]);r("b",(function(e){return{show:function(t,n){j.emit("show",{id:(null==n?void 0:n.id)||(null==e?void 0:e.id),props:(null==n?void 0:n.props)||(null==e?void 0:e.props),event:t,position:null==n?void 0:n.position})},hideAll:function(){j.emit("hideAll")}}}))}}}))}();
