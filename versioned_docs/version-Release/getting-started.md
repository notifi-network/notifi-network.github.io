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

<!-- TODO: Screenshots -->

Once you've set your email address, password, and company name, expect
a verification email for that email address. Once you verify your email,
you can then log into Admin Portal and begin setting up notifications!

## Setting Up A Notification Topic

Notifi has three types of notifications:

1. Messages written in Community Manager in Admin Portal
2. Messages triggered by your server through the Notifi SDK
3. (Coming soon) Messages triggered by Notifi-hosted code, usually in response to on-chain events

For this Getting Started guide, we will be creating a Community Manager topic.
Check out our 
[self-hosted](./getting-started-with-self-hosted)
guide for instructions on how to implement a notification topic
triggered through the Notifi SDK.

To create a Community Manager topic, go to the Alert Manager, click **Create Topic**,
then **Send announcements from Community Manager**.

<!-- TODO: Screenshots -->

In the dialog box that appears, set the name of your topic and click **Create**.

## Setting Up Your Signup UI

The easiest way to set up signup UI for your users is the Notifi React Card, a
React component that you can integrate with your application. This has two steps:
creating the UI Card config in Admin Portal, and adding the card to your application.

### Creating a UI Card Config

To create your UI card configuration, go to the **UI Config** tab in Alert Manager,
then click **Create UI Card**.

<!-- TODO: Screenshots -->

You'll be presented with the Edit UI Card screen, which will let you edit your card
and show you a preview.

1. Enter a name for your card.
2. Set the wallet type that you want to use to connect to the card. For this example,
   we will use Ethereum (though the instructions will be the same for any EVM chain).
   - Note that each card config only supports one wallet at a time. If you want to allow
     signups across multiple blockchains, create a separate card for each.
3. Click **Select Topics**, then on the dialog box that pops up, click the check box
   next to the Community Manager topic you created earlier. Click Save to put the
   Edit UI Card back in focus.
4. If you wish, add a tooltip to your topic by clicking the **Add Tooltip** button.
   In the dialog box that appears, type a short note to explain your topic.
5. Under **Destinations**, click the switches next to the destination types you want
   to enable. For this Getting Started guide, we will just activate "Email", as that
   requires the least setup.
6. Click **Save Card** in the top right corner of the screen.

You're all done! Leave this page open so that you can reference the Card ID when
you add the card to your website.

<!-- TODO: Screenshots -->

### Setting Up a React Application With Your Card

Now that we have a card config, we'll go through the process of adding it to a
React application.

:::note

This example will be using Ethereum. Setting up the React card for a different EVM
chain only requires changing the chain name, but setting up the React card for different chains
requires different boilerplate for each. Check out the 
[Notifi React card SDK](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-card)
for examples of how to use the React card with other chains.

:::

