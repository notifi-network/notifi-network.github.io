"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3924],{3905:(t,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>y});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=i.createContext({}),l=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},f=function(t){var e=l(t.components);return i.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,f=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=o,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(y,a(a({ref:e},f),{},{components:n})):i.createElement(y,a({ref:e},f))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1830:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:70},a="Displaying Notification History",s={unversionedId:"notification-history/index",id:"notification-history/index",title:"Displaying Notification History",description:"Users can access all of their notifications from Notifi across all dapps in the",source:"@site/docs/notification-history/index.md",sourceDirName:"notification-history",slug:"/notification-history/",permalink:"/docs/next/notification-history/",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/notification-history/index.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Node Client",permalink:"/docs/next/alert-trigger/node-client/"},next:{title:"Styling your notifications",permalink:"/docs/next/category/styling-your-notifications"}},c={},l=[{value:"Get Notification History using <strong>Notifi Frontend Client</strong>",id:"get-notification-history-using-notifi-frontend-client",level:2}],f={toc:l},p="wrapper";function u(t){let{components:e,...r}=t;return(0,o.kt)(p,(0,i.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"displaying-notification-history"},"Displaying Notification History"),(0,o.kt)("p",null,"Users can access all of their notifications from Notifi across all dapps in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/for-users/"},"Notifi Hub"),". A sample is shown in the image below:"),(0,o.kt)("img",{src:n(7445).Z,alt:"Example hub notif",width:"60%",height:"30%"}),(0,o.kt)("p",null,"It is also possible to display the user's past notifications directly in the dapp.\nThe ",(0,o.kt)("a",{parentName:"p",href:"../alert-subscribe/react-card/"},"React Card")," contains the required UI\nelements and will show the user's notification history when a wallet is connected."),(0,o.kt)("p",null,"For a more flexible UI to show the users notification history, the\n",(0,o.kt)("a",{parentName:"p",href:"../alert-subscribe/frontend-client"},"Frontend Client")," provides a\n",(0,o.kt)("inlineCode",{parentName:"p"},"getNotificationHistory()")," function."),(0,o.kt)("h2",{id:"get-notification-history-using-notifi-frontend-client"},"Get Notification History using ",(0,o.kt)("strong",{parentName:"h2"},"Notifi Frontend Client")),(0,o.kt)("p",null,"To retrieve notification history, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getNotificationHistory()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const getNotificationHistory = async (first?: number, after?: string) => {\n    // Fetch `first` items after the `after` cursor (leave undefined for first page)\n    const { nodes , pageInfo } = await client.getNotificationHistory({\n        first,\n        after,\n    });\n\n    nodes.forEach(item => {\n        if (item.detail?.__typename === 'BroadcastMessageEventDetails') {\n            console.log('I have a broadcast message', item.detail?.subject, item.detail?.message);\n        }\n    });\n\n    console.log('pageInfo', pageInfo.hasNextPage, pageInfo.endCursor);\n\n    return {\n        nodes,\n        pageInfo\n    }\n}\n")))}u.isMDXComponent=!0},7445:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/1-4148afb63b86bb50c9acb1db16c4840d.png"}}]);