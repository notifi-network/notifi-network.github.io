"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Node Client",l={unversionedId:"alert-trigger/node-client/index",id:"alert-trigger/node-client/index",title:"Node Client",description:"The Node Client is available on Github.",source:"@site/docs/alert-trigger/node-client/index.md",sourceDirName:"alert-trigger/node-client",slug:"/alert-trigger/node-client/",permalink:"/docs/alert-trigger/node-client/",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/docs/alert-trigger/node-client/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sending an alert through the Admin Portal",permalink:"/docs/alert-trigger/admin-panel/"},next:{title:"Displaying Notification History",permalink:"/docs/notification-history/"}},s={},p=[{value:"login",id:"login",level:2},{value:"sendSimpleHealthThreshold",id:"sendsimplehealththreshold",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-client"},"Node Client"),(0,a.kt)("p",null,"The Node Client is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node"},"Github"),"."),(0,a.kt)("p",null,"Generally, it is used for advanced functionality where you need to directly\ncall Notifi via an API. One example is implementing your own monitoring\nservice for dapp specific on-chain or off-chain events with a custom parser.\nThis enables very flexible and custom alert triggering logic where the dapp\nfully owns the decision of when to send out notifications."),(0,a.kt)("p",null,"The Node Client has 9 endpoints which will be described in detail below.\nTo follow along, please clone the sample of the Node Client on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node-sample"},"Github"),"."),(0,a.kt)("p",null,"First, start the server with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,a.kt)("h2",{id:"login"},"login"),(0,a.kt)("p",null,"The server will be running at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:8080"),". To login, you can use the following script below.\nReplace the ",(0,a.kt)("inlineCode",{parentName:"p"},"sid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," fields with your ",(0,a.kt)("inlineCode",{parentName:"p"},"sid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," that can be found on the\n",(0,a.kt)("a",{parentName:"p",href:"https://admin.dev.notifi.network/"},"Admin Console"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\n# Test the gateway to see if it\'s working\n\ncurl --location --request POST \'http://localhost:8080/login\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sid": "9MJEU0",\n    "secret": "XBLNWj"\n}\'\n')),(0,a.kt)("p",null,"This will return a response like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"token":"eyJhbG","expiry":"2023-07-24T22:06:58.735Z"}\n')),(0,a.kt)("p",null,"You will need the token in the future so please save this. If the token\nexpires, please run this again to issue a new token. In future examples in this\ndocument, the token will be saved as a variable ",(0,a.kt)("inlineCode",{parentName:"p"},"$LOGIN_TOKEN"),"."),(0,a.kt)("h2",{id:"sendsimplehealththreshold"},"sendSimpleHealthThreshold"),(0,a.kt)("p",null,"The variable ",(0,a.kt)("inlineCode",{parentName:"p"},"healthValue")," varies by dapp, and it\u2019s used in conjunction with\n",(0,a.kt)("inlineCode",{parentName:"p"},"VALUE_THRESHOLD")," filters. The user subscribes to a ",(0,a.kt)("inlineCode",{parentName:"p"},"DIRECT_PUSH")," source with\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"VALUE_THRESHOLD")," filter, specifying a threshold in the alert filter\noptions. Then, the service sends a notification to that user's address using a\n",(0,a.kt)("inlineCode",{parentName:"p"},"healthValue"),", which will be evaluated against the threshold that the user\nused. Here is a sample test script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/sendSimpleHealthThreshold\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUA",\n    "secret": "XBLNWf",\n    "walletPublicKey": "8CHibP",\n    "walletBlockchain": "SOLANA",\n    "healthValue": 0.42\n}\'\n')),(0,a.kt)("p",null,"If this is successful, the server will respond with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"message":"success"}\n')),(0,a.kt)("h1",{id:"createtenantuser"},"createTenantUser"),(0,a.kt)("p",null,"This creates a tenant user for the platform. Here is a sample script:\nThe walletPublicKey has to be an id that doesn't exist already."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/createTenantUser\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUJ",\n    "secret": "XBLNWf",\n    "walletPublicKey": "woeijf",\n    "walletBlockchain": "SOLANA"\n}\'\n')),(0,a.kt)("p",null,"If this is successful, the server will respond with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"userId":"6f97780b"}\n')),(0,a.kt)("p",null,"This is used in the following method."),(0,a.kt)("h1",{id:"createdirectpushalert"},"createDirectPushAlert"),(0,a.kt)("p",null,"This creates a direct push alert for the relevant user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/createDirectPushAlert\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUJ",\n    "secret": "XBLNWf",\n    "userId": "658514e6",\n    "email": "test@gmail.com"\n}\'\n')),(0,a.kt)("p",null,"If this is successful, the server will respond with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"alert":{"id":"9e6b14"}}\n')),(0,a.kt)("h1",{id:"senddirectpush"},"sendDirectPush"),(0,a.kt)("p",null,"This can be used to send a direct push message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/sendDirectPush\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUJ",\n    "secret": "XBLNWf",\n    "walletPublicKey": "8CHibP",\n    "walletBlockchain": "SOLANA",\n    "message": "Hello World"\n}\'\n')),(0,a.kt)("p",null,"If this is successful, the server will respond with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"message":"success"}\n')),(0,a.kt)("h1",{id:"deleteuseralert"},"deleteUserAlert"),(0,a.kt)("p",null,"You can use this to delete the direct push alert for a user. This is commonly\nused if the user looks at the alerts and toggles and wants to remove an alert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/deleteUserAlert\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUJ",\n    "secret": "XBLNWf",\n    "alertId": "9e6b14"\n}\'\n')),(0,a.kt)("p",null,"If this is successful, it responds with the ",(0,a.kt)("inlineCode",{parentName:"p"},"alertId"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"alertId":"9e6b14"}\n')),(0,a.kt)("h1",{id:"broadcastmessage"},"broadcastMessage"),(0,a.kt)("p",null,"To send a broadcast message, use this script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/broadcastMessage\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUJ",\n    "secret": "XBLNWf",\n    "topicName": "topic.xyz__test",\n    "message": "Hello world",\n    "subject": "Test"\n}\'\n')),(0,a.kt)("h1",{id:"addsourcetosourcegroup"},"addSourceToSourceGroup"),(0,a.kt)("p",null,"To add a source to a source group, use this script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/addSourceToSourceGroup\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUJ",\n    "secret": "XBLNWf",\n    "sourceGroupId": "23498234",\n    "walletAddress": "8CHibP",\n    "sourceType": "SOLANA_WALLET"\n}\'\n')),(0,a.kt)("h1",{id:"removesourcefromsourcegroup"},"removeSourceFromSourceGroup"),(0,a.kt)("p",null,"To remove a source to a source group, use this script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ncurl --location --request POST \'http://localhost:8080/removeSourceFromSourceGroup\' \\\n--header \'Content-Type: application/json\' \\\n--header "Authorization: Bearer $LOGIN_TOKEN" \\\n--data-raw \'{\n    "sid": "9MJEUJ",\n    "secret": "XBLNWf",\n    "sourceGroupId": "23498234",\n    "walletAddress": "8CHibP",\n    "sourceType": "SOLANA_WALLET"\n}\'\n')))}u.isMDXComponent=!0}}]);