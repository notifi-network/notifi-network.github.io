---
sidebar_position: 2
---

# Getting Started

In this Getting Started guide, we will walk through the steps of creating
a Dapp account with Notifi, setting up a notification topic, allowing users
to subscribe on that topic, and sending your first message!

## Signing Up For Notifi

To sign up your Dapp for Notifi, 
[create an account](https://admin.notifi.network/signup) on the 
[Notifi Admin Portal](https://admin.notifi.network).

(TODO: Add a screenshot)

Once you've set your email address, password, and company name, expect
a verification email for that email address. Once you verify your email,
you can then log into Admin Portal and begin setting up notifications!

## Setting Up A Notification Topic

Notifi has three types of notifications:

1. Messages written in Community Manager in Admin Portal
2. Messages triggered by your server through the Notifi SDK
3. Messages triggered by Notifi-hosted code, usually in response to on-chain events

For this Getting Started guide, we will be creating a Community Manager topic.
Check our our 
[self-hosted]()
and [Notifi-hosted]()
guides for writing for the other two types.

To create a Community Manager topic, go to the Alert Manager, click "Create Topic",
then "Send announcements from Community Manager".

(TODO: Screenshots)

In the dialog that appears, set the name of your topic and click Create.

## Setting Up Your Signup UI

The easiest way to set up signup UI for your users is the Notifi React Card, a
React component that you can integrate with your application. This has two steps:
creating the UI Card config in Admin Portal, and adding the card to your application.

### Creating a UI Card Config

(TODO: Instructions and screenshots for setting up your card)

### Setting Up a React Application With Your Card

(TODO: Instructions and screenshots for running the Notifi React example)

## Sending Your First Message

(TODO: Instructions for going to Community Manager and sending a message)

## Next Steps

### Send Automatic Notifications

Notifications can also be sent automatically, both generally and to specific
destinations. Notifi offers two separate avenues for this - notifications from
self-hosted services through the Notifi SDK, and notifications from custom code hosted
on Notifi's servers that follow on-chain events. Check out the quickstart guides
for these:

- [Getting Started With Self-Hosted API Notifications](./getting-started-with-self-hosted.md)
- [Getting Started With Notifi-Hosted Development](./getting-started-with-notifi-hosted.md)

### Adding Additional Platforms

Notifi notifications can be delivered through email, Telegram, Discord, Slack,
and more. A few of these platforms require you to supply a bot for Notifi to use.
It is also possible to send email via your own custom domain:

- [Set up a Telegram bot](./alert-design/tg-bot.md)
- [Set up a Discord bot](./alert-design/discord-bot.md)
- [Set up a Slack integration](./alert-design/slack-integration.md)
- [Set up a custom email domain](./alert-design/email-domain.md)

### Style Your Notifications

Notifications can also be templated and styled, both for Community Manager
notifications and automatic notifications. Check out our
[template guide](./alert-design/custom-alert-templates.md)!

### Set Up Custom Notification UI

The React Card is the simplest way to set up UI for signing up for notifications,
but a more comprehensive frontend client is also available. Check out
[our guide for integrating it]()! (TODO: link).

### Additional resources

- Notifi [Blog](https://notifi.network/blog)
- Notifi [Demos](https://notifi.network/demos)
- [How To Guide](https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&node-id=3859-1287&viewport=643%2C485%2C0.09&scaling=min-zoom&starting-point-node-id=3859%3A1287) of our Community Manager and Admin Portal

### Get Help

- We use Jira as a ticketing platform to track issues, questions, and requests at Notifi. If you have anything that you need from us, please create a **support ticket** using the link [here](https://notifi.atlassian.net/servicedesk/customer/portals)
- Reach out to the key [Notifi contacts](https://docs.google.com/document/d/1zVu-8iXdz1mOGievDutJX4Fs_7RXqe19LdyK4LqNmTA)