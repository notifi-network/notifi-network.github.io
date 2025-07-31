---
sidebar_position: 3
---

# Getting Started with Self-Hosted Messaging

In this second Getting Started guide, we will walk through the steps of
creating a Notifi messaging topic that receives messages sent from
your server, and sending a message from that topic.

This guide is intended as a follow-up to the first
[Getting Started](./getting-started) guide, which walks you through the
process of creating a Notifi account and subscription card. It is highly
recommended that you follow that startup guide first.

## Creating a Self-Hosted Topic

Before we can publish messages from our server, we need to create a topic
for it first. To create a self-hosted message topic, go to the Alert Manager,
click **Create Topic** (or **+ Topic** if you already have a topic), then
**Send an alert triggered by an API call from my server**.

In the dialog box that appears, enter a name for your topic and click **Save Topic**.
There are other options available, but the default settings will be best for
most topics, so that's what we will go with for this guide. 

Once you click "Save Topic",
take note of the **Event Type ID** that appears next to the topic in the list - you
will use this to send messages to your topic later.

## Creating Templates For Your Topic

Before sending messages on this topic, you will need to create templates for it.
Templates allow you to add text to your messages that will appear every time, as well
as add HTML or Markdown styling to your messages, so that when you actually send messages from your
server, you only need to include the data that changes each time. For this guide, we
will create relatively simple templates.

1. On the Alert Manager page, go to your newly created topic and click **Define Templates**.
2. In the dialog that appears, you'll be offered some text boxes for defining templates
   for the subject line and content for your Alert History messages.
   - Select one of the available icons in the "Select Icon" dropdown
   - In the **Subject** text box, enter `{{eventdata.subject}}`
   - In the **HTML Content** text box, enter `<span>{{eventdata.message}}</span>`
   - Click **Save**. You'll get a dialog box saying that the template has been uploaded.
3. Click the **Email** button on the left. This will switch your view to editing
   email templates.
   - In the **Subject** text box, enter `{{eventdata.subject}}`
   - In the **Custom HTML** text box, enter `<p>{{eventdata.message}}</p>`
   - Click **Save**. You'll get a dialog box saying that the template has been uploaded.
4. Click the circular X button on the top right to return to Alert Manager.

<!--TODO: Screenshots-->

## Subscribing To Your Topic

Once you have your topic and have defined templates for it, you can then add it to a React card
to allow your users to subscribe. You can either create a new card for this (as outlined in
the instructions for [the previous guide](./getting-started)), but we would highly recommend
adding the topic to an existing card, so that all of your users (at least on the same chain)
can sign up for any or all of your topics at once.

1. On the Alert Manager page, go to the **UI Config** tab and click on the card config you
   want to add the topic to.
2. Click **Select Topics**, then click the checkbox next to your new topic in the dialog box that appears.
3. Click **Save** to close the dialog box, then click **Save Card**.

Once you've done that, you can then go to your React app where you have added your card,
log in with your wallet, and subscribe to your new topic! The email address or other information
you used to sign up for the Community Manager topic will also be used here.

<!--TODO: Screenshots-->

## Getting Your Server Credentials

Before we move on to finally creating our server, we will need one more thing from Admin Portal:
our server credentials. Notifi refers to these as your SID and Secret, which the server will need to
provide in order to log in and send messages.

To view your SID and Secret, go to the **Account Settings** page in Admin Portal, then click
**Security** tab. In the section **Account Keys** you can generate a new SID/Secret pair. In the dialog box that appears, copy the contents
of the Sid and Secret boxes somewhere safe as the secret won't be viewable again after - you will use these later when you create your server.

:::warning

These credentials are only used for authenticating your own application on your own server to run
on your own behalf. Ensure that these credentials are stored somewhere secure, that the code using these
credentials is being run in a secure environment, and that these credentials 
**are NEVER sent to a user's web browser**.

:::

## Creating your Node JS Server

Finally, we will create our server that will actually send our messages! Notifi provides a Node.js
SDK for accessing Notifi's APIs and sending messages, which we will use for our server. (If you want to
use a different server technology, consult the documentation for our [GraphQL API](./alert-subscribe/graphql-api)
and our [Dataplane REST API](./alert-trigger/dataplane-api/).)

1. Install [Node.js](https://nodejs.org/en) version 18 or later.
2. Run `$ npm init` in an empty directory to create your project
3. Run `$ npm install @notifi-network/notifi-node` to add the [Notifi Node.js SDK](https://www.npmjs.com/package/@notifi-network/notifi-node)
   to your project.
4. Add `"type": "module"` to your project's `package.json`, since we will be using ES6 modules and top-level `await`
5. Create a `main.js` file with the following code:

```javascript
// TODO: Add a code example
import {
    NotifiClient,
    NotifiEnvironment,
    createNotifiService, 
    createDataplaneClient, 
    createGraphQLClient,
} from '@notifi-network/notifi-node';

// Enter your SID/Secret from Account Settings
// and your Event Type ID from Alert Manager here.
// This example assumes they are stored as environment variables
// MY_SID, MY_SECRET, and MY_EVENT_TYPE_ID
const MY_SID = process.env.MY_SID;
const MY_SECRET = process.env.MY_SECRET;
const EVENT_TYPE_ID = process.env.MY_EVENT_TYPE_ID;

const gqlClient = createGraphQLClient("Production");
const notifiService = createNotifiService(gqlClient);
const dataplaneApiClient = createDataplaneClient("Production");
const client = new NotifiClient(notifiService, dataplaneApiClient);

const { token, expiry } = await client.logIn({
    sid: MY_SID,
    secret: MY_SECRET
});

await client.publishFusionMessage(token, [{
    eventTypeId: EVENT_TYPE_ID,
    variablesJson: {
        // Feel free to change this text to whatever you want
        subject: "Test Subject",
        message: "This is a test message"
    }
}]);
```

6. Run `$ node main.js` to run your code!

Once you've run your code, you should see an email received in the email address
you associated with your wallet, complete with your subject line and message!
You should also find the same message in your Alert History under your React card.

## Next Steps

### Style Your Notifications

We created very basic templates for our messages, but Notifi's template system is
also capable of more advanced templates with additional and nested variables. Check
out our [template guide](./styling-your-notifications/) for more information!

### Adding Additional Destination Platforms

Notifi notifications can be delivered through email, Telegram, Discord, Slack,
and more. A few of these platforms require you to supply a bot for Notifi to use.
It is also possible to send email via your own custom domain:

- [Set up a Telegram bot](./target-setup/tg-bot)
- [Set up a Discord bot](./target-setup/discord-bot)
- [Set up a Slack integration](./target-setup/slack-integration)
- [Set up a custom email domain](./target-setup/email-domain)

### Additional resources

- Notifi [Blog](https://notifi.network/blog)
- Notifi [Demos](https://notifi.network/demos)
- [How To Guide](https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&node-id=3859-1287&viewport=643%2C485%2C0.09&scaling=min-zoom&starting-point-node-id=3859%3A1287) of our Community Manager and Admin Portal

### Get Help

<!-- - We use Jira as a ticketing platform to track issues, questions, and requests at Notifi. If you have anything that you need from us, please create a **support ticket** using the link [here](https://notifi.atlassian.net/servicedesk/customer/portals) -->
- Reach out to the key [Notifi contacts](https://docs.google.com/document/d/1zVu-8iXdz1mOGievDutJX4Fs_7RXqe19LdyK4LqNmTA)
