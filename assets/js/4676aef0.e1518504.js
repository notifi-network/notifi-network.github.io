"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8974],{4898:(t,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var e=n(4848),o=n(8453);const s={sidebar_position:70},r="Displaying Notification History",a={id:"notification-history/index",title:"Displaying Notification History",description:"Users can access all of their notifications from Notifi across all dapps in the",source:"@site/versioned_docs/version-1.0.0/notification-history/index.md",sourceDirName:"notification-history",slug:"/notification-history/",permalink:"/docs/1.0.0/notification-history/",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-1.0.0/notification-history/index.md",tags:[],version:"1.0.0",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Node Client",permalink:"/docs/1.0.0/alert-trigger/node-client/"},next:{title:"Using Community Manager",permalink:"/docs/1.0.0/alert-design/community-manager"}},c={},d=[{value:"Get Notification History using <strong>Notifi Frontend Client</strong>",id:"get-notification-history-using-notifi-frontend-client",level:2}];function l(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"displaying-notification-history",children:"Displaying Notification History"}),"\n",(0,e.jsxs)(i.p,{children:["Users can access all of their notifications from Notifi across all dapps in the\n",(0,e.jsx)(i.a,{href:"/docs/1.0.0/for-users/",children:"Notifi Hub"}),". A sample is shown in the image below:"]}),"\n",(0,e.jsx)("img",{src:n(2339).A,alt:"Example hub notif",width:"60%",height:"30%"}),"\n",(0,e.jsxs)(i.p,{children:["It is also possible to display the user's past notifications directly in the dapp.\nThe ",(0,e.jsx)(i.a,{href:"../alert-subscribe/react-card",children:"React Card"})," contains the required UI\nelements and will show the user's notification history when a wallet is connected."]}),"\n",(0,e.jsxs)(i.p,{children:["For a more flexible UI to show the users notification history, the\n",(0,e.jsx)(i.a,{href:"../alert-subscribe/frontend-client",children:"Frontend Client"})," provides a\n",(0,e.jsx)(i.code,{children:"getNotificationHistory()"})," function."]}),"\n",(0,e.jsxs)(i.h2,{id:"get-notification-history-using-notifi-frontend-client",children:["Get Notification History using ",(0,e.jsx)(i.strong,{children:"Notifi Frontend Client"})]}),"\n",(0,e.jsxs)(i.p,{children:["To retrieve notification history, use the ",(0,e.jsx)(i.code,{children:"getNotificationHistory()"})," function:"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-js",children:"const getNotificationHistory = async (first?: number, after?: string) => {\n    // Fetch `first` items after the `after` cursor (leave undefined for first page)\n    const { nodes , pageInfo } = await client.getNotificationHistory({\n        first,\n        after,\n    });\n\n    nodes.forEach(item => {\n        if (item.detail?.__typename === 'BroadcastMessageEventDetails') {\n            console.log('I have a broadcast message', item.detail?.subject, item.detail?.message);\n        }\n    });\n\n    console.log('pageInfo', pageInfo.hasNextPage, pageInfo.endCursor);\n\n    return {\n        nodes,\n        pageInfo\n    }\n}\n"})})]})}function f(t={}){const{wrapper:i}={...(0,o.R)(),...t.components};return i?(0,e.jsx)(i,{...t,children:(0,e.jsx)(l,{...t})}):l(t)}},2339:(t,i,n)=>{n.d(i,{A:()=>e});const e=n.p+"assets/images/1-4148afb63b86bb50c9acb1db16c4840d.png"},8453:(t,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var e=n(6540);const o={},s=e.createContext(o);function r(t){const i=e.useContext(s);return e.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function a(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),e.createElement(s.Provider,{value:i},t.children)}}}]);