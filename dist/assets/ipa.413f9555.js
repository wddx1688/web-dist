import{a as c,m as n,aa as p,h as e,aj as u,C as r,dO as g,dP as d,a2 as a,dN as f}from"./index.6fdcb702.js";import{F as h}from"./File.d7428cef.js";import"./icon.753694dd.js";import"./index.da31ed0e.js";import"./Layout.cd60cf02.js";import"./useTitle.51f071e8.js";import"./FolderTree.7bd3e479.js";import"./index.b8c78517.js";import"./index.3b67911a.js";const R=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};
