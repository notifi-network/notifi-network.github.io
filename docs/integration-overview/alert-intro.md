---
sidebar_position: 3
---

# Introduction to alerts {#alert-intro}

Notifi uses the concept of **alerts** to enable sending manual and automated notifications to users. 
Users who like to receive notifications from Notifi need to subscribe to an **alert** and will be able to view and manage their **alerts** in the **Notifi Hub** using their automatically generated **Notifi Account**. 

An **alert** is a tupel of a [Source](#source), [Filter](#filter), and [Target](#target), which are represented by `SourceGroup`, `Filter`, and `TargetGroup` objects respectively. 

An Alert is created when an user has subscribed to an alert and as long as the alert exists, the user will receive notifications to their specified channels whenever they are triggered. 

## Sources {#source}

A [Source](#source) is a trigger for a notification, which for example could be an on-chain event, or a message sent by the project team. 
They are represented as `Source` objects and used in alerts as `SourceGroup` objects, which are a collection of `Source` objects. 

Typically a [Source](#source) has a specified [Source Type](#source-type) and a `id` which is used to distinguish sources of the same type. 

:::note
The `id` can be an arbitrary string like `dappid__product_announcements`, but should start with `dappid__`
:::

### Examples of Source Types {#source-type}

- #### Broadcast {#broadcast}

  Broadcast sources are used for any alerts that are supposed to go to multiple users at the same time, for example product announcements or notifications of certain events.
  They can be triggered through the **Notifi Admin Panel** website or through an API in the **Notifi SDK**, which enables automated use cases for which Notifi is not providing a dedicated source. 

- #### Direct Push {#direct-push}

  Direct Push sources are used for alerts that are supposed to go to a single user only, for example notifications about changes in an users position, account, wallet, etc. 
  Similar to Broadcast sources they can be triggered through the **Notifi Admin Panel** website or through an API in the **Notifi SDK**, which enables automated use cases for which Notifi is not providing a dedicated source. 

- #### Wallets {#wallet-source}

  Notifi supports wallets from several blockchains as source, which are typically used for changes of token balances in that wallet. In combination with a corresponding [Filter](#filter) notifications will be automatically sent out. 

- #### dApp specific (a.k.a. _"custom parser"_) {#custom-parser-source}

  DApp specific sources are useful to enable customized user experiences tailored to specific use cases, like alerts for auctions, price changes, liquidations, loan health, and many more. Typically they monitor on-chain events and in combination with a corresponding filter, trigger notifications when certain transactions / events are observed on the chain. 
  However, they require custom work, so please reach out to us to discuss the possibility of creating a custom parser. 


## Filters {#filter}

Filters are used in combination with [sources](#source) to enable a variety of alerts using the same source. 
For example different filters could be used to allow different threshholds on loan health alerts, token balance changes, etc. 
They are in particular relevant for custom parsers, as these usually emit all dApp related events, a filter can then be used to only alert on certain events that are relevant to the alert. 

:::info

For use cases that use [Broadcast](#broadcast) or [Direct Push](#direct-push) sources there are usually no specific filter required, in that case the filter types `BroadcastMessages` and `DirectTenantMessage` can be used. 

:::

## Targets {#target}

A [Target](#target) is a destination for an alert, typically a communication channel like a specific email adress, Telegram account, phone number, etc. 

They are represented as `Target` objects and used in alerts as `TargetGroup` objects, which are a collection of `Target` objects. 

:::note 

Typically one `targetGroup` should only contain [targets](#target) owned by the same user. This ensures that one alert is clearly associated with one user only.

:::









<!--
What to cover:

- what are notifi accounts, how does wallet -> notifi account association work
- what are source, filter, targets, alerts
- highlevel things that need to be done: UI for subscribe, creation of source/filters/targets, triggering alerts (manual vs. automatic)

--> 