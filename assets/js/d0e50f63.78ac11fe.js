"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4834],{280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(4848),i=n(8453);const a={},o="Custom Email Templates (outdated)",r={id:"alert-design/custom-email-templates",title:"Custom Email Templates (outdated)",description:"Notifi uses templates to render the same notification in different forms for different channels such as email, Telegram, and SMS. We use Mustache templates, and you can try out a demo here//mustache.github.io/#demo",source:"@site/docs/alert-design/custom-email-templates.md",sourceDirName:"alert-design",slug:"/alert-design/custom-email-templates",permalink:"/docs/next/alert-design/custom-email-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/alert-design/custom-email-templates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Alert Templates",permalink:"/docs/next/alert-design/custom-alert-templates"},next:{title:"Custom Discord bot",permalink:"/docs/next/alert-design/discord-bot"}},l={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"custom-email-templates-outdated",children:"Custom Email Templates (outdated)"}),"\n",(0,s.jsxs)(t.p,{children:["Notifi uses templates to render the same notification in different forms for different channels such as email, Telegram, and SMS. We use ",(0,s.jsx)(t.a,{href:"https://mustache.github.io/mustache.5.html",children:"Mustache templates"}),", and you can try out a demo here: ",(0,s.jsx)(t.a,{href:"https://mustache.github.io/#demo",children:"https://mustache.github.io/#demo"})]}),"\n",(0,s.jsx)(t.p,{children:"When developing your template, keep the following in mind:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The variables you\u2019re providing and if you are using direct push or broadcast."}),"\n",(0,s.jsx)(t.li,{children:"System variables cannot be overridden, but can be used in the template."}),"\n",(0,s.jsx)(t.li,{children:"The maximum template size after expansion is:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"a. Email - 16kb"}),"\n",(0,s.jsx)(t.p,{children:"b. SMS - 160 unicode or 320 ASCII characters"}),"\n",(0,s.jsx)(t.p,{children:"c. Telegram - 4kb (4096 ASCII characters)"}),"\n",(0,s.jsxs)(t.p,{children:["Please contact us at ",(0,s.jsx)(t.a,{href:"mailto:integrations@notifi.network",children:"integrations@notifi.network"})," to help set up templates. In the future, you will be able to update these yourself through a portal. Upon creating the templates, we will provide you with its relevant ID. All email, telegram, and SMS templates are linked to one ID."]}),"\n",(0,s.jsx)(t.p,{children:"When you send a push message, you will provide the template ID you\u2019d like to use for each destination."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:" Example 1: Sending a Direct Push Alert via the Node SDK."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"// Sending a DIRECT_TENANT_MESSAGE to the user\nimport {\n  NotifiClient\n} from '@notifi-network/notifi-node';\n\nconst client: NotifiClient = getNotifiClient();\n\n// Log in to obtain a token\nconst { token, expiry } = await client.logIn({ sid: MY_SID, secret: MY_SECRET });\n\n// Use the token to send a message to anyone subscribed to that wallet\nawait client.sendDirectPush(token, {\n  key: randomUUID(), // Idempotency key, use the same value for each unique event\n  walletBlockchain: 'NEAR', // Or 'SOLANA'\n  walletPublicKey: 'juni-kim.near', // Or other address\n  message: 'Hello world', // This is used if no variables are provided, or if template expansion fails\n  type: 'MY_SPECIAL_TYPE', // OPTIONAL - Users can use this to further filter what notifications they'd like to receive\n  template: { // OPTIONAL - Specify which templates to use\n    emailTemplate: '<PROVIDED_TEMPLATE_ID>',\n    smsTemplate:  '<PROVIDED_TEMPLATE_ID>',\n    telegramTemplate: '<PROVIDED_TEMPLATE_ID>',\n    variables: { // These are the variables used in your mustache templates\n      'userName': 'Juni Kim',\n      'anotherVariable': 'foo',\n      'anotherVariable1': 'The degens'\n    }\n  }\n});\n"})})]}),"\n",(0,s.jsx)(t.p,{children:"If you create an email template which looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<html>\n<body>\n<h2>Hi {{userName}},</h2>\nOur service is notifying you about {{anotherVariable}}!\n\nSincerely,\n{{anotherVariable1}}\n</body>\n</html>\n"})}),"\n",(0,s.jsx)(t.p,{children:"It will render as the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<html>\n<body>\n<h2>Hi Juni Kim,</h2>\nOur service is notifying you about foo!\n\nSincerely,\nThe degens\n</body>\n</html>\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": Based on the email client that your recipeint is using, HTML may render differently. Please refer to ",(0,s.jsx)(t.a,{href:"https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/",children:"this link"})," for a quick overview on some basic pitfalls."]}),"\n",(0,s.jsx)(t.p,{children:"For SMS, since the message has a short maximum length, you can simply tell the user:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Notification for {{anotherVariable}}"})}),"\n",(0,s.jsxs)(t.p,{children:["For Telegram Templates, please refer to this guide on supported tags:\n",(0,s.jsx)(t.a,{href:"https://core.telegram.org/api/entities",children:"https://core.telegram.org/api/entities"})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:" Example 2: Sending via client SDK a Broadcast Message."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const handleSubmit = useCallback(\n    async (t: UserTopic | undefined) => {\n      if (t === undefined) {\n        return;\n      }\n      try {\n        broadcastMessage(\n          {\n            topic: t,\n            subject: \u2018some subject\u2019,\n            message: \u2018your message to users\u2019,\n            isHolderOnly: false,\n          },\n          signer\n        );\n      } catch (e: unknown) {\n        console.log("Error during broadcastMessage", e);\n      }\n    },\n    [broadcastMessage, signer]\n  );\n'})})]}),"\n",(0,s.jsx)(t.p,{children:"If you create an email template which looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<html>\n<body>\n{{subject}}\n\n{{message}}\n</body>\n</html>\n"})}),"\n",(0,s.jsx)(t.p,{children:"It will render as the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<html>\n<body>\nsome subject\n\nyour message to users\n</body>\n</html>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);