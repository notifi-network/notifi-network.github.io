---
sidebar_position: 4
---

# Subscription Parameters

:::warning

This document concerns a work-in-progress feature that is not yet generally available.

:::

This page documents how to use the "User Selects From List" feature when creating topics in Notifi Admin.
This feature can be used to create further filters based on users' areas of interest without having to create a
separate topic for each. This is especially useful when these areas of interest are too flexible for Notifi's topic
UI, such as price pairs that may appear or disappear from an exchange, or alerts on specific DAO proposals that come
and go.

## Setting Up A Topic To Use Subscription Parameters

When creating a topic, under **What information do you need from the subscribing user?**, select
**User Selects From List**. In the text box labeled **Variable Name for Input List**, enter a simple,
[camelCase](https://en.wikipedia.org/wiki/Camel_case) name that describes the list you'll be building.
(The actual list will come from your UI on the frontend, see below). Set up the rest of the topic as normal,
and attach it to a card configuration.

## Getting Subscription Parameters From Users

Once you have set up your topic and card, you can then set it up in your UI. The custom list feature is available in
the new [`notifi-react`](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react) package,
which supersedes the [`notifi-react-card`](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-react-card) package.

The UI is created through the `NotifiContextProvider` element, and the list can be supplied through the `inputs`
field on that element. Each item contains a `label`, which is shown to the user, and a `value`, which is supplied to
your code:

```jsx
<NotifiContextProvider
  tenantId={tenantId}
  walletBlockchain={walletBlockchain}
  walletPublicKey={walletPublicKey}
  inputs={{
    variableNameChosenDuringTopicSetup: [
      { label: 'Display Label 1', value: 'FirstValue' },
      { label: 'Display Label 2', value: 'SecondValue' }
      // ... and so on
    ],
    walletAddress: [{ label: '', value: walletPublicKey }],
  }}
  signMessage={signMessage}
  cardId={cardId}
>
  {children}
</NotifiContextProvider>
```

For instance, if you are creating a topic where you want
to allow users to specify price pairs, and set the variable
name as `pricePairs`, you might do something like this:

```jsx
<NotifiContextProvider
  tenantId={YOUR_TENANT_ID}
  walletBlockchain={walletBlockchain}
  walletPublicKey={walletPublicKey}
  inputs={{
    pricePairs: [
      { label: 'USD/BTC', value: 'USD-BTC pair' },
      { label: 'USD/ETH', value: 'USD-ETH pair' },
      { label: 'BTC/ETH', value: 'BTC-ETH pair' }
      // ... and so on
    ],
    walletAddress: [{ label: '', value: walletPublicKey }],
  }}
  signMessage={signMessage}
  cardId={YOUR_CARD_ID}
>
  {children}
</NotifiContextProvider>
```

## Sending Alerts with Subscription Parameters

Finally, when creating your [parser code](./notifi-monitored.md), you can supply
your alerts with one of these selected values in order to filter messages. This is done through the `comparisonValue`
on the alert:

```javascript
events.push({
  eventTypeId: EVENT_TYPE_ID,
  comparisonValue: `USD-ETH pair`, // <-- here, specifying the USD/ETH pair from earlier
  // ... other fields
})
```

These values (as well as the wallet IDs) can also be viewed in the `subscriptionValue` field of the input
`subscriptions`. This can be used to obtain a list of user selections in order to know what data
you should focus on:

```javascript
const parse: Evm.Parser["parse"] = async (
  args,
  rpc,
  storage,
  logger,
  subscriptions
) => {
  // ...

  const selections = new Set(
    await subscriptions
      .get(YOUR_EVENT_TYPE_ID)
      .then(({ subscriptions }) => {
        return subscriptions.map((x) => x.subscriptionValue);
      })
  );
```

As a side note, if you do this same procedure on a topic where this setting is set to **Wallet Address**, you will
get a list of subscribed or watched wallets instead.