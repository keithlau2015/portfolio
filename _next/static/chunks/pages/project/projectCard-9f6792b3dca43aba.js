(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return m}});var n=r(3636),i=r(5697),s=r.n(i),l=r(7294);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var h=["style"],x=!1;try{x=!0}catch(e){}function b(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var m=l.forwardRef(function(e,t){var r,i,s,l,o,c,p,f,h,j,g,w,O,k,P,N,S,T,_,A=e.icon,I=e.mask,C=e.symbol,D=e.className,E=e.title,z=e.titleId,G=e.maskId,R=b(A),F=v("classes",[].concat(d((i=e.beat,s=e.fade,l=e.beatFade,o=e.bounce,c=e.shake,p=e.flash,f=e.spin,h=e.spinPulse,j=e.spinReverse,g=e.pulse,w=e.fixedWidth,O=e.inverse,k=e.border,P=e.listItem,N=e.flip,S=e.size,T=e.rotation,_=e.pull,u(r={"fa-beat":i,"fa-fade":s,"fa-beat-fade":l,"fa-bounce":o,"fa-shake":c,"fa-flash":p,"fa-spin":f,"fa-spin-reverse":j,"fa-spin-pulse":h,"fa-pulse":g,"fa-fw":w,"fa-inverse":O,"fa-border":k,"fa-li":P,"fa-flip":!0===N,"fa-flip-horizontal":"horizontal"===N||"both"===N,"fa-flip-vertical":"vertical"===N||"both"===N},"fa-".concat(S),null!=S),u(r,"fa-rotate-".concat(T),null!=T&&0!==T),u(r,"fa-pull-".concat(_),null!=_),u(r,"fa-swap-opacity",e.swapOpacity),Object.keys(r).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),d(D.split(" ")))),W=v("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),L=v("mask",b(I)),U=(0,n.qv)(R,a(a(a(a({},F),W),L),{},{symbol:C,title:E,titleId:z,maskId:G}));if(!U)return!function(){if(!x&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",R),null;var q=U.abstract,M={ref:t};return Object.keys(e).forEach(function(t){m.defaultProps.hasOwnProperty(t)||(M[t]=e[t])}),y(q[0],M)});m.displayName="FontAwesomeIcon",m.propTypes={beat:s().bool,border:s().bool,beatFade:s().bool,bounce:s().bool,className:s().string,fade:s().bool,flash:s().bool,mask:s().oneOfType([s().object,s().array,s().string]),maskId:s().string,fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf([!0,!1,"horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),shake:s().bool,size:s().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,spinPulse:s().bool,spinReverse:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,titleId:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},m.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var y=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var i=(r.children||[]).map(function(r){return e(t,r)}),s=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),n=f(t.slice(0,r)),i=t.slice(r+1).trim();return n.startsWith("webkit")?e[n.charAt(0).toUpperCase()+n.slice(1)]=i:e[n]=i,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[f(t)]=n}return e},{attrs:{}}),l=n.style,o=void 0===l?{}:l,c=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(n,h);return s.attrs.style=a(a({},s.attrs.style),o),t.apply(void 0,[r.tag,a(a({},s.attrs),c)].concat(d(i)))}).bind(null,l.createElement)},5795:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/projectCard",function(){return r(8213)}])},8213:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectCard:function(){return s}});var n=r(5893),i=r(1436);function s(e){let{title:t,description:r,bg:s,owner:l,type:o,subType:a,duty:c,tech:u,index:d,url:p}=e;return(0,n.jsxs)(n.Fragment,{children:[""!=p&&(0,n.jsx)("a",{href:p,children:(0,n.jsxs)("div",{class:"\n                        group grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover \n                        ".concat(s,"\n                    "),children:[(0,n.jsx)(i.ProjectDetailsPopover,{owner:l,type:o,subType:a,duty:c,tech:u,index:d}),(0,n.jsx)("div",{class:"text-base font-bold text-white",children:t||"Project Title"}),(0,n.jsx)("div",{class:"text-xs text-white pb-5",children:r||"Description"})]})}),""==p&&(0,n.jsxs)("div",{class:"\n                    group grid grid-cols-1 gap-1 content-end mx-auto rounded-lg hover:shadow-md hover:shadow-black/80 w-[250px] h-[250px] transition duration-300 ease-in-out hover:scale-110 bg-center bg-cover \n                    ".concat(s,"\n                "),children:[(0,n.jsx)(i.ProjectDetailsPopover,{owner:l,type:o,subType:a,duty:c,tech:u,index:d}),(0,n.jsx)("div",{class:"text-base font-bold text-white",children:t||"Project Title"}),(0,n.jsx)("div",{class:"text-xs text-white pb-5",children:r||"Description"})]})]})}t.default=s},1436:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetailsPopover:function(){return a}});var n=r(5893),i=r(7814),s=r(9417),l=r(5675),o=r.n(l);function a(e){let{owner:t,type:r,subType:l,duty:a,tech:c,index:u}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("span",{class:"backdrop-blur-sm min-w-[250px] absolute bottom-1 scale-0 transition-all rounded bg-gray-800 bg-opacity-80 p-2 text-xs text-white group-hover:scale-100",children:[(0,n.jsx)("div",{class:"text-base font-bold",children:"Project Owner:"}),(0,n.jsx)("div",{class:"text-sm text-slate-300",children:t}),(0,n.jsxs)("div",{class:"my-1 container overflow-hidden bg-fixed bg-slate-900 bg-opacity-70",children:[(0,n.jsxs)("div",{class:"mb-2 divide-y-2 divide-slate-700",children:[(0,n.jsx)("div",{class:"my-1 text-slate-300",children:"Category"}),(0,n.jsx)("div",{class:""})]}),(0,n.jsxs)("ul",{class:"mb-1 justify-center",children:[(null==r?void 0:r.includes("Game"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.l9D,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Website"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.g4A,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("3D Model"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.q2v,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Application"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.tMT,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Server"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.xf3,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("DevTools"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.AlB,style:{fontSize:20,color:"rgb(252,211,77)"}})})]}),(0,n.jsxs)("ul",{className:"mb-1 justify-center",children:[(null==l?void 0:l.includes("Moblie"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.D_B,style:{fontSize:10,color:"rgb(203,213,225)"}})}),(null==l?void 0:l.includes("PC"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.qQ1,style:{fontSize:10,color:"rgb(203,213,225)"}})}),(null==l?void 0:l.includes("VR"))||(null==l?void 0:l.includes("AR"))&&(0,n.jsx)("a",{href:"#!",class:"px-2",children:(0,n.jsx)(i.G,{icon:s.PK7,style:{fontSize:10,color:"rgb(203,213,225)"}})})]}),null!=a&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{class:"mb-2 divide-y-2 divide-slate-700",children:[(0,n.jsx)("div",{class:""}),(0,n.jsx)("div",{class:""})]}),(0,n.jsx)("div",{className:"ml-3 my-1 text-left text-slate-300",children:a})]}),(0,n.jsxs)("div",{class:"mt-2 divide-y-2 divide-slate-700",children:[(0,n.jsx)("div",{class:""}),(0,n.jsx)("div",{class:"mt-2 text-slate-300",children:"Tech"})]}),(0,n.jsxs)("ul",{class:"mb-2 mx-auto flex list-inside justify-center",children:[(null==c?void 0:c.includes("C#"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-c-50.png",fill:"true"})}),(null==c?void 0:c.includes("Java"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-java-50.png",fill:"true"})}),(null==c?void 0:c.includes("Unity"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-unity-48.png",fill:"true"})}),(null==c?void 0:c.includes("MySQL"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-mysql-50.png",fill:"true"})}),(null==c?void 0:c.includes("Lua"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-lua-language-50.png",fill:"true"})}),(null==c?void 0:c.includes("Python"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-python-50.png",fill:"true"})}),(null==c?void 0:c.includes("Blender"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-blender-50.png",fill:"true"})}),(null==c?void 0:c.includes("Nodejs"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-nodejs-32.png",fill:"true"})}),(null==c?void 0:c.includes("Js"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-javascript-50.png",fill:"true"})}),(null==c?void 0:c.includes("Tailwind"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-tailwindcss-48.png",fill:"true"})}),(null==c?void 0:c.includes("Dart"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-dart-50.png",fill:"true"})}),(null==c?void 0:c.includes("Flutter"))&&(0,n.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,n.jsx)(o(),{src:"https://keithlau2015.github.io/portfolio/icons8-flutter-50.png",fill:"true"})})]})]})]})})}t.default=a},2703:function(e,t,r){"use strict";var n=r(414);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,s,l){if(l!==n){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[976,675,774,888,179],function(){return e(e.s=5795)}),_N_E=e.O()}]);