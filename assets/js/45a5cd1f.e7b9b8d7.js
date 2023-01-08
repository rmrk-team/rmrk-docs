(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,c(c({ref:t},b),{},{components:a})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(127)),l=["components"],c={title:"RMRK NFT 2.0 Concepts"},o={unversionedId:"concepts",id:"concepts",isDocsHomePage:!1,title:"RMRK NFT 2.0 Concepts",description:"The RMRK NFT 2.0 Concepts are divided into RMRK legos and RMRK concepts. Legos are primitives that",source:"@site/docs/concepts.md",slug:"/concepts",permalink:"/concepts",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/concepts.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Nestable NFTs",permalink:"/lego1-nested"}},b=[{value:"RMRK Legos",id:"rmrk-legos",children:[]},{value:"RMRK Concepts",id:"rmrk-concepts",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],s={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The RMRK NFT 2.0 Concepts are divided into RMRK legos and RMRK concepts. Legos are primitives that\nmake up complex ",Object(i.b)("em",{parentName:"p"},"use cases")," and enable certain ",Object(i.b)("em",{parentName:"p"},"concepts"),"."),Object(i.b)("h2",{id:"rmrk-legos"},"RMRK Legos"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/lego1-nested"},"Nestable NFTs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ability for any NFT to contain other RMRK NFT"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/lego2-multi-resource"},"Multi-asset NFTs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ability for an NFT to vary its output depending on the context it is being loaded in"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/lego25-equippable"},"Equippable NFTs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ability for NFTs to equip owned NFTs in order to gain extra utility or change their\nappearance, also known as composable NFTs"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/lego3-emote"},"On-chain emotes"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The social mechanic of sending and rendering received emotes (emoji reactions) on any NFT"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/lego4-conditional-rendering"},"Conditional Rendering"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ability for an NFT to have different client-side outputs depending on some on-chain or\noff-chain values"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/lego5-dao"},"NFTs as DAOs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ability for NFTs to be fractionalized and community governed")))),Object(i.b)("h2",{id:"rmrk-concepts"},"RMRK Concepts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/nontransferable"},"Non-transferable NFTs - Soulbound 2.0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ability for NFTs to be ",Object(i.b)("strong",{parentName:"li"},"bound")," to another NFT or to an account address"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scarcity"},"Provable Digital Scarcity"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The concept that an NFT is only available in one place at one time, enforced by the blockchain's\nsecurity."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/ownershipxp"},"Ownership of Experience"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ability to evolve an NFT over time and keep the experience of interacting with an environment bound to the NFT's value, contextually and on-chain.")))),Object(i.b)("p",null,"Explore each on its own separate page."),Object(i.b)("h2",{id:"use-cases"},"Use Cases"),Object(i.b)("p",null,"The Concepts are put to use in the Use Cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/usecases/cross_game_skins"},"Cross-game skins"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Defeating the previously valid anti-NFT argument from the game development community"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/usecases/ticketing"},"Ticketing"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Using multi-asset NFTs for fully decentralized ticketing solutions for events etc."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/usecases/revealable"},"Revealable NFTs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"Hatching" NFTs after a sale in a fully decentralized way, without relying on a central metadata server'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/usecases/backups"},"Metadata Backup"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Backing up metadata in a fully decentralized way to be fully immune to server or storage-blockchain downtime"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/usecases/mixedmedia"},"Mixed Media NFTs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"NFTs that are multiple media types at the same time: an eBook with a PDF and an audio file at the same time, for example, all in the same NFT"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/usecases/evolution"},"NFT Evolution"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Evolving NFTs to give them utility over time. Ideal for games."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/usecases/charprog"},"Character Progression Systems"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Taking evolution further and adding true RPG mechanics for your in-game avatars")))))}p.isMDXComponent=!0}}]);