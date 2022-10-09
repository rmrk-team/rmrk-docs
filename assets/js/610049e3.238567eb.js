(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(127)),i=["components"],c={title:"Collaborative Music NFTs"},l={unversionedId:"usecases/collabmusic",id:"usecases/collabmusic",isDocsHomePage:!1,title:"Collaborative Music NFTs",description:"Using equipping logic and multi resource NFTs, one",source:"@site/docs/usecases/collabmusic.md",slug:"/usecases/collabmusic",permalink:"/usecases/collabmusic",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/usecases/collabmusic.md",version:"current",sidebar:"docs",previous:{title:"Puzzles",permalink:"/usecases/puzzles"},next:{title:"RMRK 1.0 (deprecated)",permalink:"/rmrk1"}},s=[],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Using ",Object(o.b)("a",{parentName:"p",href:"/lego25-equippable"},"equipping logic")," and ",Object(o.b)("a",{parentName:"p",href:"/lego2-multi-resource"},"multi resource NFTs"),", one\ncould create a collaborative musical composition, a form of ",Object(o.b)("a",{parentName:"p",href:"/usecases/puzzles"},"NFT 2.0 puzzles"),"."),Object(o.b)("p",null,'The primary NFT could be an empty "music sheet" with slots for:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"drums"),Object(o.b)("li",{parentName:"ul"},"vocals"),Object(o.b)("li",{parentName:"ul"},"synth"),Object(o.b)("li",{parentName:"ul"},"lead"),Object(o.b)("li",{parentName:"ul"},"bass"),Object(o.b)("li",{parentName:"ul"},"filter1"),Object(o.b)("li",{parentName:"ul"},"filter2"),Object(o.b)("li",{parentName:"ul"},"filter3")),Object(o.b)("p",null,"Other users could then mint compatible stems to guest-equip into this composition."),Object(o.b)("p",null,'The composition is playable as a single song, and the original issuer can "seal" it in a certain\nstate, preventing withdrawals of the equipped stems. The finalized song can then be sold on the open\nmarket, and automatically distribute royalties to everyone whose stem is still in the song.'),Object(o.b)("p",null,"This approach ushers in the new age of collaborative artistry where all who participated in the\ncreation of a piece of art get their fair share of profits."))}p.isMDXComponent=!0}}]);