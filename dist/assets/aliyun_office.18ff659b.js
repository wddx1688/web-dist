import{b as r,a$ as i,bg as c,_ as p,h as o,ac as d,ad as u,bh as l}from"./index.e46e1418.js";const g=()=>{const{pathname:t}=r(),[s,n]=i(()=>c.post("/fs/other",{path:t(),password:p(),method:"doc_preview"}));return(async()=>{const a=await n();l(a,e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})})})(),o(u,{get loading(){return s()},get children(){return o(d,{w:"$full",h:"70vh",id:"office-preview"})}})};export{g as default};
