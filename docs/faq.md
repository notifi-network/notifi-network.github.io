---
sidebar_position: 9999999
---

# FAQ 

## Integrations

### How do I add support for my dapp to Notifi?

You can start with our SDK today! We support dapps with their own backend
infrastructure that want to send messages to wallet owners, as well as directly
interpreting transactions through off-chain systems.

Soon, Notifi will maintain a public GitHub repository for all of the dapp
integrations watching on-chain transactions. Developers are encouraged to
create pull requests with additions, and Notifi will manage the hosting.

### Can I send notifications from my on-chain program?

Coming soon! We're in the process of allowing this, but would love to hear from you about your scenario.
Please contact us at integrations@notifi.network.

### How do I set up a Telegram bot to send Telegram messages? {#tg-bot-setup}

Follow the steps [here](target-setup/tg-bot).

### How do I set up a Discord bot to send messages on Discord? {#discord-bot-setup}

Follow the steps [here](target-setup/discord-bot).

### I've been able to send a few messages, but I just got an email saying, "You're at your monthly notification limit." What does that mean?

When a Dapp first signs up for Notifi through Notifi Admin, they are given
an evaluation tier where they can freely send up to 10 messages per month.
Please reach out to us at [integrations@notifi.network](mailto:integrations@notifi.network)
or file a [support ticket](https://notifi.atlassian.net/servicedesk/customer/portals)
to set up a contract with us!

## Privacy

### How do I create a user account?

Your account is automatically created when you log in with your wallet and
signed message. This account is created within the space of the dapp you are
calling from.

### How is my Personally Identifiable Information (PII), such as email, Telegram ID, Discord ID, and phone number, kept safe?

Notifi requires users to sign a message that proves they own the wallet address
they are connecting with. Once verification is complete, communication is done
with a security token that only belongs to that user. PII is stored in an
encrypted database in the user's account. Each user is isolated from others,
and each dapp that the user connects to will have its own separate account with
no information sharing.

### What PII and data does Notifi track?

Notifi stores user provided wallet addresses, destinations (i.e., email, SMS,
Telegram, Discord), and notification preferences. Notifi does not track IP addresses.
Subscription preferences and contact details for one dapp will be used
exclusively for notifications for that dapp. Preferences and contact details
will never be shared with any other dapp or 3rd party, unless explicitly
stated.

### How can I unsubscribe from notifications?

You can unsubscribe to notifications by accessing the notification preferences
screen on the dapp you're subscribed to. Additionally, you can unsubscribe
directly via the email, SMS (reply with STOP), Telegram bot, Discord bot, or any other
destination where you're receiving messages.

### How can I remove my user data from Notifi in accordance with GDPR?

Using the verified email address you used to subscribe to notifications, send
an email to gdpr@notifi.network requesting removal of your data. We will reply
back via email when this has been completed. You can verify the removal by
checking your subscription preferences on the dapp, where you won’t have any
record of notification preferences. Here is a sample email request:

Email Subject: Remove my data from Notifi for "dapp name"  
Email Body: Remove my data from Notifi for "dapp name". [Add any additional details as needed]

## DAOs 

### How do DAO notifications work?

Any DAO governance member can sign up for proposal notifications. The DAO
client page uses the Notifi SDK to provide Notifi with the DAO address, along
with the user's wallet address. Notifi will ensure the wallet address is a
governance member, and sign up for the relevant notification channels
(email/SMS/Telegram/Discord).

### How does Notifi ensure wallets are part of a DAO?

Notifi checks for governance tokens that belong to the user/DAO. Each DAO is
different, so Notifi will initially have select DAO platforms integrated.

### How are DAO proposals detected without modifying the dapp itself?

Notifi subscribes to blockchain transactions and parses events and information
that are particular to DAOs. Upon detecting a relevant transaction, a
notification is sent to subscribed users.

