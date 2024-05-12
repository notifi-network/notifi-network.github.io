---
sidebar_position: 85
---

# Styling Your Notifications

Once you create a [Sent From My Server](../getting-started-with-self-hosted.md) or [Notifi Hosted](../getting-started-with-notifi-hosted.md)
topic, you will need to create _templates_ for it. A template defines the overall form of a message, including any styling and formatting,
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
`publishFusionMessage()` call) are available through the `{{eventData}}` object and can be
navigated through dot syntax (e.g. a `balance` variable can be accessed through 
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

and we make this call from the Notifi SDK:

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