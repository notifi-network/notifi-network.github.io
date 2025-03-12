# Custom Discord bot

To use Discord, you will need to set up your own Discord bot and application on Discord's developer portal, and then update your Notifi admin portal with the relevant Discord information.

## How to set up Discord bot
1. Navigate to https://discord.com/developers/applications and create a new application

2. Once your application is created, go to your newly created application and navigate to the OAuth2 tab.

3. Copy the Client ID and Client secret for later use. You will need this information when setting up your Notifi admin portal.

4. Add the redirect url for OAuth2. You can add the redirect url in the OAuth2 tab under Redirects. The redirect url is a web page that authenticates the user’s Discord account with Notifi’s backend. You can use 'https://notifi.network/verify_discord/' or create your own web page. See [Verification page](#verification-page) for more information on how to create your own web page for the OAuth2 verification page. Make sure to save your changes when adding the redirect url.

5. Navigate to the Bot section on the left side to get the bot token. You will need to click "Reset Token” to get the bot token. Copy the bot token for later use. You will need this information when setting up in Notifi admin portal.

6. Now you need to add your Discord bot to the Discord server
    1. Navigate back to OAuth2 tab => OAuth2 URL Generator
    2. Click “bot“ under scopes
    3. Go to the url generated at the bottom of the page
    3. The url will take you to a page that will prompt you to add your Discord bot to the desired Discord server

7. Add the Discord bot to the Notifi admin portal. Navigate to https://admin.notifi.network/.
    1. Navigate to the Account Settings tab => Add Bot button
    2. Select Discord Type
    3. Fill out the form with the information that you saved from the Discord developer portal.
        1. Name: Name of the discord bot. This can be anything
        2. Discord Guild ID / Servier ID: The ID of the Discord server that you added the bot to. You can find this ID by right clicking on the server in Discord and selecting "Copy Server ID".
        3. Discord Client ID: The Client ID that you saved from the Discord developer portal.
        4. Discord Client Secret: The Client Secret that you saved from the Discord developer portal.
        5. Discord Server Invite Link: The invite link to the Discord server that you added the bot to. You can find this link by right clicking on the server and selecting "Invite People".
        6. Redirect URL: The redirect url that you saved from the Discord developer portal. For most, it will be 'https://notifi.network/verify_discord/' unless you created your own OAuth2 verification page.
        7. Bot Tokens: The bot token that you saved from the Discord developer portal. You need to specify an identifier for the bot token. We support multiple bot tokens in case you hit rate limits.
    4. Click Create
8. Optional: Update the application name, description, and icon. Also update the bot username and icon. Note that the application and bot are two separate things in Discord.

## OAuth2 Verification Page {#verification-page}

Although not mandatory, you can create your own OAuth2 verification page. Tenants might want to do this for branding purposes. If you want to create your own OAuth2 verification page, use the following information to set it up.

The OAuth2 redirect flow will specify two parameters in the query parameter of the url: code and state. Here's an example of the url: https://notifi.network/verify_discord/?code=8CHr7zrAnMCl0RjjdimsApop3M2SUT&state=cac809feb82147a9838ea49dddd9d6dd

You must then construct a GraphQL post request to verify the Discord account with the following information:

url: https://api.notifi.network/gql


```graphql
mutation verifyDiscordTarget($input: VerifyDiscordTargetInput!){
  verifyDiscordTarget(verifyDiscordTargetInput: $input){
    name,
    id,
    username,
    discordAccountId,
  }
}
```
The request object will look something like below given the example url above. The DiscordTargetId in the request is the state parameter in the url parameter. The redirectUri is the url that this page will be hosted on. This should be the same as the redirect url specified in the Discord developer portal. 
```
{
  "input": {
    "discordTargetId": "cac809feb82147a9838ea49dddd9d6dd",
    "code": "8CHr7zrAnMCl0RjjdimsApop3M2SUT",
    "redirectUri": "https://notifi.network/verify_discord/"
  }
}
```