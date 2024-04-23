# Notifi Templates Platform Reference

This page lists out the destination platforms that Notifi supports
and the concerns applicable to each for [creating templated messages](./index.md),
including the expected format and the max length after template expansion.

## Alert History

These alerts appear inside the Notification history in the [Notifi React Card](../alert-subscribe/react-card)
or other frontends.

### Icon

The icon displayed next to the notification. Choose from one of several symbols.

### Subject

The subject line of the notification.

**Format:** Plain text

**Max length after expansion:** 256 characters <!-- TODO: Check -->

### Message

The message content of the notification

**Format:** HTML

**Max length after expansion:** 10,000 characters

## Email

These alerts are sent as [emails](https://en.wikipedia.org/wiki/Email) from Notifi
to a destination email address.

The sender defaults to `notifi@mailer.notifi.network`, but can be
[customized](../target-setup/email-domain.md).

**Format:** HTML

**Max length after expansion:** 32,768 characters

## Discord

These alerts are sent over the [Discord](https://discord.com) service.
In order to send Discord messages, you must first [configure a Discord bot](../target-setup/discord-bot.md)
to send messages.

**Format:** [Markdown](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline)

**Max length after expansion:** 2,000 characters

## Telegram

These alerts are sent over the [Telegram](https://telegram.org) service.
In order to send Telegram messages, you must first [configure a Telegram bot](../target-setup/tg-bot.md).

**Format:** HTML [with some restrictions](https://core.telegram.org/bots/api#html-style)

**Max length after expansion:** 4,096 characters

## SMS

These alerts are sent as [Short Messaging Service (SMS)](https://en.wikipedia.org/wiki/SMS) text messages.

**Format:** Plain text

**Max length after expansion:** 140 characters

## Slack

These alerts are sent over the [Slack](https://slack.com/) service.
In order to send messages over Slack, you must first [configure a Slack integration](../target-setup/slack-integration.md).

**Format:** [Markdown](https://slack.com/help/articles/202288908-Format-your-messages)

**Max length after expansion:** 40,000 characters