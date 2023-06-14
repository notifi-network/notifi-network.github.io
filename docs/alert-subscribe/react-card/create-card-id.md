---
sidebar_position: 2
---

# Creating a card config

In order to use the **Notifi React Card** a card config needs to be created accordingly.
The card config serves as configuration of the React Card and enables multiple flexible uses of the React Card.

#### Step 1

Log in to the [Admin Panel](https://admin.dev.notifi.network) (create an account if you haven't done so already) and head to the _Card Management_ page.
Click on "+Create Config"

#### Step 2

Name your card config. We recommend using a descriptive name like "New Product Announcements" to easily distinguish different card configs from each other in the future.
Click on "Create config" to reach the card configuration screen.

#### Step 3

Set up the `topics` for the card. A `Topic` usually corresponds to a [source](../../integration-overview/alerts-in-depth#source), e.g. in order to set up a Broadcast alert, select "Broadcast" as `Topic type` and enter a descriptive name for the topic.

![Topic section of card config](/img/create-card-id/1.png)

:::note

The `Topic name` specified here is the name that will be shown to the users in the React Card.
![Topic name is shown to users](/img/create-card-id/2.png)

:::

#### Step 4

Click on the **+** button next to `Topic Type` to specify a `Broadcast Id`. The Broadcast Id is required to send messages to all subscribers of the Broadcast.

![Give topic a broadcast id](/img/create-card-id/3.png)

:::caution

A Broadcast Id is required to start with `dappid__` (two underscores).
:::

#### Step 5

Configure the Channels a user is able to select for the alert. This corresponds to the [target](../../integration-overview/alerts-in-depth#target) of the alert.
![configure the target channels](/img/create-card-id/4.png)

:::info

In order to enable Telegram, follow these steps:

<details>
  <summary> How to enable Telegram messages </summary>
In order to send Telegram messages, we simply need a Telegram Bot set up. Each
individual dapp then controls the bot’s profile picture, description and other
customizations.

  1. Open your Telegram app. Ideally, there's already a designated Telegram account that's the “official” dapp account. If not, an owner or admin/operator of the dapp should use their Telegram account.
  2. Search for the user “BotFather”
  3. Send a message to the BotFather: “/newbot”
  4. Enter the name of your bot. This is going to be the name that's displayed in the title of the window.
  5. Enter the username of the bot. Due to Telegram's restrictions, it MUST end in bot.
  6. On success, you'll see a message such as “Done! Congratulations on your new bot….”. Look in this message and find the token after the line “Use this token to access the HTTP API:”. Make note of this token.
  7. Privately send us the username you entered in (5) and the token you received in (6).
  8. From here, you may customize your bot with /setuserpic or other commands. Note, once a bot is created, Telegram doesn't allow you to transfer bots to anyone else.

  :::caution
  This bot should only be used for Notifi to push notifications to your users. Using it for other messaging or overriding the webhooks for the bot will result in loss of messages or other unintended behavior.
  :::

</details>
:::

:::info

In order to enable Discord, follow these steps. For more detail, please see [our blog post](https://medium.com/notifi/discord-bot-is-our-newest-notification-channel-8a2a72dd506e).

<details>
  <summary> How to enable Discord messages </summary>
In order to send Discord messages, we simply need a Discord Bot set up. Each
individual dapp then controls the bot’s profile picture, description and other
customizations.

  1. Set up your Discord server with the desired configuration.
  2. Create a Discord application at https://discord.com/developers/applications.
  3. [Create a bot](https://discord.com/developers/docs/getting-started#configuring-a-bot) in the Discord application
  4. Send us the bot's token and the Discord serveer's permanent invite URL to integrations@notifi.network.

After the setup is complete, the user interaction is simple:

  1. On the Notifi React Card, click **Enable Bot**.

![Enable bot](/img/create-card-id/9.png)

  2. Accept the Discord OAuth flow prompt so Notifi is aware of your account.

<img
  src={require('/img/create-card-id/10.png').default}
  alt="OAuth Flow"
  width="60%" height="30%"
/>

  3. Join the Notifi Discord so you're up to date on upcoming features and releases.

<img
  src={require('/img/create-card-id/11.png').default}
  alt="Notifi Discord"
  width="60%" height="30%"
/>

</details>
:::


#### Step 6

Hit _Save_ and use the `Id` of the card config in the **React Card**.

![card config Id](/img/create-card-id/5.png)


## Setting up Advanced Mode
Advanced mode lets you save predefined values for use in future events. For example, you can save the broadcast id to use when setting up a broadcast event. Advanced mode is entirely optional and is most helpful for admininistrators.

To turn on advanced mode for a configuration, toggle the switch at the bottom of the configuration.

Once advanced mode is enabled, you will see an input section where you can save pre-defined values and their associated types. Add a value, select the type, and click on the plus value to save.

![advanced-input](/img/create-card-id/6.png)

Upon creating an associated event, click on the **Use input reference** tab to select the saved value. Save your event.

![advanced-use](/img/create-card-id/7.png)

## Configuring Destinations
Use the radio buttons to turn on or off channels for notifications. For
example, if you turn on email, users can subscribe using an email address. We
support Email, Telegram, SMS (17 countries), and Discord.

![channels](/img/create-card-id/8.png)

## Configuring Webhook
Webhooks can be enabled by turning on the radio button on the top right. The dapp admin can then opt to send all notifications to a webhook and decide on how to display and distribute the notifications to users. Similar to adding values to topics, you can input your own value with **Use value** or use an existing reference via **Use input reference**.  You must provide a key and value for each header. You can add multiple Webhook Headers.

<!-- pic -->

## Testing the Configuration
After finalizing your confguration, click on the **Save** button at the top
right. You can always create a new card config, delete, or edit existing card
configurations on the **Card Management** page.

Once you have saved the card, paste the card ID into your frontend application
using `notifi-react-card` from the SDK.
The component will now reflect the changes you have made.

<!--- See https://admin.dev.notifi.network/guide/cards --->
