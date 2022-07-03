(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},173:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ntnft-4680877886bd1c937d98140305cf3583.png"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(123)),i=["components"],s={title:"Soulbound 2.0 NFTs: Non-transferables"},l={unversionedId:"nontransferable",id:"nontransferable",isDocsHomePage:!1,title:"Soulbound 2.0 NFTs: Non-transferables",description:"Non-transferable NFTs, popularized by Vitalik Buterin as soulbound, are NFTs that are useful for reputation tracking: they get added to addresses but are non-transferable, so they cannot be sold and permanently assign some modifier to a given address.",source:"@site/docs/nontransferable.md",slug:"/nontransferable",permalink:"/nontransferable",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/nontransferable.md",version:"current",sidebar:"docs",previous:{title:"NFTs as DAOs",permalink:"/lego5-dao"},next:{title:"Provable Digital Scarcity",permalink:"/scarcity"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Implementations",id:"implementations",children:[]}],b={toc:c};function p(e){var t=e.components,s=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Non-transferable NFTs, popularized by Vitalik Buterin as ",Object(o.b)("a",{parentName:"p",href:"https://vitalik.ca/general/2022/01/26/soulbound.html"},"soulbound"),", are NFTs that are useful for reputation tracking: they get added to addresses but are non-transferable, so they cannot be sold and permanently assign some modifier to a given address."),Object(o.b)("p",null,"In RMRK this is an especially interesting concept as NFTs can be non-transferable inside another transferable NFT, dubbed ",Object(o.b)("strong",{parentName:"p"},"Soulbound 2.0"),". "),Object(o.b)("p",null,"Thus, an NFT like a ",Object(o.b)("a",{parentName:"p",href:"https://kanaria.rmrk.app"},"Kanaria")," can have non-transferable gems inside it that give it long lasting benefits and bonuses, but cannot be removed, alongside some tradable NFTs as well."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Kanaria example image",src:a(173).default})),Object(o.b)("p",null,'This can be further utilized when dealing with in-game avatars and skill systems. A skill can be learned and "installed" into an avatar\'s brain, but cannot be removed.'),Object(o.b)("p",null,"In addition to a simple on/off flag, the Kusama implementation (see below) supports temporary transferability and temporary non-transferability which allows a minter to specify that an NFT should be movable only after a certain number of blocks, or not before a certain number of blocks."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"As mentioned in the concept of ",Object(o.b)("a",{parentName:"p",href:"/lego25-equippable"},"equippables"),", a very good example of using non-transferable NFTs is when using them as reputation indicators, but not on accounts as documented in the aforementioned ",Object(o.b)("a",{parentName:"p",href:"https://vitalik.ca/general/2022/01/26/soulbound.html"},"soulbound post"),", but inside other transferable or non-transferable NFTs."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://zeitgeist.pm"},"Zeitgeist"),", a prediction market chain, will give each chain user an avatar, and give them reputational (non transferable) tokens to equip, based on their performance in their prediction markets.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.citizend.xyz/"},"Citizend")," is a public no-lottery project launchpad as a DAO, and will have performance based reputation tokens (non transferables) for the user avatars which, based on their attained reputation, will have better opportunities and more prominent votes in governance later on.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lpT7hubqzFQ"},"Governance Rewards in Kusama")," rewards people with trophies for every on-chain referendum they vote in, which they can equip onto their \u201creputational\u201d shelf. This not only visually indicates your on-chain activity in the world\u2019s biggest DAOs (Kusama and Polkadot) but also serves really well for other apps, e.g. you read that information cross-chain from a Defi hub like Acala, and maybe your reputation is now enough collateral to get an undercollateralized loan.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://phala.world"},"Phala World")," tracks a user\u2019s web3 activity, and turns it into non-transferable reputation tokens inside of Phala World game avatars which can only be leveled up this way. So instead of leveling up by playing the game, you level up by being a good web3 citizen, which turns into non-transferable skills and experience for your avatar.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://rmrk.link/kabocha"},"Kabocha")," Seeds are central to the governance of Kabocha, representing evolving roles, rights and reputation in the network and future Publiks. Seeds are unique, non-transferable assets that grow based on continuing contributions to the project. They will define how you build identity, your voting power and access within future Publik domains.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://rmrk.link/invarch"},"InvArch")," is a blockchain which uses RMRK NFTs for IP management, and a license is inherently a non-transferable NFT as part of another NFT, along with other idea-related information. So non-transferable NFTs act as \u201creputation\u201d tokens for ideas there too.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://skybreach.app"},"Skybreach")," uses non-transferable NFTs as NFT brains for NFT avatars, and NFT skills inside of those brains which can be equipped into slots, as well as NFT personalities, NFT crafting recipes, NFT pathfinding algorithms and more. For example, a character at level 2 might have 2 skill slots in their NFT brain, but 5 skills. So now they have to choose which skills to make active by equipping 2 of 5. They can level up the character to get a new resource on this NFT brain which has 3 slots, so at level 3 they can equip 3 of 5 skills, and so on. This is how ",Object(o.b)("a",{parentName:"p",href:"https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies"},"Skybreach Chunkies")," work."))),Object(o.b)("p",null,"All of the above projects are also part of the ",Object(o.b)("a",{parentName:"p",href:"/econ"},"global item economy")," made possible only with RMRK, so that they can have interchangeable accessories that are cross-collection compatible, and therefore get new utility over time, all the time."),Object(o.b)("h2",{id:"implementations"},"Implementations"),Object(o.b)("p",null,"The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#nft-standard"},"Kusama")),Object(o.b)("li",{parentName:"ul"},"EVM (in development)"),Object(o.b)("li",{parentName:"ul"},"Pallets (in development)")))}p.isMDXComponent=!0}}]);