import{r as a,j as e}from"./index-add16883.js";import{A as b}from"./AdminSidebar-4cc3fe71.js";import"./index.esm-2040b4d3.js";import"./iconBase-dfa3fba1.js";const j=()=>{const[t,r]=a.useState(""),[i,n]=a.useState(""),[l,o]=a.useState(""),[m,d]=a.useState(!1),c=async s=>{s.preventDefault(),await u({name:t,email:i,message:l}),r(""),n(""),o(""),d(!0),setTimeout(()=>{d(!1)},5e3)},u=async s=>{console.log("Sending email:",s)};return e.jsxs("div",{className:"admin-container",children:[e.jsx(b,{}),e.jsx("main",{className:"dashboard",children:e.jsx("section",{children:e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-96",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Contact Us"}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-gray-700 font-semibold",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",className:"w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400",required:!0,value:t,onChange:s=>r(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700 font-semibold",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",className:"w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400",required:!0,value:i,onChange:s=>n(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"message",className:"block text-gray-700 font-semibold",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",className:"w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400",rows:4,required:!0,value:l,onChange:s=>o(s.target.value)})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{type:"submit",className:`bg-[#056be0] text-white font-semibold px-4 py-2 rounded hover:bg-[#054ae0] transition duration-300 ${m?"pointer-events-none opacity-50":""}`,children:m?"Submitted!":"Submit"})})]})]})})})})]})};export{j as default};
