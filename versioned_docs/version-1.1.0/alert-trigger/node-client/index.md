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

- A Dapp account (an account created on Admin Portal, NOT the Notifi Hub)
- A ["Sent from my server" topic](../../create-topics/api-triggered.md), created in Alert Manager
- One or more subscriptions for users on that topic
- A [set of templates on that topic](../../create-topics/templates.md) for each messaging platform you want to support

When you have these things, you will be able to copy the SID and SECRET for your Dapp account
under Account Settings, and the Event Type ID from your topic.

## Creating a client

First, instantiate a client in your Node application:

```javascript
import {
  NotifiClient,
  NotifiEnvironment,
  createNotifiService, 
  createDataplaneClient, 
  createGraphQLClient,
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
`NotifiClient.publishFusionMessage` API.

To send a message to **everyone** subscribed to a particular topic, use the call below:

```javascript
await client.publishFusionMessage(token, [{
    eventTypeId: "abc123",
    variablesJson: {
        message: "Hello from Notifi!",
        items: [
            1,
            2,
            3    
        ]
    }
}]);
```

- `eventTypeId`: The "Event Type ID" associated with the topic you're publishing to.
- `variablesJson`: A bundle of JSON-serializable variables to be used during rendering
  of your message templates. This variable presents itself in your templates as `eventData` -
  e.g. the expression `{{eventData.fromAddress}}` in your template will expand as "0x123"
  in the example above.

To send a message to **only specific users**, also add the `specificWallets` parameter,
which is an array of wallet public key and blockchain name pairs - the message will be sent
to all of these:

```javascript
await client.publishFusionMessage(token, [{
    eventTypeId: "abc123",
    variablesJson: {
        fromAddress: "0x123abc",
        amount: 250
    },
    specificWallets: [
        {
            walletPublicKey: "0x123abc",
            walletBlockchain: "ETHEREUM"
        },
        {
            walletPublicKey: "c123ABC",
            walletBlockchain: "SOLANA"
        }
    ]
}]);
```

Note that wallet addresses should be converted to lowercase when submitting them
here, except for Solana addresses, which are case-sensitive.

