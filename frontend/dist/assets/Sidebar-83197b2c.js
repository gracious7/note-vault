import{u as d,r,j as e,L as x}from"./index-2423b5c2.js";import{A as h}from"./index.esm-c1ba73b6.js";import{F as u,a as j}from"./index.esm-8b69f59f.js";import{G as p}from"./iconBase-c0b220ac.js";import{R as m,b as l,I as b,a as f}from"./index.esm-a02a93a0.js";function v(t){return p({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(t)}const R=()=>{const t=d(),[o,i]=r.useState(!1),[n,c]=r.useState(window.innerWidth<1100),a=()=>{c(window.innerWidth<1100)};return r.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"admin-container",children:[n&&e.jsx("button",{id:"hamburger",onClick:()=>i(!0),children:e.jsx(v,{})}),e.jsxs("aside",{style:n?{width:"20rem",height:"100vh",position:"fixed",top:0,left:o?"0":"-20rem",transition:"all 0.5s"}:{},children:[e.jsxs("h2",{className:"font-bold text-xl pl-4 text-[#777]",children:["Note-",e.jsx("span",{className:"text-[#4f92ff]",children:"Vault"})]}),e.jsx(w,{location:t}),e.jsx(g,{location:t}),e.jsx(I,{location:t}),n&&e.jsx("button",{id:"close-sidebar",onClick:()=>i(!1),children:"Close"})]})]})})},w=({location:t})=>e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold text-xl",children:"Dashboard"}),e.jsxs("ul",{children:[e.jsx(s,{url:"/dashboard",text:"Home",Icon:m,location:t}),e.jsx(s,{url:"/newcontribution",text:"Contribute",Icon:l,location:t}),e.jsx(s,{url:"/top-contributer",text:"Top Contributers",Icon:b,location:t}),e.jsx(s,{url:"/aboutus",text:"About us",Icon:l,location:t}),e.jsx(s,{url:"/contactus",text:"Contact Us",Icon:h,location:t})]})]}),g=({location:t})=>e.jsxs("div",{children:[e.jsx("h5",{children:"Apps"}),e.jsxs("ul",{children:[e.jsx(s,{url:"/app/stopwatch",text:"Stopwatch",Icon:u,location:t}),e.jsx(s,{url:"/app/toss",text:"Study Music",Icon:j,location:t})]})]}),I=({location:t})=>e.jsx("div",{children:e.jsx("ul",{children:e.jsx(s,{url:"/login",text:"Login",Icon:f,location:t})})}),s=({url:t,text:o,location:i,Icon:n})=>e.jsx("li",{style:{backgroundColor:i.pathname.includes(t)?"rgba(0,115,255,0.1)":"white"},children:e.jsxs(x,{to:t,style:{color:i.pathname.includes(t)?"rgb(0,115,255)":"black"},children:[e.jsx(n,{}),o]})});export{R as default};