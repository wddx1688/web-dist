import{b as v,a$ as c,bg as u,a as w,m as i,h as t,S,a7 as x,bS as g,az as $,aE as C,a6 as I,aq as _,I as k,C as T,ad as q,am as d,n as D,bh as F,b2 as L,da as M}from"./index.6fdcb702.js";const z=()=>{const{back:n}=v(),[l,h]=c(()=>u.post("/auth/2fa/generate")),a=w(),[r,p]=i(),f=async()=>{if(d().otp){D.warning(a("users.2fa_already_enabled")),n();return}const e=await h();F(e,p)},[s,y]=i("");f();const[m,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();L(e,()=>{M({...d(),otp:!0}),n()})};return t(q,{get loading(){return l()},get children(){return t(S,{get when(){return r()},get children(){return t(x,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t($,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[C(()=>a("users.or_manual")),":"," ",t(I,{get color(){return _()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t(k,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(T,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{z as default};
