---
sidebar_position: 1
---

# Key concepts

There are two steps required to enable an end-to-end user experience in your dapp with Notifi.
Depending on the depth of integration and use case, some of these are optional or can be vastly sped up by using existing packages provided by Notifi.

1. ### Integrate UI components in your dapp for users to configure and subscribe to alerts

  The easiest and most common UI will be a form where users can enter their preferred targets (email, phone number, Telegram, and/or Discord), configure the alert, and subscribe to it.
  We provide design recommendations in our [Figma](https://www.figma.com/file/ieF0Ynuc3WI608RCt7wKSf/Notifi-Template?node-id=0%3A1&t=v8zeo6UovJAOb9vR-0), but there are no limitations on visual or interaction design.

  We provide a ready-to-use [React Card](../alert-subscribe/react-card) component for easy integration that covers most basic use cases, including standard forms.
  For additional customization and other frontend stacks, you can build your own UI component and connect it to the Notifi SDK with the [Frontend Client](../alert-subscribe/frontend-client). This includes custom elements like buttons or sliders to set thresholds, as long as the inputs can be passed in as parameters.

:::note

Feel free to reach out to integrations@notifi.network if your use case is not currently supported by the React Card. We are happy to consider expanding the React Card to support it!

:::


2. ### Users subscribe to relevant alerts and receive notifications

  Notifi uses alerts to send manual and automated notifications to users. Users who subscribe to an alert will receive notifications from Notifi and will be able to view and manage their alerts in the [Notifi Hub](../for-users/index.md)

  Alerts can either be created automatically by the [React Card](../alert-subscribe/react-card) when configured in the [Admin Portal](../alert-trigger/admin-portal) web UI or by using the [Frontend Client](../alert-subscribe/frontend-client).

