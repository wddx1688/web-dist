import{a as G,b as ce,a$ as H,dQ as de,dR as ue,k as ge,m as d,x as he,h as e,U as me,K as J,L as K,H as N,R as fe,a0 as we,a1 as L,a3 as be,S as Q,a6 as h,aE as pe,ad as xe,a7 as V,J as Y,dj as ke,aj as I,N as _e,aC as X,aq as $e,cp as ye,cY as Ce,ai as je,bL as ve,ct as Se,aL as Me,al as Le,am as Pe,aB as Oe,_ as P,t as m,dS as Be,l as Ee,aK as Ie}from"./index.e46e1418.js";import{L as ze,c as f}from"./List.b43ec6eb.js";import{T as Ae,c as qe}from"./index.d5148f37.js";import Te from"./Password.e449ec92.js";import{a as Fe}from"./helper.ebdf7793.js";import{g as Re}from"./icon.e1cf43b1.js";import{x as O,w as Ue,b as De}from"./style.4195592a.js";import"./index.071eddfa.js";import"./Layout.9370ddd7.js";import"./useTitle.7a3bf0e3.js";import"./FolderTree.708fad83.js";import"./index.ab712466.js";import"./index.ec42b634.js";function We(){let n=!1,o=[];return{acquire:()=>new Promise(a=>{n?o.push(a):(n=!0,a())}),release:()=>{o.length>0?o.shift()():n=!1}}}const Z=n=>{window.open(n,"_blank")},He=n=>{const{show:o}=De({id:2}),{isMouseSupported:a}=Fe(),u=()=>Ee.list_item_filename_overflow;return e(je.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(I,{class:"list-item viselect-item",get["data-index"](){return n.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:_e()}},get cursor(){return a()?"default":"pointer"},"on:click":w=>{n.obj.is_dir?n.jumpCallback():n.url&&Z(n.url)},onContextMenu:w=>{o(w,{props:n})},get children(){return[e(I,{class:"name-box",spacing:"$1",get w(){return f[0].w},get children(){return[e(X,{class:"icon",boxSize:"$6",get color(){return $e()},get as(){return Re(n.obj)},mr:"$1"}),e(h,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:u()==="multi_line"?"unset":"nowrap","overflow-x":u()==="scrollable"?"auto":"hidden",textOverflow:u()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return n.obj.name},get children(){return n.obj.name}})]}}),e(h,{class:"size",get w(){return f[1].w},get textAlign(){return f[1].textAlign},get children(){return ye(n.obj.size)}}),e(h,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return f[2].w},get textAlign(){return f[2].textAlign},get children(){return Ce(n.obj.modified)}})]}})}})},B={extract:{icon:Ae,color:"$success9"},copy_link:{icon:qe,color:"$info9"},download:{icon:Ie,color:"$primary9"}},Je=()=>{const{copy:n}=ve(),{colorMode:o}=Se();return e(Ue,{id:2,animation:"scale",get theme(){return o()!=="dark"?"light":"dark"},style:"z-index: var(--hope-zIndices-popover)",get children(){return[e(O,{hidden:({props:a})=>a.obj.is_dir,onClick:({props:a})=>{Z(a.url+"&attachment=true")},get children(){return e(E,{name:"download"})}}),e(O,{hidden:({props:a})=>a.obj.is_dir,onClick:({props:a})=>{n(a.url)},get children(){return e(E,{name:"copy_link"})}}),e(O,{hidden:()=>{const a=Me.findIndex(u=>u==="decompress");return!Le.can(Pe(),a)},onClick:({props:a})=>{Oe.emit("extract",JSON.stringify({inner:a.innerPath,pass:a.pass}))},get children(){return e(E,{name:"extract"})}})]}})},E=n=>{const o=G();return e(I,{spacing:"$2",get children(){return[e(X,{get p(){return B[n.name].p?"$1":void 0},get as(){return B[n.name].icon},boxSize:"$7",get color(){return B[n.name].color}}),e(h,{get children(){return o(`home.toolbar.${n.name}`)}})]}})},st=()=>{const n=G(),{pathname:o}=ce(),[a,u]=H(de),[w,z]=H(ue),ee=ge(()=>a()||w());let l="",_="",$="",b=null;const[y,p]=d(""),[te,A]=d(!1),[C,j]=d(!1),[q,re]=d(""),[c,v]=d([]),[S,T]=d(),[ne,F]=d(!1),[ae,R]=d(""),g=We(),x=r=>{let s={};return r.forEach(t=>{s[t.name]={...t,children:t.children?x(t.children):null}}),s},M=r=>r.code===200?!1:(r.code===202?m(()=>{l!==""&&A(!0),j(!0),p("")}):p(r.message),!0),U=async r=>{if(await g.acquire(),C()&&l==="")return g.release(),[];if(_===""){const t=await u(o(),P(),l);if(M(t))return g.release(),[];if(t.data.content!==null&&(b=x(t.data.content)),_=t.data.raw_url,$=t.data.sign,re(t.data.comment),t.data.sort!==void 0){let i;t.data.sort.order_by!==""&&(i=t.data.sort.order_by);let k=t.data.sort.order_direction==="desc",le=t.data.sort.extract_folder;m(()=>{T(i),F(k),R(le)})}if(t.data.encrypted&&l==="")return m(()=>{j(!0),p("")}),g.release(),[]}if(b===null){const t=await z(o(),P(),l,"/");if(M(t))return g.release(),[];b=x(t.data.content)}let s=b;for(let t=0;t<r.length;t++){if(s[r[t]].children===null){const i=await z(o(),P(),l,"/"+r.slice(0,t+1).join("/"));if(M(i))return g.release(),[];s[r[t]].children=x(i.data.content)}s=s[r[t]].children}return m(()=>{j(!1),A(!1),p("")}),g.release(),Object.values(s)},[se,D]=d([]);he(()=>{U(c()).then(r=>D(r))});const W=()=>{U(c()).then(r=>D(r))};W();const ie=()=>{let r=se();S()&&(r=r.sort((t,i)=>(ne()?-1:1)*Be(t[S()],i[S()])));let s=ae();if(s!==""){let t=[],i=[];r.forEach(k=>(k.is_dir?t:i).push(k)),r=s==="front"?t.concat(i):i.concat(t)}return r},oe=(r,s)=>{m(()=>{R(""),T(r),s!==void 0&&F(s)})};return e(V,{spacing:"$2",w:"$full",get children(){return[e(me,{pl:"$2",pr:"$2",w:"$full",get children(){return[e(J,{get children(){return e(K,{get currentPage(){return c().length===0},"on:click":()=>v([]),children:"."})}}),e(N,{get each(){return c()},children:(r,s)=>e(J,{get children(){return[e(fe,{}),e(K,{get currentPage(){return c().length===s()+1},"on:click":()=>v(c().slice(0,s()+1)),children:r})]}})})]}}),e(we,{get children(){return[e(L,{get when(){return y()!==""},get children(){return e(be,{get msg(){return y()},disableColor:!0})}}),e(L,{get when(){return C()},get children(){return e(Te,{get title(){return n("home.toolbar.archive.input_password")},password:()=>l,setPassword:r=>l=r,enterCallback:()=>W(),get children(){return e(Q,{get when(){return te()},get children(){return e(h,{color:"$danger9",get children(){return n("home.toolbar.archive.incorrect_password")}})}})}})}}),e(L,{get when(){return pe(()=>!C(),!0)()&&y()===""},get children(){return e(xe,{get loading(){return ee()},get children(){return e(V,{class:"list",w:"$full",spacing:"$1",get children(){return[e(ze,{sortCallback:oe,disableCheckbox:!0}),e(N,{get each(){return ie()},children:(r,s)=>{let t,i=(c().length>0?"/"+c().join("/"):"")+"/"+r.name;return r.is_dir||(t=_+"?inner="+Y(i),l!==""&&(t=t+"&pass="+Y(l)),$!==""&&(t=t+"&sign="+$)),e(He,{obj:r,get index(){return s()},jumpCallback:()=>v(c().concat(r.name)),innerPath:i,url:t,pass:l})}}),e(Je,{})]}})}})}})]}}),e(Q,{get when(){return q()!==""},get children(){return[e(ke,{}),e(h,{w:"$full",pl:"$1",pr:"$1",get children(){return q()}})]}})]}})};export{st as default};
