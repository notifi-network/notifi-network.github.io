---
sidebar_position: 3
---

# Alerts in Depth {#alerts-in-depth}

An **alert** is a tuple of a [Topic](#topic) (sometimes referred to as "source" as well), [Filter](#filter), and [Target](#target), which are represented by `sourceGroup`, `Filter`, and `TargetGroup` objects respectively. Existing topics, filters, and targets can be reused.

As long as the alert exists, the user will receive notifications to their specified channels whenever they are triggered.

## Topics {#topic}

The topic of an alert serves as a way for users to subscribe to specific categories of alerts and can be triggered manually through the [Admin Portal](../alert-trigger/admin-portal/) web UI, programmatically through an API, or through a Notifi hosted monitoring service. 

### Topic types {#topic-type}

- #### Announcements through Community Manager

  Topics of these alerts are triggered manually through the [Community Manager](../alert-trigger/admin-portal/) feature of the Admin Portal. Common use cases for this type of topic include project announcements (e.g. for new launches, events, etc.), marketing campaigns, and others. 

- #### Alerts triggered through API call 

  Notifi provides a [Node Client](../alert-trigger/node-client/) which can be called to programmatically trigger notifications. This can be used to send out notifications based on events from an external service that also is required for things other than triggering notifications. 

- #### Notifi hosted monitoring service

  The most common type of topic involves creating a monitoring service hosted by Notifi that can pull on-chain and off-chain data and trigger notifications based on set conditions. This is often the simplest and fastest solution to start sending out automated notifications as Notifi has set up the required infrastructure already and provides a simple and fast toolkit to define the triggering conditions. 


<!-- ## Sources {#source}

A Source is a trigger for a notification, such as an on-chain event or a message sent by the project team.
They are represented as `Source` objects and used in alerts as `SourceGroup` objects, which are a collection of `Source` objects.

Typically a Source has a specified [Source Type](#source-type) and a `id` which is used to distinguish sources of the same type.

:::note
The `id` can be an arbitrary string like `dappid__product_announcements`, but should start with `dappid__`.
:::

### Source Types {#source-type}

- #### Broadcast {#broadcast}

  Broadcasts are used for any alerts that are supposed to go to multiple users at the same time, such as product announcements or events.
  They can be triggered through the [Admin Portal](https://admin.dev.notifi.network), which allows members of the dapp admin team to manually compose and send out messages to subscribers. This is the recommended way for one-off or individual messages, such as announcements of new features or marketing campaigns.

  Alternatively, they can also be triggered via API access using the [Node Client](../alert-trigger/node-client). This enables very flexible and custom alert triggering logic where the dapp fully owns the decision of when to send out notifications.

- #### Direct Push {#direct-push}

  Direct Push is used for alerts that are supposed to go to a single user only, such as changes in a user's position, account, or wallet.
  Similar to Broadcast sources, they can be triggered through the [Admin Portal](https://admin.dev.notifi.network) or through an API in the [Notifi SDK](https://github.com/notifi-network/notifi-sdk-ts).

- #### Wallets {#wallet-source}

  Notifi supports wallets from several blockchains; a typical Source is changes of token balances in that wallet. In combination with a corresponding [Filter](#filter), notifications will be automatically sent out.

- #### dapp specific (a.k.a. _"custom parser"_) {#custom-parser-source}

  Dapp specific sources are useful to enable customized user experiences tailored to specific use cases, such as alerts for auctions, price changes, liquidations, or loan health. Typically, they monitor on-chain events and in combination with a corresponding filter, trigger notifications when certain transactions or events are observed on the chain.
  However, they require custom work, so please reach out at integrations@notifi.network to discuss the possibility of creating a custom parser. -->


## Filters {#filter}

Filters are used in combination with [Topics](#topic) to enable a variety of alerts using the same source.
For example, different filters could be used to allow different threshholds on loan health alerts, token balance changes, etc. This allows a user to fully customize an alert to their preferences.

<!-- :::info
For use cases that use [Broadcast](#broadcast) or [Direct Push](#direct-push) sources, there are usually no specific filter(s) required. In that case, the filter types `BroadcastMessages` and `DirectTenantMessage` can be used.
::: -->

## Targets {#target}

A [Target](#target) is a destination for an alert, which is a communication channel: email adress, Telegram account, Discord account, or phone number.

They are represented as `Target` objects and used in alerts as `TargetGroup` objects, which are a collection of `Target` objects.

:::note

Typically one `targetGroup` should only contain [targets](#target) owned by the same user. This ensures that one alert is clearly associated with only one user.

:::
