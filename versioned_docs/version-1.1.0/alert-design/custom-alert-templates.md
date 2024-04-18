# Custom Alert Templates

<!-- https://docs.google.com/document/d/1-8K_nbJGaywL-jYFg7_YZiE9x_WPaHvuFfYgM7QmqMg/edit -->

Notifi uses templates to render the same notification in different forms for different channels such as email, Telegram, and SMS. We use [Mustache templates](https://mustache.github.io/mustache.5.html), and you can try out a demo here: https://mustache.github.io/#demo

When developing your template, keep the following in mind:
1. The variables you’re providing via [API calls](https://) or [Notifi Hosted](https://)
2. System variables cannot be overridden, but can be used in the template.
3. The maximum template size after expansion is:

  a. Email - 32kb

  b. SMS - 140 ASCII characters

  c. Telegram - 4kb (4096 ASCII characters)

In the examples below, we will assume either an API call was formed or event payload in Notifi Hosted was returned that resembles below code snippets.

Example topic id (eventTypeId): abcd1234
Example comparisonValue: 1234

<details>
<summary>Notifi Node publishFusionMessage API call</summary>

```tsx
const fusionMessage = {
    eventTypeId: 'abcd1234',
    variablesJson: {
        Email: {
            subject: 'demo test',
            someData: 'foo bar',
            moreData: 'bang',
        },
        Platform: {
            subject: 'demo test',
            someData: 'foo bar',
            moreData: 'bang',
        },

    }
};
await client.publishFusionMessage(token, fusionMessage);
```

</details>

<details>
<summary>Notifi Hosted parser returned event object</summary>

```json
{
  eventTypeId: "abcd1234",
  comparisonValue: "1234",
  blockchain: 4,
  changeSignature: transactionhash",
  metadata: {
    subject: "demo test"
    someData: "foo bar",
    moreData: "bang"
  }
}
```

</details>

If you create an email template which looks like this, the variables from the above snippets of code would need to be represented as such:
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

