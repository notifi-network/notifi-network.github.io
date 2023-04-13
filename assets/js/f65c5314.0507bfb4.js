"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[265],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},i="Integrating Notifi React card",l={unversionedId:"alert-subscribe/react-card/integrate",id:"alert-subscribe/react-card/integrate",title:"Integrating Notifi React card",description:"in progress",source:"@site/docs/alert-subscribe/react-card/integrate.md",sourceDirName:"alert-subscribe/react-card",slug:"/alert-subscribe/react-card/integrate",permalink:"/docs/alert-subscribe/react-card/integrate",draft:!1,editUrl:"https://github.com/notifi-network/docs/docs/alert-subscribe/react-card/integrate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"React Card & Admin Panel",permalink:"/docs/alert-subscribe/react-card/"},next:{title:"How to create card id",permalink:"/docs/alert-subscribe/react-card/create-card-id"}},s={},c=[{value:"in progress",id:"in-progress",level:2},{value:"Design Guidelines",id:"design-guidelines",level:2},{value:"Tutorial Video",id:"tutorial-video",level:2},{value:"Example tips",id:"example-tips",level:4},{value:"Solana",id:"solana",level:3},{value:"EVM (Ethereum, Polygon, Arbitrum, Avalanche or Binance)",id:"evm-ethereum-polygon-arbitrum-avalanche-or-binance",level:3},{value:"Aptos",id:"aptos",level:3},{value:"Acala",id:"acala",level:3},{value:"NEAR",id:"near",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrating-notifi-react-card"},"Integrating Notifi React card"),(0,r.kt)("h2",{id:"in-progress"},"in progress"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@notifi-network/notifi-react-card")),(0,r.kt)("p",null,"A drop-in component that can get your dapp up and running with alert notifications in minutes."),(0,r.kt)("p",null,"We currently support the following blockchains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solana"),(0,r.kt)("li",{parentName:"ul"},"Near"),(0,r.kt)("li",{parentName:"ul"},"Ethereum"),(0,r.kt)("li",{parentName:"ul"},"Polygon"),(0,r.kt)("li",{parentName:"ul"},"Arbitrum"),(0,r.kt)("li",{parentName:"ul"},"Binance"),(0,r.kt)("li",{parentName:"ul"},"Optimism"),(0,r.kt)("li",{parentName:"ul"},"Aptos"),(0,r.kt)("li",{parentName:"ul"},"Acala")),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Head over to ",(0,r.kt)("a",{parentName:"p",href:"https://admin.dev.notifi.network"},"https://admin.dev.notifi.network")," and create a new developer/tenant account if you haven't already."),(0,r.kt)("p",null,"With a developer login, you can generate the cardId to use in the examples below."),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"npm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @notifi-network/notifi-react-card\nnpm install --save-dev @notifi-network/notifi-core\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yarn")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @notifi-network/notifi-react-card\nyarn add --dev @notifi-network/notifi-core\n")),(0,r.kt)("p",null,"Import the following CSS file into your component to get baseline styling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import '@notifi-network/notifi-react-card/dist/index.css';\n")),(0,r.kt)("h2",{id:"design-guidelines"},"Design Guidelines"),(0,r.kt)("p",null,"We have design recommendations on how to best present the UI to your dapp users. Check them out here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.figma.com/file/ieF0Ynuc3WI608RCt7wKSf/Notifi-Template?node-id=0%3A1&t=v8zeo6UovJAOb9vR-0"},"Figma"),"."),(0,r.kt)("h2",{id:"tutorial-video"},"Tutorial Video"),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Nk2F_bd4ftw"},"link")," covering how to setup the React Card config."),(0,r.kt)("p",null,"The video covers the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuring the card in our developer tool"),(0,r.kt)("li",{parentName:"ul"},"Adding Event Types"),(0,r.kt)("li",{parentName:"ul"},"Installing the react package into your project"),(0,r.kt)("li",{parentName:"ul"},"Updating the default values to match your dapp")),(0,r.kt)("h4",{id:"example-tips"},"Example tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Embed the bell icon by the wallet login section.\nie. ",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/f2rnrpk.png",alt:"here"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There should be a state for the bell icon when connected/not connected.\nie. ",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/V9yEeCj.png",alt:"example of not connected state"}),"\nie. If not connected, the bell icon should be hidden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure that there is enough contrast between color selections.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Styling should be consistent with your current UI."))),(0,r.kt)("h1",{id:"code-examples"},"Code Examples"),(0,r.kt)("p",null,"Please see below for code examples on the component configuration. Click on the dropdown button to check out the code snippet."),(0,r.kt)("h3",{id:"solana"},"Solana"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Integrate Card Component -- for Solana, you will also need to install `@notifi-network/notifi-solana-hw-login`"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport { MemoProgramHardwareLoginPlugin } from '@notifi-network/notifi-solana-hw-login';\nimport { useConnection, useWallet } from '@solana/wallet-adapter-react';\nimport React from 'react';\n\nimport './NotifiCard.css';\n\nexport const NotifiCard: React.FC = () => {\n  const { connection } = useConnection();\n  const { wallet, sendTransaction, signMessage } = useWallet();\n  const adapter = wallet?.adapter;\n  const publicKey = adapter?.publicKey?.toBase58() ?? null;\n\n  const hwLoginPlugin = useMemo(() => {\n    return new MemoProgramHardwareLoginPlugin({\n      walletPublicKey: publicKey ?? '',\n      connection,\n      sendTransaction,\n    });\n  }, [publicKey, connection, sendTransaction]);\n\n  if (publicKey === null || signMessage === undefined) {\n    // publicKey is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n    telegramSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <div className=\"container\">\n      <NotifiContext\n        dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n        walletBlockchain=\"SOLANA\"\n        env=\"Development\"\n        walletPublicKey={publicKey}\n        hardwareLoginPlugin={hwLoginPlugin}\n        signMessage={signMessage}\n      >\n        <NotifiSubscriptionCard\n          darkMode\n          inputLabels={inputLabels}\n          inputSeparators={inputSeparators}\n          cardId=\"<YOUR OWN CARD ID HERE>\"\n        />\n      </NotifiContext>\n    </div>\n  );\n};\n"))),(0,r.kt)("h3",{id:"evm-ethereum-polygon-arbitrum-avalanche-or-binance"},"EVM (Ethereum, Polygon, Arbitrum, Avalanche or Binance)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Integrate Card Component"),(0,r.kt)("p",null,"Note: All EVM chains use Ethers. If using a supported EVM-chain, be sure to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"NotifiContext")," params accordingly."),(0,r.kt)("p",null,"Note: Last tested with =>"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"@usedapp/core": "^1.2.5"\n\n"ethers": "^5.7.2"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { arrayify } from '@ethersproject/bytes';\nimport {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport { useEthers } from '@usedapp/core';\nimport { providers } from 'ethers';\nimport React, { useMemo } from 'react';\n\nexport const Notifi: React.FC = () => {\n  const { account, library } = useEthers();\n  const signer = useMemo(() => {\n    if (library instanceof providers.JsonRpcProvider) {\n      return library.getSigner();\n    }\n    return undefined;\n  }, [library]);\n\n  if (account === undefined || signer === undefined) {\n    // account is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      env=\"Development\"\n      signMessage={async (message: Uint8Array) => {\n        const result = await signer.signMessage(message);\n        return arrayify(result);\n      }}\n      walletPublicKey={account}\n      walletBlockchain=\"ETHEREUM\" // NOTE - Please update to the correct chain name.\n      //If Polygon, use \"POLYGON\"\n      //If Arbitrum, use \"ARBITRUM\"\n      //If Binance, use \"BINANCE\"\n      //If Optimism, use OPTIMISM\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,r.kt)("h3",{id:"aptos"},"Aptos"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Integrate Card Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useWallet } from '@aptos-labs/wallet-adapter-react';\nimport {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport React from 'react';\n\nexport const Notifi: React.FC = () => {\n  const { signMessage, account } = useWallet();\n\n  if (\n    account === null ||\n    account.address === null ||\n    account.publicKey === null\n  ) {\n    // account is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      env=\"Development\"\n      walletBlockchain=\"APTOS\"\n      accountAddress={account.address.toString()}\n      walletPublicKey={account.publicKey.toString()}\n      signMessage={async (message: string, nonce: number) => {\n        const result = await signMessage({\n          address: true,\n          message,\n          nonce: `${nonce}`,\n        });\n\n        if (result === null) {\n          throw new Error('failed to sign');\n        }\n\n        if (Array.isArray(result.signature)) {\n          return result.signature[0];\n        }\n        return result.signature;\n      }}\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,r.kt)("h3",{id:"acala"},"Acala"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Integrate Card Component"),(0,r.kt)("p",null,"Create a hook that gets all of the account data using Polkadot util libraries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { web3Accounts, web3FromAddress } from '@polkadot/extension-dapp';\nimport { stringToHex } from '@polkadot/util';\n\nexport default function useAcalaWallet() {\n  const [account, setAccount] = useState<string | null>(null);\n  const [acalaAddress, setAcalaAddress] = useState<string | null>(null);\n  const [polkadotPublicKey, setPolkadotPublicKey] = useState<string | null>(\n    null,\n  );\n\n  useEffect(() => {\n    async function getAccounts() {\n      const allAccounts = await web3Accounts();\n      const account = allAccounts[0].address;\n      if (account) setAccount(account);\n    }\n    getAccounts();\n  }, []);\n\n  const signMessage = useCallback(async (address: string, message: string) => {\n    const extension = await web3FromAddress(address);\n    const signRaw = extension?.signer?.signRaw;\n    const data = stringToHex(message);\n    const signMessage = await signRaw({\n      address,\n      data,\n      type: 'bytes',\n    });\n    return signMessage.signature;\n  }, []);\n\n  const getAcalaAddress = (address: string): string => {\n    const publicKey = decodeAddress(address);\n    return encodeAddress(publicKey, 10);\n  };\n\n  const getPolkadotPublicKey = (address: string): string => {\n    const publicKey = decodeAddress(address);\n    const decodedPublicKey = u8aToHex(publicKey);\n    return decodedPublicKey;\n  };\n\n  useEffect(() => {\n    if (account) {\n      const acalaAddress = getAcalaAddress(account);\n      if (acalaAddress) setAcalaAddress(acalaAddress);\n      const polkadotPublicKey = getPolkadotPublicKey(account);\n      if (polkadotPublicKey) setPolkadotPublicKey(polkadotPublicKey);\n    }\n  }, [account]);\n\n  return { account, acalaAddress, polkadotPublicKey, signMessage };\n}\n")),(0,r.kt)("p",null,"Create a component for the Notifi React Card"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport React, { useCallback, useState } from 'react';\nimport { useAcalaWallet } from 'path-to-custom-hook';\n\nexport const Notifi: React.FC = () => {\n\n  const { acoount, acalaAddress, polkadotPublicKey, signMessage } = useAcalaWallet();\n\n  if (\n    account === null ||\n    acalaAddress === null ||\n    polkadotPublicKey === null\n  ) {\n    // account is required\n    return null;\n  }\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      env=\"Development\"\n      walletBlockchain=\"ACALA\"\n      accountAddress={acalaAddress}\n      walletPublicKey={polkadotPublicKey}\n      signMessage={async (accountAddress: string, message: string) => {\n        await signMessage(\n          address: accountAddress;\n          message: message;\n      );\n      }}\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))),(0,r.kt)("h3",{id:"near"},"NEAR"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Integrate Card Component"),(0,r.kt)("p",null,"Create a hook that gets all of the account data using NEAR API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { keyStores } from 'near-api-js';\nimport { useCallback, useEffect, useMemo, useState } from 'react';\n\nimport { useWalletSelector } from '../components/NearWalletContextProvider';\n\n//assume that you have NEARWalletContextProvider setup\n//example: https://github.com/near/wallet-selector/blob/main/examples/react/contexts/WalletSelectorContext.tsx\n\nexport default function useNearWallet() {\n  const { accountId } = useWalletSelector();\n  const [walletPublicKey, setWalletPublicKey] = useState<string | null>(null);\n\n  const config = {\n    networkId: 'testnet', //adjust based on network type\n  };\n\n  const keyStore = useMemo(() => {\n    return new keyStores.BrowserLocalStorageKeyStore();\n  }, []);\n\n  useEffect(() => {\n    if (!accountId) {\n      setWalletPublicKey(null);\n    }\n  }, [accountId]);\n\n  useEffect(() => {\n    async function getPublicKey() {\n      const keyPair = await keyStore.getKey(config.networkId, accountId!);\n      const publicKey = keyPair.getPublicKey().toString();\n      // remove the ed25519: appending for the wallet public key\n      const publicKeyWithoutTypeAppend = publicKey.replace('ed25519:', '');\n      setWalletPublicKey(publicKeyWithoutTypeAppend);\n    }\n    getPublicKey();\n  }, [accountId, config.networkId, keyStore]);\n\n  const signMessage = useCallback(\n    async (message: Uint8Array) => {\n      const keyPair = await keyStore.getKey(config.networkId, accountId!);\n      const { signature } = keyPair.sign(message);\n      return signature;\n    },\n    [accountId, config.networkId, keyStore],\n  );\n\n  return { account: accountId, walletPublicKey, signMessage };\n}\n")),(0,r.kt)("p",null,"Create a component for the Notifi React Card"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  NotifiContext,\n  NotifiInputFieldsText,\n  NotifiInputSeparators,\n  NotifiSubscriptionCard,\n} from '@notifi-network/notifi-react-card';\nimport '@notifi-network/notifi-react-card/dist/index.css';\nimport { useNearWallet } from 'path-to-custom-hook';\nimport React, { useCallback, useState } from 'react';\n\nexport const Notifi: React.FC = () => {\n  const { account, walletPublicKey, signMessage } = useNearWallet();\n\n  if (account === null || walletPublicKey === null) {\n    // account is required\n    return null;\n  }\n\n  const inputLabels: NotifiInputFieldsText = {\n    label: {\n      email: 'Email',\n      sms: 'Text Message',\n      telegram: 'Telegram',\n    },\n    placeholderText: {\n      email: 'Email',\n    },\n  };\n\n  const inputSeparators: NotifiInputSeparators = {\n    smsSeparator: {\n      content: 'OR',\n    },\n    emailSeparator: {\n      content: 'OR',\n    },\n  };\n\n  return (\n    <NotifiContext\n      dappAddress=\"<YOUR OWN DAPP ADDRESS HERE>\"\n      env=\"Development\"\n      walletBlockchain=\"NEAR\"\n      accountAddress={account}\n      walletPublicKey={walletPublicKey} // require wallet public key without ed25519: append\n      signMessage={signMessage}\n    >\n      <NotifiSubscriptionCard\n        cardId=\"<YOUR OWN CARD ID HERE>\"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n"))))}d.isMDXComponent=!0}}]);