"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[844],{3566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(4848),r=n(8453);const a={sidebar_position:2},s="Creating a card config",c={id:"alert-subscribe/react-card/create-card-id",title:"Creating a card config",description:"In order to use the Notifi React Card a card config needs to be created accordingly.",source:"@site/docs/alert-subscribe/react-card/create-card-id.md",sourceDirName:"alert-subscribe/react-card",slug:"/alert-subscribe/react-card/create-card-id",permalink:"/docs/next/alert-subscribe/react-card/create-card-id",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/alert-subscribe/react-card/create-card-id.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Integrating Notifi React card",permalink:"/docs/next/alert-subscribe/react-card/"},next:{title:"Integrating the Notifi Frontend Client",permalink:"/docs/next/alert-subscribe/frontend-client/"}},o={},d=[{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"Step 3",id:"step-3",level:4},{value:"Step 4",id:"step-4",level:4},{value:"Step 5 (optional)",id:"step-5-optional",level:4},{value:"Step 6",id:"step-6",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"creating-a-card-config",children:"Creating a card config"}),"\n",(0,i.jsxs)(t.p,{children:["In order to use the ",(0,i.jsx)(t.strong,{children:"Notifi React Card"})," a card config needs to be created accordingly.\nThe card config serves as configuration of the React Card and enables multiple flexible uses of the React Card."]}),"\n",(0,i.jsx)(t.h4,{id:"step-1",children:"Step 1"}),"\n",(0,i.jsxs)(t.p,{children:["Log in to the ",(0,i.jsx)(t.a,{href:"https://admin.dev.notifi.network",children:"Admin Portal"})," (create an account if you haven't done so already) and head to the ",(0,i.jsx)(t.em,{children:"Alert Manager"})," page.\nSelect the ",(0,i.jsx)(t.em,{children:"UI Config"}),' tab and click on "Configure Card" or "+ UI Card".']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"UI Config tab",src:n(7133).A+"",width:"1044",height:"406"})}),"\n",(0,i.jsx)(t.h4,{id:"step-2",children:"Step 2"}),"\n",(0,i.jsx)(t.p,{children:"Give your card config a name. This name will never be shown to the end user, however we recommend using a descriptive name to easily distinguish different card configs from each other in the future.\nSelect the blockchain that users will be connecting their wallet from for this card."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Currently one card can only support one blockchain at the same time. If you have users from multiple chains, create a seperate card config for every chain and determine in the frontend which card config to load based on which chain the user is connecting from."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Naming card config",src:n(5510).A+"",width:"574",height:"311"})}),"\n",(0,i.jsx)(t.h4,{id:"step-3",children:"Step 3"}),"\n",(0,i.jsxs)(t.p,{children:["Add the ",(0,i.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#topic",children:"topics"})," you have previously created (see ",(0,i.jsx)(t.a,{href:"../../create-topics/",children:"here"}),") to the card config."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The same topic can be used on multiple card configs."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Adding topics",src:n(4160).A+"",width:"465",height:"194"}),"\n",(0,i.jsx)(t.img,{alt:"Adding topics popup",src:n(5487).A+"",width:"604",height:"254"})]}),"\n",(0,i.jsx)(t.p,{children:"Optional: Add tooltips to the topics that help users understand what alert they are subscribing to."}),"\n",(0,i.jsx)(t.h4,{id:"step-4",children:"Step 4"}),"\n",(0,i.jsxs)(t.p,{children:["Select which destinations you want to allow for this card config. Destinations are equivalent to ",(0,i.jsx)(t.a,{href:"/docs/next/integration-overview/alerts-in-depth#target",children:"targets"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Check out ",(0,i.jsx)(t.a,{href:"../../category/styling-your-notifications",children:"this"})," section to set up your custom email domain, TG bot, or Discord bot."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"configuring destinations",src:n(5337).A+"",width:"462",height:"481"})}),"\n",(0,i.jsx)(t.h4,{id:"step-5-optional",children:"Step 5 (optional)"}),"\n",(0,i.jsx)(t.p,{children:"Change the title and subtitles of the card, you can see a preview of the card titles on the right hand side."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"custom titles",src:n(4626).A+"",width:"477",height:"445"})}),"\n",(0,i.jsx)(t.h4,{id:"step-6",children:"Step 6"}),"\n",(0,i.jsxs)(t.p,{children:["Save your card config and copy the ",(0,i.jsx)(t.strong,{children:"Card ID"})," in the top. This is the ",(0,i.jsx)(t.code,{children:"cardId"})," param you will need in the react component here:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'<NotifiSubscriptionCard\n  darkMode\n  inputLabels={inputLabels}\n  inputSeparators={inputSeparators}\n  cardId="<YOUR OWN CARD ID HERE>"\n/>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},7133:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1-5773f5cdf0ab2f68f1f73b79850dbc19.png"},5510:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2-297709135110c35a85e5ba6b340d3c79.png"},5487:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3-63caeb1f4f068e1f02b4a15a0ae3fdb7.png"},4160:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/4-0e2ca6e113f9f8cf2ef29ea7f82f7a82.png"},5337:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/5-0a5c6ba4b8e8508c73b9627f2dd15b02.png"},4626:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/6-89117cb11326956ca6646db7edff9d03.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(6540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);