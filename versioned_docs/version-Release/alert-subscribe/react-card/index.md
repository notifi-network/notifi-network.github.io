# Integrating Notifi React card

To see the source code, look at the [Notifi SDK](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react).

:::note

You will need a **topic** and **card config** to use the Notifi React Card, which can be created in the [Admin Portal](https://admin.notifi.network). Follow the guide [here](create-card-id.md) to create a **card config**.

:::

# Installation

**npm**   

[NPM Registry](https://www.npmjs.com/package/@notifi-network/notifi-react)
```bash
npm install @notifi-network/notifi-react
```


**yarn**

```bash
yarn add @notifi-network/notifi-react
```

Import the following CSS file into your component to get baseline styling:

```js
import '@notifi-network/notifi-react/dist/index.css';
```

## Design Guidelines

We provide design recommendations to help you present the UI effectively to your dApp users. Check them out here: [Figma](https://www.figma.com/design/GotqBWyzrRKbZpSmMeouer/Notification-Card---External-File?node-id=1795-3876&p=f&t=V2qGuMvlIXJeK41Q-0)

#### Tips

- Embed the bell icon near the wallet login section for better visibility and user experience:
  ![here](https://i.imgur.com/f2rnrpk.png)

  &nbsp;

- There should be a state for the bell icon when connected/not connected:
  ![example of not connected state](https://i.imgur.com/V9yEeCj.png)

- Make sure that there is enough contrast between color selections.

- Styling should be consistent with your current UI.

&nbsp;

## Notifi React Implementation Examples
🔗 For a complete working example and best practices, check out our [Example Integration Repository](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-example-v2).