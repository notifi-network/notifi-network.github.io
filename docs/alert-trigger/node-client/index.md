# Node Client

Using the Notifi Node SDK, developers are provided with a very flexible and custom alert triggering tool where the Dapp
fully owns the decision of when to send out notifications. After configuring alert topics and templates in the
[Notifi Admin Portal](https://admin.notifi.network), developers can utilize the Notifi Node SDK to send notifications.
Example use cases for this include triggering notifications based on off-chain events, or watching a chain in a
self-hosted setup.

The Notifi Node SDK is available on [Github](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node).

## Prerequisites

In order to use the Node SDK to publish notifications, you first need to set up the following on the
[Notifi Admin Portal](https://admin.notifi.network):

- A Dapp account (an account created on this page, NOT the Notifi Hub)
- A "Sent from my server" topic, created in Alert Manager
- One or more subscriptions for users on that topic
- A set of templates on that topic for each messaging platform you want to support

When you have these things, you will be able to copy the SID and SECRET for your Dapp account
under Account Settings, and the Event Type ID from your topic.

## Creating a client

First, instantiate a client in your Node application:

```javascript
import {
    NotifiClient,
    NotifiEnvironment,
    createNotifiService, createDataplaneClient, createGraphQLClient,
} from '@notifi-network/notifi-node';

const env: NotifiEnvironment = 'Production';
const gqlClient = createGraphQLClient(env);
const notifiService = createNotifiService(gqlClient);
const dataplaneApiClient = createDataplaneClient(env);
const client = new NotifiClient(notifiService, dataplaneApiClient);
```

## Login

Once you've created your client, log in using the SID and SECRET for your Dapp account,
which can be found under Account Settings in the [Admin Console](https://admin.notifi.network/):

```javascript
const MY_SID = process.env.MY_SID;
const MY_SECRET = process.env.MY_SECRET;
const { token, expiry } = await client.logIn({
    sid: MY_SID,
    secret: MY_SECRET
})
```

The returned `token` is a [JavaScript Web Token](https://jwt.io) that you will use to authenticate
all other requests made by your Node application.

## publishFusionMessage

Once you have a token, you can then use it to publish messages to your topic. This is done through the
`NotifiClient.publishFusionMessage` API:

```javascript
await client.publishFusionMessage(token, [{
    eventTypeId: "abc123",
    variablesJson: {
        fromAddress: "0x123",
        amount: 250
    },
    specificWallets: [
        {
            walletPublicKey: "0x123",
            walletBlockchain: "ETHEREUM"
        },
        {
            walletPublicKey: "c12",
            walletBlockchain: "SOLANA"
        }
    ]
}]);
```

- `eventTypeId`: The "Event Type ID" associated with the topic you're publishing to.
- `variablesJson`: A bundle of JSON-serializable variables to be used during rendering
  of your message templates. This variable presents itself in your templates as `eventData` -
  e.g. the expression `{{eventData.fromAddress}}` in your template will expand as "0x123"
  in the example above.
- `specificWallets`: An optional array of specific wallets to send the message to - both the
  wallet and the blockchain name are specified. If you omit this value, the message will be
  sent to everyone who is subscribed to this topic.


