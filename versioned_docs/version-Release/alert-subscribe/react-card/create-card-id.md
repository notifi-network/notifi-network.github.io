---
sidebar_position: 2
---

# Creating a card config

In order to use the **Notifi React Card** a card config needs to be created accordingly.
The card config serves as configuration of the React Card and enables multiple flexible uses of the React Card.

#### Step 1

Log in to the [Admin Portal](https://admin.notifi.network) (create an account if you haven't done so already) and head to the _Alert Manager_ page.
Select the _UI Config_ tab and click on "Configure Card" or "+ UI Card". 

![UI Config tab](/img/create-card-id-2.0/1.png)

#### Step 2

Give your card config a name. This name will never be shown to the end user, however we recommend using a descriptive name to easily distinguish different card configs from each other in the future.
Select the blockchain that users will be connecting their wallet from for this card. 

:::note
Currently one card can only support one blockchain at the same time. If you have users from multiple chains, create a seperate card config for every chain and determine in the frontend which card config to load based on which chain the user is connecting from. 
:::

![Naming card config](/img/create-card-id-2.0/2.png)


#### Step 3

Add the [topics](../../integration-overview/alerts-in-depth.md#topic) you have previously created (see [here](../../create-topics/)) to the card config. 

:::note
The same topic can be used on multiple card configs. 
:::

![Adding topics](/img/create-card-id-2.0/4.png)
![Adding topics popup](/img/create-card-id-2.0/3.png)

Optional: Add tooltips to the topics that help users understand what alert they are subscribing to.

#### Step 4

Select which destinations you want to allow for this card config. Destinations are equivalent to [targets](../../integration-overview/alerts-in-depth.md#target). 

:::note

Check out these sections to set up custom targets:

- [Set up a Telegram bot](../../target-setup/tg-bot)
- [Set up a Discord bot](../../target-setup/discord-bot)
- [Set up a Slack integration](../../target-setup/slack-integration)
- [Set up a custom email domain](../../target-setup/email-domain)

:::

![configuring destinations](/img/create-card-id-2.0/5.png)


#### Step 5 (optional)

Change the title and subtitles of the card, you can see a preview of the card titles on the right hand side. 

![custom titles](/img/create-card-id-2.0/6.png)

#### Step 6

Save your card config and copy the **Card ID** in the top. This is the `cardId` param you will need in the react component here: 

```tsx
<NotifiSubscriptionCard
  darkMode
  inputLabels={inputLabels}
  inputSeparators={inputSeparators}
  cardId="<YOUR OWN CARD ID HERE>"
/>
```
