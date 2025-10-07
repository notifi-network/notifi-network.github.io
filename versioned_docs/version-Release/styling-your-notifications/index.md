---
sidebar_position: 85
---

# Styling Your Notifications

Once you create an [automated topic](../getting-started-with-self-hosted.md), 
you will need to create _templates_ for it. A template defines the overall form of a message, including any styling and formatting,
so that messages can be both formatted individually per target platform and so that messages can be sent without having to include the styling
boilerplate every time.

:::note

[Community Manager](../create-topics/announcements.md) topics include their own templates, with template variables managed by
Community Manager.

:::

## Editing Templates

To edit the template for a topic, find the topic under **Alert Manager** in Admin Portal,
then click **Define Templates**.

A new page will appear, allowing you to select a template type on the left and enter template
content in the center. You can enter HTML for Alert History, Email, and Telegram; Markdown
for Discord and Slack, and plain text for SMS. You can also enter templates for the subject
lines for the Alert History and Email templates. Once you have updated your template content
for a target type, click **Save**.

Notifi templates use the [Mustache](https://mustache.github.io/mustache.5.html) engine to
template messages. The variables you pass into the fusion message/event (such as through the
`publishFusionMessage()` call in our nodejs sdk from your own hosted servers) or emitted from 
`Notifi Hosted Parsers` via the `metadata` field are available through the `{{eventData}}` object 
and can be navigated through dot syntax (e.g. a `balance` variable can be accessed through 
`{{eventData.balance}}`). For a full reference of all the other variables that are available,
view the [Notifi template variable reference](./variable-reference.md).

## Templated Message Limits

Each platform has its own considerations for what format messages should be written in,
the maximum allowed message size, etc. These are detailed in the 
[Notifi template platform reference](./platform-reference.md).

## An Example

If we have this email template:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <h1>Balance Update</h1>
        <p>A transaction has been recorded on the wallet with address {{eventData.walletAddress}}:</p>
        <table>
            <tr>
                <td>Transaction Hash</td>
                <td>{{eventData.txHash}}</td>
            </tr>
            <tr>
                <td>Source</td>
                <td>{{eventData.sourceAddress}}</td>
            </tr>
            <tr>
                <td>Destination</td>
                <td>{{eventData.destinationAddress}}</td>
            </tr>
            <tr>
                <td>Token</td>
                <td>{{eventData.tokenType}}</td>
            </tr>
            <tr>
                <td>Amount</td>
                <td>{{eventData.txAmount}}</td>
            </tr>
            <tr>
                <td>Transaction Fee</td>
                <td>{{eventData.txFee}}</td>
            </tr>
        </table>
        <a style="text-size: 8pt;" href="{{unsubscribe_url}}">Unsubscribe</a>
    </body>
</html>
```

and we make this call from the Notifi NodeJS SDK (note: no subscription value was provided, so it's assumed to be '*' which means all. Without specifying the specificWallets below, this message would be sent to everyone who is subscribed to this topic:

```javascript
await client.publishFusionMessage(token, [{
    eventTypeId: "abc123", // whatever the actual eventTypeId is
    variablesJson: {
        txHash: "0xe307bd8253f8cd78992b2ebcc6169f1af3e59cb7341f5ae1154809a2d9a4e15f",
        walletAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        sourceAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        destinationAddress: "0x004fD37b5797158495c07D062D82969dCF3482c6",
        tokenType: "MATIC",
        txAmount: 0,
        txFee: 0.002618999617286668
    },
    specificWallets: [{
        walletPublicKey: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        walletBlockchain: "POLYGON",
    }]
}]);
```

let's show an example of the same data above, but without the specificWallets, and sending to anyone who wants to receive notifications for a specific subscription value (note: isCaseSensitive is false because we're comparing against an EVM address. Values and config are completely up to the developer! Just make sure to match against what your users are subscribing with to what is being sent from your server):

```javascript
await client.publishFusionMessage(token, [{
    eventTypeId: "abc123", // whatever the actual eventTypeId is
    variablesJson: {
        txHash: "0xe307bd8253f8cd78992b2ebcc6169f1af3e59cb7341f5ae1154809a2d9a4e15f",
        walletAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        sourceAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        destinationAddress: "0x004fD37b5797158495c07D062D82969dCF3482c6",
        tokenType: "MATIC",
        txAmount: 0,
        txFee: 0.002618999617286668,
        variablesJson: {
            subscription: {
                value: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
                isCaseSensitive: false
            }
        }
    }
}]);
```

In case you're developing a Notifi Hosted parser, for the approach that doesn't ensure verified users with specificWallets you'd return one or many events formatted like:

```javascript
const singleEvent = {
    // Replace with actual event type ID. You can use GFT.getEvents().* to get the ID for a specific event type.
    // Following the example above, the id property here would actually contain the value abc123
    eventTypeId: GFT.validResponseEvents.SOME_TOPIC_THAT_YOU_CONFIGURED_FOR_THIS_PARSER_TO_EMIT.id,
    // This should be a value that aligns to what you configured the event to be. * if nothing, or the wallet address of the user or account being alerted on
    comparisonValue: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
    blockchain: GFT.ParserBlockchainType,
    // Signature of the block, or your own custom signature that is unique for this invocation.
    changeSignature: BLOCK_ID_OR_HASH,
    // Metadata to pass through to the templates used for creating the actual notifications being sent out to users. This is also what contains filterVariables used in more advanced alert configs where users can enter thresholds
    metadata: {
        txHash: "0xe307bd8253f8cd78992b2ebcc6169f1af3e59cb7341f5ae1154809a2d9a4e15f",
        walletAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        sourceAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        destinationAddress: "0x004fD37b5797158495c07D062D82969dCF3482c6",
        tokenType: "MATIC",
        txAmount: 0,
        txFee: 0.002618999617286668,
    },
    // True for comparisonValues that are case sensitive such as Solana addresses, false for those that are not such as EVM addresses.
    isComparisonValueCaseSensitive: false,
  };
```

In case you're developing a Notifi Hosted parser, for the approach that *DOES* ensure verified users with specificWallets you'd return one or many events formatted like (comparisonValue can be * here, unless you require further filtering). Note the double underscore prefix here when used in the parser:

```javascript
const singleEvent = {
    // Replace with actual event type ID. You can use GFT.getEvents().* to get the ID for a specific event type.
    // Following the example above, the id property here would actually contain the value abc123
    eventTypeId: GFT.validResponseEvents.SOME_TOPIC_THAT_YOU_CONFIGURED_FOR_THIS_PARSER_TO_EMIT.id,
    // This should be a value that aligns to what you configured the event to be. * if nothing, or the wallet address of the user or account being alerted on
    comparisonValue: "*",
    blockchain: GFT.ParserBlockchainType,
    // Signature of the block, or your own custom signature that is unique for this invocation.
    changeSignature: BLOCK_ID_OR_HASH,
    // Metadata to pass through to the templates used for creating the actual notifications being sent out to users. This is also what contains filterVariables used in more advanced alert configs where users can enter thresholds
    metadata: {
        txHash: "0xe307bd8253f8cd78992b2ebcc6169f1af3e59cb7341f5ae1154809a2d9a4e15f",
        walletAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        sourceAddress: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
        destinationAddress: "0x004fD37b5797158495c07D062D82969dCF3482c6",
        tokenType: "MATIC",
        txAmount: 0,
        txFee: 0.002618999617286668,
        __specificWallets: [{
            walletPublicKey: "0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B",
            walletBlockchain: "POLYGON",
        }]
    },
    // True for comparisonValues that are case sensitive such as Solana addresses, false for those that are not such as EVM addresses.
    isComparisonValueCaseSensitive: false,
  };
```

Notifi will send the following email:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <h1>Balance Update</h1>
        <p>A transaction has been recorded on the wallet with address 0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B:</p>
        <table>
            <tr>
                <td>Transaction Hash</td>
                <td>0xe307bd8253f8cd78992b2ebcc6169f1af3e59cb7341f5ae1154809a2d9a4e15f</td>
            </tr>
            <tr>
                <td>Source</td>
                <td>0xDa7C1116b53e13D74F4fAb3356A2032dFd12915B</td>
            </tr>
            <tr>
                <td>Destination</td>
                <td>0x004fD37b5797158495c07D062D82969dCF3482c6</td>
            </tr>
            <tr>
                <td>Token</td>
                <td>MATIC</td>
            </tr>
            <tr>
                <td>Amount</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Transaction Fee</td>
                <td>0.002618999617286668</td>
            </tr>
        </table>
        <a style="text-size: 8pt;" href="https://notifi.network/unsubscribe/?token=mV7hZcn7fCOJVZq33+M97bctdhmqUnC4RvQEoCaUSr1b3AXYk6CnEFf1/5gyby2mesyyXm8JLXzafoth9bXjgQ==">Unsubscribe</a>
    </body>
</html>
```
