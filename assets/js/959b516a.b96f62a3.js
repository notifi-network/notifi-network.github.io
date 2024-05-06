"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1977],{3257:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(4848),i=s(8453);const a={sidebar_position:1},l="Supporting multiple addresses",r={id:"advanced/multi-wallet",title:"Supporting multiple addresses",description:"Notifi seamlessly supports multiple addresses per user. This means users with multiple wallet addresses can:",source:"@site/versioned_docs/version-1.0.0/advanced/multi-wallet.md",sourceDirName:"advanced",slug:"/advanced/multi-wallet",permalink:"/docs/1.0.0/advanced/multi-wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/notifi-network/notifi-network.github.io/blob/main/versioned_docs/version-1.0.0/advanced/multi-wallet.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Custom Email domain",permalink:"/docs/1.0.0/alert-design/email-domain"},next:{title:"Alerts for new XMTP messages",permalink:"/docs/1.0.0/advanced/xmtp-source"}},o={},c=[{value:"Example user flow",id:"example-user-flow",level:2},{value:"Integration introduction",id:"integration-introduction",level:2},{value:"How to integrate",id:"how-to-integrate",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"supporting-multiple-addresses",children:"Supporting multiple addresses"}),"\n",(0,t.jsx)(n.p,{children:"Notifi seamlessly supports multiple addresses per user. This means users with multiple wallet addresses can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sign up to alerts with all their wallet adresses at the same time"}),"\n",(0,t.jsx)(n.li,{children:"Verify multiple wallet addresses and link them to their Notifi account"}),"\n",(0,t.jsx)(n.li,{children:"View alert histories of their wallet addresses in one place"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This can be very useful for scenarios where users are naturally expected to handle multiple addresses, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Direct integrations of Notifi into browser extension wallets"}),"\n",(0,t.jsx)(n.li,{children:"Multichain dapps where users can sign up with wallets from multiple chains"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-user-flow",children:"Example user flow"}),"\n",(0,t.jsxs)(n.p,{children:["See an example user flow of a direct integration into a browser extension wallet in our ",(0,t.jsx)(n.a,{href:"https://www.figma.com/file/ieF0Ynuc3WI608RCt7wKSf/Notifi-Template",children:"Figma"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"integration-introduction",children:"Integration introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Currently, multiple addresses are only supported through our ",(0,t.jsx)(n.a,{href:"https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-card",children:(0,t.jsx)(n.strong,{children:"React Card"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable support for multiple addresses use the ",(0,t.jsx)(n.code,{children:"multiWallet: MultiWalletParams"})," property in ",(0,t.jsx)(n.code,{children:"NotifiContext"})," when adding the React Card, which is of the following type:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"type MultiWalletParams = Readonly<{\n  ownedWallets: ReadonlyArray<WalletWithSignParams>;\n}>;\n\ntype WalletWithSignParams = Readonly<{\n  displayName?: string;\n  walletBlockchain:\n    | 'ETHEREUM'\n    | 'POLYGON'\n    | 'ARBITRUM'\n    | 'AVALANCHE'\n    | 'SOLANA'\n    | 'BINANCE'\n    | 'OPTIMISM';\n  walletPublicKey: string;\n  signMessage: Uint8SignMessageFunction;\n}>\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," See the full definition of the type ",(0,t.jsx)(n.code,{children:"WalletWithSignParams"})," ",(0,t.jsx)(n.a,{href:"https://github.com/notifi-network/notifi-sdk-ts/blob/main/packages/notifi-core/lib/NotifiClient.ts",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["With this, adding ",(0,t.jsx)(n.code,{children:"multiWallet"})," is easy once the list of wallet addresses of the user has been obtained."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-integrate",children:"How to integrate"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Obtain the list of wallet addresses."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This will depend on the blockchain and wallet, but often a ",(0,t.jsx)(n.code,{children:"useWallet()"})," hook can be used to fetch an array of all wallet addresses including their public keys."]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Construct ",(0,t.jsx)(n.code,{children:"signMessage"})," functions for every address."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This will again depend on the blockchain you are developing for. Generally, a function that takes a hashed message, signs it, and returns the signature is required."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Code example for Aptos"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const { signMessage, account } = useWallet();\n\nconst signMessageForAccount = async (address: string) => {\n  return async (message: string, nonce:number) => {\n    const messageBuffer = ['Aptos', 'address: ${address}', 'nonce: ${nonce}', 'message: ${message}]\n    const result = await signMessage(address, messageBuffer.join('\\n'));\n    return result;\n  }\n};\n"})})]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Construct a ",(0,t.jsx)(n.code,{children:"WalletWithSignParams"})," array with the public keys and ",(0,t.jsx)(n.code,{children:"signMessage"})," functions and pass it in the ",(0,t.jsx)(n.code,{children:"multiWallet"})," property of ",(0,t.jsx)(n.code,{children:"NotifiContext"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Code example for Aptos"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// simplified code for demonstration purposes\nconst { accounts } = useWallet();\n\nconst ownedWallets = useMemo<ReadonlyArray<WalletWithSignParams>>(\n  () =>\n    accounts.map((account) => ({\n      walletBlockchain: "APTOS",\n      signMessage: signMessageForAccount(account),\n      walletPublicKey: account.publicKey,\n      accountAddress: account.address,\n      displayName: account.name,\n    })),\n  [accounts, signMessageForAccount]\n);\n'})}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'export const Notifi: React.FC = () => {\n  ...\n  return (\n    <NotifiContext\n      dappAddress="<YOUR OWN DAPP ADDRESS HERE>"\n      // keep this "Production" unless you have a special Development environment set up by Notifi\n      env="Production"\n      walletBlockchain="APTOS"\n      accountAddress={account.address.toString()}\n      walletPublicKey={account.publicKey.toString()}\n      signMessage={signMessage}\n      // add multiWallet here\n      multiWallet={ownedWallets}\n    >\n      <NotifiSubscriptionCard\n        cardId="<YOUR OWN CARD ID HERE>"\n        inputLabels={inputLabels}\n        inputSeparators={inputSeparators}\n        darkMode //optional\n      />\n    </NotifiContext>\n  );\n};\n'})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(6540);const i={},a=t.createContext(i);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);