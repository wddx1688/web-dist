import{h as e,bS as i,az as w,a as y,n as C,m as R,a$ as r,bg as c,cn as b,e as k,a7 as o,H as x,aw as H,G as T,I as z,aj as F,C as g,cm as L,b2 as N,dx as W}from"./index.e46e1418.js";const j=n=>e(i,{get children(){return n.content}}),B=n=>e(w,{get src(){return n.content}}),D={string:j,image:B},M=()=>{const n=y();C.info(n("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>c.post("/admin/message/get")),[m,p]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=b([]),s=async()=>{const t=await u();L(t,$=>{S(W(f=>f.push($)))})},v=async()=>{const t=await p();N(t)},I=setInterval(s,1e3);return k(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(H,T({get component(){return D[t.type]}},t))})]}}),e(z,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return m()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{M as Messenger,D as Shower,M as default};