First, either open your existing JSX React project, or 
[create a new one](https://react.dev/learn/start-a-new-react-project).

Add a file that defines the React card component for your Dapp:

```
import { arrayify } from '@ethersproject/bytes';
import {
  NotifiContext,
  NotifiSubscriptionCard,
} from '@notifi-network/notifi-react-card';
import '@notifi-network/notifi-react-card/dist/index.css';
import { useEthers } from '@usedapp/core';
import { providers } from 'ethers';
import React, { useMemo } from 'react';

export const NotifiCard: React.FC = () => {
  const { account, library } = useEthers();
  const signer = useMemo(() => {
    if (library instanceof providers.JsonRpcProvider) {
      return library.getSigner();
    }
    return undefined;
  }, [library]);

  if (account === undefined || signer === undefined) {
    // account is required
    return null;
  }

  return (
    <NotifiContext
      dappAddress="<YOUR OWN DAPP ADDRESS HERE>"
      env="Production"
      signMessage={async (message: Uint8Array) => {
        const result = await signer.signMessage(message);
        return arrayify(result);
      }}
      walletPublicKey={account}
      walletBlockchain="ETHEREUM"
    >
      <NotifiSubscriptionCard
        cardId="<YOUR OWN CARD ID HERE>"
      />
    </NotifiContext>
  );
};
```

where `dappAddress` is the Dapp ID for your Notifi account
(found under **Account Settings** in Admin Portal),
and `cardId` is the ID of the UI card configuration in the
**Edit UI Card** page.

Finally, use the resulting `NotifiCard` component somewhere in your project.

Once you have this set up, run your app and navigate to the card.
Connect your wallet to the app and follow the wallet prompts
in order to sign into the card.

Once you've done that, you'll see prompts to enter your email
address to sign up for notifications. Enter the email address you
want to receive notifications on (anything you can verify will do),
and then simply check off the Community Manager topic you created
before! Notifi will send you a verification email - once you click
the link to verify your email, you'll be all set to receive
notifications!

<!-- TODO: Screenshots of using the React card -->

## Sending Your First Message

Finally, now that we have a topic and a user signed up to it,
it's time to send a message!

1. Navigate to the **Community Manager** page in Admin Portal.
2. Under **Audience/Notification Topic**, select the Community Manager
   topic you've created.
3. Enter some text in the **Campaign Name** field. Your audience won't
   see this name - it's just used to uniquely identify the message 
   for [reporting](./reporting).
4. Choose the destinations you want to send the message to. **Alert History**
   is always selected, and in this example, we will add **Email**.
5. In the Alert History section, type the subject and message you
   want to send.
6. Copy the subject and message fields in the Alert History section to
   the Email section. Here you can also add some extra details and formatting
   to your email, such as lists or images.
7. Click the **Publish** button at the bottom.

Within a few moments, you should receive an email at the email address
you provided to your Notifi card, and should also be able to see the message
in the Notifi card's Alert History!

<!-- TODO: Screenshots -->

## Next Steps

### Learn More About Community Manager

For more details on how to use Community Manager to send messages and manage
campaigns, view [our guide](./alert-trigger/admin-portal) here.

### Learn More About Our React Frontends

To learn more about using the React card, including how to fully utilize each
of the available parameters, check out [this guide](./alert-subscribe/react-card).

To learn more about using the Frontend client, which allows deeper integration
of Notifi functionality, check out [this guide](./alert-subscribe/frontend-client).

### Send Automatic Notifications

In addition to sending messages manually using Community Manager,
notifications can also be sent automatically, both to your general audience and to specific
destinations. For instance, if you run an exchange, you can watch for price changes
and send alerts to users who subscribe to them.

To learn how to set up an automatic topic that you can then send to from your own
server, check out [this guide](./getting-started-with-self-hosted).

Notifi also has its own blockchain monitoring infrastructure for sending automatic
notifications, sending several of these on its own (such as balance changes through
[Notifi Hub](https://notifi.network/dashboard)) and several others on behalf of partner
Dapps, such as liquidation warnings for DeFi protocols. In the future, Notifi will open
up this infrastructure to external Dapps, allowing them to write Dapp integration code
that is connected to reliable blockchain infrastructure and that can run in response
to specific blockchain events.

### Adding Additional Destination Platforms

Notifi notifications can be delivered through email, Telegram, Discord, Slack,
and more. A few of these platforms require you to supply a bot for Notifi to use.
It is also possible to send email via your own custom domain:

- [Set up a Telegram bot](./target-setup/tg-bot)
- [Set up a Discord bot](./target-setup/discord-bot)
- [Set up a Slack integration](./target-setup/slack-integration)
- [Set up a custom email domain](./target-setup/email-domain)

### Style Your Notifications

Notifications can also be templated and styled. Check out our
[template guide](./styling-your-notifications/)!

### Set Up Custom Notification UI

The React Card is the simplest way to set up UI for signing up for notifications,
but a more comprehensive frontend client is also available. Check out
[our guide for integrating it](./alert-subscribe/frontend-client)!

### Additional resources

- Notifi [Blog](https://notifi.network/blog)
- Notifi [Demos](https://notifi.network/demos)
- [How To Guide](https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&node-id=3859-1287&viewport=643%2C485%2C0.09&scaling=min-zoom&starting-point-node-id=3859%3A1287) of our Community Manager and Admin Portal

### Get Help

- We use Jira as a ticketing platform to track issues, questions, and requests at Notifi. If you have anything that you need from us, please create a **support ticket** using the link [here](https://notifi.atlassian.net/servicedesk/customer/portals)
- Reach out to the key [Notifi contacts](https://docs.google.com/document/d/1zVu-8iXdz1mOGievDutJX4Fs_7RXqe19LdyK4LqNmTA)