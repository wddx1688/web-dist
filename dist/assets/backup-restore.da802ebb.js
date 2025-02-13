import{m as D,a as ue,a$ as g,bg as l,h as o,aj as N,C as F,bH as ge,bT as le,bu as E,bG as me,I as pe,a7 as J,H as fe,a6 as H,cm as $,n as he}from"./index.3de65f00.js";import{b as be}from"./useTitle.7ea96b5f.js";import{c as f}from"./index.0f29aec4.js";import"./_commonjs-dynamic-modules.30ae7933.js";const A={success:{icon:"\u2705",color:"$success9"},error:{icon:"\u274C",color:"$danger9"},info:{icon:"\u2139\uFE0F",color:"$info9"}},ye=p=>o(N,{w:"$full",spacing:"$1",get children(){return[o(H,{get children(){return A[p.type].icon}}),o(H,{get color(){return A[p.type].color},get children(){return p.msg}})]}}),Le=()=>{const[p,L]=D(!1),[h,w]=D(""),t=ue();be("manage.sidemenu.backup-restore");let _;const[V,G]=D([]),i=(e,r)=>{G(d=>[...d,{type:r,msg:e}]),_.scrollTop=_.scrollHeight},[P,W]=g(()=>l.get("/admin/setting/list")),[Y,O]=g(()=>l.get("/admin/user/list")),[q,I]=g(()=>l.get("/admin/meta/list")),[z,M]=g(()=>l.get("/admin/storage/list")),K=()=>P()||Y()||q()||z();function U(e,r){if(r=="")return e;const d=f.AES.encrypt(JSON.stringify(e),r).toString();return f.enc.Base64.stringify(f.enc.Utf8.parse(d))}function R(e,r,d,c){if(!c)return e;const a=f.enc.Base64.parse(e).toString(f.enc.Utf8);return d?f.AES.decrypt(a,r).toString(f.enc.Utf8):JSON.parse(f.AES.decrypt(a,r).toString(f.enc.Utf8))}const T=async()=>{i(t("br.start_backup"),"info");const e={encrypted:"",settings:[],users:[],storages:[],metas:[]};h()!=""&&(e.encrypted=U("encrypted",h()));for(const r of[{name:"settings",fn:W,page:!1},{name:"users",fn:O,page:!0},{name:"storages",fn:M,page:!0},{name:"metas",fn:I,page:!0}]){const d=await r.fn();$(d,c=>{if(i(t("br.success_backup_item",{item:t(`manage.sidemenu.${r.name}`)}),"success"),r.page){for(let a=0;a<c.content.length;a++){const n=c.content[a];for(const m in n)n[m]=U(n[m],h())}e[r.name]=c.content}else{for(let a=0;a<c.length;a++){const n=c[a];for(const m in n)n[m]=U(n[m],h())}e[r.name]=c}},c=>{i(t("br.failed_backup_item",{item:t(`manage.sidemenu.${r.name}`)})+":"+c,"error")})}we("alist_backup_"+new Date().toLocaleString()+".json",e),i(t("br.finish_backup"),"info")},[Q,X]=g(e=>l.post("/admin/setting/save",e)),[Z,x]=g(e=>l.post("/admin/user/create",e)),[ee,B]=g(e=>l.post("/admin/storage/create",e)),[te,C]=g(e=>l.post("/admin/meta/create",e)),[ne,re]=g(e=>l.post("/admin/user/update",e)),[ae,se]=g(e=>l.post("/admin/storage/update",e)),[oe,ce]=g(e=>l.post("/admin/meta/update",e));async function v(e,r,d,c,a,n){const m=(await r()).data.content;for(const y in e){const s=e[y],u=s[a],k=(m.find(j=>j[a]===u)?"update":"add")==="add"?d:c;await $(await k(s),()=>{i(t("br.success_restore_item",{item:t(n)})+`-[${u}]`,"success")},j=>{i(t("br.failed_restore_item",{item:t(n)})+`-[${u}]:`+j,"error")})}}const ie=()=>Q()||Z()||ee()||te()||ne()||ae()||oe(),de=async()=>{i(t("br.start_restore"),"info");const e=document.createElement("input");e.type="file",e.accept="application/json",e.onchange=async r=>{const d=r.target.files;if(!d||d.length===0){he.warning(t("br.no_file"));return}const c=d[0],a=new FileReader;a.onload=async()=>{const n=JSON.parse(a.result),m=Boolean(n.encrypted);if(m&&R(n.encrypted,h(),!0,!0)!=='"encrypted"'){i(t("br.wrong_encrypt_password"),"error");return}const y=Object.values(n);for(let s=y.length-4;s<y.length;s++){const u=y[s];console.log(u);for(let b=0;b<u.length;b++){const S=u[b];for(const k in S)S[k]=R(S[k],h(),!1,m)}}if(p()&&await T(),n.settings&&$(await X(n.settings.filter(s=>!["version","index_progress"].includes(s.key))),()=>{i(t("br.success_restore_item",{item:t("manage.sidemenu.settings")}),"success")},s=>{i(t("br.failed_restore_item",{item:t("manage.sidemenu.settings")})+":"+s,"error")}),p())await v(n.users,O,x,re,"username","manage.sidemenu.users"),await v(n.storages,M,B,se,"mount_path","manage.sidemenu.storages"),await v(n.metas,I,C,ce,"path","manage.sidemenu.metas");else for(const s of[{name:"users",fn:x,data:n.users,key:"username"},{name:"storages",fn:B,data:n.storages,key:"mount_path"},{name:"metas",fn:C,data:n.metas,key:"path"}])for(const u of s.data||[])u.id=0,$(await s.fn(u),()=>{i(t("br.success_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+`-[${u[s.key]}]`,"success")},b=>{i(t("br.failed_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+` [ ${u[s.key]} ] :`+b,"error")});i(t("br.finish_restore"),"info")},a.readAsText(c)},e.click()};return o(J,{spacing:"$2",w:"$full",get children(){return[o(N,{spacing:"$2",w:"$full",get children(){return[o(F,{get loading(){return K()},onClick:()=>{T()},colorScheme:"accent",get children(){return t("br.backup")}}),o(F,{get loading(){return ie()},onClick:()=>{de()},get children(){return t("br.restore")}})]}}),o(ge,{w:"$full",display:"flex",flexDirection:"column",get children(){return o(le,{w:"$full",direction:"column",gap:"$1",get children(){return[o(E,{get children(){return t("br.override")}}),o(me,{id:"restore-override",get checked(){return p()},onChange:e=>L(e.currentTarget.checked)}),o(E,{get children(){return t("br.encrypt_password")}}),o(pe,{id:"password",type:"password",get placeholder(){return t("br.encrypt_password_placeholder")},onInput:e=>w(e.currentTarget.value)})]}})}}),o(J,{p:"$2",ref(e){const r=_;typeof r=="function"?r(e):_=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return o(fe,{get each(){return V()},children:e=>o(ye,e)})}})]}})};function we(p,L){const h=new Blob([JSON.stringify(L,null,2)],{type:"application/json"}),w=URL.createObjectURL(h),t=document.createElement("a");t.href=w,t.download=p,t.click(),URL.revokeObjectURL(w)}export{Le as default};
