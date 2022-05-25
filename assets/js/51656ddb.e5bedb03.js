(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,d=u["".concat(a,".").concat(b)]||u[b]||m[b]||i;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),i=(t(0),t(117)),a=["components"],c={title:"Conditional Rendering"},l={unversionedId:"lego4-conditional-rendering",id:"lego4-conditional-rendering",isDocsHomePage:!1,title:"Conditional Rendering",description:"Conditional rendering uses jsonlogic to define client-only render alterations to the NFT based on certain on and off chain conditions.",source:"@site/docs/lego4-conditional-rendering.md",slug:"/lego4-conditional-rendering",permalink:"/lego4-conditional-rendering",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/lego4-conditional-rendering.md",version:"current",sidebar:"docs",previous:{title:"On-chain emotes",permalink:"/lego3-emote"},next:{title:"NFTs as DAOs",permalink:"/lego5-dao"}},s=[{value:"Implementations",id:"implementations",children:[]}],p={toc:s};function u(e){var n=e.components,t=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Conditional rendering uses ",Object(i.b)("a",{parentName:"p",href:"https://jsonlogic.com/"},"jsonlogic")," to define client-only render alterations to the NFT based on certain on and off chain conditions."),Object(i.b)("p",null,"For example, an NFT depicting an image of a moon might change to a halfmoon with a rocket landing on it if it gets 50 \ud83c\udf13 and 30 \ud83d\ude80 emojis on it. "),Object(i.b)("p",null,"An NFT of an apple might rot after a certain block, turning into an image of a rotten apple, or if consumed in time by means of \ud83c\udf74 emoji, it becomes just an apple core."),Object(i.b)("p",null,"An NFT image of a bicycle can show signs of deterioration and dilapidation if it was sold more than, say, 50 times."),Object(i.b)("p",null,"A wolf image could show a pack if people have minted more than 50 wolves into this collection, or even sent wolves ",Object(i.b)("a",{parentName:"p",href:"/lego1-nested"},"into")," the original wolf."),Object(i.b)("p",null,"These interactions can have in-game effects, but can also be community-driven art. A collaborative experience where if enough people interact with an NFT in some way, its essence changes."),Object(i.b)("p",null,"A logic block of an NFT might look something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'    "logic": [\n        {\n            ">": ["emotes.\ud83d\ude80", 50],\n            "priority": [2,3,1] // change resource prio based on condition == true\n        },\n        {\n            ">": ["emotes.\u2744", 100],\n            "resources.0.bg": "newhash" // overrides the background image in the base, if such a part exists\n        },\n        {\n            "==": ["this.rain", "true"],\n            "resources.0.bg": "hash-of-rainy-background"\n        }\n    ],\n')),Object(i.b)("p",null,"In the above example, you can see three scenarios playing out:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"if the NFT gets more than 50 rocket ",Object(i.b)("a",{parentName:"li",href:"/lego3-emote"},"emotes"),", it would show a different resource as top priority. So, a moon shows a moon landing if 50 rockets are on it."),Object(i.b)("li",{parentName:"ul"},"if the NFT gets more than 50 snow emoji, the default background of the first resource will be overridden and show a snowy mountain instead."),Object(i.b)("li",{parentName:"ul"},'if the NFT has its mutable attribute set to "rain" then the background becomes a rainy image')),Object(i.b)("h2",{id:"implementations"},"Implementations"),Object(i.b)("p",null,"There are no live implementations of this specification yet."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Kusama (research phase)"),Object(i.b)("li",{parentName:"ul"},"EVM (research phase)"),Object(i.b)("li",{parentName:"ul"},"Pallets (research phase)")))}u.isMDXComponent=!0}}]);