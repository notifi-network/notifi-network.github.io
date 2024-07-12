---
sidebar_position: 4
---

# Subscription Parameters

:::warning

This document concerns a work-in-progress feature that is not yet generally available.

:::

This page documents how to use the "User Selects From List" feature when creating topics in Notifi Admin.


## Setting Up A Topic To Use Subscription Parameters

<!-- TODO: how to set up the topic with this parameter -->

When creating a topic, under **What information do you need from the subscribing user?**, select
**User Selects From List**.

<!-- TODO: screenshots -->



## Getting Subscription Parameters From Users

<!-- TODO: how to specify the list items in React Card -->

## Sending Alerts with Subscription Parameters

Finally, to tag the alerts you send with the correct list item, simply include it under the selected variable
in the `variablesJson` parameter when constructing the alert.

For instance, in the Notifi Node SDK, you can tag a price pair under the `pricePair` variable
by setting it like this:

```javascript
// let client: NotifiClient = ...
// let token: string = await client.logIn(/* ... */)
// let EVENT_TYPE_ID: string = ...

await client.publishFusionMessage(token, [{
    eventTypeId: EVENT_TYPE_ID,
    variablesJson: {
        pricePair: "USD/ETH",
        value: 2000
    }
}]);
```