"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[606],{8870:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(4848),n=t(8453);const r={sidebar_position:2},o="Send alerts triggered by API call",a={id:"create-topics/api-triggered",title:"Send alerts triggered by API call",description:"Triggering notifications via API calls from your server can be done by creating a topic, and then using Notifi NodeJS SDK package here to trigger from your server",source:"@site/docs/create-topics/api-triggered.md",sourceDirName:"create-topics",slug:"/create-topics/api-triggered",permalink:"/docs/next/create-topics/api-triggered",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/create-topics/api-triggered.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Community Manager Announcements",permalink:"/docs/next/create-topics/announcements"},next:{title:"Notifi monitored alerts (coming soon!)",permalink:"/docs/next/create-topics/notifi-monitored"}},l={},d=[{value:"Step 1",id:"step-1",level:2},{value:"Step 2",id:"step-2",level:2},{value:"Topic Name",id:"topic-name",level:3},{value:"Topic Data",id:"topic-data",level:3},{value:"Wallet Address (default)",id:"wallet-address-default",level:4},{value:"No Input From User",id:"no-input-from-user",level:4},{value:"User Selects From List",id:"user-selects-from-list",level:4},{value:"Maximum Frequency",id:"maximum-frequency",level:3},{value:"Optional Filters",id:"optional-filters",level:3},{value:"Without Additional Filters",id:"without-additional-filters",level:5},{value:"With Additional Filters",id:"with-additional-filters",level:5},{value:"Step 3",id:"step-3",level:2},{value:"Step 4",id:"step-4",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"send-alerts-triggered-by-api-call",children:"Send alerts triggered by API call"}),"\n",(0,s.jsxs)(i.p,{children:["Triggering notifications via API calls from your server can be done by creating a topic, and then using Notifi NodeJS SDK package ",(0,s.jsx)(i.a,{href:"https://www.github.com/notifi-network/notifi-sdk-ts/packages/node-client",children:"here"})," to trigger from your server"]}),"\n",(0,s.jsx)(i.h2,{id:"step-1",children:"Step 1"}),"\n",(0,s.jsxs)(i.p,{children:["Log in to the ",(0,s.jsx)(i.a,{href:"https://admin.notifi.network",children:"Admin Portal"})," (create an account if you haven't done so already) and head to the ",(0,s.jsx)(i.em,{children:"Alert Manager"})," page."]}),"\n",(0,s.jsx)(i.h2,{id:"step-2",children:"Step 2"}),"\n",(0,s.jsxs)(i.p,{children:["Create your ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"})," by selecting the ",(0,s.jsx)(i.em,{children:"Topics"}),' tab (default) and click on "+ Topic" in the top right, then select the "Send an alert triggered by an API call from my server".']}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"create announcement",src:t(8440).A+"",width:"634",height:"491"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"For the steps below, we will provide examples as if you were creating a topic to let users know about liquidity pool price updates."}),"\n",(0,s.jsx)(i.img,{alt:"topic creation page",src:t(4021).A+"",width:"1272",height:"762"})]}),"\n",(0,s.jsx)(i.h3,{id:"topic-name",children:"Topic Name"}),"\n",(0,s.jsx)(i.p,{children:"To start off, provide a name and display names for the topic:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Name this topic"}),': The name of the topic that will appear in Alert Manager (e.g. "Liquidity Pool Price Updates")']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Topic display name"}),": The name of the topic that will appear in the subscriber card shown to users. Defaults to the topic name."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Topic display title in alert"}),": The display name of the topic that will appear in ",(0,s.jsx)(i.a,{href:"/docs/next/for-users/",children:"Alert History"}),' (e.g. "Liquidity Pool Price Update")']}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"topic-data",children:"Topic Data"}),"\n",(0,s.jsxs)(i.p,{children:["When a user subscribes to a ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"}),", they can be asked for some information to help address the notifications\nthey are interested in:"]}),"\n",(0,s.jsx)(i.h4,{id:"wallet-address-default",children:"Wallet Address (default)"}),"\n",(0,s.jsx)(i.p,{children:"The user is asked for their wallet address when they subscribe (the Notifi React Card will handle this automatically).\nUse this if you are sending alerts that only concern a specific wallet address (such as a liquidation warning for a specific\nuser)."}),"\n",(0,s.jsx)(i.h4,{id:"no-input-from-user",children:"No Input From User"}),"\n",(0,s.jsx)(i.p,{children:"The user is not asked for any additional information. This is used for topics that broadcast to everyone, such as price pool updates."}),"\n",(0,s.jsx)(i.h4,{id:"user-selects-from-list",children:"User Selects From List"}),"\n",(0,s.jsxs)(i.p,{children:["The user is asked to specify one or more custom values from a list when they subscribe. This is used in more complex UI scenarios\nwhere a user might be interested in one of several categories of update, such as getting updates on a price pair for an exchange.\nFor more info on how to set up this feature, view ",(0,s.jsx)(i.a,{href:"/docs/next/create-topics/subscription-parameters",children:"this page"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"maximum-frequency",children:"Maximum Frequency"}),"\n",(0,s.jsxs)(i.p,{children:["If you want to limit how often a user gets a message, regardless of how often you send alerts, set the ",(0,s.jsx)(i.strong,{children:"Alert Frequency"}),"\noption. This allows you to limit alerts anywhere from once per minute to once per week, with an additional option to only\never send the alert to a user one time."]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:'If you select the "User Selects From List" data above, this frequency will be tracked separately for each list item.\nFor instance, if an alert sends updates once per day and a user signs up for both item A and item B, they can receive one\nnotification for both items each day.'})}),"\n",(0,s.jsx)(i.h3,{id:"optional-filters",children:"Optional Filters"}),"\n",(0,s.jsxs)(i.p,{children:["You can also define optional ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#filter",children:"filters"}),":"]}),"\n",(0,s.jsx)(i.h5,{id:"without-additional-filters",children:"Without Additional Filters"}),"\n",(0,s.jsxs)(i.p,{children:["This is the simplest usecase where users will be presented with a simple toggle to register for ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth",children:"alerts"})," on this ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"}),". When you'd like to send notifications from your server, you can use our SDK to send to either everyone who has subscribed, or subsets of users based on the wallet address they registered with."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:t(6631).A+"",width:"395",height:"263"})}),"\n",(0,s.jsx)(i.h5,{id:"with-additional-filters",children:"With Additional Filters"}),"\n",(0,s.jsxs)(i.p,{children:["This allows your users to fully customize alerts even further. An example of this would be a liquidity pool price update, where your users subscribe to this topic, but would only want to receive updates if a particular value is above a certain threshold (even if you're publishing to the topic for a subset of users). For this experience, you will need to provide additional variables in the message you're publishing to the ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"})," with. This will be covered in more detail in subsequent steps."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:t(3980).A+"",width:"793",height:"1176"})}),"\n",(0,s.jsx)(i.h2,{id:"step-3",children:"Step 3"}),"\n",(0,s.jsxs)(i.p,{children:["Upon creation of a new ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"}),", you'll be presented with quick start guides and links to our SDK."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:t(6122).A+"",width:"993",height:"460"})}),"\n",(0,s.jsxs)(i.p,{children:["Once you click Done, you'll be taken back to the Alert Management page.\nMake note of this \"Event Type ID\" that's specified for your ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"}),'. This will be used on your server to publish to this "Liquidity Pool Price Update" topic.']}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:t(9893).A+"",width:"834",height:"330"})}),"\n",(0,s.jsxs)(i.p,{children:["Configure your infrastructure to publish to your ",(0,s.jsx)(i.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topic"})]}),"\n",(0,s.jsx)(i.p,{children:"First, you want to install the NPM package in the NodeJS application that will be sending this notification."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"npm install @notifi-network/notifi-node\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Ensure this application is running in a secure location that can access sensitive credentials that will be used to initialize the Notifi NodeJS SDK. ",(0,s.jsx)(i.strong,{children:"Never allow the initialization credentials to ever be sent to a user's web browser."})]}),"\n",(0,s.jsx)(i.p,{children:"Decide where to store your initialization credentials. This is app specific. We highly recommend not storing in anything that's committed to source control such as git. Here are some ideas of how to store secrets for a NodeJS app."}),"\n",(0,s.jsx)(i.h2,{id:"step-4",children:"Step 4"}),"\n",(0,s.jsx)(i.p,{children:"Once you've created your topic, make note of the topic identifier to use in a publishFusionMessage. To get started you may also copy/paste the sample code that's provided after you've created a topic. This must be copy/pasted in the same NodeJS app you did step (1) in."}),"\n",(0,s.jsx)(i.p,{children:"Finally, you should modify the sample to only call the initialization routine once daily, and then customize the publishFusionMessage with your specific topic data. You may pass whatever JSON object you'd like. This JSON object is what will be used to help render notifications later. If you have defined any optional filters for the user to be able to specify when registering for an alert on this topic, then you must also make sure to pass in the required filter parameter variables in your call."}),"\n",(0,s.jsx)(i.p,{children:"Now that you're triggering the notifications with your custom JSON object, you can configure your templates so that the notifications are rendered appropriated per destination."})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6631:(e,i,t)=>{t.d(i,{A:()=>s});const s="data:image/png;base64,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KaWH5w8JJhXrCAPA5udD40ZBNKwXRERFGy6XZwF8154Mtm5Lo1FkEN2jyxtHIGcrLu4YNapfbi0usoQEz/t3si+ErN8Lepzt7C4PpdilpaUz7unXWLHyZ6I7tVFQiBSBzebDjd3CaNEsmE1b0jh4KJOkYvgT5Q6nm81b09i81dPZZv+J8hrV7QwbHEGE/kS5XGiZmVmsXLWeRpH1eHTsXdZqESmEKpX9ub6r53ZoKV6ahhIRKaVK0zTURbPALSIi54/CQkREjBQWIiJipLAQEREjhYWIiBgpLERExEhhISIiRgoLERExUliIiIiRwkJERIwUFiIiYqSwEBERI4WFiIgYKSxERMRIYSEiIkYKCxERMVJYiIiIkcJCRESMFBYiImKksBARESOFhYiIGCksRETESGEhIiJGCgsRETFSWIiIiJHCQkREjBQWIiJipLAQEREjhYWIiBgpLERExEhhISIiRiUSFi6Xy1okIiI5lLZ+8oKHhb+/DYfDYS0WEZEcsrKy8Pe3WYtLzAUPi4AAu8JCRMTA6XAQEGC3FpeYCx4WIcFBpKen4Xa7rVUiIoJnCirjVAYhwUHWqhJzwcMiIMBOcHAgyclJ1ioREQGSk5MICgq4tEcWABXDw/D1gcTEk6VuEUdEpKS4XC4SE0/i5+tDxfAwa3WJKrHVk8qVKxKfkEhCQjxBgUHY/P2x2Wz4+pZIfomIlAin04nT6cSRlUV6RjrBwYGlLiigBMMCPCOMkOAgUtPSSUtLIStLC98icunx97cREGCnckR4qZp6yqlEwwI8axil9cUREREPzfmIiIiRwkJERIwUFiIiYqSwEBERI4WFiIgYKSxERMRIYSEiIkYKCxERMVJYiIiIkcJCRESMFBYiImKksBARESOFhYiIGCksRETESGEhIiJGCgsRETFSWIiIiJHCQkREjBQWIiJipLAQEREjhYWIiBgpLERExEhhISIiRgoLERExUliIiIiRwkJERIwUFiIiYqSwEBERI4WFiIgYKSxERMRIYSEiIkYKCxERMVJYiIiIkcJCRESMFBYiImKksBARESOFhYiIGCksRETESGEhIiJGCgsRETFSWIiIiJHCQkREjBQWIiJipLAQEREjhYWIiBgpLERExEhhISIiRgoLERExUliIiIiRwkJERIwUFiIiYqSwEBERI4WFiIgYKSxERMRIYSEiIkYKCxERMVJYiIiIkcJCRESMFBYiImKksBARESOFhYiIGCksRETESGEhIiJGCgsRETFSWIiIiJHCQkREjBQWIiJipLAQEREjhYWIiBgpLERExEhhISIiRv8PH32yrGmZgNMAAAAASUVORK5CYII="},3980:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/image-2-ffdead8f01d0689135ccbf88b907561b.png"},9893:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/image-3-700b9760804df880327d245ddfa71e91.png"},6122:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/image-4-a754c5527cb3e45279bfd0424cec1fbb.png"},4021:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/image-3939e8a309b089c72de9ee1d629a55c9.png"},8440:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/1-693d3c8354548ab6ae007967f6d590fb.png"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var s=t(6540);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);