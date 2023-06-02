# Custom email templates

<!-- https://docs.google.com/document/d/1-8K_nbJGaywL-jYFg7_YZiE9x_WPaHvuFfYgM7QmqMg/edit -->

Notifi uses templates to render the same notification, but in different forms for email/telegram/sms/etc. We use mustache templates that take known variables. To learn more about mustache templates, here is a simple spec: https://mustache.github.io/mustache.5.html. You can also try it out in a demo app here: https://mustache.github.io/#demo

When developing your template, keep in mind the following:
1. The variables you’re providing in the event if it’s direct push or broadcast.
2. System variables that cannot be overridden, but are provided to be used in the template. (To be provided)
3. Max templates sizes after expansion

  a. Email - 16kb

  b. SMS - 160 unicode, or 320 ascii

  c. Telegram - 4kb (4096 ascii characters)

Please contact us to set the templates for you. In the future, you will be able to update this through a portal we provide. Upon setting the templates, we will provide you with an ID for the template set (all email/telegram/sms templates are versioned together on each update).

In your push messages, you will be able to provide the template ID you’d like to use for each destination.

<details>
<summary> Example 1: Sending via node SDK a DIRECT_TENANT_MESSAGE.</summary>
```tsx
// Sending a Direct Push Alert to a user
import {}
```
</details>

Assuming you provided an Email template of:
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



This will render as:
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




NOTE: HTML in email can behave differently based on which email client you’re using. Please refer to this link for a quick overview on some basic pitfalls.
https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/

