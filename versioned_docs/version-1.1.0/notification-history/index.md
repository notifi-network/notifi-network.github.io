---
sidebar_position: 70
---

# Displaying Notification History

Users can access all of their notifications from Notifi across all dapps in the
[Notifi Hub](../for-users/index.md). A sample is shown in the image below:

<img
  src={require('/img/hub/1.png').default}
  alt="Example hub notif"
  width="60%" height="30%"
/>

It is also possible to display the user's past notifications directly in the dapp.
The [React Card](../alert-subscribe/react-card/) contains the required UI
elements and will show the user's notification history when a wallet is connected.

For a more flexible UI to show the users notification history, the
[Frontend Client](../alert-subscribe/frontend-client) provides a
`getNotificationHistory()` function.


## Get Notification History using **Notifi Frontend Client**

To retrieve notification history, use the `getNotificationHistory()` function:

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

