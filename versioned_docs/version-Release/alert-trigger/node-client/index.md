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
- A [set of templates on that topic](../../styling-your-notifications/index.md) for each messaging platform you want to support

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

### Ensuring only wallet owners receive notifications {#publish-secure}
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

### Requirements for topics that have alert filters

When creating a new topic, the developer can specify which filters apply, and which parameters are collected either from the user, or programmatically on the frontend via variables that are set. This is in addition to the subscription value that is set for the alert. When a new alert is created, it will specify which thresholds the user wants the alert to trigger on. When publishing a new message via publishFusionMessage, you need to provide a JSON object named 'filterVariables' that is a child of your root 'variablesJson'. Let's use a couple examples.

#### Topic that emits ETH balance changes

Topic Id: **abcdef123456**<br />
Subscription data: (default) Wallet address collected from connected wallet or input field for [subscription value](../../create-topics/api-triggered.md#topic-data)<br />
Additional filters: **[aboveThreshold](../alert-filters/index.md#abovethreshold)**<br />

If using the Notifi React module on your site, user subscriptions to this topic will create an alert that contain the wallet address that the alert should be triggered on, along with the threshold that it should trigger on. For this example, let's say that's wallet 0xa4d2c123 and the threshold is a decimal value of 1.3

**Note: The filterVariables object is expected to be a child of the variablesJson root that you are providing**

##### This shows a case where this user's alert would get triggered by your backend publishing a message. The subscription value matches (ignoring case) and the threshold value is above what the alert was configured for. If either of those conditions failed, the alert would not trigger.
```javascript
await client.publishFusionMessage(token, [{
    eventTypeId: "abcdef123456",
    variablesJson: {
        someCustomValue: "foo",
        someMoreCustom: {
            moreEventSpecificData: "blah",
        },
        ...
        filterVariables: {
            subscription: {
                value: "0xA4d2C123",
                isCaseSensitive: false
            },
            aboveThreshold: {
                thresholdComparisonValue: 1.31
            }
        }
    }
}]);
```

#### Topic that emits sensitive account updates 
For cases where you'd like to send secure messages where only the wallet owner can receive the message, but still apply filters, we recommend setting the [subscription value](../../create-topics/api-triggered.md#topic-data) to "No input". In these cases, you will always provide specific wallet owners that notifications are intended for. If there are additional alert filters configured, values must still be provided for them.

Topic Id: **123456abcdef**<br />
Subscription data: **[No Input](../../create-topics/api-triggered.md#topic-data)**<br />
Additional filters: **[aboveThreshold](../alert-filters/index.md#abovethreshold)**<br />

##### This shows a case where this user's alert would get triggered by your backend publishing a message. An alert matching the eventTypeId that you provided was found for the user owning wallet 0xA4d2C123. Finally, the threshold value is above what the alert was configured for, so the alert will trigger. If multiple 'specificWallets' were to be provided, all of those users would have alerts searched for matching the criteria.
```javascript
await client.publishFusionMessage(token, [{
    eventTypeId: "123456abcdef",
    variablesJson: {
        ...
        filterVariables: {
            aboveThreshold: {
                thresholdComparisonValue: 1.31
            }
        },
    },
    specificWallets: [
        {
            walletPublicKey: "0xA4d2C123",
            walletBlockchain: "ETHEREUM"
        },
    ]
}]);
```
