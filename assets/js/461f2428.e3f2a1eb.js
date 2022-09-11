(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(124)),i=["components"],l={title:"FRAME implementaton"},c={unversionedId:"pallets",id:"pallets",isDocsHomePage:!1,title:"FRAME implementaton",description:'This is one of two versions of the so called "RMRK 3" - an implementation of the specification in the Rust language, using Parity\'s FRAME pallet system meant for integration with the Substrate framework. This makes RMRK compatible with Substrate-based blockchains like Acala, Subsocial, Zeitgeist, and others.',source:"@site/docs/pallets.md",slug:"/pallets",permalink:"/pallets",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/pallets.md",version:"current",sidebar:"docs",previous:{title:"EVM",permalink:"/evm"},next:{title:"FAQ: Frequently Asked Questions",permalink:"/faq"}},s=[],p={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'This is one of two versions of the so called "RMRK 3" - an implementation of the specification in the Rust language, using Parity\'s FRAME pallet system meant for integration with the ',Object(o.b)("a",{parentName:"p",href:"https://substrate.io"},"Substrate")," framework. This makes RMRK compatible with Substrate-based blockchains like Acala, Subsocial, Zeitgeist, and others."),Object(o.b)("p",null,"The FRAME pallets implementation can be found at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rmrk-team/rmrk-substrate"},"https://github.com/rmrk-team/rmrk-substrate"),". Usage tutorials are coming soon."),Object(o.b)("p",null,"To explore each individual ",Object(o.b)("a",{parentName:"p",href:"/concepts"},"concept"),", please see the applicable pallets linked below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-core"},"RMRK core")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs"},"RMRK soulbound 2.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-equip"},"RMRK equippables")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-market"},"RMRK marketplace functions"))))}u.isMDXComponent=!0}}]);