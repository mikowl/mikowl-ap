import{r as s}from"./index.45a47ed6.js";import{j as a}from"./jsx-runtime.73bdaf71.js";const c=()=>{const[e,n]=s.useState(null),[m,t]=s.useState(!1),d=()=>{fetch("https://quokka.pics/api/").then(o=>o.json()).then(o=>{t(!1),n(o.image)})},r=()=>{t(!0),console.log("handleImageLoad")};return a.jsxs("div",{children:[a.jsx("button",{className:"btn",onClick:d,children:"🐨 The Random Quokka Button 🐨"}),e&&a.jsx("img",{className:"rounded-md border-color-[#73d9b0] max-h-96 min-h-[24rem] mt-2 transition-all",style:{border:"3px solid #73d9b0"},src:e,alt:"Random Quokka",onLoad:r})]})};export{c as default};