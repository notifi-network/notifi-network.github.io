"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7994],{1402:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=i(4848),n=i(8453);const r={},s="Custom Discord bot",d={id:"target-setup/discord-bot",title:"Custom Discord bot",description:"To use Discord, you will need to set up your own Discord bot and application on Discord's developer portal, and then update your Notifi admin portal with the relevant Discord information.",source:"@site/docs/target-setup/discord-bot.md",sourceDirName:"target-setup",slug:"/target-setup/discord-bot",permalink:"/docs/next/target-setup/discord-bot",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/target-setup/discord-bot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Targets",permalink:"/docs/next/category/setting-up-targets"},next:{title:"Custom Email domain",permalink:"/docs/next/target-setup/email-domain"}},a={},c=[{value:"How to set up Discord bot",id:"how-to-set-up-discord-bot",level:2},{value:"OAuth2 Verification Page",id:"verification-page",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"custom-discord-bot",children:"Custom Discord bot"}),"\n",(0,o.jsx)(t.p,{children:"To use Discord, you will need to set up your own Discord bot and application on Discord's developer portal, and then update your Notifi admin portal with the relevant Discord information."}),"\n",(0,o.jsx)(t.h2,{id:"how-to-set-up-discord-bot",children:"How to set up Discord bot"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Navigate to ",(0,o.jsx)(t.a,{href:"https://discord.com/developers/applications",children:"https://discord.com/developers/applications"})," and create a new application"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Once your application is created, go to your newly created application and navigate to the OAuth2 tab."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Copy the Client ID and Client secret for later use. You will need this information when setting up your Notifi admin portal."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Add the redirect url for OAuth2. You can add the redirect url in the OAuth2 tab under Redirects. The redirect url is a web page that authenticates the user\u2019s Discord account with Notifi\u2019s backend. You can use '",(0,o.jsx)(t.a,{href:"https://notifi.network/verify_discord/",children:"https://notifi.network/verify_discord/"}),"' or create your own web page. See ",(0,o.jsx)(t.a,{href:"#verification-page",children:"Verification page"})," for more information on how to create your own web page for the OAuth2 verification page. Make sure to save your changes when adding the redirect url."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Navigate to the Bot section on the left side to get the bot token. You will need to click "Reset Token\u201d to get the bot token. Copy the bot token for later use. You will need this information when setting up in Notifi admin portal.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Now you need to add your Discord bot to the Discord server"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Navigate back to OAuth2 tab => OAuth2 URL Generator"}),"\n",(0,o.jsx)(t.li,{children:"Click \u201cbot\u201c under scopes"}),"\n",(0,o.jsx)(t.li,{children:"Go to the url generated at the bottom of the page"}),"\n",(0,o.jsx)(t.li,{children:"The url will take you to a page that will prompt you to add your Discord bot to the desired Discord server"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Add the Discord bot to the Notifi admin portal. Navigate to ",(0,o.jsx)(t.a,{href:"https://admin.notifi.network/",children:"https://admin.notifi.network/"}),"."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Navigate to the Account Settings tab => Add Bot button"}),"\n",(0,o.jsx)(t.li,{children:"Select Discord Type"}),"\n",(0,o.jsxs)(t.li,{children:["Fill out the form with the information that you saved from the Discord developer portal.","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Name: Name of the discord bot. This can be anything"}),"\n",(0,o.jsx)(t.li,{children:'Discord Guild ID / Servier ID: The ID of the Discord server that you added the bot to. You can find this ID by right clicking on the server in Discord and selecting "Copy Server ID".'}),"\n",(0,o.jsx)(t.li,{children:"Discord Client ID: The Client ID that you saved from the Discord developer portal."}),"\n",(0,o.jsx)(t.li,{children:"Discord Client Secret: The Client Secret that you saved from the Discord developer portal."}),"\n",(0,o.jsx)(t.li,{children:'Discord Server Invite Link: The invite link to the Discord server that you added the bot to. You can find this link by right clicking on the server and selecting "Invite People".'}),"\n",(0,o.jsxs)(t.li,{children:["Redirect URL: The redirect url that you saved from the Discord developer portal. For most, it will be '",(0,o.jsx)(t.a,{href:"https://notifi.network/verify_discord/",children:"https://notifi.network/verify_discord/"}),"' unless you created your own OAuth2 verification page."]}),"\n",(0,o.jsx)(t.li,{children:"Bot Tokens: The bot token that you saved from the Discord developer portal. You need to specify an identifier for the bot token. We support multiple bot tokens in case you hit rate limits."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Click Create"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Optional: Update the application name, description, and icon. Also update the bot username and icon. Note that the application and bot are two separate things in Discord."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"verification-page",children:"OAuth2 Verification Page"}),"\n",(0,o.jsx)(t.p,{children:"Although not mandatory, you can create your own OAuth2 verification page. Tenants might want to do this for branding purposes. If you want to create your own OAuth2 verification page, use the following information to set it up."}),"\n",(0,o.jsxs)(t.p,{children:["The OAuth2 redirect flow will specify two parameters in the query parameter of the url: code and state. Here's an example of the url: ",(0,o.jsx)(t.a,{href:"https://notifi.network/verify_discord/?code=8CHr7zrAnMCl0RjjdimsApop3M2SUT&state=cac809feb82147a9838ea49dddd9d6dd",children:"https://notifi.network/verify_discord/?code=8CHr7zrAnMCl0RjjdimsApop3M2SUT&state=cac809feb82147a9838ea49dddd9d6dd"})]}),"\n",(0,o.jsx)(t.p,{children:"You must then construct a GraphQL post request to verify the Discord account with the following information:"}),"\n",(0,o.jsxs)(t.p,{children:["url: ",(0,o.jsx)(t.a,{href:"https://api.notifi.network/gql",children:"https://api.notifi.network/gql"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"mutation verifyDiscordTarget($input: VerifyDiscordTargetInput!){\n  verifyDiscordTarget(verifyDiscordTargetInput: $input){\n    name,\n    id,\n    username,\n    discordAccountId,\n  }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"The request object will look something like below given the example url above. The DiscordTargetId in the request is the state parameter in the url parameter. The redirectUri is the url that this page will be hosted on. This should be the same as the redirect url specified in the Discord developer portal."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n  "input": {\n    "discordTargetId": "cac809feb82147a9838ea49dddd9d6dd",\n    "code": "8CHr7zrAnMCl0RjjdimsApop3M2SUT",\n    "redirectUri": "https://notifi.network/verify_discord/"\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>d});var o=i(6540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);