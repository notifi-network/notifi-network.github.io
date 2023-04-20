---
sidebar_position: 1
---

# Key concepts

There are two steps required to enable an end-to-end user experience in your dApp with Notifi.
Depending on the depth of integration and use case, some of these are optional or can be vastly sped up by using existing packages provided by Notifi.

1. ### Integrate UI for users to configure and subscribe to alerts into the frontend of the dApp

  The easiest and most common UI will be a form where users can enter their preferred targets (email, phone number, Telegram, etc.), configure the alert, and subscribe to it.
  We provide design recommendations in our [Figma](https://www.figma.com/file/ieF0Ynuc3WI608RCt7wKSf/Notifi-Template?node-id=0%3A1&t=v8zeo6UovJAOb9vR-0), but there are no limitations on visual or interaction design.

  We provide a ready-to-use [React Card](../alert-subscribe/react-card) component for easy integration that covers most basic use cases.
  For additional customization and other frontend stacks, you can build your own UI component and connect it to the Notifi SDK with the [Frontend Client](../alert-subscribe/frontend-client).

2. ### Creation and configuration of an [alert](alert-intro) when users subscribe to a notification

  When a user subscribes to a notification, an alert needs to be created.

  Alerts can either be created using the **Notifi Frontend Client** or automatically by the [React Card](../alert-subscribe/react-card)tq when configured in the **Admin Panel** web UI.
  Depending on the use case of the notification existing sources, filters, and targets can be reused.

  :::tip

  If your use case requires a source that is not supported by Notifi, you can workaround it by using the [Broadcast](alert-intro#broadcast) or [Direct Push](alert-intro#direct-push) source and **Notifi Node Client** to create and trigger alerts (see section below).

  :::

## Sending alerts to users with [Broadcast](alert-intro#broadcast) and [Direct Push](alert-intro#direct-push)

Once users have subscribed to your Broadcast or Direct Push alerts, you can send messages out through two ways:

1. Through [Admin Panel](https://admin.dev.notifi.network) web UI

  The **Admin Panel** allows members of the dApp admin team to manually compose and send out messages to subscribers. This is the recommend way for one-off and/or individual messages, such as announcements of new features, marketing campaigns, etc.

2. Through API access using the **Notifi Node Client**

  The **Notifi Node Client** provides API access to send out Broadcast and Direct Push notifications. This enables very flexible and custom alert triggering logic where the dApp fully owns the decision of when to send out notifications.
  This is also the recommended workaround for use cases where Notifi does not provide a dedicated [Source](alert-intro#source).
