import{r as e}from"./index.45a47ed6.js";import{u as a}from"./useUniqueId.843aecf2.js";import{j as o}from"./jsx-runtime.73bdaf71.js";let m=({heading:r,content:s})=>{let[i,n]=e.useState(!1),c=a("accordion");return o.jsxs("div",{className:"accordion",children:[o.jsx("h3",{children:o.jsxs("button",{id:c,"aria-controls":c,"aria-expanded":i,onClick:()=>n(!i),className:"accordion-toggle",children:[r,o.jsx("i",{className:`chevron-down ${i?"open":""}`})]})}),o.jsx("p",{id:c,role:"region","aria-labelledby":c,className:`accordion-content ${i?"active":""}`,children:s})]})};export{m as default};