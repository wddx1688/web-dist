import{u as vt,a as y,b as O,s as A,n as z,c as it,p as kt,d as te,g as Ct,f as xt,_ as Ue,l as ae,o as We,e as C,h as e,P as St,i as Ot,j as Mt,k as N,m as w,q as Ft,r as $e,t as Ve,v as Rt,w as It,x as ye,M as J,y as Q,z as Y,A as Z,S as v,I as ve,T as Lt,F as Tt,B as le,C as R,D as ee,E,G as de,H as fe,J as Et,K as Pt,L as Bt,N as qe,O as ut,Q as At,R as Dt,U as zt,V as ge,W as ke,X as Ce,Y as Te,Z as Ge,$ as Oe,a0 as Ee,a1 as B,a2 as k,a3 as Nt,a4 as F,a5 as jt,a6 as se,a7 as U,a8 as Ht,a9 as Vt,aa as Ut,ab as Wt,ac as ce,ad as qt,ae as dt,af as Gt,ag as Kt,ah as Xt,ai as Pe,aj as T,ak as Jt,al as Me,am as Fe,an as ie,ao as Ke,ap as Qt,aq as X,ar as De,as as gt,at as ht,au as Xe,av as K,aw as Yt,ax as Zt,ay as Je,az as en,aA as tn,aB as h,aC as Qe,aD as nn,aE as Re,aF as rn,aG as ze,aH as mt,aI as Ye,aJ as on,aK as an,aL as ln,aM as ft,aN as sn,aO as pt,aP as S,aQ as he,aR as cn,aS as un,aT as bt,aU as tt,aV as dn,aW as gn,aX as hn,aY as mn,aZ as fn,a_ as pn,a$ as P,b0 as bn,b1 as me,b2 as D,b3 as wn,b4 as _n,b5 as $n,b6 as yn,b7 as vn,b8 as kn,b9 as Cn,ba as xn,bb as Ne,bc as Sn,bd as On,be as Mn,bf as nt,bg as Fn,bh as Rn,bi as In,bj as rt,bk as Ln,bl as Tn,bm as En,bn as Pn,bo as Bn,bp as An,bq as Dn,br as zn,bs as Nn,bt as jn,bu as Hn,bv as je,bw as Vn,bx as Un,by as Wn,bz as qn,bA as Gn,bB as Kn,bC as Xn,bD as Jn,bE as Qn,bF as Yn,bG as Zn,bH as er,bI as tr,bJ as nr,bK as rr}from"./index.e46e1418.js";import{u as or,a as ar}from"./useTitle.7a3bf0e3.js";import{L as lr,A as sr,F as wt,C as cr,T as ir,a as ur,b as dr,c as gr,d as hr,B as mr,e as fr,f as pr,g as ot,h as br,i as wr}from"./index.d5148f37.js";import{F as _r,M as Be}from"./FolderTree.708fad83.js";import{R as $r}from"./index.ab712466.js";function Se(t){return t==null||t===""}function yr(t){return t==null}async function vr(t,n){let r="/downloads/alist";const o=await it.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(Se(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const kr=()=>{const{rawLinks:t}=vt(),n=y(),{pathname:r}=O();return{batchDownloadSelected:()=>{t(!0).forEach(l=>{window.open(l,"_blank")})},sendToAria2:async()=>{const o=A(),l=async(i,a)=>{var g;if(a.is_dir){const d=await xt(te(r(),i,a.name),Ue());if(d.code!==200)return d.message;const c=[];for(const m of(g=d.data.content)!=null?g:[]){const f=await l(te(i,a.name),m);if(typeof f=="string")return f;c.push(...f)}return c}else return[{path:te(i,a.name),dir:i,url:Ct(te(r(),i),a,"direct",!0),name:a.name}]},{aria2_rpc_url:s,aria2_rpc_secret:u}=ae;if(!s){z.warning(n("home.toolbar.aria2_not_set"));return}try{let i="/downloads/alist";i=await vr(s,u);let a=!1;z.info(`${n("home.package_download.fetching_struct")}`);for(const g of o){const d=await l("",g);if(typeof d!="object"||d.length===void 0)return z.error(`${n("home.package_download.fetching_struct_failed")}: ${d}`),d;for(let c=0;c<d.length;c++){if(Se(d[c].path)||yr(d[c].dir)||Se(d[c].url)||Se(d[c].name)){z.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(d[c])}`);continue}a||(a=!0,z.info(`${n("home.package_download.downloading")}`));const m=await it.post(s,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+u,[d[c].url],{out:d[c].name,dir:i+d[c].dir,"check-certificate":"false"}]});console.log(m)}}z.success(n("home.toolbar.send_aria2_success"))}catch(i){console.error(i),z.error(`failed to send to aria2: ${i}`)}},playlistDownloadSelected:()=>{const o=A().filter(a=>!a.is_dir);let l=kt(r());o.length===1&&(l=o[0].name),l||(l=n("manage.sidemenu.home"));const s=o.reduce((a,g,d)=>`${a}#EXTINF:-1,${g.name}
${t(!0)[d]}
`,`#EXTM3U
`),u=new Blob([s],{type:"application/x-mpegURL"}),i=document.createElement("a");i.href=URL.createObjectURL(u),i.download=`${l}.m3u8`,i.click(),URL.revokeObjectURL(i.href)}}},Cr=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),xr=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),C(t.removeEventListener.bind(t,"motioncomplete",n,r))},Sr=t=>{let{initial:n=!0}=t;We(()=>n=!0);let r=!1,o=[],l=[],s=[];return C(()=>{s.concat(l).forEach(u=>u()),l=s=o=[]}),e(It.Provider,{value:{addCleanup:u=>l.push(u),addMount:u=>o.push(u),initial:()=>n},get children(){return e(St.Provider,{value:void 0,get children(){return Ot(()=>{const u=Mt(()=>t.children),i=N(()=>Cr(u())),[a,g]=w(),[d,c]=w();return Ft($e(i,b=>{s.push(...l),l=[],Ve(()=>{t.exitBeforeEnter?(g(),f(()=>!r&&m(b))):(m(b),f())})})),[a,d];function m(b){g(b),o.forEach(M=>M()),o=[]}function f(b){var W;const M=()=>{c(),s.forEach(q=>q()),s=[],b==null||b()},_=c((W=a())!=null?W:d());if(!_)return M();const x=Rt.get(_);if(!x||!x.getOptions().exit)return M();x.setActive("exit",r=!0),xr(_,()=>{r=!1,M()})}})}})}})},Ae=t=>{var i;const[n,r]=w((i=t.defaultValue)!=null?i:""),o=y();let l;const s=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};ye(()=>{l&&(l.focus(),s()),C(()=>{l&&l.setSelectionRange(0,0)})}),ye(()=>{t.opened||r("")});const u=()=>{var a;if(!n()){z.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n())};return e(ee,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return o(t.title)}}),e(Z,{get children(){return[e(v,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(v,{get when(){return t.type==="text"},get fallback(){return e(ve,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s,onKeyDown:a=>{a.key==="Enter"&&u()}})},get children(){return e(Lt,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s})}}),e(v,{get when(){return t.tips},get children(){return e(Tt,{get children(){return t.tips}})}}),e(v,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(le,{display:"flex",gap:"$2",get children(){return[e(v,{get when(){return t.footerSlot},get children(){return t.footerSlot}}),e(R,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(R,{get loading(){return t.loading},onClick:()=>u(),get children(){return o("global.ok")}})]}})]}})]}})},Or=()=>{const{pathname:t}=O(),n=N(()=>["",...t().split("/").filter(Boolean)]),r=y(),{setPathAs:o}=E(),l=N(()=>{const s={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(ae.position_of_header_navbar){case"only_navbar_sticky":return{...s,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...s,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(zt,de(l,{background:"$background",class:"nav",w:"$full",get children(){return e(fe,{get each(){return n()},children:(s,u)=>{const i=N(()=>u()===n().length-1),a=n().slice(0,u()+1).join("/"),g=Et(a);let d=()=>s;return d()===""&&(d=()=>ge("home_icon")+r("manage.sidemenu.home")),e(Pt,{class:"nav-item",get children(){return[e(Bt,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:qe(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return i()},get as(){return i()?void 0:ut},get href(){return At(g)},onMouseEnter:()=>o(a),children:d}),e(v,{get when(){return!i()},get children(){return e(Dt,{class:"nav-separator"})}})]}})}})}}))},Mr=ke(()=>Ce(()=>import("./Folder.d1475c94.js"),["assets/Folder.d1475c94.js","assets/Folder.d8dce925.css","assets/index.e46e1418.js","assets/index.c4c82a28.css","assets/style.4195592a.js","assets/style.a6d16836.css","assets/icon.e1cf43b1.js","assets/index.d5148f37.js","assets/index.ec42b634.js","assets/video_box.783692ac.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/Paginator.ad2132e4.js","assets/useTitle.7a3bf0e3.js","assets/FolderTree.708fad83.js","assets/index.ab712466.js"])),Fr=ke(()=>Ce(()=>import("./File.adc39120.js").then(t=>t.a),["assets/File.adc39120.js","assets/index.e46e1418.js","assets/index.c4c82a28.css","assets/icon.e1cf43b1.js","assets/index.d5148f37.js","assets/index.ec42b634.js"])),Rr=ke(()=>Ce(()=>import("./Password.e449ec92.js"),["assets/Password.e449ec92.js","assets/index.e46e1418.js","assets/index.c4c82a28.css"])),[Ir,Lr]=w();let at=!0;const Tr=()=>{const t=y(),n=Te("white","$neutral3"),{pathname:r}=O(),{handlePathChange:o,refresh:l}=E();let s=r();return ye($e(r,u=>{or(),at||(Ht(s),Vt()),at=!1,o(u),s=u})),e(U,{ref:u=>Lr(u),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return n()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(Ge,{get fallback(){return e(Oe,{})},get children(){return e(Ee,{get children(){return[e(B,{get when(){return k.err},get children(){return e(Nt,{get msg(){return k.err},disableColor:!0})}}),e(B,{get when(){return[F.FetchingObj,F.FetchingObjs].includes(k.state)},get children(){return e(Oe,{})}}),e(B,{get when(){return k.state===F.NeedPassword},get children(){return e(Rr,{get title(){return t("home.input_password")},password:Ue,setPassword:jt,enterCallback:()=>l(!0),get children(){return[e(se,{get children(){return t("global.have_account")}}),e(se,{color:"$info9",as:lr,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}})}}),e(B,{get when(){return[F.Folder,F.FetchingMore].includes(k.state)},get children(){return e(Mr,{})}}),e(B,{get when(){return k.state===F.File},get children(){return e(Fr,{})}})]}})}})}})};function lt(t){const n=Te("white","$neutral3"),{proxyLink:r}=Ut();O();const o=N($e(()=>k.state,()=>{if(![F.FetchingMore,F.Folder,F.File].includes(k.state))return"";if([F.FetchingMore,F.Folder].includes(k.state)){const u=k.objs.find(i=>t.files.find(a=>a.toLowerCase()===i.name.toLowerCase()));if(u)return r(u,!0)}return k[t.fromMeta]&&typeof k[t.fromMeta]=="string"?k[t.fromMeta]:""})),l=async u=>{let i={content:u};return/^https?:\/\//g.test(u)&&(i=await Gt(u)),i},[s]=Wt(o,l);return e(v,{get when(){return o()},get children(){return e(ce,{w:"$full",rounded:"$xl",p:"$4",get bgColor(){return n()},shadow:"$lg",get children(){return e(qt,{get loading(){return s.loading},get children(){return e(dt,{get children(){var u;return(u=s())==null?void 0:u.content},readme:!0,get toc(){return t.fromMeta==="readme"}})}})}})}})}const _t=t=>{const n=ge("home_container");return e(Ee,{get fallback(){return e(ce,{w:"min(99%, 980px)",get children(){return t.children}})},get children(){return e(B,{when:n==="hope_container",get children(){return e(Kt,{get children(){return t.children}})}})}})};function Er(){const{to:t}=O(),n=Xt(),[r,o]=w(),[l,s]=w(),[u,i]=w(-999),a=()=>i(0),g=()=>{const c=Ir(),m=l();if(!c||!m)return;const f=c.offsetLeft>50?16:0;m.clientWidth<c.offsetLeft-f?i(0):i(`calc(-100% + ${c.offsetLeft}px - ${f}px)`)};let d;return We(()=>{const c=r();c==null||c.setPath(n.pathname),d=requestAnimationFrame(g),window.addEventListener("resize",g),C(()=>window.removeEventListener("resize",g))}),ye($e(()=>k.state,()=>{cancelAnimationFrame(d),d=requestAnimationFrame(g)})),ye($e(()=>n.pathname,()=>{const c=r();c==null||c.setPath(n.pathname)})),e(ce,{get as(){return Pe.div},initial:{x:-999},get animate(){return{x:u()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:g,ref:c=>s(c),get children(){return e(_r,{autoOpen:!0,showEmptyIcon:!0,showHiddenFolder:!1,onChange:c=>t(c),handle:c=>o(c)})}})}function Pr(){const t=N(()=>ae.show_sidebar!=="none");return e(v,{get when(){return t()},get children(){return e(Er,{})}})}const Br=()=>e(_t,{get children(){return e(U,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(lt,{files:["header.md","top.md"],fromMeta:"header"}),e(Or,{}),e(Tr,{}),e(lt,{files:["readme.md","footer.md","bottom.md"],fromMeta:"readme"}),e(Pr,{})]}})}}),Ar=ie("<span>|</span>"),Dr=()=>{const t=y();return e(U,{class:"footer",w:"$full",py:"$4",get children(){return e(T,{spacing:"$1",get children(){return[e(Jt,{href:"https://github.com/alist-org/alist",external:!0,get children(){return t("home.footer.powered_by")}}),Ar.cloneNode(!0),e(sr,{as:ut,get href(){return Me.is_guest(Fe())?"/@login":"/@manage"},get children(){return t(Me.is_guest(Fe())?"login.login":"home.footer.manage")}})]}})}})},st={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},pe="^\\s*",be="\\s*$",ne="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",re="([0-9A-Fa-f])",oe="([0-9A-Fa-f]{2})",zr=new RegExp(`${pe}rgb\\s*\\(${ne},${ne},${ne}\\)${be}`),Nr=new RegExp(`${pe}rgba\\s*\\(${ne},${ne},${ne},${ne}\\)${be}`),jr=new RegExp(`${pe}#${re}${re}${re}${be}`),Hr=new RegExp(`${pe}#${oe}${oe}${oe}${be}`),Vr=new RegExp(`${pe}#${re}${re}${re}${re}${be}`),Ur=new RegExp(`${pe}#${oe}${oe}${oe}${oe}${be}`);function I(t){return parseInt(t,16)}function $t(t){try{let n;if(n=Hr.exec(t))return[I(n[1]),I(n[2]),I(n[3]),1];if(n=zr.exec(t))return[V(n[1]),V(n[5]),V(n[9]),1];if(n=Nr.exec(t))return[V(n[1]),V(n[5]),V(n[9]),He(n[13])];if(n=jr.exec(t))return[I(n[1]+n[1]),I(n[2]+n[2]),I(n[3]+n[3]),1];if(n=Ur.exec(t))return[I(n[1]),I(n[2]),I(n[3]),He(I(n[4])/255)];if(n=Vr.exec(t))return[I(n[1]+n[1]),I(n[2]+n[2]),I(n[3]+n[3]),He(I(n[4]+n[4])/255)];if(t in st)return $t(st[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Wr(t){return t>1?1:t<0?0:t}function ct(t,n,r,o){return`rgba(${V(t)}, ${V(n)}, ${V(r)}, ${Wr(o)})`}function Ie(t,n){const[r,o,l,s=1]=Array.isArray(t)?t:$t(t);return n.alpha?ct(r,o,l,n.alpha):ct(r,o,l,s)}function He(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function V(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const qr={list:wt,grid:gt,image:ht},Gr=()=>{const t=y();return e(Je,{get children(){return[e(Ke,{as:Qt,get color(){return X()},get bgColor(){return Ie(X(),{alpha:.15})},get _hover(){return{bgColor:Ie(X(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"lg",get icon(){return e(Ee,{get children(){return[e(B,{get when(){return De()==="list"},get children(){return e(wt,{})}}),e(B,{get when(){return De()==="grid"},get children(){return e(gt,{})}}),e(B,{get when(){return De()==="image"},get children(){return e(ht,{})}})]}})}}),e(Xe,{get children(){return e(fe,{get each(){return Object.entries(qr)},children:n=>e(K,{get icon(){return e(Yt,{get component(){return n[1]}})},onSelect:()=>{Zt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})},Kr=()=>{const t=ge("logo").split(`
`),n=Te(t[0],t.pop()),r=N(()=>{switch(ae.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(mt,de(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(_t,{get children(){return e(T,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(T,{class:"header-left",h:"44px",get children(){return e(en,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(tn,{})}})}}),e(T,{class:"header-right",spacing:"$2",get children(){return e(v,{get when(){return k.state===F.Folder},get children(){return[e(v,{get when(){return ge("search_index")!=="none"},get children(){return e(T,{bg:"$neutral4",w:"$32",p:"$1",rounded:"$md",justifyContent:"space-between",border:"2px solid transparent",cursor:"pointer",get color(){return X()},get bgColor(){return Ie(X(),{alpha:.15})},get _hover(){return{bgColor:Ie(X(),{alpha:.2})}},onClick:()=>{h.emit("tool","search")},get children(){return[e(Qe,{as:nn}),e(T,{get children(){return[Re(()=>rn?e(ze,{children:"Cmd"}):e(ze,{children:"Ctrl"})),e(ze,{children:"K"})]}})]}})}}),e(Gr,{})]}})}})]}})}})}}))};function Xr(t){return Ye({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function Po(t){return Ye({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Jr(t){return Ye({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const G={rename:{icon:cr,color:"$accent9"},copy:{icon:ir,color:"$success9"},move:{icon:ur,color:"$warning9"},delete:{icon:on,color:"$danger9"},decompress:{icon:dr,color:"$primary9"},copy_link:{icon:gr,color:"$info9"},mkdir:{icon:hr,p:!0},recursive_move:{icon:Xr,p:!0},remove_empty_directory:{icon:Jr,p:!0},batch_rename:{icon:mr,p:!0},new_file:{icon:fr,p:!0},cancel_select:{icon:pr},download:{icon:an,color:"$primary9"}},Le=t=>{const n=ln.findIndex(o=>o===t.name);if(n!==-1&&!Me.can(Fe(),n))return null;const r=y();return e(ft,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(Qe,de({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:qe()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$7",rounded:"$md",get p(){var o;return(o=G[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=G[t.name])==null?void 0:o.icon},get color(){var o;return(o=G[t.name])==null?void 0:o.color}},t))}})},L=t=>{const n=y();return e(ft,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(Qe,de({get color(){return X()},get _hover(){return{bgColor:X(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Qr=()=>{const t=y(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=sn(),o="neutral";return e(Je,{placement:"top",offset:10,get children(){return[e(Ke,{as:Le,name:"copy_link"}),e(Xe,{get children(){return[e(K,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(K,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(K,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},Yr=ie("<p></p>"),Zr=()=>{const t=y(),n="neutral",{batchDownloadSelected:r,sendToAria2:o,playlistDownloadSelected:l}=kr();return e(Je,{placement:"top",offset:10,get children(){return[e(Ke,{as:Le,name:"download"}),e(Xe,{get children(){return[e(K,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(v,{get when(){return Me.is_admin(Fe())||pt("package_download")},get children(){return[e(K,{colorScheme:n,onSelect:()=>{h.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}}),e(K,{colorScheme:n,onSelect:l,get children(){return t("home.toolbar.playlist_download")}})]}}),e(K,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},eo=ke(()=>Ce(()=>import("./PackageDownload.999e46a0.js"),["assets/PackageDownload.999e46a0.js","assets/index.e46e1418.js","assets/index.c4c82a28.css"])),to=()=>{const t=y(),n=i=>{if(i==="package_download"){if(!pt("package_download"))return;o()}};h.on("tool",n),C(()=>{h.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=S(),[s,u]=w("pre_tips");return e(ee,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return t("home.toolbar.package_download")}}),e(Ge,{get fallback(){return e(Oe,{})},get children(){return e(v,{get when(){return s()==="pre_tips"},get fallback(){return e(eo,{onClose:l})},get children(){return[e(Z,{get children(){const i=Yr.cloneNode(!0);return he(i,()=>t("home.toolbar.pre_package_download-tips")),i}}),e(le,{display:"flex",gap:"$2",get children(){return[e(R,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(R,{colorScheme:"info",onClick:()=>{u("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},no=()=>{const t=N(()=>[F.Folder,F.FetchingMore].includes(k.state)&&cn()&&un());return e(Sr,{exitBeforeEnter:!0,get children(){return e(v,{get when(){return t()},get children(){return e(ce,{class:"center-toolbar",pos:"fixed",bottom:"$4",right:"50%",w:"max-content",color:"$neutral11",get as(){return Pe.div},initial:{opacity:0,scale:.9,x:"50% ",y:10},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:.9},transition:{duration:.2},get children(){return e(T,{p:"$2",get bgColor(){return Te("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(8px)"},get children(){return[e(fe,{each:["rename","move","copy","delete"],children:n=>e(Le,{name:n,onClick:()=>{h.emit("tool",n)}})}),e(Qr,{}),e(Zr,{}),e(Le,{name:"cancel_select",onClick:()=>{bt(!1)}})]}})}})}})}})},ro=()=>{const{isOpen:t,onToggle:n}=S({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=N(()=>t()?"$4":"$5"),o=N(()=>k.state===F.Folder),{refresh:l}=E();return e(ce,{class:"left-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(v,{get when(){return t()},get fallback(){return e(L,{class:"toolbar-toggle",as:ot,onClick:()=>{n()}})},get children(){return e(U,{class:"left-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Pe.div},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{duration:.2},get children(){return[e(U,{spacing:"$1",class:"left-toolbar-in",get children(){return[e(v,{get when(){return Re(()=>!!o(),!0)()&&(tt("write")||k.write)},get children(){return[e(L,{as:$r,tips:"refresh",onClick:()=>{l(void 0,!0)}}),e(L,{get as(){return G.new_file.icon},tips:"new_file",onClick:()=>{h.emit("tool","new_file")}}),e(L,{get as(){return G.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{h.emit("tool","mkdir")}}),e(L,{get as(){return G.recursive_move.icon},tips:"recursive_move",onClick:()=>{h.emit("tool","recursiveMove")}}),e(L,{get as(){return G.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{h.emit("tool","removeEmptyDirectory")}}),e(L,{get as(){return G.batch_rename.icon},tips:"batch_rename",onClick:()=>{bt(!0),h.emit("tool","batchRename")}}),e(L,{as:dn,tips:"upload",onClick:()=>{h.emit("tool","upload")}})]}}),e(v,{get when(){return Re(()=>!!o(),!0)()&&tt("offline_download")},get children(){return e(L,{as:gn,pl:"0",tips:"offline_download",onClick:()=>{h.emit("tool","offline_download")}})}}),e(v,{get when(){return hn()},get children(){return e(L,{as:br,tips:"toggle_markdown_toc",onClick:()=>{mn(s=>!s)}})}}),e(L,{tips:"toggle_checkbox",as:wr,onClick:fn}),e(L,{as:pn,tips:"local_settings",onClick:()=>{h.emit("tool","local_settings")}})]}}),e(L,{tips:"more",as:ot,onClick:n})]}})}})}})},oo=()=>{const t=y(),{isOpen:n,onOpen:r,onClose:o}=S(),[l,s]=P(bn),{pathname:u}=O(),{refresh:i}=E(),[a,g]=w(!1),d=c=>{c==="copy"&&(r(),g(!1))};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(Be,{get header(){return t("home.toolbar.choose_dst_folder")},get opened(){return n()},onClose:o,get loading(){return l()},get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.conflict_policy.overwrite_existing")}})},onSubmit:async c=>{const m=await s(u(),c,A().map(f=>f.name),a());D(m,()=>{i(),o()})}})},ao=()=>{const t=y(),{isOpen:n,onOpen:r,onClose:o}=S(),[l,s]=P(wn),{pathname:u}=O(),{refresh:i}=E(),[a,g]=w(!1),d=c=>{c==="move"&&(r(),g(!1))};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(Be,{get header(){return t("home.toolbar.choose_dst_folder")},get opened(){return n()},onClose:o,get loading(){return l()},get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.conflict_policy.overwrite_existing")}})},onSubmit:async c=>{const m=await s(u(),c,A().map(f=>f.name),a());D(m,()=>{i(),o()})}})},lo=ie("<p></p>"),so=()=>{const t=y(),{isOpen:n,onOpen:r,onClose:o}=S(),[l,s]=P(_n),{refresh:u}=E(),{pathname:i}=O(),a=g=>{g==="delete"&&r()};return h.on("tool",a),C(()=>{h.off("tool",a)}),e(ee,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return t("home.toolbar.delete")}}),e(Z,{get children(){const g=lo.cloneNode(!0);return he(g,()=>t("home.toolbar.delete-tips")),g}}),e(le,{display:"flex",gap:"$2",get children(){return[e(R,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(R,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const g=await s(i(),A().map(d=>d.name));D(g,()=>{u(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},co=()=>{const t=y(),{isOpen:n,onOpen:r,onClose:o}=S(),[l,s]=P($n),{pathname:u}=O(),{refresh:i}=E(),[a,g]=w(!1),d=c=>{if(c==="rename"){if(!yn()){h.emit("tool","batchRename");return}r(),g(!1)}};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(v,{get when(){return n()},get children(){return e(Ae,{title:"home.toolbar.input_new_name",get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.conflict_policy.overwrite_existing")}})},get isRenamingFile(){return!A()[0].is_dir},get opened(){return n()},onClose:o,get defaultValue(){var c,m;return(m=(c=A()[0])==null?void 0:c.name)!=null?m:""},get loading(){return l()},onSubmit:async c=>{const m=await s(te(u(),A()[0].name),c,a());D(m,()=>{i(),o()})}})}})},io=()=>{const t=y(),{isOpen:n,onOpen:r,onClose:o}=S(),[l,s]=P(vn),{refresh:u}=E(),{pathname:i}=O(),[a,g]=w(!1),d=c=>{c==="new_file"&&(r(),g(!1))};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(Ae,{title:"home.toolbar.input_filename",get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.conflict_policy.overwrite_existing")}})},get opened(){return n()},onClose:o,get loading(){return l()},onSubmit:async c=>{const m=await s(te(i(),c),Ue(),a());D(m,()=>{u(),o()})}})},uo=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),[o,l]=P(kn),{pathname:s}=O(),{refresh:u}=E(),i=a=>{a==="mkdir"&&n()};return h.on("tool",i),C(()=>{h.off("tool",i)}),e(Ae,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const g=await l(te(s(),a));D(g,()=>{u(),r()})}})},go=ie("<p></p>"),ho=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),{isOpen:o,onOpen:l,onClose:s}=S(),[u,i]=P(Cn),{pathname:a}=O(),{refresh:g}=E(),[d,c]=w("cancel"),m=b=>{b==="recursiveMove"&&(n(),c("cancel"))};h.on("tool",m),C(()=>{h.off("tool",m)});const f=y();return[e(ee,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return f("home.toolbar.recursive_move")}}),e(Z,{get children(){const b=go.cloneNode(!0);return he(b,()=>f("home.toolbar.recursive_move_directory-tips")),b}}),e(le,{display:"flex",gap:"$2",get children(){return[e(R,{onClick:()=>r(),colorScheme:"neutral",get children(){return f("global.cancel")}}),e(R,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return f("global.confirm")}})]}})]}})]}}),e(Be,{get header(){return f("home.toolbar.choose_dst_folder")},get opened(){return o()},onClose:s,get loading(){return u()},get footerSlot(){return e(T,{mr:"auto",flex:"0.8",spacing:"$1",get children(){return e(xn,{get value(){return d()},onChange:b=>c(b),get children(){return[e(Ne,{value:"cancel",get children(){return f("home.conflict_policy.cancel_if_exists")}}),e(Ne,{value:"overwrite",get children(){return f("home.conflict_policy.overwrite_existing")}}),e(Ne,{value:"skip",get children(){return f("home.conflict_policy.skip_existing")}})]}})}})},onSubmit:async b=>{const M=await i(a(),b,d());D(M,()=>{g(),s()})}})]},mo=ie("<p></p>"),fo=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),{pathname:o}=O(),[l,s]=P(Sn),{refresh:u}=E(),i=g=>{g==="removeEmptyDirectory"&&n()};h.on("tool",i),C(()=>{h.off("tool",i)});const a=y();return e(ee,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(Z,{get children(){const g=mo.cloneNode(!0);return he(g,()=>a("home.toolbar.remove_empty_directory-tips")),g}}),e(le,{display:"flex",gap:"$2",get children(){return[e(R,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(R,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const g=await s(o());D(g,()=>{u(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},po=t=>e(Pe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(T,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:qe()}},get children(){return[e(se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),bo=ie("<p></p>"),wo=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),{isOpen:o,onOpen:l,onClose:s}=S(),[u,i]=P(On),{pathname:a}=O(),{refresh:g}=E(),[d,c]=w("1"),[m,f]=w(""),[b,M]=w(""),[_,x]=w("string"),[W,q]=w([]),p=y(),j=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),ue=$=>{$==="batchRename"&&l()};h.on("tool",ue),C(()=>{h.off("tool",ue)});const we=()=>{if(!m()||!b()){z.warning(p("global.empty_input"));return}const $=new RegExp(m(),"g");let _e;if(d()==="1")_e=A().filter(H=>H.name.match(m())).map(H=>({src_name:H.name,new_name:H.name.replace($,b())}));else{let H=b();_e=A().map(xe=>{let Ze="";const et=xe.name.lastIndexOf(".");et!==-1&&(Ze=xe.name.substring(et+1));const yt={src_name:xe.name,new_name:m()+H+"."+Ze};return H=(parseInt(H)+1).toString().padStart(H.length,"0"),yt})}q(_e),n(),s()};return[e(ee,{blockScrollOnMount:!1,get opened(){return o()},onClose:s,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return p("home.toolbar.batch_rename")}}),e(Z,{get children(){return[e(Mn,{defaultValue:"1",onChange:$=>{c($),$==="1"?x("string"):$==="2"&&x("number")},get children(){return e(T,{spacing:"$4",get children(){return[e(nt,{value:"1",get children(){return p("home.toolbar.regex_rename")}}),e(nt,{value:"2",get children(){return p("home.toolbar.sequential_renaming")}})]}})}}),e(U,{spacing:"$2",get children(){return[(()=>{const $=bo.cloneNode(!0);return $.style.setProperty("margin","10px 0"),he($,e(v,{get when(){return d()==="1"},get children(){return p("home.toolbar.regular_rename")}}),null),he($,e(v,{get when(){return d()==="2"},get children(){return p("home.toolbar.sequential_renaming_desc")}}),null),$})(),e(ve,{id:"modal-input1",type:"string",get value(){return m()},onInput:$=>{f($.currentTarget.value)},onKeyDown:$=>{$.key==="Enter"&&we()}}),e(ve,{id:"modal-input2",get type(){return _()},get value(){return b()},onInput:$=>{M($.currentTarget.value)},onKeyDown:$=>{$.key==="Enter"&&we()}})]}})]}}),e(le,{display:"flex",gap:"$2",get children(){return[e(R,{onClick:()=>{c("1"),x("string"),s()},colorScheme:"neutral",get children(){return p("global.cancel")}}),e(R,{onClick:()=>we(),get disabled(){return!m()||!b()},get children(){return p("global.ok")}})]}})]}})]}}),e(ee,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return p("home.toolbar.regex_rename_preview")}}),e(Z,{get children(){return e(U,{class:"list",w:"$full",spacing:"$1",get children(){return[e(T,{class:"title",w:"$full",p:"$2",get children(){return[e(se,de({w:{"@initial":"50%","@md":"50%"}},j,{get children(){return p("home.toolbar.regex_rename_preview_old_name")}})),e(se,de({w:{"@initial":"50%","@md":"50%"}},j,{get children(){return p("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(fe,{get each(){return W()},children:($,_e)=>e(po,{obj:$,get index(){return _e()}})})]}})}}),e(le,{display:"flex",gap:"$2",get children(){return[e(R,{onClick:()=>{q([]),c("1"),x("string"),r(),s()},colorScheme:"neutral",get children(){return p("global.cancel")}}),e(R,{onClick:()=>{q([]),r(),l()},colorScheme:"neutral",get children(){return p("global.back")}}),e(R,{get loading(){return u()},onClick:async()=>{const $=await i(a(),W());D($,()=>{q([]),f(""),M(""),c("1"),x("string"),g(),s(),r()})},get disabled(){return W().length==0},get children(){return p("global.ok")}})]}})]}})]}})]},_o=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],$o=()=>{const t=y(),[n,r]=w([]),[o,l]=P(()=>Fn.get("/public/offline_download_tools")),[s,u]=w(""),[i,a]=w("delete_on_upload_succeed");We(async()=>{const _=await l();Rn(_,x=>{r(x),u(x[0])})});const{isOpen:g,onOpen:d,onClose:c}=S(),[m,f]=P(In),{pathname:b}=O(),M=_=>{_==="offline_download"&&d()};return h.on("tool",M),C(()=>{h.off("tool",M)}),e(Ae,{title:"home.toolbar.offline_download",type:"text",get opened(){return g()},onClose:c,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(ce,{mb:"$2",get children(){return e(rt,{get value(){return s()},onChange:_=>u(_),get options(){return n().map(_=>({value:_,label:_}))}})}})},get bottomSlot(){return e(ce,{mb:"$2",get children(){return e(rt,{get value(){return i()},onChange:_=>a(_),get options(){return _o.map(_=>({value:_,label:t(`home.toolbar.delete_policy.${_}`)}))}})}})},onSubmit:async _=>{const x=await f(b(),_.split(`
`),s(),i());D(x,()=>{c()})}})},yo=t=>{const n=y(),r=u=>{u===t.name&&l()};h.on("tool",r),C(()=>{h.off("tool",r)});const{isOpen:o,onOpen:l,onClose:s}=S();return e(ee,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:s,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Ln,{}),e(Y,{get children(){return n(t.title)}}),e(Z,{get children(){return e(v,{get when(){return o()},get children(){return e(Ge,{get fallback(){return e(Oe,{})},get children(){return t.children}})}})}})]}})]}})};function vo(t){const n=y();return e(er,{get children(){return[e(Hn,{get children(){return n(`home.local_settings.${t.key}`)}}),e(Ee,{get fallback(){return e(ve,{get value(){return ae[t.key]},onInput:r=>{je(t.key,r.currentTarget.value)}})},get children(){return[e(B,{get when(){return t.type==="select"},get children(){return e(Vn,{get id(){return t.key},get defaultValue(){return ae[t.key]},onChange:r=>je(t.key,r),get children(){return[e(Un,{get children(){return[e(Wn,{get children(){return n("global.choose")}}),e(qn,{}),e(Gn,{})]}}),e(Kn,{get children(){return e(Xn,{get children(){return e(fe,{get each(){return Re(()=>typeof t.options=="function",!0)()?t.options():t.options},children:r=>e(Jn,{value:r,get children(){return[e(Qn,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(Yn,{})]}})})}})}})]}})}}),e(B,{get when(){return t.type==="boolean"},get children(){return e(Zn,{get defaultChecked(){return ae[t.key]==="true"},onChange:r=>{je(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const ko=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),o=y(),l=s=>{s==="local_settings"&&n()};return h.on("tool",l),C(()=>{h.off("tool",l)}),e(jn,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(Tn,{}),e(En,{get children(){return[e(Pn,{}),e(Bn,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(An,{get children(){return[e(U,{spacing:"$2",get children(){return e(fe,{get each(){return Dn.filter(s=>!s.hidden)},children:s=>e(vo,s)})}}),e(mt,{mt:"$4",get children(){return e(T,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(zn,{}),e(Nn,{})]}})}})]}})]}})]}})},Co=ie("<div></div>"),xo=()=>{const t=y(),{isOpen:n,onOpen:r,onClose:o}=S(),[l,s]=P(tr),{pathname:u}=O(),{refresh:i}=E(),[a,g]=w(""),[d,c]=w(""),[m,f]=w(!0),[b,M]=w(!1),_=p=>{p==="decompress"&&(Ve(()=>{f(!0),g("/"),c("")}),r())},x=p=>{const{inner:j,pass:ue}=JSON.parse(p);Ve(()=>{f(!1),g(j),c(ue)}),r()};h.on("tool",_),h.on("extract",x),C(()=>{h.off("tool",_),h.off("extract",x)});const W=()=>a()==="/"?t("home.toolbar.choose_dst_folder"):t("home.toolbar.archive.extract_header",{path:a()}),q=()=>{let p=u();if(a()==="/")return{path:p,name:A()[0].name};{let j=p.lastIndexOf("/");return{path:p.slice(0,j),name:p.slice(j+1)}}};return e(Be,{get header(){return W()},get opened(){return n()},onClose:o,get loading(){return l()},onSubmit:async p=>{const{path:j,name:ue}=q(),we=await s(j,p,ue,d(),a(),m(),b());D(we,()=>{i(),o()})},get children(){return e(U,{spacing:"$1",alignItems:"flex-start",get children(){return[e(T,{width:"100%",spacing:"$1",get children(){return[e(se,{size:"sm",css:{whiteSpace:"nowrap"},get children(){return t("home.toolbar.decompress-pass")}}),e(ve,{get value(){return d()},onInput:p=>c(p.target.value),size:"sm",flexGrow:"1"})]}}),e(me,{get checked(){return m()},onChange:p=>f(p.target.checked),get children(){return t("home.toolbar.decompress-cache-full")}}),e(me,{get checked(){return b()},onChange:p=>M(p.target.checked),get children(){return t("home.toolbar.decompress-put-into-new")}}),Co.cloneNode(!0)]}})}})},So=ke(()=>Ce(()=>import("./Upload.04f5f6f5.js"),["assets/Upload.04f5f6f5.js","assets/index.e46e1418.js","assets/index.c4c82a28.css","assets/index.ab712466.js"])),Oo=()=>[e(oo,{}),e(ao,{}),e(co,{}),e(so,{}),e(xo,{}),e(io,{}),e(uo,{}),e(ho,{}),e(fo,{}),e(wo,{}),e($o,{}),e(to,{}),e(yo,{name:"upload",title:"home.toolbar.upload",get children(){return e(So,{})}}),e(ko,{})],Mo=()=>e(rr,{get children(){return[e(ro,{}),e(no,{}),e(Oo,{}),e(nr,{})]}}),Fo=()=>{ar(ge("site_title"));const t=ge("announcement");return t&&z.render(()=>e(dt,{children:t})),[e(Kr,{}),e(Mo,{}),e(Br,{}),e(Dr,{})]},Bo=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"}));export{Po as I,Bo as L,G as o,kr as u};
