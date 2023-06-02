# Custom email templates

<!-- https://docs.google.com/document/d/1-8K_nbJGaywL-jYFg7_YZiE9x_WPaHvuFfYgM7QmqMg/edit -->

Notifi uses templates to render the same notification in different forms for different channels such as email, Telegram, and SMS. We use [Mustache templates](https://mustache.github.io/mustache.5.html), and you can try out a demo here: https://mustache.github.io/#demo

When developing your template, keep the following in mind:
1. The variables you’re providing and if you are using direct push or broadcast.
2. System variables cannot be overridden, but can be used in the template.
3. The maximum template size after expansion is:

  a. Email - 16kb

  b. SMS - 160 unicode or 320 ASCII characters

  c. Telegram - 4kb (4096 ASCII characters)

Please contact us at integrations@notifi.network to help set up templates. In the future, you will be able to update these yourself through a portal. Upon creating the templates, we will provide you with its relevant ID. All email, telegram, and SMS templates are linked to one ID.

When you send a push message, you will provide the template ID you’d like to use for each destination.

<details>
<summary> Example 1: Sending a Direct Push Alert via the Node SDK.</summary>

```tsx
// Sending a DIRECT_TENANT_MESSAGE to the user
import {
  NotifiClient
} from '@notifi-network/notifi-node';

const client: NotifiClient = getNotifiClient();

// Log in to obtain a token
const { token, expiry } = await client.logIn({ sid: MY_SID, secret: MY_SECRET });

// Use the token to send a message to anyone subscribed to that wallet
await client.sendDirectPush(token, {
  key: randomUUID(), // Idempotency key, use the same value for each unique event
  walletBlockchain: 'NEAR', // Or 'SOLANA'
  walletPublicKey: 'juni-kim.near', // Or other address
  message: 'Hello world', // This is used if no variables are provided, or if template expansion fails
  type: 'MY_SPECIAL_TYPE', // OPTIONAL - Users can use this to further filter what notifications they'd like to receive
  template: { // OPTIONAL - Specify which templates to use
    emailTemplate: '<PROVIDED_TEMPLATE_ID>',
    smsTemplate:  '<PROVIDED_TEMPLATE_ID>',
    telegramTemplate: '<PROVIDED_TEMPLATE_ID>',
    variables: { // These are the variables used in your mustache templates
      'userName': 'Juni Kim',
      'anotherVariable': 'foo',
      'anotherVariable1': 'The degens'
    }
  }
});
```

</details>

If you create an email template which looks like this:
```
<html>
<body>
<h2>Hi {{userName}},</h2>
Our service is notifying you about {{anotherVariable}}!

Sincerely,
{{anotherVariable1}}
</body>
</html>
```

It will render as the following:
```
<html>
<body>
<h2>Hi Juni Kim,</h2>
Our service is notifying you about foo!

Sincerely,
The degens
</body>
</html>
```

**Note**: Based on the email client that your recipeint is using, HTML may render differently. Please refer to [this link](https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/) for a quick overview on some basic pitfalls.

For SMS, since the message has a short maximum length, you can simply tell the user:

`Notification for {{anotherVariable}}`

For Telegram Templates, please refer to this guide on supported tags:
https://core.telegram.org/api/entities

<details>
<summary> Example 2: Sending via client SDK a Broadcast Message.</summary>

```tsx
const handleSubmit = useCallback(
    async (t: UserTopic | undefined) => {
      if (t === undefined) {
        return;
      }
      try {
        broadcastMessage(
          {
            topic: t,
            subject: ‘some subject’,
            message: ‘your message to users’,
            isHolderOnly: false,
          },
          signer
        );
      } catch (e: unknown) {
        console.log("Error during broadcastMessage", e);
      }
    },
    [broadcastMessage, signer]
  );
```

</details>

If you create an email template which looks like this:
```
<html>
<body>
{{subject}}

{{message}}
</body>
</html>
```

It will render as the following:
```
<html>
<body>
some subject

your message to users
</body>
</html>
```

