(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{8417:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetailsPopover:function(){return k},default:function(){return P}});var l=r(5893),n=r(3636),i=r(5697),s=r.n(i),o=r(7294);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,l)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=Array(t);r<t;r++)l[r]=e[r];return l}function b(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var h=["style"],x=!1;try{x=!0}catch(e){}function y(e){return e&&"object"===u(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function m(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var v=o.forwardRef(function(e,t){var r,l,i,s,o,a,u,d,b,h,g,O,w,k,P,S,N,A,I,T=e.icon,z=e.mask,C=e.symbol,_=e.className,E=e.title,D=e.titleId,R=e.maskId,W=y(T),F=m("classes",[].concat(p((l=e.beat,i=e.fade,s=e.beatFade,o=e.bounce,a=e.shake,u=e.flash,d=e.spin,b=e.spinPulse,h=e.spinReverse,g=e.pulse,O=e.fixedWidth,w=e.inverse,k=e.border,P=e.listItem,S=e.flip,N=e.size,A=e.rotation,I=e.pull,f(r={"fa-beat":l,"fa-fade":i,"fa-beat-fade":s,"fa-bounce":o,"fa-shake":a,"fa-flash":u,"fa-spin":d,"fa-spin-reverse":h,"fa-spin-pulse":b,"fa-pulse":g,"fa-fw":O,"fa-inverse":w,"fa-border":k,"fa-li":P,"fa-flip":!0===S,"fa-flip-horizontal":"horizontal"===S||"both"===S,"fa-flip-vertical":"vertical"===S||"both"===S},"fa-".concat(N),null!=N),f(r,"fa-rotate-".concat(A),null!=A&&0!==A),f(r,"fa-pull-".concat(I),null!=I),f(r,"fa-swap-opacity",e.swapOpacity),Object.keys(r).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),p(_.split(" ")))),L=m("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),U=m("mask",y(z)),q=(0,n.qv)(W,c(c(c(c({},F),L),U),{},{symbol:C,title:E,titleId:D,maskId:R}));if(!q)return!function(){if(!x&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",W),null;var M=q.abstract,Q={ref:t};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(Q[t]=e[t])}),j(M[0],Q)});v.displayName="FontAwesomeIcon",v.propTypes={beat:s().bool,border:s().bool,beatFade:s().bool,bounce:s().bool,className:s().string,fade:s().bool,flash:s().bool,mask:s().oneOfType([s().object,s().array,s().string]),maskId:s().string,fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf([!0,!1,"horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),shake:s().bool,size:s().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,spinPulse:s().bool,spinReverse:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,titleId:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=(function e(t,r){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map(function(r){return e(t,r)}),i=Object.keys(r.attributes||{}).reduce(function(e,t){var l=r.attributes[t];switch(t){case"class":e.attrs.className=l,delete r.attributes.class;break;case"style":e.attrs.style=l.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),l=b(t.slice(0,r)),n=t.slice(r+1).trim();return l.startsWith("webkit")?e[l.charAt(0).toUpperCase()+l.slice(1)]=n:e[l]=n,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=l:e.attrs[b(t)]=l}return e},{attrs:{}}),s=l.style,o=void 0===s?{}:s,a=function(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(l,h);return i.attrs.style=c(c({},i.attrs.style),o),t.apply(void 0,[r.tag,c(c({},i.attrs),a)].concat(p(n)))}).bind(null,o.createElement),g=r(9417),O=r(5675),w=r.n(O);function k(e){let{owner:t,type:r,subType:n,duty:i,tech:s,index:o}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("span",{class:"backdrop-blur-sm min-w-[250px] absolute ".concat(o%4==3?"md:right-full":"md:left-full"," scale-0 transition-all rounded bg-gray-800 bg-opacity-80 p-2 text-xs text-white group-hover:scale-100"),children:[(0,l.jsx)("div",{class:"text-base font-bold",children:"Project Owner:"}),(0,l.jsx)("div",{class:"text-sm text-slate-300",children:t}),(0,l.jsxs)("div",{class:"my-1 container overflow-hidden bg-fixed bg-slate-900 bg-opacity-70",children:[(0,l.jsxs)("div",{class:"mb-2 divide-y-2 divide-slate-700",children:[(0,l.jsx)("div",{class:"my-1 text-slate-300",children:"Category"}),(0,l.jsx)("div",{class:""})]}),(0,l.jsxs)("ul",{class:"mb-1 justify-center",children:[(null==r?void 0:r.includes("Game"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.l9D,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Website"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.g4A,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("3D Model"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.q2v,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Application"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.tMT,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Server"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.xf3,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("DevTools"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.AlB,style:{fontSize:20,color:"rgb(252,211,77)"}})})]}),(0,l.jsxs)("ul",{className:"mb-1 justify-center",children:[(null==n?void 0:n.includes("Moblie"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.D_B,style:{fontSize:10,color:"rgb(203,213,225)"}})}),(null==n?void 0:n.includes("PC"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.qQ1,style:{fontSize:10,color:"rgb(203,213,225)"}})}),(null==n?void 0:n.includes("VR"))||(null==n?void 0:n.includes("AR"))&&(0,l.jsx)("a",{href:"#!",class:"px-2",children:(0,l.jsx)(v,{icon:g.PK7,style:{fontSize:10,color:"rgb(203,213,225)"}})})]}),null!=i&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{class:"mb-2 divide-y-2 divide-slate-700",children:[(0,l.jsx)("div",{class:""}),(0,l.jsx)("div",{class:""})]}),(0,l.jsx)("div",{className:"ml-3 my-1 text-left text-slate-300",children:i})]}),(0,l.jsxs)("div",{class:"mt-2 divide-y-2 divide-slate-700",children:[(0,l.jsx)("div",{class:""}),(0,l.jsx)("div",{class:"mt-2 text-slate-300",children:"Tech"})]}),(0,l.jsxs)("ul",{class:"mb-2 mx-auto flex list-inside justify-center",children:[(null==s?void 0:s.includes("C#"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-c-50.png",fill:"true"})}),(null==s?void 0:s.includes("Java"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-java-50.png",fill:"true"})}),(null==s?void 0:s.includes("Unity"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-unity-48.png",fill:"true"})}),(null==s?void 0:s.includes("MySQL"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-mysql-50.png",fill:"true"})}),(null==s?void 0:s.includes("Lua"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-lua-language-50.png",fill:"true"})}),(null==s?void 0:s.includes("Python"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-python-50.png",fill:"true"})}),(null==s?void 0:s.includes("Blender"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-blender-50.png",fill:"true"})}),(null==s?void 0:s.includes("Nodejs"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-nodejs-32.png",fill:"true"})}),(null==s?void 0:s.includes("Js"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-javascript-50.png",fill:"true"})}),(null==s?void 0:s.includes("Tailwind"))&&(0,l.jsx)("div",{className:"h-[20px] w-[20px] relative mr-1 ml-1",children:(0,l.jsx)(w(),{src:"https://keithlau2015.github.io/portfolio/icons8-tailwindcss-48.png",fill:"true"})})]})]})]})})}var P=k},2703:function(e,t,r){"use strict";var l=r(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,s){if(s!==l){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);