import{a as h,h as e,Y as F,aq as G,aj as o,a6 as v,co as R,aE as V,ac as x,a7 as D,ds as l,dp as p,b as B,a$ as C,bg as i,C as c,b2 as q,bh as u,n as L,m as k,k as E,ck as P,S as W,bw as X,bx as j,by as z,bz as N,bA as Y,bB as J,bC as K,H as d,bD as Q,bE as U,bF as Z,bG as ee,a0 as re,a1 as _,d8 as te,dm as ae,dn as ne,dq as T,dr as se}from"./index.34393b7b.js";import{b as le}from"./useTitle.e2ee3a7d.js";import{D as oe}from"./DeletePopover.9d8a6d62.js";function O(r){const a=h(),{to:g}=B(),[m,b]=C(()=>i.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,n]=C(()=>i.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(c,{onClick:()=>{g(`/@manage/storages/edit/${r.storage.id}`)},get children(){return a("global.edit")}}),e(c,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await n();q(s,()=>{r.refresh()})},get children(){return a(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return m()},onClick:async()=>{const s=await b();u(s,()=>{L.success(a("global.delete_success")),r.refresh()})}})]}function ie(r){const a=h();return e(D,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return F("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${G()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(R,{colorScheme:"info",get children(){return a(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[V(()=>a("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(O,r)}})]}})}function ce(r){const a=h();return e(p,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return a(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(O,r)}})}})]}})}const me=()=>{const r=h();le("manage.sidemenu.storages");const{to:a}=B(),[g,m]=C(()=>i.get("/admin/storage/list")),[b,S]=k([]),n=async()=>{const t=await m();u(t,w=>S(w.content))},[s,M]=k([]),[$,I]=k([]);(async()=>{const t=await i.get("/admin/driver/names");u(t,w=>M(w))})(),n();const H=async()=>{const t=await i.post("/admin/storage/load_all");u(t,()=>{L.success(r("storages.other.start_load_success"))})},y=E(()=>b().filter(t=>$().length===0?!0:$().includes(t.driver))),[f,A]=P("storages-layout","grid");return e(D,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(c,{colorScheme:"accent",get loading(){return g()},onClick:n,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{a("/@manage/storages/add")},get children(){return r("global.add")}}),e(c,{colorScheme:"warning",get loading(){return g()},onClick:H,get children(){return r("storages.other.load_all")}}),e(W,{get when(){return s().length>0},get children(){return e(X,{multiple:!0,get value(){return $()},onChange:I,get children(){return[e(j,{get children(){return[e(z,{get children(){return r("storages.other.filter_by_driver")}}),e(N,{}),e(Y,{})]}}),e(J,{get children(){return e(K,{get children(){return e(d,{get each(){return s()},children:t=>e(Q,{value:t,get children(){return[e(U,{get children(){return r(`drivers.drivers.${t}`)}}),e(Z,{})]}})})}})}})]}})}}),e(ee,{get checked(){return f()==="table"},onChange:t=>{A(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(_,{get when(){return f()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return y()},children:t=>e(ie,{storage:t,refresh:n})})}})}}),e(_,{get when(){return f()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ae,{highlightOnHover:!0,dense:!0,get children(){return[e(ne,{get children(){return e(p,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(T,{get children(){return r(`storages.common.${t}`)}})}),e(T,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return y()},children:t=>e(ce,{storage:t,refresh:n})})}})]}})}})}})]}})]}})};export{me as default};
