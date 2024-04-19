"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[606],{6752:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(4848),n=i(8453);const s={sidebar_position:2},r="Send alerts triggered by API call",a={id:"create-topics/api-triggered",title:"Send alerts triggered by API call",description:"Triggering notifications via API calls from your server can be done by creating a topic, and then using Notifi NodeJS SDK package here to trigger from your server",source:"@site/docs/create-topics/api-triggered.md",sourceDirName:"create-topics",slug:"/create-topics/api-triggered",permalink:"/docs/next/create-topics/api-triggered",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/create-topics/api-triggered.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Community Manager Announcements",permalink:"/docs/next/create-topics/announcements"},next:{title:"Notifi monitored alerts (coming soon!)",permalink:"/docs/next/create-topics/notifi-monitored"}},c={},l=[{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"Without Additional Filters",id:"without-additional-filters",level:5},{value:"With Additional Filters",id:"with-additional-filters",level:5},{value:"Step 3",id:"step-3",level:4},{value:"Step 4",id:"step-4",level:4}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"send-alerts-triggered-by-api-call",children:"Send alerts triggered by API call"}),"\n",(0,o.jsxs)(t.p,{children:["Triggering notifications via API calls from your server can be done by creating a topic, and then using Notifi NodeJS SDK package ",(0,o.jsx)(t.a,{href:"https://www.github.com/notifi-network/notifi-sdk-ts/packages/node-client",children:"here"})," to trigger from your server"]}),"\n",(0,o.jsx)(t.h4,{id:"step-1",children:"Step 1"}),"\n",(0,o.jsxs)(t.p,{children:["Log in to the ",(0,o.jsx)(t.a,{href:"https://admin.notifi.network",children:"Admin Portal"})," (create an account if you haven't done so already) and head to the ",(0,o.jsx)(t.em,{children:"Alert Manager"})," page."]}),"\n",(0,o.jsx)(t.h4,{id:"step-2",children:"Step 2"}),"\n",(0,o.jsxs)(t.p,{children:["Create your ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"})," by selecting the ",(0,o.jsx)(t.em,{children:"Topics"}),' tab (default) and click on "+ Topic" in the top right, then select the "Send an alert triggered by an API call from my server".']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"create announcement",src:i(8440).A+"",width:"634",height:"491"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"For the steps below, we will provide examples as if you were creating a topic to let users know about liquidity pool price updates."}),"\n",(0,o.jsx)(t.img,{alt:"topic creation page",src:i(4021).A+"",width:"1202",height:"701"})]}),"\n",(0,o.jsxs)(t.p,{children:["You can define this ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"})," with or without any ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#filter",children:"filters"}),"."]}),"\n",(0,o.jsx)(t.h5,{id:"without-additional-filters",children:"Without Additional Filters"}),"\n",(0,o.jsxs)(t.p,{children:["This is the simplest usecase where users will be presented with a simple toggle to register for ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth",children:"alerts"})," on this ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"}),". When you'd like to send notifications from your server, you can use our SDK to send to either everyone who has subscribed, or subsets of users based on the wallet address they registered with.\n",(0,o.jsx)(t.img,{alt:"Alt text",src:i(6631).A+"",width:"314",height:"36"})]}),"\n",(0,o.jsx)(t.h5,{id:"with-additional-filters",children:"With Additional Filters"}),"\n",(0,o.jsxs)(t.p,{children:["This allows your users to fully customize alerts even further. An example of this would be a liquidity pool price update, where your users subscribe to this topic, but would only want to receive updates if a particular value is above a certain threshold (even if you're publishing to the topic for a subset of users). For this experience, you will need to provide additional variables in the message you're publishing to the ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"})," with. This will be covered in more detail in subsequent steps."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Alt text",src:i(3980).A+"",width:"1158",height:"1124"})}),"\n",(0,o.jsx)(t.h4,{id:"step-3",children:"Step 3"}),"\n",(0,o.jsxs)(t.p,{children:["Upon creation of a new ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"}),", you'll be presented with quick start guides and links to our SDK.\n",(0,o.jsx)(t.img,{alt:"Alt text",src:i(6122).A+"",width:"981",height:"452"})]}),"\n",(0,o.jsxs)(t.p,{children:["Once you click Done, you'll be taken back to the Alert Management page.\nMake note of this \"Event Type ID\" that's specified for your ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"}),'. This will be used on your server to publish to this "Liquidity Pool Price Update" topic.']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Alt text",src:i(9893).A+"",width:"678",height:"450"})}),"\n",(0,o.jsxs)(t.p,{children:["Configure your infrastructure to publish to your ",(0,o.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"})]}),"\n",(0,o.jsx)(t.p,{children:"First, you want to install the NPM package in the NodeJS application that will be sending this notification."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"npm install @notifi-network/notifi-node\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Ensure this application is running in a secure location that can access sensitive credentials that will be used to initialize the Notifi NodeJS SDK. ",(0,o.jsx)(t.strong,{children:"Never allow the initialization credentials to ever be sent to a user's web browser."})]}),"\n",(0,o.jsx)(t.p,{children:"Decide where to store your initialization credentials. This is app specific. We highly recommend not storing in anything that's committed to source control such as git. Here are some ideas of how to store secrets for a NodeJS app."}),"\n",(0,o.jsx)(t.h4,{id:"step-4",children:"Step 4"}),"\n",(0,o.jsx)(t.p,{children:"Third step, make note of the topic identifier to use in a publishFusionMessage. To get started you may also copy/paste the sample code that's provided after you've created a topic. This must be copy/pasted in the same NodeJS app you did step (1) in."}),"\n",(0,o.jsx)(t.p,{children:"Fourth step, you should modify the sample to only call the initialization routine once daily, and then customize the publishFusionMessage with your specific topic data. You may pass whatever JSON object you'd like. This JSON object is what will be used to help render notifications later. If you have defined any optional filters for the user to be able to specify when registering for an alert on this topic, then you must also make sure to pass in the required filter parameter variables in your call."}),"\n",(0,o.jsx)(t.p,{children:"Now that you're triggering the notifications with your custom JSON object, you can configure your templates so that the notifications are rendered appropriated per destination."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6631:(e,t,i)=>{i.d(t,{A:()=>o});const o="data:image/png;base64,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"},3980:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/image-2-9c8b2eb4206fcd01d1f8a3af6d23f87c.png"},9893:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/image-3-89cda243b35140508c98157936cf1651.png"},6122:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/image-4-62566c7f8839394e2102149cc9eed0a1.png"},4021:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/image-bdc85b9bfb59e075e489d8a9e39f680d.png"},8440:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/1-693d3c8354548ab6ae007967f6d590fb.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var o=i(6540);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);