import{u as n,r as i,j as t,L as c,b as l}from"./index-add16883.js";import{H as p,R as x,a as m,F as h,b as d,A as u,I as j,c as b}from"./index.esm-2040b4d3.js";import f from"./Dashboard-e8830f5b.js";import g from"./TopContributer-a8656136.js";import{T as w,S as N}from"./AdminSidebar-4cc3fe71.js";import C from"./AboutUs-e56a0566.js";import v from"./ContactUs-d3de60da.js";import S from"./Login-ecc04282.js";import"./iconBase-dfa3fba1.js";import"./Semester-56511858.js";const U=[{name:"Dashboard",icon:t.jsx(x,{}),path:"/dashboard"},{name:"Top Contributor",icon:t.jsx(m,{}),path:"/topContributer"},{name:"Stopwatch",icon:t.jsx(h,{}),path:"/stopwatch"},{name:"Toss",icon:t.jsx(d,{}),path:"/toss"},{name:"About Us",icon:t.jsx(u,{}),path:"/aboutUs"},{name:"Contact Us",icon:t.jsx(j,{}),path:"/contactUs"},{name:"Login",icon:t.jsx(b,{}),path:"/login"}],E=()=>{const e=n(),[a,o]=i.useState(e.pathname),r=s=>{o(s)};return t.jsxs("div",{className:"flex h-screen",children:[t.jsxs("div",{className:"w-16 bg-blue-600 text-white p-4 space-y-6",children:[t.jsx(p,{className:"cursor-pointer"}),U.map(s=>t.jsx("div",{className:`p-3 rounded-md cursor-pointer ${s.path===a?"bg-gray-500":""}`,onClick:()=>r(s.path),children:s.icon}))]}),t.jsx("div",{className:"flex-grow p-4 bg-gray-100",children:F(a)})]})};function F(e){switch(e){case"/dashboard":return t.jsx(f,{});case"/topContributer":return t.jsx(g,{});case"/stopwatch":return t.jsx(N,{});case"/toss":return t.jsx(w,{});case"/aboutUs":return t.jsx(C,{});case"/contactUs":return t.jsx(v,{});case"/login":return t.jsx(S,{});default:return t.jsx(c,{to:"/dashboard",className:"items-center justify-end ",children:t.jsxs("div",{className:"px-12rem w-[1fr] h-[100vh]  flex justify-center flex-col items-center bg-[Black] gap-6",children:[t.jsxs("div",{className:"text-white text-6xl md:text-8xl text-center text-bold",children:["Welcome to ",t.jsx("span",{className:"text-[#888]",children:"Note-"}),t.jsx("span",{className:"text-[#4f92ff]",children:"Vault"})]}),t.jsx(l,{className:"bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white",children:"Get started"})]})})}}export{E as default};
