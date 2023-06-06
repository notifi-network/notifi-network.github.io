"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={},o="Custom email templates",l={unversionedId:"alert-design/custom-email-templates",id:"alert-design/custom-email-templates",title:"Custom email templates",description:"Notifi uses templates to render the same notification in different forms for different channels such as email, Telegram, and SMS. We use Mustache templates, and you can try out a demo here//mustache.github.io/#demo",source:"@site/docs/alert-design/custom-email-templates.md",sourceDirName:"alert-design",slug:"/alert-design/custom-email-templates",permalink:"/docs/alert-design/custom-email-templates",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/docs/alert-design/custom-email-templates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Community Manager",permalink:"/docs/alert-design/community-manager"},next:{title:"Supporting multiple addresses",permalink:"/docs/advanced/multi-wallet"}},s={},m=[],u={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-email-templates"},"Custom email templates"),(0,r.kt)("p",null,"Notifi uses templates to render the same notification in different forms for different channels such as email, Telegram, and SMS. We use ",(0,r.kt)("a",{parentName:"p",href:"https://mustache.github.io/mustache.5.html"},"Mustache templates"),", and you can try out a demo here: ",(0,r.kt)("a",{parentName:"p",href:"https://mustache.github.io/#demo"},"https://mustache.github.io/#demo")),(0,r.kt)("p",null,"When developing your template, keep the following in mind:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The variables you\u2019re providing and if you are using direct push or broadcast.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"System variables cannot be overridden, but can be used in the template.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The maximum template size after expansion is:"),(0,r.kt)("p",{parentName:"li"},"a. Email - 16kb"),(0,r.kt)("p",{parentName:"li"},"b. SMS - 160 unicode or 320 ASCII characters"),(0,r.kt)("p",{parentName:"li"},"c. Telegram - 4kb (4096 ASCII characters)"))),(0,r.kt)("p",null,"Please contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:integrations@notifi.network"},"integrations@notifi.network")," to help set up templates. In the future, you will be able to update these yourself through a portal. Upon creating the templates, we will provide you with its relevant ID. All email, telegram, and SMS templates are linked to one ID."),(0,r.kt)("p",null,"When you send a push message, you will provide the template ID you\u2019d like to use for each destination."),(0,r.kt)("details",null,(0,r.kt)("summary",null," Example 1: Sending a Direct Push Alert via the Node SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// Sending a DIRECT_TENANT_MESSAGE to the user\nimport {\n  NotifiClient\n} from '@notifi-network/notifi-node';\n\nconst client: NotifiClient = getNotifiClient();\n\n// Log in to obtain a token\nconst { token, expiry } = await client.logIn({ sid: MY_SID, secret: MY_SECRET });\n\n// Use the token to send a message to anyone subscribed to that wallet\nawait client.sendDirectPush(token, {\n  key: randomUUID(), // Idempotency key, use the same value for each unique event\n  walletBlockchain: 'NEAR', // Or 'SOLANA'\n  walletPublicKey: 'juni-kim.near', // Or other address\n  message: 'Hello world', // This is used if no variables are provided, or if template expansion fails\n  type: 'MY_SPECIAL_TYPE', // OPTIONAL - Users can use this to further filter what notifications they'd like to receive\n  template: { // OPTIONAL - Specify which templates to use\n    emailTemplate: '<PROVIDED_TEMPLATE_ID>',\n    smsTemplate:  '<PROVIDED_TEMPLATE_ID>',\n    telegramTemplate: '<PROVIDED_TEMPLATE_ID>',\n    variables: { // These are the variables used in your mustache templates\n      'userName': 'Juni Kim',\n      'anotherVariable': 'foo',\n      'anotherVariable1': 'The degens'\n    }\n  }\n});\n"))),(0,r.kt)("p",null,"If you create an email template which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<html>\n<body>\n<h2>Hi {{userName}},</h2>\nOur service is notifying you about {{anotherVariable}}!\n\nSincerely,\n{{anotherVariable1}}\n</body>\n</html>\n")),(0,r.kt)("p",null,"It will render as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<html>\n<body>\n<h2>Hi Juni Kim,</h2>\nOur service is notifying you about foo!\n\nSincerely,\nThe degens\n</body>\n</html>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Based on the email client that your recipeint is using, HTML may render differently. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/"},"this link")," for a quick overview on some basic pitfalls."),(0,r.kt)("p",null,"For SMS, since the message has a short maximum length, you can simply tell the user:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Notification for {{anotherVariable}}")),(0,r.kt)("p",null,"For Telegram Templates, please refer to this guide on supported tags:\n",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/api/entities"},"https://core.telegram.org/api/entities")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Example 2: Sending via client SDK a Broadcast Message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const handleSubmit = useCallback(\n    async (t: UserTopic | undefined) => {\n      if (t === undefined) {\n        return;\n      }\n      try {\n        broadcastMessage(\n          {\n            topic: t,\n            subject: \u2018some subject\u2019,\n            message: \u2018your message to users\u2019,\n            isHolderOnly: false,\n          },\n          signer\n        );\n      } catch (e: unknown) {\n        console.log("Error during broadcastMessage", e);\n      }\n    },\n    [broadcastMessage, signer]\n  );\n'))),(0,r.kt)("p",null,"If you create an email template which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<html>\n<body>\n{{subject}}\n\n{{message}}\n</body>\n</html>\n")),(0,r.kt)("p",null,"It will render as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<html>\n<body>\nsome subject\n\nyour message to users\n</body>\n</html>\n")))}c.isMDXComponent=!0}}]);