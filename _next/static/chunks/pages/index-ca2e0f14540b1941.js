(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6616)}])},3067:function(e,s,r){"use strict";r.r(s),r.d(s,{CareerSection:function(){return t}});var a=r(5893),l=r(539);function t(e){let{gotoCB:s}=e;return(0,a.jsx)("ol",{class:"relative ml-20 border-l border-gray-200 dark:border-gray-700",children:[{eventName:"Karin Group",range:"12/2022 - 12/2023",details:"Analyst Programmer"},{eventName:"Dream Global Entertainment Limited",range:"07/2020 - 09/2022",details:"Cocos Game Development Engineer"},{eventName:"Gameone Group Limited",range:"06/2020 - 07/2022",details:"Senior Programmer"},{eventName:"Graduate from Tamkang University",range:"09/2016 - 06/2020",details:"Innovative Information and Technology Department"}].map((e,r)=>(0,a.jsx)("li",{class:"mb-10 ml-10",children:(0,a.jsx)(l.OneCareer,{gotoCB:s,eventName:e.eventName,range:e.range,details:e.details,index:r})},e.eventName))})}s.default=t},539:function(e,s,r){"use strict";r.r(s),r.d(s,{OneCareer:function(){return i}});var a=r(5893),l=r(5675),t=r.n(l);function i(e){let{gotoCB:s,eventName:r,range:l,details:i,index:o}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"absolute flex items-center justify-center w-6 h-6 bg-amber-300 rounded-full -left-3 ring-8 ring-white",children:(0,a.jsx)("svg",{"aria-hidden":"true",className:"w-3 h-3 text-amber-800",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"})})}),(0,a.jsxs)("h3",{className:"flex items-center mb-1 text-lg font-semibold text-white",children:[r||"Name",0==o&&(0,a.jsx)("span",{className:"bg-amber-300 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3",children:"Current"})]}),(0,a.jsxs)("div",{className:"pl-2 mb-2 h-[25px] w-[25px] relative transition duration-300 ease-in-out hover:scale-150",children:[(0,a.jsx)(t(),{onClick:s,goto:"Projects",param:"".concat(r),src:"https://keithlau2015.github.io/portfolio/icons8-project-48.png",fill:"true"}),(0,a.jsx)("div",{className:"pl-5 text-amber-300",onClick:s,goto:"Projects",param:"".concat(r),children:"PROJECTS"})]}),(0,a.jsx)("time",{className:"block mb-2 text-sm font-normal leading-none text-gray-400",children:l||"00/0000 - 00/0000"}),(0,a.jsx)("p",{className:"mb-4 text-base font-normal text-gray-500",children:i||""})]})}s.default=i},6616:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return g}});var a=r(5893),l=r(8924),t=r.n(l),i=r(9008),o=r.n(i),n=r(2412),d=r(3067),c=r(5675),b=r.n(c),m=r(7294);function g(){let[e,s]=(0,m.useState)(void 0),[r,l]=(0,m.useState)(void 0),[i,c]=(0,m.useState)(void 0),[g,x]=(0,m.useState)(void 0),h=e=>{e.preventDefault();let r=e.target.getAttribute("goto"),a=e.target.getAttribute("param");console.log(a),s(a),setTimeout(()=>{p(r)},100)},p=e=>{var s;window.scrollTo({top:null===(s=document.getElementById(e))||void 0===s?void 0:s.offsetTop,behavior:"smooth"})};return(0,m.useEffect)(()=>{var e=document.querySelector("canvas");l(e.getContext("2d")),c(window.innerWidth),x(window.innerHeight),e.width=i,e.height=g;var s="ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";s=s.split("");for(var a=i/10,t=[],o=0;o<a;o++)t.push(1);var n=setInterval(function(){if(void 0!=r&&null!=r&&void 0!=i&&null!=i&&void 0!=g&&null!=g){r.fillStyle="rgba(0, 0, 0, .1)",r.fillRect(0,0,i,g);for(var e=0;e<t.length;e++){var a=s[Math.floor(Math.random()*s.length)];r.fillStyle="#00ffb5",r.fillText(a,10*e,10*t[e]),t[e]++,10*t[e]>g&&Math.random()>.95&&(t[e]=0)}}},33);window.addEventListener("resize",()=>{void 0!=r&&null!=r&&void 0!=i&&null!=i&&void 0!=g&&null!=g&&(clearInterval(n),c(window.innerWidth),x(window.innerHeight),r.clearRect(0,0,i,g))});let d=document.querySelectorAll(".js-show-on-scroll"),b=new IntersectionObserver(function(e){e.forEach(e=>{e.isIntersecting?e.target.classList.add("motion-safe:animate-fadeIn"):e.target.classList.remove("motion-safe:animate-fadeIn")})});d.forEach(function(e){e.classList.add("opacity-0"),b.observe(e)})}),(0,a.jsxs)("main",{class:"zflex min-h-screen flex-col items-center ".concat(t().className),children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Keith\uD83C\uDFAEGame Developer"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://keithlau2015.github.io/portfolio/icons/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https://keithlau2015.github.io/portfolio/icons/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https://keithlau2015.github.io/portfolio/icons/favicon-16x16.png"})]}),(0,a.jsx)("section",{id:"Landing",children:(0,a.jsxs)("div",{class:"relative overflow-hidden min-h-screen",children:[(0,a.jsx)("canvas",{class:"static block -z-50 brightness-[.3]",style:{backgroundPosition:"100%",backgroundColor:"rgb(20,20,20)",height:"100vh"}}),(0,a.jsx)("div",{class:"absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden",children:(0,a.jsx)("div",{class:"flex h-full items-center justify-center",children:(0,a.jsxs)("div",{class:"px-6 text-center text-white md:px-12 js-show-on-scroll",children:[(0,a.jsxs)("h1",{class:"mt-2 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl",children:["KEITH NULL",(0,a.jsx)("br",{}),(0,a.jsxs)("div",{class:"horizontal",children:[(0,a.jsx)("div",{class:"hr"}),(0,a.jsx)("div",{class:"hr"})]}),(0,a.jsx)("br",{})," GAME DEVELOPER",(0,a.jsx)("br",{})," ",(0,a.jsx)("p",{class:"text-white/[.8] text-xs md:text-sm xl:text-base",children:"PROFESSIONAL LOSER"})]}),(0,a.jsx)("button",{type:"button",goto:"Projects",class:"py-10 px-20 animate-bounce",onClick:h,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",class:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"})})})]})})})]})}),(0,a.jsx)("section",{id:"Projects",class:"relative z-0 overflow-hidden bg-neutral-200",children:(0,a.jsxs)("div",{class:"container my-10 mx-auto md:px-6 text-center js-show-on-scroll",children:[(0,a.jsx)("h2",{class:"mb-5 text-3xl font-bold",children:"PROJECTS"}),(0,a.jsx)(n.ProjectSection,{filter:e,clearFilterCB:()=>{s(void 0)}})]})}),(0,a.jsx)("section",{id:"Milestone",class:"relative z-0 overflow-hidden bg-cover bg-no-repeat bg-neutral-900",children:(0,a.jsxs)("div",{class:"container my-24 mx-auto md:px-6 js-show-on-scroll",children:[(0,a.jsx)("h2",{class:"mb-12 text-3xl font-bold text-white text-center",children:"CAREER"}),(0,a.jsx)(d.CareerSection,{gotoCB:h})]})}),(0,a.jsx)("section",{id:"Skills",class:"relative z-0 overflow-hidden",children:(0,a.jsxs)("div",{class:"container my-24 mx-auto md:px-6 text-center js-show-on-scroll",children:[(0,a.jsx)("h2",{class:"mb-12 text-3xl font-bold",children:"TECHNOLOGIES"}),(0,a.jsxs)("div",{class:"overflow-hidden text-center text-slate-500 shadow-slate-200",children:[(0,a.jsxs)("figure",{class:"p-6 pb-0 flex items-center justify-center",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10",src:"https://keithlau2015.github.io/portfolio/programming.png"}),(0,a.jsx)("h5",{class:"text-base font-bold ml-3",children:"CODING"})]}),(0,a.jsxs)("div",{class:"p-6 grid justify-items-stretch gap-x-3 gap-y-3 lg:gap-xl-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2",children:[(0,a.jsxs)("div",{class:"pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200",children:[(0,a.jsxs)("figure",{class:"p-6",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10 mx-auto",src:"https://keithlau2015.github.io/portfolio/icons8-programming-language-48.png"}),(0,a.jsx)("h5",{class:"text-base font-bold text-amber-300",children:"LANGUAGE"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"C#"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"80",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"LUA"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"40",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"JAVA"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"60",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"PYTHON"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"50",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"JS"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"40",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"C++"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"30",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"DART"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"15",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]})]}),(0,a.jsxs)("div",{class:"pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200",children:[(0,a.jsxs)("figure",{class:"p-6",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10 mx-auto",src:"https://keithlau2015.github.io/portfolio/icons8-tools-48.png"}),(0,a.jsx)("h5",{class:"text-base font-bold text-amber-300",children:"FRAMEWORK"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"NEXT JS"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"30",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"TAILWINDCSS"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"20",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"STRUTS2"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"20",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"EXPRESS JS"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"40",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"THREE JS"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"15",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]})]}),(0,a.jsxs)("div",{class:"pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200",children:[(0,a.jsxs)("figure",{class:"p-6",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10 mx-auto",src:"https://keithlau2015.github.io/portfolio/icons8-software-48.png"}),(0,a.jsx)("h5",{class:"text-base font-bold text-amber-300",children:"SOFTWARE"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"ANDROID STUDIO"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"30",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"XCODE"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"20",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"UNITY"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"70",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"UNREAL"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"20",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"COCOS2D"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"30",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"FLUTTER"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"30",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]})]}),(0,a.jsxs)("div",{class:"pb-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200",children:[(0,a.jsxs)("figure",{class:"p-6",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10 mx-auto",src:"https://keithlau2015.github.io/portfolio/icons8-database-50.png"}),(0,a.jsx)("h5",{class:"text-base font-bold text-amber-300",children:"DATABASE"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"MY SQL"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"40",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"MONGO DB"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"25",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"MICROSOFT SQL"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"20",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]})]})]}),(0,a.jsxs)("figure",{class:"p-6 pb-0 flex items-center justify-center",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10",src:"https://keithlau2015.github.io/portfolio/icons8-robot-48.png"}),(0,a.jsx)("h5",{class:"text-base font-bold ml-3",children:"AI"})]}),(0,a.jsx)("div",{class:"p-6",children:(0,a.jsxs)("div",{class:"pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200",children:[(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"STABLE DIFFUSION"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"60",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"CHATGPT"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"40",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"AUTOGPT"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"25",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]})]})}),(0,a.jsxs)("figure",{class:"p-6 pb-0 flex items-center justify-center",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10",src:"https://keithlau2015.github.io/portfolio/icons8-art-48.png"}),(0,a.jsx)("h5",{class:"text-base font-bold ml-3",children:"Art"})]}),(0,a.jsx)("div",{class:"p-6",children:(0,a.jsxs)("div",{class:"pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200",children:[(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"BLENDER"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"45",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"KRITA"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"15",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"PHOTOSHOP"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"30",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]})]})}),(0,a.jsxs)("figure",{class:"p-6 pb-0 flex items-center justify-center",children:[(0,a.jsx)("img",{class:"object-contain h-10 w-10",src:"https://keithlau2015.github.io/portfolio/icons8-video-editing-48.png"}),(0,a.jsx)("h5",{class:"text-base font-bold ml-3",children:"VIDEO EDITING"})]}),(0,a.jsx)("div",{class:"p-6",children:(0,a.jsxs)("div",{class:"pb-6 pt-6 overflow-hidden text-center bg-neutral-900 rounded shadow-md shadow-slate-200",children:[(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"AFTER EFFECT"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"45",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]}),(0,a.jsxs)("div",{class:"flex items-center justify-between",children:[(0,a.jsx)("div",{class:"ml-5 mr-3 text-amber-300",children:"PREMIERE PRO"}),(0,a.jsx)("progress",{"aria-label":"loading 25%",id:"p01a",max:"100",value:"25",class:"my-3 mr-5 overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"})]})]})})]})]})}),(0,a.jsx)("section",{id:"Contact",class:"relative z-0 overflow-hidden bg-cover bg-no-repeat bg-neutral-900",children:(0,a.jsxs)("div",{class:"container my-24 mx-auto md:px-6 js-show-on-scroll",children:[(0,a.jsx)("h2",{class:"mb-12 text-3xl font-bold text-white text-center",children:"CONTACT"}),(0,a.jsxs)("div",{className:"mb-5 flex flex-row max-sm:flex-col items-center justify-evenly",style:{transition:"all .5s ease 0s"},children:[(0,a.jsx)("div",{className:"text-amber-300",children:"PHONE: +852 53717963"}),(0,a.jsx)("div",{className:"text-amber-300",children:"EMAIL: s101315@gmail.com"})]}),(0,a.jsxs)("div",{className:"mb-5 flex flex-row items-center justify-evenly",style:{transition:"all .5s ease 0s"},children:[(0,a.jsx)("a",{href:"https://www.instagram.com/nullpointinteractive/",className:"h-[30px] w-[30px] relative mr-1 ml-1 ",children:(0,a.jsx)(b(),{src:"https://keithlau2015.github.io/portfolio/icons8-ig-48.png",fill:"true"})}),(0,a.jsx)("a",{href:"https://www.youtube.com/@keithlau7747/videos",className:"h-[30px] w-[30px] relative mr-1 ml-1",children:(0,a.jsx)(b(),{src:"https://keithlau2015.github.io/portfolio/icons8-youtube-50.png",fill:"true"})}),(0,a.jsx)("a",{href:"https://github.com/keithlau2015",className:"h-[30px] w-[30px] relative mr-1 ml-1",children:(0,a.jsx)(b(),{src:"https://keithlau2015.github.io/portfolio/icons8-github-30.png",fill:"true"})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/keith-lau-b7379b217/",className:"h-[30px] w-[30px] relative mr-1 ml-1",children:(0,a.jsx)(b(),{src:"https://keithlau2015.github.io/portfolio/icons8-linkedin-50.png",fill:"true"})}),(0,a.jsx)("a",{href:"https://keithnull.artstation.com/",className:"h-[30px] w-[30px] relative mr-1 ml-1",children:(0,a.jsx)(b(),{src:"https://keithlau2015.github.io/portfolio/icons8-artstation-32.png",fill:"true"})}),(0,a.jsx)("a",{href:"https://twitter.com/keithnulled",className:"h-[30px] w-[30px] relative mr-1 ml-1",children:(0,a.jsx)(b(),{src:"https://keithlau2015.github.io/portfolio/icons8-twitter-30.png",fill:"true"})}),(0,a.jsx)("div",{href:"https://discordapp.com/users/313613491816890369",className:"h-[30px] w-[30px] relative mr-1 ml-1",children:(0,a.jsx)(b(),{src:"https://keithlau2015.github.io/portfolio/icons8-discord-30.png",fill:"true"})})]})]})})]})}},8924:function(e){e.exports={style:{fontFamily:"'__Play_ce96f6', '__Play_Fallback_ce96f6'",fontWeight:400,fontStyle:"normal"},className:"__className_ce96f6"}},9008:function(e,s,r){e.exports=r(2636)}},function(e){e.O(0,[976,675,188,412,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);