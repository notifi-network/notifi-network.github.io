---
sidebar_position: 2
---

# Creating a card config

In order to use the **Notifi React Card** a card config needs to be created accordingly. 
The card config serves as configuration of the React Card and enables multiple flexible uses of the React Card.

#### Step 1 

Log in to the [Admin Panel](https://admin.dev.notifi.network) (create an account if not already) and head to the _Card Management_ page. 
Click on "+Create Config" 

#### Step 2 

Name your card config. We recommend using a descriptive name like "New Product Announcements" to easily distinguish different card configs from each other in the future. 
Click on "Create config" to reach the card configuration screen. 

#### Step 3

Set up the `topics` for the card. A `Topic` usually corresponds to a [source](../../integration-overview/alert-intro#source), e.g. in order to set up a Broadcast alert, select "Broadcast" as `Topic type` and enter a descriptive name for the topic.

![Topic section of card config](/img/create-card-id/1.png)

:::note

The `Topic name` specified here is the name that will be shown to the users in the React Card. 
![Topic name is shown to users](/img/create-card-id/2.png)

:::

#### Step 4

Click on the **+** button next to `Topic Type` to specify a `Broadcast Id`. The Broadcast Id is required to send messages to all subscribers of the Broadcast. 

![Give topic a broadcast id](/img/create-card-id/3.png)

:::caution

For Broadcast the `id` is required to start with `dappid__` (two underscores)
:::

#### Step 5

Configure the Channels a user is able to select for the alert. This corresponds to the [target](../../integration-overview/alert-intro#target) of the alert. 
![configure the target channels](/img/create-card-id/4.png)

:::info 

In order to enable Telegram, follow these steps: 

<details> 
  <summary> How to enable Telegram messages </summary>
  In order to receive Telegram support from Notifi, we simply need a Telegram Bot to send notifications to users on your behalf. We do this so that each individual dApp has the ability to maintain control over their bot’s profile picture, description and any other bot customizations available. 

  1. Open your Telegram app. Ideally, there's already a designated Telegram account that's the “official” dApp account. If not, an owner or admin/operator of the dApp should use their Telegram account.
  2. Search for the user “BotFather”
  3. Send a message to the BotFather: “/newbot”
  4. Enter the name of your bot. This is going to be the name that's displayed in the title of the window.
  5. Enter the username of the bot. Due to Telegram's restrictions, it MUST end in bot.
  6. On success, you'll see a message such as “Done! Congratulations on your new bot….”. Look in this message and find the token after the line “Use this token to access the HTTP API:”. Make note of this token.
  7. Privately send us the username you entered in (5) and the token you received in (6).
  8. From here, you may customize your bot with /setuserpic or other commands. Note, once a bot is created, Telegram doesn't allow you to transfer bots to anyone else.

  :::caution
  We ask that you create this bot solely for Notifi to push notifications to your users. Using it for other messaging or overriding the webhooks for the bot will result in loss of messages or other unintended behavior.
  :::

</details>
:::

#### Step 6

Hit _Save_ and use the `Id` of the card config in the **React Card**. 

![card config Id](/img/create-card-id/5.png)




<!--- 
See https://admin.dev.notifi.network/guide/cards
--->