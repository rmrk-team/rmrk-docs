(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||l;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(127)),i=["components"],o={title:"Character Progression Systems"},s={unversionedId:"usecases/charprog",id:"usecases/charprog",isDocsHomePage:!1,title:"Character Progression Systems",description:"This is an example of Ownership of Experience.",source:"@site/docs/usecases/charprog.md",slug:"/usecases/charprog",permalink:"/zh-CN/usecases/charprog",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/usecases/charprog.md",version:"current",sidebar:"docs",previous:{title:"NFT Evolution",permalink:"/zh-CN/usecases/evolution"},next:{title:"NFTs 2.0 in galleries and museums",permalink:"/zh-CN/usecases/museums"}},c=[{value:"Avatar NFT",id:"avatar-nft",children:[]},{value:"Brain NFT + Skills",id:"brain-nft--skills",children:[]},{value:"Gameplay Progression",id:"gameplay-progression",children:[]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,i);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This is an example of ",Object(l.b)("a",{parentName:"p",href:"/ownershipxp"},"Ownership of Experience"),"."),Object(l.b)("h2",{id:"avatar-nft"},"Avatar NFT"),Object(l.b)("p",null,"A single character or avatar is a single ",Object(l.b)("a",{parentName:"p",href:"/lego2-multi-resource"},"multi-asset")," NFT. It can have one\nor more assets, but the one that matters for the game in question is a\n",Object(l.b)("a",{parentName:"p",href:"/lego25-equippable"},"Catalog asset")," (composable)."),Object(l.b)("p",null,"Let's assume that this asset is ",Object(l.b)("strong",{parentName:"p"},'"Level 1 avatar"'),", and the asset has the following attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Strength: 5"),Object(l.b)("li",{parentName:"ul"},"Dexterity: 4"),Object(l.b)("li",{parentName:"ul"},"Intelligence: 3")),Object(l.b)("p",null,'The asset also has a head slot, two hand slots, and a body slot, into which NFTs from the "Level 1\nitems" collection can be equipped.'),Object(l.b)("h2",{id:"brain-nft--skills"},"Brain NFT + Skills"),Object(l.b)("p",null,"This NFT also ",Object(l.b)("a",{parentName:"p",href:"/lego1-nested"},"contains")," another ",Object(l.b)("a",{parentName:"p",href:"/lego25-equippable"},"equippable")," NFT: the NFT brain\nwhich is ",Object(l.b)("a",{parentName:"p",href:"/nontransferable"},"soulbound 2.0")," - meaning locked ",Object(l.b)("em",{parentName:"p"},"into")," the avatar."),Object(l.b)("p",null,'The NFT brain\'s main asset has 2 slots into which other NFTs can be equipped, whitelisted for an NFT\ncollection called "Level 1 Skills".'),Object(l.b)("h2",{id:"gameplay-progression"},"Gameplay Progression"),Object(l.b)("p",null,"As the player interacts with the world, they can collect items (from quests or the world or by\ncrafting), skills (from mentors or as quest rewards), and experience points (from fighting,\nexploring, crafting...)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Items are transferable, ",Object(l.b)("a",{parentName:"li",href:"/lego25-equippable"},"equippable")," NFTs."),Object(l.b)("li",{parentName:"ul"},"Experience points are ",Object(l.b)("a",{parentName:"li",href:"/nontransferable"},"non-transferable")," markers of experiences."),Object(l.b)("li",{parentName:"ul"},"Skills are ",Object(l.b)("a",{parentName:"li",href:"/nontransferable"},"non-transferable")," NFTs.")),Object(l.b)("p",null,"Let's assume that after a few play sessions the character has collected:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Items",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"1 level 2 sword"),Object(l.b)("li",{parentName:"ul"},"1 level 1 helmet"))),Object(l.b)("li",{parentName:"ul"},"Skills",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prospecting 1"),Object(l.b)("li",{parentName:"ul"},"Prospecting 2"),Object(l.b)("li",{parentName:"ul"},"Swordfighting 1"),Object(l.b)("li",{parentName:"ul"},"Crafting 1"))),Object(l.b)("li",{parentName:"ul"},"Experience Points",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"3 sword XP"),Object(l.b)("li",{parentName:"ul"},"5 crafting XP")))),Object(l.b)("p",null,"Let's assume that a character levels up for every 7 skill points burned."),Object(l.b)("p",null,"The character currently cannot equip the level 2 sword because the sword requires a level 2 avatar.\nThey can easily equip the helmet, though, since it is level 1."),Object(l.b)("p",null,"This is specifically possible because of RMRK's equippable logic where you can define which\ncollections can be equipped into which slot:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"head: skybreach_collection_headwear_level_1"),Object(l.b)("li",{parentName:"ul"},"hand_left: skybreach_collection_handheld_level_1"),Object(l.b)("li",{parentName:"ul"},"hand_right: skybreach_collection_handheld_level_1")),Object(l.b)("p",null,"Assuming you need ",Object(l.b)("em",{parentName:"p"},"level")," amount of XP to set a skill to the desired level, e.g. to go from 3 to 4\nyou need 4 XP, the character can upgrade Swordfighting to L2 and Crafting to L3 by burning the\nrelevant XP points (burn the non-transferable skill point NFTs)."),Object(l.b)("p",null,"Therefore, by burning 2 sword XP and 5 crafting XP, the character now has Swordfighting L2, and\nCrafting L3, but also burned a total of 7 points which means it gets another asset added: ",Object(l.b)("strong",{parentName:"p"},'"Level 2\navatar"')),Object(l.b)("p",null,"This asset has a different layout of equippables, different settings of what you can equip into\nwhich slot:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"head: skybreach_collection_headwear_level_1, skybreach_collection_headwear_level_2"),Object(l.b)("li",{parentName:"ul"},"hand_left: skybreach_collection_handheld_level_1, skybreach_collection_handheld_level_2"),Object(l.b)("li",{parentName:"ul"},"hand_right: skybreach_collection_handheld_level_1, skybreach_collection_handheld_level_2")),Object(l.b)("p",null,'Because "level 2 sword" is in the ',Object(l.b)("inlineCode",{parentName:"p"},"skybreach_collection_handheld_level_2")," collection, it is now\nequippable into either hand. The slots of course remain compatible with level 1 items."),Object(l.b)("p",null,"This is how a character progression system can work for skills, XP points, and changing requirements\nfor items, skills, spells, etc."))}p.isMDXComponent=!0}}]);