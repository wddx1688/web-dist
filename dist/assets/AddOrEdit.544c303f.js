import{a as f,b as _,cn as k,a$ as p,bg as o,h as e,a7 as v,bS as F,S as h,al as c,bH as i,bu as l,I as m,bT as S,H as L,aL as T,b1 as b,C as q,bh as g,n as D,am as M,da as P,ad as U}from"./index.a5b62b25.js";import{a as E}from"./FolderTree.cceaadc0.js";import{P as H}from"./PublicKeys.e992c237.js";import"./index.cfa19758.js";const R=r=>{const u=f();return e(i,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(l,{mb:"0",get children(){return u(`users.permissions.${r.name}`)}}),e(b,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},V=()=>{const r=f(),{params:u,back:w}=_(),{id:t}=u,[n,a]=k({id:0,username:"",password:"",base_path:"",role:0,permission:0,disabled:!1,sso_id:""}),[$,y]=p(()=>o.get(`/admin/user/get?id=${t}`));t&&(async()=>{const s=await y();g(s,a)})();const[x,I]=p(()=>o.post(`/admin/user/${t?"update":"create"}`,n));return e(U,{get loading(){return $()},get children(){return e(v,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(F,{get children(){return r(`global.${t?"edit":"add"}`)}}),e(h,{get when(){return!c.is_guest(n)},get children(){return[e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(m,{id:"username",get value(){return n.username},onInput:s=>a("username",s.currentTarget.value)})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(m,{id:"password",type:"password",placeholder:"********",get value(){return n.password},onInput:s=>a("password",s.currentTarget.value)})]}})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(E,{id:"base_path",get value(){return n.base_path},onChange:s=>a("base_path",s),onlyFolder:!0})]}}),e(i,{w:"$full",required:!0,get children(){return[e(l,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(S,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(L,{each:T,children:(s,d)=>e(R,{name:s,get can(){return c.can(n,d())},onChange:C=>{C?a("permission",n.permission|=1<<d()):a("permission",n.permission&=~(1<<d()))}})})}})]}}),e(i,{w:"fit-content",display:"flex",get children(){return e(b,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:s=>a("disabled",s.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.disabled},get children(){return r("users.disabled")}})}}),e(q,{get loading(){return x()},onClick:async()=>{const s=await I();g(s,async()=>{D.success(r("global.save_success")),n.username===M().username&&g(await o.get("/me"),P),w()})},get children(){return r(`global.${t?"save":"add"}`)}}),e(h,{get when(){return t&&!c.is_guest(n)},get children(){return e(H,{isMine:!1,get userId(){return parseInt(t)}})}})]}})}})};export{V as default};
