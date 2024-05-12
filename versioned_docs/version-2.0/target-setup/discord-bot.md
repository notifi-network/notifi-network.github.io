# Custom Discord bot

In order to use your own Discord bot, you will need to set up your own Discord bot and Discord application client. 

We also recommend setting up your own verification page, although it is possible to use a Notifi branded verification page. Please reach out to us if that is what you prefer. 
The verification page is necessary as part of OAuth2 to ensure that the user owns the Discord account and will look something like the screenshots below.

![telegram-bot](/img/discord-bot/1.png)

## Verificaton page

For a verification page set up a web page that is able take the url query params and send them to Notifi’s backend.

In this example, we will be using Notifi’s landing page for Discord verification: 
https://notifi.network/verify_discord/?code=8CHr7zrAnMCl0RjjdimsApop3M2SUT&state=cac809feb82147a9838ea49dddd9d6dd

The code and state will be taken out of the query parameter from the url. In this case, the code is `8CHr7zrAnMCl0RjjdimsApop3M2SUT` and the state is `cac809feb82147a9838ea49dddd9d6dd`. 

The page will then construct the following GraphQL post request using the above information and send it to https://api.dev.notifi.network/gql. Note: the state in the url parameters map to discordTargetId in the request.

```graphql
mutation verifyDiscordTarget($input: VerifyDiscordTargetInput!){
  verifyDiscordTarget(verifyDiscordTargetInput: $input){
    name,
    id,
    username,
    discordAccountId,
  }
}

{
  "input": {
    "discordTargetId": "cac809feb82147a9838ea49dddd9d6dd",
    "code": "8CHr7zrAnMCl0RjjdimsApop3M2SUT",
    "redirectUri": ""
  }
}

```

## Discord Bot Configuration

There are five pieces of information we will need in order to set up your custom Discord bot: 

- Discord guild id (the server id that your Discord bot will reside in. Internally, Discord calls servers guilds)
- Discord client id
- Discord client secret
- Bot token
- Redirect URL

### How to set up Discord bot

1. Go to https://discord.com/developers/applications
2. At the top right click “New Application”

  ![telegram-bot](/img/discord-bot/3.png)

3. Create your Discord client app

  ![telegram-bot](/img/discord-bot/4.png)

4. Once created, navigate to OAuth2 section on the left side

  ![telegram-bot](/img/discord-bot/5.png)

5. Copy the Client ID and Client Secret to send to Notifi Network later. Don’t reset it after sending it to Notifi
  
  ![telegram-bot](/img/discord-bot/6.png)

6. Add the redirect url during OAuth2. This will be the url to the web page that authenticates the user’s Discord account with Notifi’s backend
  
  ![telegram-bot](/img/discord-bot/7.png)

7. Save changes after adding the redirect url
  
  ![telegram-bot](/img/discord-bot/8.png)

8. Navigate to the Bot section on the left side

  ![telegram-bot](/img/discord-bot/9.png)

9. Copy the bot token after resetting it. This token will be used to send messages on the bot’s behalf. Don’t reset the token after sending it to Notifi.

  ![telegram-bot](/img/discord-bot/10.png)

10. Now you need to add your bot to the Discord server
    1. Navigate to OAuth2 => URL Generator on the left side
       
      ![telegram-bot](/img/discord-bot/11.png)

    2. Click “bot“ under scopes. Then go to the url that was created
       
      ![telegram-bot](/img/discord-bot/12.png)

    3. The url will take you to a page like this. Then you can select the server to add your bot
      
      ![telegram-bot](/img/discord-bot/13.png)

    4. Now that your bot is in the server, feel free to customize your Discord bot’s profile and client app picture on the Discord Developer app
    5. Send any relevant information to Notifi

