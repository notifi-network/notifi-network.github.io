---
sidebar_position: 9999999
---

# FAQ 

#### How do I create a user account?

Your account is automatically created when you log in with your wallet and
signed message. This account is created within the space of the dApp you are
calling from.

#### How is my Personally Identifiable Information (PII), such as email, Telegram ID, and phone number, kept safe?

Notifi requires users to sign a message that proves they own the wallet address
they are connecting with. Once verification is complete, communication is done
with a security token that only belongs to that user. PII is stored in an
encrypted database in the user's account. Each user is isolated from others,
and each dApp that the user connects to will have its own separate account with
no information sharing.

#### What PII and data does Notifi track?

Notifi stores user provided wallet addresses, destinations (i.e., email, SMS,
Telegram), and notification preferences. Notifi does not track IP addresses.
Subscription preferences and contact details for one dApp will be used
exclusively for notifications for that dApp. Preferences and contact details
will never be shared with any other dApp or 3rd party, unless explicitly
stated.

#### How can I unsubscribe from notifications?

You can unsubscribe to notifications by accessing the notification preferences
screen on the dApp you're subscribed to. Additionally, you can unsubscribe
directly via the email, SMS (reply with STOP), Telegram bot, or any other
destination where you're receiving messages.

#### How can I remove my user data from Notifi in accordance with GDPR?

Using the verified email address you used to subscribe to notifications, send
an email to gdpr@notifi.network requesting removal of your data. We will reply
back via email when this has been completed. You can verify the removal by
checking your subscription preferences on the dApp, where you won’t have any
record of notification preferences. Here is a sample email request:

Email Subject: Remove my data from Notifi for "dApp name"  
Email Body: Remove my data from Notifi for "dApp name". [Add any additional details as needed]

#### How do DAO notifications work?

Any DAO governance member can sign up for proposal notifications. The DAO
client page uses the Notifi SDK to provide Notifi with the DAO address, along
with the user's wallet address. Notifi will ensure the wallet address is a
governance member, and sign up for the relevant notification channels
(email/SMS/Telegram).

#### How does Notifi ensure wallets are part of a DAO?

Notifi checks for governance tokens that belong to the user/DAO. Each DAO is
different, so Notifi will initially have select DAO platforms integrated.

#### How are DAO proposals detected without modifying the dApp itself?

Notifi subscribes to blockchain transactions and parses events and information
that are particular to DAOs. Upon detecting a relevant transaction, a
notification is sent to subscribed users.

#### How do I add support for my dApp to Notifi?

You can start with our SDK today! We support dApps with their own backend
infrastructure that want to send messages to wallet owners, as well as directly
interpreting transactions through off-chain systems.

Soon, Notifi will maintain a public GitHub repository for all of the dApp
integrations watching on-chain transactions. Developers are encouraged to
create pull requests with additions, and Notifi will manage the hosting.

#### Can I send notifications from my on-chain program?

Coming soon! We're in the process of allowing this, but would love to hear from you about your scenario.
Please contact us at integrations@notifi.network.

#### How do I enable Telegram messages in a dApp for my users?

In order to send Telegram messages, we simply need a Telegram Bot set up. Each
individual dApp then controls the bot’s profile picture, description and other
customizations. This bot should only be used for Notifi to push notifications
to your users. Using it for other messaging or overriding the webhooks for the
bot will result in loss of messages or other unintended behavior. To set it up,
follow these steps:

1. Open your Telegram app. Ideally, you have a designated Telegram account
that's the “official” dApp account. If not, an owner or admin/operator of the
dApp should use their Telegram account.
2. Search for the user “BotFather”
3. Send a message to the BotFather: “/newbot”
4. Enter the name of your bot. This is going to be the name that's displayed in the title of the window.
5. Enter the username of the bot. Due to Telegram's restrictions, it MUST end in bot.
6. On success, you'll see a message such as “Done! Congratulations on your new
bot….”. Look in this message and find the token after the line “Use this token
to access the HTTP API:”. Make note of this token.
7. Privately send us the username you entered in (5) and the token you received in (6).
8. From here, you may customize your bot with /setuserpic or other commands.
However, please don't use the bot for anything else. Note, once a bot is
created, Telegram doesn't allow you to transfer bots to anyone else.
