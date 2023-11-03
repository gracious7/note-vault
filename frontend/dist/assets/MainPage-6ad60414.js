import{r as a,j as t,b as d}from"./index-2423b5c2.js";import{R as h,I as x,a as p}from"./index.esm-a02a93a0.js";import{F as f,a as u}from"./index.esm-8b69f59f.js";import{A as j,a as g}from"./index.esm-c1ba73b6.js";import{G as b}from"./iconBase-c0b220ac.js";import{D as o,B as w}from"./Dashboard-2f60a5eb.js";import v from"./TopContributer-4a084fa6.js";import C from"./Stopwatch-8fb59a4b.js";import F from"./Toss-0d7b1c98.js";import N from"./AboutUs-d3621a68.js";import U from"./ContactUs-4b3e8ae4.js";import S from"./Login-fe67da3f.js";import T from"./NewContribution-55219c06.js";import I from"./ProfileCard-df32fa22.js";import"./PdfViewer-5d5d01a8.js";function y(s){return b({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 14h16v1h-16zM16 12v1h-16v-1l2-4h4v2h4v-2h4zM3.5 5l4.5-4.5 4.5 4.5h-3.5v4h-2v-4z"}}]})(s)}const A="/assets/logo-d8b34b4d.png",L=[{name:"Dashboard",icon:t.jsx(h,{}),path:"/dashboard"},{name:"Top Contributor",icon:t.jsx(w,{}),path:"/topContributer"},{name:"NewContribution",icon:t.jsx(y,{}),path:"/newcontribution"},{name:"Stopwatch",icon:t.jsx(f,{}),path:"/stopwatch"},{name:"Toss",icon:t.jsx(u,{}),path:"/toss"},{name:"About Us",icon:t.jsx(j,{}),path:"/aboutUs"},{name:"Contact Us",icon:t.jsx(x,{}),path:"/contactUs"},{name:"Our Team",icon:t.jsx(g,{}),path:"/profilecards"},{name:"Login",icon:t.jsx(p,{}),path:"/login"}],J=()=>{const[s,n]=a.useState("/dashboard"),i=localStorage.getItem("firstVisitor"),[c,r]=a.useState(null);+a.useEffect(()=>{i||r("welcome")},[]);const l=()=>{r(null),localStorage.setItem("firstVisitor","1")},m=e=>{n(e)};return t.jsx(t.Fragment,{children:c?t.jsxs("div",{className:"px-12rem h-[100vh] w-[1fr] flex justify-center flex-col items-center bg-[Black] gap-6",children:[t.jsxs("div",{className:"text-white text-6xl md:text-8xl text-center text-bold",children:["Welcome to ",t.jsx("span",{className:"text-[#888]",children:"Note-"}),t.jsx("span",{className:"text-[#4f92ff]",children:"Vault"})]}),t.jsx(d,{className:"bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white",onClick:l,children:"Get started"})]}):t.jsxs("div",{className:"flex h-screen ",children:[t.jsxs("div",{className:"w-[20rem] overflow-hidden bg-[white] text-[#4a4949] py-4 pl-8 pr-0 space-y-6 flex flex-col items-start fixed top-0 bottom-0",children:[t.jsx("div",{className:"flex items-center text-xl cursor-pointer",children:t.jsx("div",{children:t.jsx("img",{src:A,alt:"logo",className:"rounded-lg cursor-pointer",width:"100%"})})}),L.map(e=>t.jsxs("div",{title:`${e.path.toUpperCase().replace("/","")}`,className:`p-3 rounded-md cursor-pointer
                
                ${`${e.path===s?"bg-[#4f92ff] text-[#ffffff] rounded-l-full w-full":""} md:text-base lg:text-md`}
                md:text-base`,style:{marginTop:10},onClick:()=>m(e.path),children:[" ",t.jsxs("div",{className:"flex ml-6 gap-[1rem] items-center h-fit",children:[t.jsx("div",{children:e.icon}),t.jsx("div",{children:e.path==="/dashboard"?t.jsx(t.Fragment,{children:t.jsx("div",{className:"",onClick:()=>window.location.reload(),children:"Dashboard"})}):e.path==="/topContributer"?t.jsx(t.Fragment,{children:"Top Contributer"}):e.path==="/newcontribution"?t.jsx(t.Fragment,{children:"Contribute"}):e.path==="/stopwatch"?t.jsx(t.Fragment,{children:"Stopwatch"}):e.path==="/toss"?t.jsx(t.Fragment,{children:"Music"}):e.path==="/aboutUs"?t.jsx(t.Fragment,{children:"About Us"}):e.path==="/contactUs"?t.jsx(t.Fragment,{children:"Contact Us"}):e.path==="/profilecards"?t.jsx(t.Fragment,{children:"Our Team"}):e.path==="/login"?t.jsx(t.Fragment,{children:"Login"}):t.jsx(t.Fragment,{})})]})]}))]}),t.jsx("div",{className:"flex-grow bg-gray-100 lg:ml-[20rem]",children:P(s)})]})})};function P(s){switch(s){case"/dashboard":return t.jsx(o,{});case"/topContributer":return t.jsx(v,{});case"/newcontribution":return t.jsx(T,{});case"/stopwatch":return t.jsx(C,{});case"/toss":return t.jsx(F,{});case"/aboutUs":return t.jsx(N,{});case"/contactUs":return t.jsx(U,{});case"/profilecards":return t.jsx(I,{});case"/login":return t.jsx(S,{});default:return t.jsx(o,{})}}export{J as default};