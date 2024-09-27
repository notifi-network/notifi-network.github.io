# Integrating Notifi React card

To see the source code, look at the [Notifi SDK](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react).

:::note

You will need a **card config** to use the Notifi React Card, which can be created in the [Admin Portal](https://admin.dev.notifi.network). Follow the guide [here](create-card-id.md) to create a **card config**.

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

We have design recommendations on how to best present the UI to your dapp users. Check them out here: [Figma](https://www.figma.com/file/ieF0Ynuc3WI608RCt7wKSf/Notifi-Template?node-id=0%3A1&t=v8zeo6UovJAOb9vR-0).

#### Tips

- Embed the bell icon by the wallet login section:
  ![here](https://i.imgur.com/f2rnrpk.png)

  &nbsp;

- There should be a state for the bell icon when connected/not connected:
  ![example of not connected state](https://i.imgur.com/V9yEeCj.png)
  If not connected, the bell icon should be hidden.

- Make sure that there is enough contrast between color selections.

- Styling should be consistent with your current UI.

&nbsp;

## Notifi React Implementation Examples
[Notifi Example Implementation](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-example-v2)