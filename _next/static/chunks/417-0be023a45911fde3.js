(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{8417:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetailsPopover:function(){return O},default:function(){return N}});var n=r(5893),o=r(3636),s=r(5697),l=r.n(s),i=r(7294);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function b(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var y=["style"],m=!1;try{m=!0}catch(e){}function x(e){return e&&"object"===f(e)&&e.prefix&&e.iconName&&e.icon?e:o.Qc.icon?o.Qc.icon(e):null===e?null:e&&"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var v=i.forwardRef(function(e,t){var r,n,s,l,i,a,f,d,b,y,g,O,N,w,k,P,S,A,I,T=e.icon,z=e.mask,_=e.symbol,C=e.className,E=e.title,D=e.titleId,R=e.maskId,W=x(T),F=h("classes",[].concat(p((n=e.beat,s=e.fade,l=e.beatFade,i=e.bounce,a=e.shake,f=e.flash,d=e.spin,b=e.spinPulse,y=e.spinReverse,g=e.pulse,O=e.fixedWidth,N=e.inverse,w=e.border,k=e.listItem,P=e.flip,S=e.size,A=e.rotation,I=e.pull,u(r={"fa-beat":n,"fa-fade":s,"fa-beat-fade":l,"fa-bounce":i,"fa-shake":a,"fa-flash":f,"fa-spin":d,"fa-spin-reverse":y,"fa-spin-pulse":b,"fa-pulse":g,"fa-fw":O,"fa-inverse":N,"fa-border":w,"fa-li":k,"fa-flip":!0===P,"fa-flip-horizontal":"horizontal"===P||"both"===P,"fa-flip-vertical":"vertical"===P||"both"===P},"fa-".concat(S),null!=S),u(r,"fa-rotate-".concat(A),null!=A&&0!==A),u(r,"fa-pull-".concat(I),null!=I),u(r,"fa-swap-opacity",e.swapOpacity),Object.keys(r).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),p(C.split(" ")))),U=h("transform","string"==typeof e.transform?o.Qc.transform(e.transform):e.transform),q=h("mask",x(z)),L=(0,o.qv)(W,c(c(c(c({},F),U),q),{},{symbol:_,title:E,titleId:D,maskId:R}));if(!L)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",W),null;var M=L.abstract,Q={ref:t};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(Q[t]=e[t])}),j(M[0],Q)});v.displayName="FontAwesomeIcon",v.propTypes={beat:l().bool,border:l().bool,beatFade:l().bool,bounce:l().bool,className:l().string,fade:l().bool,flash:l().bool,mask:l().oneOfType([l().object,l().array,l().string]),maskId:l().string,fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf([!0,!1,"horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),shake:l().bool,size:l().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,spinPulse:l().bool,spinReverse:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,titleId:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),s=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),n=b(t.slice(0,r)),o=t.slice(r+1).trim();return n.startsWith("webkit")?e[n.charAt(0).toUpperCase()+n.slice(1)]=o:e[n]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e},{attrs:{}}),l=n.style,i=void 0===l?{}:l,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,y);return s.attrs.style=c(c({},s.attrs.style),i),t.apply(void 0,[r.tag,c(c({},s.attrs),a)].concat(p(o)))}).bind(null,i.createElement),g=r(9417);function O(e){let{owner:t,type:r,subType:o,duty:s}=e;return(0,n.jsxs)("span",{className:"absolute min-w-[200px] lg:left-full md:left-full scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100",children:[(0,n.jsx)("div",{className:"text-base font-bold",children:"Project Owner:"}),(0,n.jsx)("div",{className:"text-sm text-slate-300",children:t}),(0,n.jsxs)("div",{className:"my-1 container overflow-hidden bg-fixed bg-slate-900",children:[(0,n.jsxs)("div",{className:"mb-2 divide-y-2 divide-slate-700",children:[(0,n.jsx)("div",{className:"my-1 text-slate-300",children:"Category"}),(0,n.jsx)("div",{className:""})]}),(0,n.jsxs)("ul",{className:"mb-1 mx-auto flex list-inside justify-center",children:[(null==r?void 0:r.includes("Game"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.l9D,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Website"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.g4A,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("3D Model"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.q2v,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Application"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.tMT,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("Server"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.xf3,style:{fontSize:20,color:"rgb(252,211,77)"}})}),(null==r?void 0:r.includes("DevTools"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.AlB,style:{fontSize:20,color:"rgb(252,211,77)"}})})]}),(0,n.jsxs)("ul",{className:"mb-1 mx-auto flex list-inside justify-center",children:[(null==o?void 0:o.includes("Moblie"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.D_B,style:{fontSize:10,color:"rgb(203,213,225)"}})}),(null==o?void 0:o.includes("PC"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.qQ1,style:{fontSize:10,color:"rgb(203,213,225)"}})}),(null==o?void 0:o.includes("VR"))||(null==o?void 0:o.includes("AR"))&&(0,n.jsx)("a",{href:"#!",className:"px-2",children:(0,n.jsx)(v,{icon:g.PK7,style:{fontSize:10,color:"rgb(203,213,225)"}})})]}),null!=s&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{class:"mb-2 divide-y-2 divide-slate-700",children:[(0,n.jsx)("div",{class:""}),(0,n.jsx)("div",{class:""})]}),(0,n.jsx)("div",{className:"ml-3 my-1 text-left text-slate-300",children:s})]})]})]})}var N=O},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,s,l){if(l!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);