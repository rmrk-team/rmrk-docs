(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(114)),i=["components"],l={title:"On-chain emotes"},c={unversionedId:"lego3-emote",id:"lego3-emote",isDocsHomePage:!1,title:"On-chain emotes",description:'RMRK supports the ability to "react" to any NFT.',source:"@site/docs/lego3-emote.md",slug:"/lego3-emote",permalink:"/lego3-emote",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/website/docs/lego3-emote.md",version:"current",sidebar:"docs",previous:{title:"Bases and Equippable NFTs",permalink:"/lego2.5-equippable"},next:{title:"Conditional Rendering",permalink:"/lego4-conditional-rendering"}},s=[{value:"Implementations",id:"implementations",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'RMRK supports the ability to "react" to any NFT.'),Object(o.b)("p",null,"Under the hood, unicodes are applied to NFT IDs, and these pairs are mapped to addresses in a master record per chain."),Object(o.b)("p",null,"Reactions are switches, meaning sending \ud83d\udc4d when you already sent a \ud83d\udc4d will remove it."),Object(o.b)("p",null,"Currently, all reactions apply equally and are rendered by all implementations, but in the future there are plans to add acceptance conditions to collections that would limit emotes from people without a certain NFT, cap the emote amount to accommodate a FCFS list, limit the types of emotes an NFT can receive, and more."),Object(o.b)("p",null,"During a transfer, all reactions travel with an NFT. The reactions are not NFTs themselves, just flair added to an existing data record - the NFT."),Object(o.b)("p",null,"Emotes are a key part of ",Object(o.b)("a",{parentName:"p",href:"lego4-conditional-rendering"},"conditional rendering"),"."),Object(o.b)("h2",{id:"implementations"},"Implementations"),Object(o.b)("p",null,"The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/emote.md"},"Kusama")),Object(o.b)("li",{parentName:"ul"},"EVM (research phase)"),Object(o.b)("li",{parentName:"ul"},"Pallets (research phase)"),Object(o.b)("li",{parentName:"ul"},"Rollups (research phase)")))}u.isMDXComponent=!0}}]);