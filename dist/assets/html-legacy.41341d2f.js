!function(){function r(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==e)return;var n,u,i=[],o=!0,l=!1;try{for(e=e.call(r);!(o=(n=e.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(a){l=!0,u=a}finally{try{o||null==e.return||e.return()}finally{if(l)throw u}}return i}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}System.register(["./index-legacy.e6619020.js"],(function(t){"use strict";var e,n,u,i,o,l,a,c,f;return{setters:[function(r){e=r.dF,n=r.h,u=r.ad,i=r.m,o=r.dG,l=r.cC,a=r.S,c=r.dH,f=r.d4}],execute:function(){function d(t){var e=r(i("utf-8"),2),u=e[0],d=e[1],s=o(t.children),g=s.isString,h=s.text;return n(f,{w:"$full",h:"70vh",pos:"relative",get children(){return[n(l.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return h(u())}}),n(a,{when:!g,get children(){return n(c,{get encoding(){return u()},setEncoding:d,get referenceText(){return t.children}})}})]}})}t("default",(function(){var t=r(e(),1)[0];return n(u,{get loading(){return t.loading},get children(){return n(d,{get children(){var r;return null===(r=t())||void 0===r?void 0:r.content}})}})}))}}}))}();
