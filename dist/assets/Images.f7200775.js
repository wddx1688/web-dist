import{bL as y,E as C,h as t,aq as b,aC as S,m as _,k as $,aR as g,aa as v,a7 as k,t as M,aT as L,dy as m,aH as O,S as l,aA as E,aB as f,ai as H,a as A,H as x,a2 as j,d8 as G,l as w,bS as T,bT as W}from"./index.34393b7b.js";import{b as z}from"./style.cf657b1c.js";import{I as F}from"./ImageWithError.7b5375eb.js";import{O as K,g as B}from"./icon.36d5bb67.js";import{u as P,I as q,a as p}from"./helper.5a69689f.js";import{G as R}from"./GridItem.a69272d0.js";import"./index.9a9435e3.js";import"./Layout.e315998a.js";import"./useTitle.e2ee3a7d.js";import"./FolderTree.95c1c651.js";import"./index.16ef46e2.js";import"./index.0fba3ce5.js";import"./index.9fc72b5a.js";const U=e=>{const{isHide:c}=y();if(c(e.obj)||e.obj.type!==K.IMAGE)return null;const{setPathAs:o}=C(),u=t(S,{get color(){return b()},boxSize:"$12",get as(){return B(e.obj)}}),[d,i]=_(!1),r=$(()=>g()&&(d()||e.obj.selected)),{show:a}=z({id:1}),{rawLink:I}=v(),{isMouseSupported:s}=p(),h=P();return t(H.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(k,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${b()}`}},onMouseEnter:()=>{i(!0),o(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:n=>{M(()=>{L(!1),m(e.index,!0,!0)}),a(n,{props:e.obj})},get children(){return t(O,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return r()||s()&&e.obj.selected},get children(){return t(q,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:n=>{m(e.index,n.target.checked)}})}}),t(F,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(E,{size:"lg"})},fallbackErr:u,get src(){return I(e.obj)},loading:"lazy",get cursor(){return!s()&&(!g()||h())?"pointer":"default"},"on:dblclick":n=>{!s()||n.ctrlKey||n.metaKey||n.shiftKey||f.emit("gallery",e.obj.name)},"on:click":()=>{if(!s()){if(!g()||h()){f.emit("gallery",e.obj.name);return}m(e.index,!e.obj.selected)}}})]}})}})}})},oe=e=>{const c=A(),o=$(()=>t(G,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(x,{get each(){return j.objs.filter(r=>r.is_dir)},children:(r,a)=>t(R,{obj:r,get index(){return a()}})})}})),{isMouseSupported:u,registerSelectContainer:d,captureContentMenu:i}=p();return d(),t(k,{"oncapture:contextmenu":i,get classList(){return{"viselect-container":u()}},spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return w.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(T,{m:"$2",get children(){return c("home.no_images")}})},get children(){return t(W,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(x,{get each(){return j.objs},children:(r,a)=>t(U,{obj:r,get index(){return a()}})})}})}}),t(l,{get when(){return w.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{oe as default};
