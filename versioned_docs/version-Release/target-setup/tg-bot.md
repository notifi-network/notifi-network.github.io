# Custom Telegram bot

In order to send Telegram messages, you simply need to create a Telegram Bot. Each individual dapp then controls the bot’s profile picture, description and other customizations.

  1. Open your Telegram app. Ideally, there's already a designated Telegram account that's the “official” dapp account. If not, an owner or admin/operator of the dapp should use their Telegram account.
  2. Search for the user “BotFather”
  3. Send a message to the BotFather: “/newbot”
  4. Enter the name of your bot. This is going to be the name that's displayed in the title of the window.
  5. Enter the username of the bot. Due to Telegram's restrictions, it MUST end in bot.
  6. On success, you'll see a message such as “Done! Congratulations on your new bot….”. Look in this message and find the token after the line “Use this token to access the HTTP API:”. Make note of this token.
  7. From here, you may customize your bot with /setuserpic or other commands. Note, once a bot is created, Telegram doesn't allow you to transfer bots to anyone else.
  8. Head to the [Notifi Admin Portal](https://admin.notifi.network), click on **Account Settings** -> **Add Bot** and enter the *username* (ending in "bot") and *API token* from step (5) and (6) in the fields. 

  ![telegram-bot](/img/telegram-bot/1.png)

:::caution
This bot should only be used for Notifi to push notifications to your users. Using it for other messaging or overriding the webhooks for the bot will result in loss of messages or other unintended behavior.
:::