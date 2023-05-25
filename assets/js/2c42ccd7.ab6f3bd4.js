"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Integrating the Notifi Frontend Client",l={unversionedId:"alert-subscribe/frontend-client/index",id:"alert-subscribe/frontend-client/index",title:"Integrating the Notifi Frontend Client",description:"@notifi/notifi-frontend-client",source:"@site/docs/alert-subscribe/frontend-client/index.md",sourceDirName:"alert-subscribe/frontend-client",slug:"/alert-subscribe/frontend-client/",permalink:"/docs/alert-subscribe/frontend-client/",draft:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/docs/alert-subscribe/frontend-client/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a card config",permalink:"/docs/alert-subscribe/react-card/create-card-id"},next:{title:"GraphQL API",permalink:"/docs/alert-subscribe/graphql-api/"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Hook up the SDK",id:"hook-up-the-sdk",level:2},{value:"Signature Authorization",id:"signature-authorization",level:2},{value:"Create the Alert",id:"create-the-alert",level:2},{value:"Updating the Alert",id:"updating-the-alert",level:2},{value:"Deleting the Alert",id:"deleting-the-alert",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrating-the-notifi-frontend-client"},"Integrating the Notifi Frontend Client"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@notifi/notifi-frontend-client")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-frontend-client"},"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-frontend-client")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i @notifi-network/notifi-frontend-client\n")),(0,a.kt)("h2",{id:"hook-up-the-sdk"},"Hook up the SDK"),(0,a.kt)("p",null,"Load the Notifi Frontend Client SDK into your component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// use the Client and Config of your chain\nconst { newAptosClient, newAptosConfig } = require('@notifi-network/notifi-frontend-client');\n")),(0,a.kt)("p",null,"Instantiate and configure the Notifi Client for your dApp and environment. If your user has not connected their wallet, they will need to do so in order to instantiate the client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const accountAddress = <The wallet's public account address>;\nconst walletPublicKey = <The wallet's public key>;\nconst tenantId = <Tenant ID received through the Notifi Config Tool>;\nconst blockchainEnv = \"Development\";\n\n// use the Client and Config of your chain\nconst config = newAptosConfig({\n  address: accountAddress, // string\n  publicKey: walletPublicKey, // string\n}, tenantId, blockchainEnv);\nconst client = newAptosClient(config);\n\n")),(0,a.kt)("h2",{id:"signature-authorization"},"Signature Authorization"),(0,a.kt)("p",null,"For a user to opt-in for notifications, they will need to provide their signature. This signature will then be used to authorize the user's connected wallet address with Notifi and create the account with Notifi."),(0,a.kt)("p",null,"Using the wallet adapter of your choice, prompt the user to sign and use the signed message in the ",(0,a.kt)("inlineCode",{parentName:"p"},"logIn()")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const logIn = async () => {\n    const loginResult = await client.logIn({\n        // replace with your chain\n        walletBlockchain: 'APTOS',\n        signMessage: async (message, timestamp) => {\n            // this signMessage differs by chain\n            const { result } = await signMessage({\n              address: true,\n              message,\n              nonce: `${timestamp}`,\n            });\n            console.log('signedMessage', result);\n            return result.signature;\n        },\n      });\n      // client should be authenticated now\n      console.log('loginResult', loginResult);\n      return loginResult;\n};\n\n")),(0,a.kt)("h2",{id:"create-the-alert"},"Create the Alert"),(0,a.kt)("p",null,"Once your user enters their contact information and options for their first alert, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()")," to create a ",(0,a.kt)("a",{parentName:"p",href:"../integration-overview/alert-depth#target"},"target group")," of their contact information and a ",(0,a.kt)("a",{parentName:"p",href:"../integration-overview/alert-depth#source"},"source group")," of their desired alert options."),(0,a.kt)("p",null,"In order to create a target group, ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureTargetGroup()")," must pass in least one email address, phone number, Telegram Id, or Webhook URL. DApp admins can update pass in a Webhook URL to receive all of the notifications instead of a user email address, phone number, or Telegram Id."),(0,a.kt)("p",null,"In order to create a source group, ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureSourceGroup()")," must pass in metadata of the alert options returned in the Rendering Alert Options section."),(0,a.kt)("p",null,"After creating a target group and source group, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureAlert()")," to create the first alert."),(0,a.kt)("p",null,"This example shows how to create a Broadcast message alert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," // First create a source group\nconst sourceGroup = await client.ensureSourceGroup({\n  name: 'Default Source Group',\n    sourceParams: [\n      {\n        type: 'BROADCAST',\n        name: 'Marketing Broadcast Source',\n        blockchainAddress: 'notifi__newFeature'\n      }\n    ]\n});\n\nconst source = sourceGroup.sources?.find(it => it?.blockchainAddress === 'notifi__newFeature');\nconst filter = source?.applicableFilters?.find(it => it?.filterType === 'BROADCAST_MESSAGES');\n\nif (filter === undefined) {\n  throw new Error('Unable to find required filter');\n}\n\n// Second create a target group\nconst targetGroup = await client.ensureTargetGroup({\n      name: 'Default Target Group',\n      webhook: {\n        url: 'Notifi Platform', // For BROWSER_PUSH_NOTIFI, url is unused\n        format: 'BROWSER_PUSH_NOTIFI',\n        headers: [],\n  },\n})\n\n    // Finally create the alert\n    const alert = await client.ensureAlert({\n        name: 'User broadcast alerts',\n        sourceGroupId: sourceGroup.id,\n        targetGroupId: targetGroup.id,\n        filterId: filter.id,\n    });\n\n    return alert;\n}\n")),(0,a.kt)("h2",{id:"updating-the-alert"},"Updating the Alert"),(0,a.kt)("p",null,"If a user wants to update their alert by changing the email address notifications are sent to, or to add a phone number for SMS notifications, you can still use ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureAlert()")," to update."),(0,a.kt)("p",null,"You'll want to pass in the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of the existing alert to make the update to that alert entity. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"getAlerts()")," to find the alert entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nconst handleUpdateAlert = async () => {\n  try {\n    const alerts = await getAlerts();\n    const response = await ensureAlert({\n      name = alerts[0].name,\n      sourceGroupId,\n      targetGroupId,\n      filterId,\n      filterOptions,\n      groupName = 'default'\n    });\n    return response;\n  } catch (e) {\n    if (e instanceof GqlError) {\n      // handle the Notifi GqlError\n    }\n  }\n}\n\n")),(0,a.kt)("h2",{id:"deleting-the-alert"},"Deleting the Alert"),(0,a.kt)("p",null,"To delete an alert, use ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteAlert()"),", which simply takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the alert to be deleted. Here is what that looks like in our use case where the user only has one alert in their account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nconst handleDeleteAlert = async () => {\n  try {\n    const alerts = await getAlert();\n    const response = await deleteAlert({\n      alertId: alerts?.[0]?.id,\n    });\n    return response;\n  } catch (e) {\n    if (e instanceof GqlError) {\n      // handle the Notifi GqlError\n    }\n  }\n}\n")))}d.isMDXComponent=!0}}]);