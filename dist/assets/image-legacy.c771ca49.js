System.register(["./index-legacy.e6619020.js","./ImageWithError-legacy.cd578500.js","./icon-legacy.d9d1f374.js","./index-legacy.f88f636d.js","./Layout-legacy.bc1053f5.js","./useTitle-legacy.125b9b28.js","./FolderTree-legacy.b05fc16e.js","./index-legacy.6bc25682.js","./index-legacy.b008fc91.js"],(function(e){"use strict";var n,t,r,c,i,o,a,u,f,l;return{setters:[function(e){n=e.a,t=e.b,r=e.a2,c=e.o,i=e.e,o=e.h,a=e.$,u=e.a3},function(e){f=e.I},function(e){l=e.O},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(),d=t().replace,g=r.objs.filter((function(e){return e.type===l.IMAGE}));0===g.length&&(g=[r.obj]);var s=function(e){var n=g.findIndex((function(e){return e.name===r.obj.name}));"ArrowLeft"===e.key&&n>0?d(g[n-1].name):"ArrowRight"===e.key&&n<g.length-1&&d(g[n+1].name)};return c((function(){window.addEventListener("keydown",s)})),i((function(){window.removeEventListener("keydown",s)})),o(f,{maxH:"75vh",rounded:"$lg",get src(){return r.raw_url},get fallback(){return o(a,{})},get fallbackErr(){return o(u,{get msg(){return e("home.preview.failed_load_img")}})}})}))}}}));
