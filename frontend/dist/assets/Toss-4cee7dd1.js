import{r as a,j as s,b as r}from"./index-8d2b8362.js";import{c as x,d as m,e as g}from"./index.esm-baa7f5d7.js";import"./iconBase-2378b751.js";const f="/assets/soothing_music-607bc9d8.mp3",h="/assets/m1-61da2d3a.png",y=()=>{const[e,c]=a.useState(!1),[t,i]=a.useState(!1),o=a.useRef(null),d=()=>{var l,n;e?(l=o.current)==null||l.pause():(n=o.current)==null||n.play(),c(!e)},u=()=>{i(!t)};return s.jsxs("main",{className:"bg-gray-100 flex flex-col justify-center align-center h-[100%]",children:[s.jsx("h1",{className:"font-bold text-center text-4xl bg-gray-100",children:"Listen to Music"}),s.jsx("section",{children:s.jsxs("div",{className:"audio-controls translate-y-[15%]",children:[s.jsx("audio",{ref:o,src:f,loop:t}),s.jsxs("div",{className:"text-center mt-4 flex flex-col items-center",children:[s.jsx("img",{className:"w-[20%] mt-4 rounded-3xl",src:h,alt:"song"}),s.jsx("div",{className:"text-center mt-4"}),s.jsx("h2",{className:"font-bold",children:"Soothing Music"})," "]}),s.jsxs("div",{className:"flex items-center justify-center mt-4",children:[s.jsxs(r,{onClick:u,className:`mr-4 ${t?"bg-blue-500":"bg-gray-300"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-110`,children:[s.jsx(x,{})," "]}),s.jsxs(r,{onClick:d,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-110",children:[e?s.jsx(m,{}):s.jsx(g,{})," "]})]})]})})]})};export{y as default};