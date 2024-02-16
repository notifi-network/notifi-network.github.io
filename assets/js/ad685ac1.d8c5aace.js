"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4},o="Templates",l={unversionedId:"create-topics/templates",id:"create-topics/templates",title:"Templates",description:"Overview",source:"@site/docs/create-topics/templates.md",sourceDirName:"create-topics",slug:"/create-topics/templates",permalink:"/docs/next/create-topics/templates",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/docs/create-topics/templates.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Notifi monitored alerts (coming soon!)",permalink:"/docs/next/create-topics/notifi-monitored"},next:{title:"Notifi Hosted Development",permalink:"/docs/next/notifi-hosted-development/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Template Variables",id:"template-variables",level:2},{value:"Alert Triggered by API Topics",id:"alert-triggered-by-api-topics",level:3},{value:"Notifi Hosted Topics",id:"notifi-hosted-topics",level:3},{value:"Steps",id:"steps",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"templates"},"Templates"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Once a topic is created, templates need to be created and uploaded. Currently, we have three types of topics: Community Manager topics, Alert Triggered by API, and Notifi hosted topics. Alert triggered by an API and Notifi hosted topics will need a template. Community Manager topics do not need templates since they will use a default template."),(0,n.kt)("p",null,"Notifi templates use mustache templates to render all notifications. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://mustache.github.io/mustache.5.html"},"mustache documentation")," to learn more about how to construct mustache templates."),(0,n.kt)("h2",{id:"template-variables"},"Template Variables"),(0,n.kt)("p",null,"When constructing your mustache templates, you have access to template variables provided by your topic payload. The template variables differs based on the topic payload, and these variables can be accessed in mustache templates via the ",(0,n.kt)("inlineCode",{parentName:"p"},"{{eventData}}")," object."),(0,n.kt)("h3",{id:"alert-triggered-by-api-topics"},"Alert Triggered by API Topics"),(0,n.kt)("p",null,"In the case of an Alert Triggered by an API, the template variables will contain the payload sent by the sender (your tenant service). Here's an example:\nThe following is an example payload for alert triggered by an API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "data":[{\n        "eventTypeId": "{topicId}",\n        "variablesJson": {\n            "testVar1": "Hello World",\n            "testVar2": {\n                "testVar3": "Test"\n            }\n        }\n    }]\n}\n')),(0,n.kt)("p",null,"Here's an example template using the variables from the payload:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{{eventData.testVar1}}\nThis is a mustache template. \n{{eventData.testVar2.testVar3}}\n")),(0,n.kt)("p",null,"Given the above payload and template renders this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Hello World\nThis is a mustache template. \nTest\n")),(0,n.kt)("h3",{id:"notifi-hosted-topics"},"Notifi Hosted Topics"),(0,n.kt)("p",null,"Notifi hosted topics is coming soon. Similar to Alert Triggered by an API, Notifi hosted topics will have template variables made available to the mustache templates. The main differentiator will be the source of the payload. In Alert Triggered by an API, the payload is determined by the sender. In Notifi hosted topics, the payload is determined by the parser run by Notifi."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,'In order to upload templates, navigate to the Alert Manager in Notifi Admin Portal. Click the "Define Templates" button to upload templates for the desired topic. Reminder that this option will not be available for Community Manager topic. If you do not see the "Define Templates" button for your topic, check if it is a Community Manager topic.\n',(0,n.kt)("img",{alt:"topic created",src:a(6134).Z,width:"1417",height:"177"})),(0,n.kt)("p",null,'Clicking the "Define Template" button should navigate you to a screen like this.\n',(0,n.kt)("img",{alt:"Upload Template Screen",src:a(2329).Z,width:"1476",height:"850"})),(0,n.kt)("p",null,"Created topics will need a template for each target destination (alert history, email, Discord, etc.) as indicated above. Alert History is a required template. The other destinations are needed based on your tenant's needs. If your tenant wants email and Telegram notifications, email and Telegram templates are needed."))}m.isMDXComponent=!0},6134:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3-39578aaff8d8ec4518bbe957f460465a.png"},2329:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/4-37adc5551c31159797dc9966e746fa35.png"}}]);