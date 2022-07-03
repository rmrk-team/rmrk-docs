(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||h[p]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(123)),i=["components"],s={title:"Ticketing"},c={unversionedId:"ticketing",id:"ticketing",isDocsHomePage:!1,title:"Ticketing",description:"Traditionally in blockchain-based ticketing systems, a user is expected to buy an NFT ticket and then on location of an event do one of the following:",source:"@site/docs/ticketing.md",slug:"/ticketing",permalink:"/zh-CN/ticketing",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/ticketing.md",version:"current",sidebar:"docs",previous:{title:"Cross-game skins",permalink:"/zh-CN/cross_game_skins"},next:{title:"Revealable NFTs",permalink:"/zh-CN/revealable"}},l=[{value:"Using Multi-Resource NFTs for Ticketing",id:"using-multi-resource-nfts-for-ticketing",children:[{value:"Advantages",id:"advantages",children:[]},{value:"Downsides",id:"downsides",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Traditionally in blockchain-based ticketing systems, a user is expected to buy an NFT ticket and then on location of an event do one of the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"show the NFT and sign a message"),Object(o.b)("li",{parentName:"ol"},"burn the NFT"),Object(o.b)("li",{parentName:"ol"},"show the NFT")),Object(o.b)("p",null,"1 and 2 require the user to have a wallet, or surrender control of it - i.e. have a custodial wallet in his account in a centralized ticketing provider's system. This is neither very web3, nor very secure."),Object(o.b)("p",null,"3 is very insecure in that anyone can just download the NFT and show it instead of the real owner. This will either let an infinite number of people in, or require centralized tracking on the gatekeeper side so make sure a single QR code did not enter twice. Even then, there is no guarantee the right person got in."),Object(o.b)("p",null,"There is a better way: ",Object(o.b)("a",{parentName:"p",href:"/lego2-multi-resource"},"RMRK's Multi-Resource NFTs"),"."),Object(o.b)("h2",{id:"using-multi-resource-nfts-for-ticketing"},"Using Multi-Resource NFTs for Ticketing"),Object(o.b)("p",null,"Again, several approaches are possible. Here we document the recommended one."),Object(o.b)("p",null,"A user buys an NFT ticket. The ticket, just by being a RMRK MR NFT, is compatible with ERC721 and thus all marketplaces, but is also enriched with more functionality. While buying, the user provides a custom string, like a special keyword, which is hashed and added as the ticket's attribute. Let's assume this special string is ",Object(o.b)("inlineCode",{parentName:"p"},"banana")," and the Sha1 hash of it is ",Object(o.b)("inlineCode",{parentName:"p"},"250e77f12a5ab6972a0895d290c4792f0a326ea8"),"."),Object(o.b)("p",null,"The null-resource is set to be the ticket itself. The null-resource is the initial resource, the default shown when no other resources are available. Null-resources are typically used for revealable NFTs, and these come in very handy in this scenario."),Object(o.b)("p",null,"The user shows up at the door of the event, and displays the NFT QR code."),Object(o.b)("p",null,'The gatekeeper scans the QR code, and asks the user for the keyword. The user says "pineapple", and the gatekeeper\'s software automatically runs it through sha1 to get ',Object(o.b)("inlineCode",{parentName:"p"},"ff9907a80070300578eb65a2137670009e8c17cf"),". Whoops! You do not seem to be the real owner! NEXT!"),Object(o.b)("p",null,"This fraudster is kicked out of the queue and the processing continues. A few people later, another person shows up with the same QR of the NFT, and the correct word: ",Object(o.b)("inlineCode",{parentName:"p"},"banana"),". The software again runs it, this time it matches."),Object(o.b)("p",null,'The gatekeeper\'s app now creates a new resource - a "ticket stub" image with some cool visuals, and adds it to the NFT that was just loaded via the QR code.'),Object(o.b)("p",null,"Since ",Object(o.b)("em",{parentName:"p"},"any")," resource takes precedence over ",Object(o.b)("em",{parentName:"p"},"null"),', the original ticket resource would be overwritten by this new one, the ticket stub, proving the attendance of this user, and marking the NFT as "used", all in a fully decentralized way - all on protocol.'),Object(o.b)("h3",{id:"advantages"},"Advantages"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The users ends up with a really cool looking POA"),Object(o.b)("li",{parentName:"ol"},"There is no need for a centralized database of used-up tickets"),Object(o.b)("li",{parentName:"ol"},"There is no need for a user to carry around a mobile wallet")),Object(o.b)("h3",{id:"downsides"},"Downsides"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Since only the collection issuer can issue new resources to NFTs, the software of the gatekeepers would either have to be a hot wallet, or connected to a server issuing these calls which in turn hosts the issuer wallet. We are working on a system that would allow an issuer to set additional resource proposers, solving this problem."),Object(o.b)("li",{parentName:"ol"},'If the internet goes out, you cannot verifiably "tear" people\'s tickets, and need to trust that they are the real owners. They probably miss out on the "POA" (proof of attendance) aspect of it then too, since they never get the extra resource.')))}d.isMDXComponent=!0}}]);