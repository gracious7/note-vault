import{u as x,r as a,j as t,b as h}from"./index-8d2b8362.js";import{R as p,a as g,I as u,b as f}from"./index.esm-c4456213.js";import{F as j,a as b}from"./index.esm-baa7f5d7.js";import{A as w}from"./index.esm-5990a04b.js";import c from"./Dashboard-71f119df.js";import F from"./TopContributer-355e1fce.js";import v from"./Stopwatch-5c2dabdb.js";import C from"./Toss-4cee7dd1.js";import N from"./AboutUs-6b448ed8.js";import U from"./ContactUs-805920fc.js";import S from"./Login-b2bacc8c.js";import"./iconBase-2378b751.js";import"./PdfViewer-fb57bbad.js";const L="/assets/logo-c2d05c92.png",T=[{name:"Dashboard",icon:t.jsx(p,{}),path:"/dashboard"},{name:"Top Contributor",icon:t.jsx(g,{}),path:"/topContributer"},{name:"Stopwatch",icon:t.jsx(j,{}),path:"/stopwatch"},{name:"Toss",icon:t.jsx(b,{}),path:"/toss"},{name:"About Us",icon:t.jsx(w,{}),path:"/aboutUs"},{name:"Contact Us",icon:t.jsx(u,{}),path:"/contactUs"},{name:"Login",icon:t.jsx(f,{}),path:"/login"}],O=()=>{const s=x(),[r,n]=a.useState(s.pathname),i=localStorage.getItem("firstVisitor"),[l,o]=a.useState(null);a.useEffect(()=>{i||o("welcome")},[]);const m=()=>{o(null),localStorage.setItem("firstVisitor","1")},d=e=>{n(e)};return t.jsx(t.Fragment,{children:l?t.jsxs("div",{className:"px-12rem w-[1fr] h-[100vh]  flex justify-center flex-col items-center bg-[Black] gap-6",children:[t.jsxs("div",{className:"text-white text-6xl md:text-8xl text-center text-bold",children:["Welcome to ",t.jsx("span",{className:"text-[#888]",children:"Note-"}),t.jsx("span",{className:"text-[#4f92ff]",children:"Vault"})]}),t.jsx(h,{className:"bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white",onClick:m,children:"Get started"})]}):t.jsxs("div",{className:"flex h-screen",children:[t.jsxs("div",{className:"w-[14rem] overflow-hidden bg-[white] text-[#4a4949] p-4 space-y-6 flex flex-col items-start fixed top-0 bottom-0",children:[t.jsx("div",{className:"flex items-center text-xl cursor-pointer",children:t.jsx("div",{children:t.jsx("img",{src:L,alt:"logo",className:"rounded-lg shadow-xl cursor-pointer",width:"90%"})})}),T.map(e=>t.jsxs("div",{title:`${e.path.toUpperCase().replace("/","")}`,className:`  p-3 rounded-md cursor-pointer ${`${e.path===r?"bg-white text-[#4a4949] rounded-l-full w-[120%]":""} md:text-md lg:text-lg`}
                lg:text-lg
                md:text-base`,onClick:()=>d(e.path),children:[" ",t.jsxs("div",{className:"flex gap-2 items-center font-medium",children:[t.jsx("div",{children:e.icon}),t.jsx("div",{children:e.path==="/dashboard"?t.jsx(t.Fragment,{children:"Dashboard"}):e.path==="/topContributer"?t.jsx(t.Fragment,{children:"Top Contributer"}):e.path==="/stopwatch"?t.jsx(t.Fragment,{children:"Stopwatch"}):e.path==="/aboutUs"?t.jsx(t.Fragment,{children:"About Us"}):e.path==="/contactUs"?t.jsx(t.Fragment,{children:"Contact Us"}):e.path==="/login"?t.jsx(t.Fragment,{children:"Login"}):e.path==="/toss"?t.jsx(t.Fragment,{children:"Music"}):t.jsx(t.Fragment,{})})]})]}))]}),t.jsx("div",{className:"flex-grow p-4 bg-gray-100 lg:ml-[13rem]",children:A(r)})]})})};function A(s){switch(s){case"/dashboard":return t.jsx(c,{});case"/topContributer":return t.jsx(F,{});case"/stopwatch":return t.jsx(v,{});case"/toss":return t.jsx(C,{});case"/aboutUs":return t.jsx(N,{});case"/contactUs":return t.jsx(U,{});case"/login":return t.jsx(S,{});default:return t.jsx(c,{})}}export{O as default};