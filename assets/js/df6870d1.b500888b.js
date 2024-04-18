"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8103],{1808:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const o={sidebar_position:1},a="On-Chain & Off-Chain Development",r={id:"notifi-hosted-development/on-chain-&-off-chain-development",title:"On-Chain & Off-Chain Development",description:"The Blockchain Development tool is intended to speed up the development process of creating topic parsers for users.",source:"@site/versioned_docs/version-1.1.0/notifi-hosted-development/on-chain-&-off-chain-development.md",sourceDirName:"notifi-hosted-development",slug:"/notifi-hosted-development/on-chain-&-off-chain-development",permalink:"/docs/notifi-hosted-development/on-chain-&-off-chain-development",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-1.1.0/notifi-hosted-development/on-chain-&-off-chain-development.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Notifi Hosted Development",permalink:"/docs/notifi-hosted-development/"},next:{title:"Supported RPC Blockchain Methods",permalink:"/docs/notifi-hosted-development/rpc-providers"}},d={},c=[{value:"Using the Blockchain Development CLI",id:"using-the-blockchain-development-cli",level:2},{value:"You&#39;ll Find The CLI Command Here",id:"youll-find-the-cli-command-here",level:3},{value:"Important parameters:",id:"important-parameters",level:5},{value:"Paste Command Into Terminal",id:"paste-command-into-terminal",level:3},{value:"Common Commands",id:"common-commands",level:3},{value:"Authentication Commands",id:"authentication-commands",level:4},{value:"Creating Authentication",id:"creating-authentication",level:6},{value:"Parser Commands",id:"parser-commands",level:4},{value:"Finding what commands are available in the CLI",id:"finding-what-commands-are-available-in-the-cli",level:6},{value:"Creating Parser Environment",id:"creating-parser-environment",level:6},{value:"Creating A New Parser Directory",id:"creating-a-new-parser-directory",level:6},{value:"Activating A Fusion Source",id:"activating-a-fusion-source",level:6},{value:"Uploading A Fusion Source",id:"uploading-a-fusion-source",level:6},{value:"Generating a list of your parsers",id:"generating-a-list-of-your-parsers",level:6},{value:"Deactivating A Fusion Source",id:"deactivating-a-fusion-source",level:6},{value:"Parser Development States",id:"parser-development-states",level:3},{value:"When Parser <em>Hasn&#39;t</em> Been Activated",id:"when-parser-hasnt-been-activated",level:5},{value:"When Parser <em>Has</em> Been Activated",id:"when-parser-has-been-activated",level:5},{value:"Recommended Steps",id:"recommended-steps",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"on-chain--off-chain-development",children:"On-Chain & Off-Chain Development"}),"\n",(0,t.jsxs)(n.p,{children:["The Blockchain Development tool is intended to speed up the development process of creating ",(0,t.jsx)(n.a,{href:"https://notifi-network.github.io/docs/next/integration-overview/alerts-in-depth#topic",children:(0,t.jsx)(n.em,{children:"topic"})})," parsers for users."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Requirements"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"VS Code"})," is Recommended"]}),"\n",(0,t.jsxs)(n.li,{children:["CLI supported on Mac OSX / Ubuntu Terminal","\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"for Windows, paste the startup command into WSL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-blockchain-development-cli",children:"Using the Blockchain Development CLI"}),"\n",(0,t.jsx)(n.h3,{id:"youll-find-the-cli-command-here",children:"You'll Find The CLI Command Here"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alert Topics",src:i(8633).A+"",width:"1418",height:"141"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Edit Parser Modal",src:i(8067).A+"",width:"590",height:"500"})})}),"\n",(0,t.jsx)(n.h5,{id:"important-parameters",children:"Important parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NOTIFI_AUTH_TOKEN"}),": This token refers to a unique identity for your DAPP and JWT authentication to interact with Notifi Services"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FUSION_SOURCE_ID"}),": This ID relates to the ",(0,t.jsx)(n.a,{href:"https://notifi-network.github.io/docs/next/integration-overview/alerts-in-depth#topic",children:(0,t.jsx)(n.em,{children:"topic's"})})," respective parser ID. This is particularly useful in CLI commands."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"paste-command-into-terminal",children:"Paste Command Into Terminal"}),"\n",(0,t.jsxs)("center",{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Copy and Paste Into Terminal"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Terminal Image",src:i(1208).A+"",width:"567",height:"306"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Expected Result"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CLI Command Successful",src:i(1153).A+"",width:"623",height:"393"})})]}),"\n",(0,t.jsx)(n.h3,{id:"common-commands",children:"Common Commands"}),"\n",(0,t.jsx)(n.h4,{id:"authentication-commands",children:"Authentication Commands"}),"\n",(0,t.jsx)(n.h6,{id:"creating-authentication",children:"Creating Authentication"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$fusion auth"})," (Creating Authentication for a user to run any ",(0,t.jsx)(n.a,{href:"https://notifi-network.github.io/docs/next/notifi-hosted-development/on-chain-&-off-chain-development#parser-commands",children:"Parser Commands"}),")"]}),"\n",(0,t.jsx)(n.h4,{id:"parser-commands",children:"Parser Commands"}),"\n",(0,t.jsx)(n.h6,{id:"finding-what-commands-are-available-in-the-cli",children:"Finding what commands are available in the CLI"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$fusion parser --help"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run this command if you forget what commands are available."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(5038).A+"",width:"600",height:"202"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h6,{id:"creating-parser-environment",children:"Creating Parser Environment"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$fusion parser init 'fusionSourceId'"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run this command if you need initialize a parser source development environment"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: This is automatically generated upon completion of the CLI Script."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h6,{id:"creating-a-new-parser-directory",children:"Creating A New Parser Directory"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$fusion parser create"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run this command if you want to a new parser directory"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h6,{id:"activating-a-fusion-source",children:"Activating A Fusion Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$fusion parser activate 'cursor' 'fusionSourceId'"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The Fusion Activate Command must be called at least once. This command requires the fusion source to be uploaded"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run this command if you want to activate a parser"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h6,{id:"uploading-a-fusion-source",children:"Uploading A Fusion Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$fusion parser upload 'fusionSourceId'"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run this command if you would like to upload the respective Fusion Source"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h6,{id:"generating-a-list-of-your-parsers",children:"Generating a list of your parsers"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$fusion parser list"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run this command if you would like to see the state of your parsers"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Example Response: ",(0,t.jsx)(n.img,{alt:"Example of Fusion Parser List Command",src:i(6375).A+"",width:"1695",height:"85"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h6,{id:"deactivating-a-fusion-source",children:"Deactivating A Fusion Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$fusion parser deactivate 'fusionSourceId'"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Run this command if you would like to deactivate a Fusion Source"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"parser-development-states",children:"Parser Development States"}),"\n",(0,t.jsx)(n.p,{children:"Templated parsers are available in the following directory:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"**~/fusion-sources/{YOUR_PARSER_NAME}**"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When developing a parser, expected states are to be seen in the following page:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The Fusion Activate Command must be called at least once"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(8786).A+"",width:"1428",height:"138"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(4139).A+"",width:"1474",height:"683"})}),"\n",(0,t.jsxs)(n.h5,{id:"when-parser-hasnt-been-activated",children:["When Parser ",(0,t.jsx)(n.em,{children:"Hasn't"})," Been Activated"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(789).A+"",width:"665",height:"209"})})}),"\n",(0,t.jsxs)(n.h5,{id:"when-parser-has-been-activated",children:["When Parser ",(0,t.jsx)(n.em,{children:"Has"})," Been Activated"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(7900).A+"",width:"647",height:"229"})})}),"\n",(0,t.jsx)(n.p,{children:"Here, parsers can be activated and deactivated outside of the CLI."}),"\n",(0,t.jsx)(n.h3,{id:"recommended-steps",children:"Recommended Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Copy and Paste the Command into your terminal"}),"\n",(0,t.jsx)(n.li,{children:"Run The CLI Command"}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"npm i"})]}),"\n",(0,t.jsx)(n.li,{children:"Modify Your Parser Code"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://notifi-network.github.io/docs/next/notifi-hosted-development/on-chain-&-off-chain-development#uploading-a-fusion-source",children:"Upload Your Parser"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://notifi-network.github.io/docs/next/notifi-hosted-development/on-chain-&-off-chain-development#activating-a-fusion-source",children:"Activate Your Parser"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8067:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-1-80d592244c44a3dd945cbeec253a958a.png"},1208:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-2-49e1814560fa1a32cbc1b5bd4e618229.png"},1153:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-3-f5c6295c9c6781f67256748a74a05904.png"},5038:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-4-12d6baf8764ba49889c45dd277b63f65.png"},6375:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-5-7a6aa503c363a82ca1c7a25a25b0e62d.png"},7900:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-6-42b02e785c669c023571a740c3154076.png"},789:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-7-5c5b28a8bc492abaa5040133833cdda2.png"},8786:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-8-09a996e5bcbc52c90eb2e17f9da57aba.png"},4139:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-9-63d709042a4d0ec00c1726c1b8e474b3.png"},8633:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-bfdd2e5882b5e82ad017ec20bb074a0d.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);