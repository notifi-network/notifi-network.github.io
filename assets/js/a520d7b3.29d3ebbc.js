"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5013],{7115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(4848),s=n(8453);const a={},r="Easy Subscribe",o={id:"alert-subscribe/easy-subscribe/index",title:"Easy Subscribe",description:"With the Easy Subscription feature, users can subscribe to Community Manager topics directly, without needing to create a Notifi account, sign up on the Notifi React Card, manage notification preferences, or sign their wallet. Users can subscribe using their email address and have the option to receive notifications via a Telegram bot.",source:"@site/versioned_docs/version-Release/alert-subscribe/easy-subscribe/index.md",sourceDirName:"alert-subscribe/easy-subscribe",slug:"/alert-subscribe/easy-subscribe/",permalink:"/docs/alert-subscribe/easy-subscribe/",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-Release/alert-subscribe/easy-subscribe/index.md",tags:[],version:"Release",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a card config",permalink:"/docs/alert-subscribe/react-card/create-card-id"},next:{title:"Frontend Client",permalink:"/docs/alert-subscribe/frontend-client/"}},d={},c=[{value:"Step 1: Initial Setup \u2013 Create a Notifi account and set up Community Manager topics",id:"step-1-initial-setup--create-a-notifi-account-and-set-up-community-manager-topics",level:3},{value:"Step 2: Create a Card Configuration",id:"step-2-create-a-card-configuration",level:3},{value:"Log in to the Admin Portal and head to the <em>Alert Manager</em> page.",id:"log-in-to-the-admin-portal-and-head-to-the-alert-manager-page",level:4},{value:"Select the UI Config tab and click on &quot;+ UI Card&quot;.",id:"select-the-ui-config-tab-and-click-on--ui-card",level:4},{value:"Then, click the Next button on the Easy Subscribe Card.",id:"then-click-the-next-button-on-the-easy-subscribe-card",level:4},{value:"Step 3: Config your campaign",id:"step-3-config-your-campaign",level:3},{value:"Name your Easy Subscribe Config. While this name is not visible to end users, we recommend choosing a descriptive name for future reference.",id:"name-your-easy-subscribe-config-while-this-name-is-not-visible-to-end-users-we-recommend-choosing-a-descriptive-name-for-future-reference",level:4},{value:"Add the campaign&#39;s start and end date. Registration will be disabled once the end date is reached.",id:"add-the-campaigns-start-and-end-date-registration-will-be-disabled-once-the-end-date-is-reached",level:4},{value:"Add the topics you have previously created (see here) to the card config.",id:"add-the-topics-you-have-previously-created-see-here-to-the-card-config",level:4},{value:"Step 4: Save and Copy Endpoints",id:"step-4-save-and-copy-endpoints",level:3},{value:"Save your card configuration.",id:"save-your-card-configuration",level:4},{value:"Copy the Email and Telegram endpoints (if the Telegram bot is already added) from the bottom of the card.",id:"copy-the-email-and-telegram-endpoints-if-the-telegram-bot-is-already-added-from-the-bottom-of-the-card",level:4},{value:"Step 5: Add Templates",id:"step-5-add-templates",level:3},{value:"Step 6: Adding Alerts to Telegram Groups",id:"step-6-adding-alerts-to-telegram-groups",level:3},{value:"Click on &quot;Add Alerts to Telegram Groups&quot; to initiate the setup. (Refer to the image below for guidance)",id:"click-on-add-alerts-to-telegram-groups-to-initiate-the-setup-refer-to-the-image-below-for-guidance",level:4},{value:"You have two methods to add your bot to Telegram groups:",id:"you-have-two-methods-to-add-your-bot-to-telegram-groups",level:4},{value:"Step 7: Integrate Endpoints into Your App",id:"step-7-integrate-endpoints-into-your-app",level:3},{value:"Email: Use the email endpoint to send users&#39; email addresses via a POST request. Add success/error handling to manage the response effectively.",id:"email-use-the-email-endpoint-to-send-users-email-addresses-via-a-post-request-add-successerror-handling-to-manage-the-response-effectively",level:4},{value:"Telegram: Redirect users to the provided Telegram URL, allowing them to directly subscribe to your Telegram bot.",id:"telegram-redirect-users-to-the-provided-telegram-url-allowing-them-to-directly-subscribe-to-your-telegram-bot",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"easy-subscribe",children:"Easy Subscribe"}),"\n",(0,i.jsxs)(t.p,{children:["With the ",(0,i.jsx)(t.strong,{children:"Easy Subscription"})," feature, users can subscribe to Community Manager topics directly, without needing to create a Notifi account, sign up on the Notifi React Card, manage notification preferences, or sign their wallet. Users can subscribe using their email address and have the option to receive notifications via a Telegram bot."]}),"\n",(0,i.jsx)(t.h1,{id:"creating-an-easy-subscribe-card-config",children:"Creating an Easy Subscribe Card Config"}),"\n",(0,i.jsxs)(t.p,{children:["To use the ",(0,i.jsx)(t.strong,{children:"Easy Subscribe"})," feature, a respective Easy Subscribe card configuration must be created. This configuration sets up an Easy Subscription campaign and provides the necessary endpoints: allowing you to directly use these URLs to join the Telegram bot and send to email addresses for subscribing to Community Manager topics."]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-initial-setup--create-a-notifi-account-and-set-up-community-manager-topics",children:"Step 1: Initial Setup \u2013 Create a Notifi account and set up Community Manager topics"}),"\n",(0,i.jsxs)(t.p,{children:["Visit this ",(0,i.jsx)(t.a,{href:"../create-topics/announcements",children:"page"})," and follow the first two steps to get started."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-create-a-card-configuration",children:"Step 2: Create a Card Configuration"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.h4,{id:"log-in-to-the-admin-portal-and-head-to-the-alert-manager-page",children:["Log in to the ",(0,i.jsx)(t.a,{href:"https://admin.notifi.network",children:"Admin Portal"})," and head to the ",(0,i.jsx)(t.em,{children:"Alert Manager"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"select-the-ui-config-tab-and-click-on--ui-card",children:'Select the UI Config tab and click on "+ UI Card".'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"then-click-the-next-button-on-the-easy-subscribe-card",children:"Then, click the Next button on the Easy Subscribe Card."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Refer to the attached screenshot for guidance."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"UI Config tab",src:n(3412).A+"",width:"1026",height:"560"})}),"\n",(0,i.jsx)(t.h3,{id:"step-3-config-your-campaign",children:"Step 3: Config your campaign"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"name-your-easy-subscribe-config-while-this-name-is-not-visible-to-end-users-we-recommend-choosing-a-descriptive-name-for-future-reference",children:"Name your Easy Subscribe Config. While this name is not visible to end users, we recommend choosing a descriptive name for future reference."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"add-the-campaigns-start-and-end-date-registration-will-be-disabled-once-the-end-date-is-reached",children:"Add the campaign's start and end date. Registration will be disabled once the end date is reached."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.h4,{id:"add-the-topics-you-have-previously-created-see-here-to-the-card-config",children:["Add the ",(0,i.jsx)(t.a,{href:"/docs/integration-overview/alerts-in-depth#topic",children:"topics"})," you have previously created (see ",(0,i.jsx)(t.a,{href:"../create-topics",children:"here"}),") to the card config."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The same topic can be used on multiple card configs."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Naming card config",src:n(7903).A+"",width:"667",height:"807"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4-save-and-copy-endpoints",children:"Step 4: Save and Copy Endpoints"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"save-your-card-configuration",children:"Save your card configuration."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"copy-the-email-and-telegram-endpoints-if-the-telegram-bot-is-already-added-from-the-bottom-of-the-card",children:"Copy the Email and Telegram endpoints (if the Telegram bot is already added) from the bottom of the card."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Naming card config",src:n(5238).A+"",width:"1123",height:"320"})}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"Check out these sections to set up your Telegram bot and Email domain:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../target-setup/tg-bot",children:"Set up a Telegram bot"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../target-setup/email-domain",children:"Set up a custom email domain"})}),"\n"]})]}),"\n",(0,i.jsx)(t.h3,{id:"step-5-add-templates",children:"Step 5: Add Templates"}),"\n",(0,i.jsxs)(t.p,{children:["These templates will be sent to users who subscribe to topics using the ",(0,i.jsx)(t.strong,{children:"Easy Subscribe"})," config. They can be in the form of a greeting or confirmation Email/Telegram message, which the users will receive on their respective platforms upon subscribing to topics."]}),"\n",(0,i.jsxs)(t.p,{children:["To upload the templates for each destination, click on ",(0,i.jsx)(t.strong,{children:"Templates"})," within the Easy Subscribe config card.\nRefer to the attached screenshot for guidance."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Upload templates",src:n(2032).A+"",width:"1037",height:"292"}),"\n",(0,i.jsx)(t.img,{alt:"Upload templates",src:n(8281).A+"",width:"1440",height:"885"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-6-adding-alerts-to-telegram-groups",children:"Step 6: Adding Alerts to Telegram Groups"}),"\n",(0,i.jsx)(t.p,{children:"With our latest feature, Notifi Admins can now integrate their Telegram bot directly into existing Telegram groups. This integration ensures that any alert sent through the Admin dashboard for community manager topics will also be received in these selected groups."}),"\n",(0,i.jsx)(t.p,{children:"Follow the steps below to add the bot to your Telegram groups:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"click-on-add-alerts-to-telegram-groups-to-initiate-the-setup-refer-to-the-image-below-for-guidance",children:'Click on "Add Alerts to Telegram Groups" to initiate the setup. (Refer to the image below for guidance)'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Upload templates",src:n(2194).A+"",width:"1452",height:"291"}),"\n",(0,i.jsx)(t.img,{alt:"Upload templates",src:n(3836).A+"",width:"717",height:"407"})]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"you-have-two-methods-to-add-your-bot-to-telegram-groups",children:"You have two methods to add your bot to Telegram groups:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2.1"})," Direct Access via Telegram App"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"2.1.1"})," Click on ",(0,i.jsx)(t.strong,{children:"OPEN TELEGRAM"})," to be redirected to your Telegram application."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"2.1.2"})," Once in Telegram, select the desired groups where you want to receive alerts."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2.2"})," Copy and Share the Telegram Bot Link"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"2.2.1"})," Copy the provided URL and paste it into a browser/device where you are logged into Telegram."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"2.2.2"})," Alternatively, you may share this URL with other admins to add the bot from their sessions."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Refer to the attached screenshot for guidance."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Upload templates",src:n(6725).A+"",width:"1104",height:"933"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-7-integrate-endpoints-into-your-app",children:"Step 7: Integrate Endpoints into Your App"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"email-use-the-email-endpoint-to-send-users-email-addresses-via-a-post-request-add-successerror-handling-to-manage-the-response-effectively",children:"Email: Use the email endpoint to send users' email addresses via a POST request. Add success/error handling to manage the response effectively."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.h4,{id:"telegram-redirect-users-to-the-provided-telegram-url-allowing-them-to-directly-subscribe-to-your-telegram-bot",children:"Telegram: Redirect users to the provided Telegram URL, allowing them to directly subscribe to your Telegram bot."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Below is an example of how to use these endpoints:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"\n  const [emailAddress, setEmailAddress] = useState('');\n\n  const handleEmailAddressChange = (e) => {\n    const email = e.target.value;\n    setEmailAddress(email);\n  };\n\n  const handleSubmit = async () => {\n    try {\n      const response = await fetch(emailEndpoint, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({ emailAddress }),\n      }).then((res) => res.json());\n\n      if (response.error)\n        // handle error\n      else\n       // handle success\n    } catch (err) {\n      console.error(err);\n    }\n  };\n\n  return (\n    <>      \n      <Input\n        placeholder='Email address'\n        value={emailAddress}\n        onChange={handleEmailAddressChange}\n      />\n      <Button onClick={handleSubmit}>\n        Subscribe\n      </Button>\n\n      <Link\n        href={telegramBotUrl}\n        target='_blank'\n        rel='noopener noreferrer'\n      >\n        <Button>\n          Get Telegram Alerts\n        </Button>\n      </Link>\n    </>\n  );\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Easy Subscribe UI",src:n(3323).A+"",width:"4320",height:"894"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3412:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1-9cc6c60ec92cd398bcdec5cb7ac633a7.png"},7903:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2-bbb8bea210cb6c287f6c028bb02bcd99.png"},5238:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3-0e51b115741a0cbb24343346c3f14170.png"},8281:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/4-e1f39b228ce02ce7ab4295e2908e19a9.png"},2032:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/5-519421cb170580de71e5724e548ae955.png"},3323:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/6-57e012af28323d4de9be7a9acc67f7d2.png"},2194:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/7-36ce5aa1f4680d1521caf8739f0fcde0.png"},6725:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/8-694627dbe1ff5a4090cd85a254288434.png"},3836:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/9-4f07f8b7e3ce283ef65ec46e35610e8a.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);