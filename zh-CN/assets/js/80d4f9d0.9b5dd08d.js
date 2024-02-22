(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(121)),i=["components"],s={title:"NFT Evolution"},c={unversionedId:"usecases/evolution",id:"usecases/evolution",isDocsHomePage:!1,title:"NFT Evolution",description:"This is an example of Ownership of Experience.",source:"@site/docs/usecases/evolution.md",slug:"/usecases/evolution",permalink:"/zh-CN/usecases/evolution",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/usecases/evolution.md",version:"current",sidebar:"docs",previous:{title:"Mixed Media NFTs",permalink:"/zh-CN/usecases/mixedmedia"},next:{title:"Character Progression Systems",permalink:"/zh-CN/usecases/charprog"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is an example of ",Object(o.b)("a",{parentName:"p",href:"/ownershipxp"},"Ownership of Experience"),"."),Object(o.b)("p",null,"With last-gen NFT technology, replacing an NFT to evolve or change it requires either centralized\nmetadata, or a burn-and-mint mechanic."),Object(o.b)("p",null,"With RMRK's ",Object(o.b)("a",{parentName:"p",href:"/lego2-multi-resource"},"Multi-Asset NFTs"),", this is easier."),Object(o.b)("p",null,"If an asset is added to an NFT with an extra argument provided targeting an existing asset by asset\nID, that targeted asset will be ",Object(o.b)("strong",{parentName:"p"},"replaced"),"."),Object(o.b)("p",null,"This makes for good ",Object(o.b)("em",{parentName:"p"},"evolution")," mechanics where an NFT can grow or change over time. E.g. a tree\nthat grows from seed, to sapling, to young tree, to mature tree. Additionally, assuming the tree NFT\nneeded to be watered with \ud83d\udca6 emoji every week or else it would die, it is possible that yet another\nasset could represent a tree's death stage."),Object(o.b)("p",null,"Each stage of its growth is a new asset, replacing the previous one."),Object(o.b)("p",null,"This is also useful in games. Imagine Pikachu evolving into Raichu by just having a asset replaced\nin a fully decentralized way, no single point of failure in between."))}p.isMDXComponent=!0}}]);