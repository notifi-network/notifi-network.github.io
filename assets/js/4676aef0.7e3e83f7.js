"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?i.createElement(m,a(a({ref:t},f),{},{components:n})):i.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:70},a="Displaying Notification History",s={unversionedId:"notification-history/index",id:"version-1.0.0/notification-history/index",title:"Displaying Notification History",description:"Users can access all of their notifications from Notifi across all dapps in the",source:"@site/versioned_docs/version-1.0.0/notification-history/index.md",sourceDirName:"notification-history",slug:"/notification-history/",permalink:"/docs/notification-history/",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-1.0.0/notification-history/index.md",tags:[],version:"1.0.0",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Node Client",permalink:"/docs/alert-trigger/node-client/"},next:{title:"Using Community Manager",permalink:"/docs/alert-design/community-manager"}},c={},l=[{value:"Get Notification History using <strong>Notifi Frontend Client</strong>",id:"get-notification-history-using-notifi-frontend-client",level:2}],f={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"displaying-notification-history"},"Displaying Notification History"),(0,o.kt)("p",null,"Users can access all of their notifications from Notifi across all dapps in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/for-users/"},"Notifi Hub"),". A sample is shown in the image below:"),(0,o.kt)("img",{src:n(7445).Z,alt:"Example hub notif",width:"60%",height:"30%"}),(0,o.kt)("p",null,"It is also possible to display the user's past notifications directly in the dapp.\nThe ",(0,o.kt)("a",{parentName:"p",href:"../docs/alert-subscribe/react-card"},"React Card")," contains the required UI\nelements and will show the user's notification history when a wallet is connected."),(0,o.kt)("p",null,"For a more flexible UI to show the users notification history, the\n",(0,o.kt)("a",{parentName:"p",href:"../docs/alert-subscribe/frontend-client"},"Frontend Client")," provides a\n",(0,o.kt)("inlineCode",{parentName:"p"},"getNotificationHistory()")," function."),(0,o.kt)("h2",{id:"get-notification-history-using-notifi-frontend-client"},"Get Notification History using ",(0,o.kt)("strong",{parentName:"h2"},"Notifi Frontend Client")),(0,o.kt)("p",null,"To retrieve notification history, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getNotificationHistory()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const getNotificationHistory = async (first?: number, after?: string) => {\n    // Fetch `first` items after the `after` cursor (leave undefined for first page)\n    const { nodes , pageInfo } = await client.getNotificationHistory({\n        first,\n        after,\n    });\n\n    nodes.forEach(item => {\n        if (item.detail?.__typename === 'BroadcastMessageEventDetails') {\n            console.log('I have a broadcast message', item.detail?.subject, item.detail?.message);\n        }\n    });\n\n    console.log('pageInfo', pageInfo.hasNextPage, pageInfo.endCursor);\n\n    return {\n        nodes,\n        pageInfo\n    }\n}\n")))}d.isMDXComponent=!0},7445:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1-4148afb63b86bb50c9acb1db16c4840d.png"}}]);