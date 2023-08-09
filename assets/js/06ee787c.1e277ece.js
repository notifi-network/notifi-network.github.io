"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),g=r,f=l["".concat(s,".").concat(g)]||l[g]||u[g]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Creating a card config",c={unversionedId:"alert-subscribe/react-card/create-card-id",id:"alert-subscribe/react-card/create-card-id",title:"Creating a card config",description:"In order to use the Notifi React Card a card config needs to be created accordingly.",source:"@site/docs/alert-subscribe/react-card/create-card-id.md",sourceDirName:"alert-subscribe/react-card",slug:"/alert-subscribe/react-card/create-card-id",permalink:"/docs/alert-subscribe/react-card/create-card-id",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/docs/alert-subscribe/react-card/create-card-id.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Integrating Notifi React card",permalink:"/docs/alert-subscribe/react-card/"},next:{title:"Integrating the Notifi Frontend Client",permalink:"/docs/alert-subscribe/frontend-client/"}},s={},d=[{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"Step 3",id:"step-3",level:4},{value:"Step 4",id:"step-4",level:4},{value:"Step 5",id:"step-5",level:4},{value:"Step 6",id:"step-6",level:4},{value:"Setting up Advanced Mode",id:"setting-up-advanced-mode",level:2},{value:"Configuring Destinations",id:"configuring-destinations",level:2},{value:"Configuring Webhook",id:"configuring-webhook",level:2},{value:"Testing the Configuration",id:"testing-the-configuration",level:2}],p={toc:d},l="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(l,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-card-config"},"Creating a card config"),(0,r.kt)("p",null,"In order to use the ",(0,r.kt)("strong",{parentName:"p"},"Notifi React Card")," a card config needs to be created accordingly.\nThe card config serves as configuration of the React Card and enables multiple flexible uses of the React Card."),(0,r.kt)("h4",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"Log in to the ",(0,r.kt)("a",{parentName:"p",href:"https://admin.dev.notifi.network"},"Admin Panel")," (create an account if you haven't done so already) and head to the ",(0,r.kt)("em",{parentName:"p"},"Card Management"),' page.\nClick on "+Create Config"'),(0,r.kt)("h4",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,'Name your card config. We recommend using a descriptive name like "New Product Announcements" to easily distinguish different card configs from each other in the future.\nClick on "Create config" to reach the card configuration screen.'),(0,r.kt)("h4",{id:"step-3"},"Step 3"),(0,r.kt)("p",null,"Set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"topics")," for the card. A ",(0,r.kt)("inlineCode",{parentName:"p"},"Topic")," usually corresponds to a ",(0,r.kt)("a",{parentName:"p",href:"../../integration-overview/alerts-in-depth#source"},"source"),', e.g. in order to set up a Broadcast alert, select "Broadcast" as ',(0,r.kt)("inlineCode",{parentName:"p"},"Topic type")," and enter a descriptive name for the topic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Topic section of card config",src:n(625).Z,width:"952",height:"212"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Topic name")," specified here is the name that will be shown to the users in the React Card.\n",(0,r.kt)("img",{alt:"Topic name is shown to users",src:n(4824).Z,width:"369",height:"220"}))),(0,r.kt)("h4",{id:"step-4"},"Step 4"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"+")," button next to ",(0,r.kt)("inlineCode",{parentName:"p"},"Topic Type")," to specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"Broadcast Id"),". The Broadcast Id is required to send messages to all subscribers of the Broadcast."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Give topic a broadcast id",src:n(1452).Z,width:"606",height:"432"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A Broadcast Id is required to start with ",(0,r.kt)("inlineCode",{parentName:"p"},"dappid__")," (two underscores).")),(0,r.kt)("h4",{id:"step-5"},"Step 5"),(0,r.kt)("p",null,"Configure the Channels a user is able to select for the alert. This corresponds to the ",(0,r.kt)("a",{parentName:"p",href:"../../integration-overview/alerts-in-depth#target"},"target")," of the alert.\n",(0,r.kt)("img",{alt:"configure the target channels",src:n(1320).Z,width:"1148",height:"794"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See our FAQ for steps on how to enable ",(0,r.kt)("a",{parentName:"p",href:"../../faq#tg-bot-setup"},"Telegram")," and ",(0,r.kt)("a",{parentName:"p",href:"../../faq#discord-bot-setup"},"Discord")," ")),(0,r.kt)("h4",{id:"step-6"},"Step 6"),(0,r.kt)("p",null,"Hit ",(0,r.kt)("em",{parentName:"p"},"Save")," and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," of the card config in the ",(0,r.kt)("strong",{parentName:"p"},"React Card"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"card config Id",src:n(4034).Z,width:"552",height:"155"})),(0,r.kt)("h2",{id:"setting-up-advanced-mode"},"Setting up Advanced Mode"),(0,r.kt)("p",null,"Advanced mode lets you save predefined values for use in future events. For example, you can save the broadcast id to use when setting up a broadcast event. Advanced mode is entirely optional and is most helpful for admininistrators."),(0,r.kt)("p",null,"To turn on advanced mode for a configuration, toggle the switch at the bottom of the configuration."),(0,r.kt)("p",null,"Once advanced mode is enabled, you will see an input section where you can save pre-defined values and their associated types. Add a value, select the type, and click on the plus value to save."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"advanced-input",src:n(7877).Z,width:"1230",height:"368"})),(0,r.kt)("p",null,"Upon creating an associated event, click on the ",(0,r.kt)("strong",{parentName:"p"},"Use input reference")," tab to select the saved value. Save your event."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"advanced-use",src:n(6439).Z,width:"1200",height:"928"})),(0,r.kt)("h2",{id:"configuring-destinations"},"Configuring Destinations"),(0,r.kt)("p",null,"Use the radio buttons to turn on or off channels for notifications. For\nexample, if you turn on email, users can subscribe using an email address. We\nsupport Email, Telegram, SMS (17 countries), and Discord."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"channels",src:n(5422).Z,width:"1164",height:"914"})),(0,r.kt)("h2",{id:"configuring-webhook"},"Configuring Webhook"),(0,r.kt)("p",null,"Webhooks can be enabled by turning on the radio button on the top right. The dapp admin can then opt to send all notifications to a webhook and decide on how to display and distribute the notifications to users. Similar to adding values to topics, you can input your own value with ",(0,r.kt)("strong",{parentName:"p"},"Use value")," or use an existing reference via ",(0,r.kt)("strong",{parentName:"p"},"Use input reference"),".  You must provide a key and value for each header. You can add multiple Webhook Headers."),(0,r.kt)("h2",{id:"testing-the-configuration"},"Testing the Configuration"),(0,r.kt)("p",null,"After finalizing your confguration, click on the ",(0,r.kt)("strong",{parentName:"p"},"Save")," button at the top\nright. You can always create a new card config, delete, or edit existing card\nconfigurations on the ",(0,r.kt)("strong",{parentName:"p"},"Card Management")," page."),(0,r.kt)("p",null,"Once you have saved the card, paste the card ID into your frontend application\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"notifi-react-card")," from the SDK.\nThe component will now reflect the changes you have made."))}u.isMDXComponent=!0},625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-f1eb4ca26710bfab1bc1dc40964748e2.png"},4824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-baf9754ed0162342a2088f285b630db2.png"},1452:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-59490842ddbdffdedc6e944b78433160.png"},1320:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-821dee64bc7c2854a540b726fa1ecaec.png"},4034:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-4effa9cef7b0749e387ad82dbe4e51fc.png"},7877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-f86505aa522a5dd370eec7a06479ce65.png"},6439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/7-95a8b8dfc57cb48c234a63788425eea2.png"},5422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8-4d43ea411e903106c035070209eb3b2a.png"}}]);