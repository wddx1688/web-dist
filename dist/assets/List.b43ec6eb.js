import{bL as O,E as I,b as L,h as t,aj as h,N as w,aR as m,aE as x,dy as b,t as k,aT as y,S as C,aC as M,aq as _,aB as S,a6 as d,cp as z,cY as P,ai as p,l as D,a as T,m as j,x as B,dz as E,dA as H,G as f,dB as W,H as K,a2 as R,a7 as F}from"./index.e46e1418.js";import{b as G}from"./style.4195592a.js";import{x as q}from"./index.d5148f37.js";import{g as N,O as U}from"./icon.e1cf43b1.js";import{u as V,I as v,a as $}from"./helper.ebdf7793.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],Y=e=>{const{isHide:l}=O();if(l(e.obj))return null;const{setPathAs:c}=I(),{show:g}=G({id:1}),{pushHref:i,to:s}=L(),{isMouseSupported:o}=$(),a=V(),u=()=>D.list_item_filename_overflow;return t(p.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(h,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:q,get href(){return e.obj.name},get cursor(){return!o()&&(!m()||a())?"pointer":"default"},get bgColor(){return x(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":n=>{!o()||n.ctrlKey||n.metaKey||n.shiftKey||s(i(e.obj.name))},"on:click":n=>{if(o())return n.preventDefault();if(!!m()){if(n.preventDefault(),a()){s(i(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:n=>{k(()=>{y(!1),b(e.index,!0,!0)}),g(n,{props:e.obj})},get children(){return[t(h,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[t(C,{get when(){return m()},get children(){return t(v,{"on:click":n=>{n.stopPropagation()},get checked(){return e.obj.selected},onChange:n=>{b(e.index,n.target.checked)}})}}),t(M,{class:"icon",boxSize:"$6",get color(){return _()},get as(){return N(e.obj)},mr:"$1","on:click":n=>{e.obj.type===U.IMAGE&&(n.stopPropagation(),n.preventDefault(),S.emit("gallery",e.obj.name))}}),t(d,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:u()==="multi_line"?"unset":"nowrap","overflow-x":u()==="scrollable"?"auto":"hidden",textOverflow:u()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(d,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return z(e.obj.size)}}),t(d,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return P(e.obj.modified)}})]}})}})},A=e=>{const l=T(),[c,g]=j(),[i,s]=j(!1);B(()=>{c()&&e.sortCallback(c(),i())});const o=a=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:a.textAlign,cursor:"pointer",onClick:()=>{a.name===c()?s(!i()):k(()=>{g(a.name),s(!1)})}});return t(h,{class:"title",w:"$full",p:"$2",get children(){return[t(h,{get w(){return r[0].w},spacing:"$1",get children(){return[t(C,{get when(){return x(()=>!e.disableCheckbox,!0)()&&m()},get children(){return t(v,{get checked(){return E()},get indeterminate(){return H()},onChange:a=>{y(a.target.checked)}})}}),t(d,f(()=>o(r[0]),{get children(){return l(`home.obj.${r[0].name}`)}}))]}}),t(d,f({get w(){return r[1].w}},()=>o(r[1]),{get children(){return l(`home.obj.${r[1].name}`)}})),t(d,f({get w(){return r[2].w}},()=>o(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return l(`home.obj.${r[2].name}`)}}))]}})},J=()=>{const e=i=>{var o,a;const s=Array.from((a=(o=i.dataTransfer)==null?void 0:o.items)!=null?a:[]);for(let u=0;u<s.length;u++)if(s[u].kind==="file"){S.emit("tool","upload"),i.preventDefault();break}},{isMouseSupported:l,registerSelectContainer:c,captureContentMenu:g}=$();return c(),t(F,{onDragOver:e,"oncapture:contextmenu":g,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[t(A,{sortCallback:W}),t(K,{get each(){return R.objs},children:(i,s)=>t(Y,{obj:i,get index(){return s()}})})]}})},ne=Object.freeze(Object.defineProperty({__proto__:null,ListTitle:A,default:J},Symbol.toStringTag,{value:"Module"}));export{A as L,ne as a,r as c};
