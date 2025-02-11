"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[939],{7495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(4848),i=t(8453);const r={},a="Dataplane API",l={id:"alert-trigger/dataplane-api/index",title:"Dataplane API",description:"The Dataplane API is a very low-level REST API located at https://dpapi.prd.notifi.network/,",source:"@site/versioned_docs/version-Release/alert-trigger/dataplane-api/index.md",sourceDirName:"alert-trigger/dataplane-api",slug:"/alert-trigger/dataplane-api/",permalink:"/docs/alert-trigger/dataplane-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-Release/alert-trigger/dataplane-api/index.md",tags:[],version:"Release",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alert Filters",permalink:"/docs/alert-trigger/alert-filters/"},next:{title:"Node Client",permalink:"/docs/alert-trigger/node-client/"}},o={},d=[{value:"FusionIngest",id:"fusioningest",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dataplane-api",children:"Dataplane API"}),"\n",(0,s.jsxs)(n.p,{children:["The Dataplane API is a very low-level REST API located at ",(0,s.jsx)(n.a,{href:"https://dpapi.prd.notifi.network/",children:"https://dpapi.prd.notifi.network/"}),",\nand handles some functions that don't make sense to integrate into the\n",(0,s.jsx)(n.a,{href:"/docs/alert-subscribe/graphql-api/",children:"GraphQL API"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The only such function that is intended for external use is the ",(0,s.jsx)(n.code,{children:"FusionIngest"})," API,\nwhich is used for sending direct messages:"]}),"\n",(0,s.jsx)(n.h2,{id:"fusioningest",children:"FusionIngest"}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL"}),": ",(0,s.jsx)(n.a,{href:"https://dpapi.prd.notifi.network/FusionIngest/",children:"https://dpapi.prd.notifi.network/FusionIngest/"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"}),": POST"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Required Headers"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Authorization"}),": ",(0,s.jsx)(n.code,{children:"Bearer <JWT>"}),", where ",(0,s.jsx)(n.code,{children:"<JWT>"})," is an authorization token obtained\nfrom the ",(0,s.jsx)(n.code,{children:"logIn"})," or ",(0,s.jsx)(n.code,{children:"logInWithService"})," APIs in the ",(0,s.jsx)(n.a,{href:"/docs/alert-subscribe/graphql-api/",children:"GraphQL API"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Content-Type"}),": ",(0,s.jsx)(n.code,{children:"application/json"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Body"}),": An array of JSON objects with the following properties:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventTypeId"}),": The Event Type ID of the topic you want to send the message on"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variablesJson"}),": An object containing variables to apply to the message. This will\nappear as the ",(0,s.jsx)(n.code,{children:"eventData"})," object in the topic's templates."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"specificWallets"}),": (Optional) An array of objects with the following properties:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"walletPublicKey"}),": The public key of a wallet you want to send to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"walletBlockchain"}),": The name of the blockchain in all-caps (e.g. ",(0,s.jsx)(n.code,{children:"ETHEREUM"})," or ",(0,s.jsx)(n.code,{children:"SOLANA"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "eventTypeId": "<YOUR EVENT TYPE ID>",\n        "variablesJson": {\n            "subject": "Test subject",\n            "message": "Test message",\n            "param1": 12345,\n            "param2": [1, 2, 3, "4", "5"]\n        },\n        "specificWallets": [\n            {\n                "walletPublicKey": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",\n                "walletBlockchain": "ETHEREUM"\n            }\n        ]\n    }\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Status Code"}),": 200 on success, 400 when a request parameter is invalid or too large, 500 otherwise"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Body"}),": A JSON document with the following property:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"indexToResultIdMap"}),": An object that maps each index in the request array\nto the ID of an operation tracking sending the message. (There is currently\nno use for these IDs)."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);