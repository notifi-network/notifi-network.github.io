---
sidebar_position: 1
---

# Integration steps

There are three steps required to enable an end-to-end user experience in your dapp with Notifi.
Depending on the depth of integration and use case, some of these are optional or can be vastly sped up by using existing packages provided by Notifi.

1. ### Create [topics](./alerts-in-depth.md#topic) that users can subscribe to in order to receive alerts for that topic

  The first step of a Notifi integration is to decide on the topics of notifications you want to send out. A topic is a category of notifications, usually with the same theme, that should be useful on their own and cater towards a specific user group or use case that the notifications should fulfill (e.g. announcements from the team, liquidation alerts, etc.). 

2. ### Integrate UI components in your dapp for users to configure and subscribe to alerts

  The easiest and most common UI will be a form where users can enter their preferred targets (email, phone number, Telegram, and/or Discord) and subscribe to it.
  We provide design recommendations in our [Figma](https://www.figma.com/design/GotqBWyzrRKbZpSmMeouer/Notification-Card---External-File?node-id=1795-3876&p=f&t=V2qGuMvlIXJeK41Q-0), but there are no limitations on visual or interaction design.

  We provide a ready-to-use [React Card](../getting-started.md) component for easy integration that covers most basic use cases, including standard forms.
  For additional customization and other frontend stacks, you can build your own UI component and connect it to the Notifi SDK with the [Frontend Client](../alert-subscribe/frontend-client). This includes custom elements like buttons or sliders to set thresholds, as long as the inputs can be passed in as parameters.

  :::note
  Feel free to reach out via our [JIRA service desk](https://notifi.atlassian.net/servicedesk/customer/portals)
  if your use case is not currently supported by the React Card. We are happy to consider expanding the React Card to support it!
  :::

3. ### Users subscribe to relevant topics and receive notifications

  Notifi uses alerts to send manual and automated notifications to users. Users who subscribe to an alert will receive notifications from Notifi and will be able to view and manage their alerts in the [Notifi Hub](../for-users/index.md)

  Alerts are created using a [topic](./alerts-in-depth.md#topic) and depending on the type of topic be triggered either manually through the [Community Manager](../alert-trigger/admin-portal/) web UI, programmatically through an API call using the [Node Client](../alert-trigger/node-client/), or completely automatic when using the Notifi monitored alerts.
  
