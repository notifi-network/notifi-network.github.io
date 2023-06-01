---
sidebar_position: 7
---

# Displaying Notification History

Users generally have access to the history of all their notifications from Notifi (across all dapps) in the **Notifi Hub**. 

It is also possible to display the user's past notifications directly in the dapp. 
The **Notifi React Card** contains the required UI elements and will show the user's notification history when a wallet is connected that already subscribed to the alert. 

For a more flexible UI to show the users notification history, the **Notifi Frontend Client** provides a `getNotificationHistory()` function. 



## Get Notification History using **Notifi Frontend Client**

To get notification history, use the getNotificationHistory()

```js
const getNotificationHistory = async (first?: number, after?: string) => {
    // Fetch `first` items after the `after` cursor (leave undefined for first page)
    const { nodes , pageInfo } = await client.getNotificationHistory({
        first,
        after,
    });

    nodes.forEach(item => {
        if (item.detail?.__typename === 'BroadcastMessageEventDetails') {
            console.log('I have a broadcast message', item.detail?.subject, item.detail?.message);
        }
    });

    console.log('pageInfo', pageInfo.hasNextPage, pageInfo.endCursor);

    return {
        nodes,
        pageInfo
    }
}
```

