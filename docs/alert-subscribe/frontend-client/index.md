# Integrating frontend client 


`@notifi/notifi-frontend-client`

https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-frontend-client


## 📥 Installation

```
npm i @notifi-network/notifi-frontend-client
```

## 🪝 Hook up the SDK

Load the Notifi Frontend Client SDK into your component.

```js
// use the Client and Config of your chain
const { newAptosClient, newAptosConfig } = require('@notifi-network/notifi-frontend-client');
```

Instantiate and configure the Notifi Client for your dApp and environment. If your user has not connected their wallet, they will need to do so in order to instantiate the client.

```js
const accountAddress = <The wallet's public account address>;
const walletPublicKey = <The wallet's public key>;
const tenantId = <Tenant ID received through the Notifi Config Tool>;
const blockchainEnv = "Development";

// use the Client and Config of your chain
const config = newAptosConfig({
  address: accountAddress, // string
  publicKey: walletPublicKey, // string
}, tenantId, blockchainEnv);
const client = newAptosClient(config);

```

## 🔏 Signature Authorization

For a user to opt-in for notifications, they will need to provide their signature. This signature will then be used to authorize the user's connected wallet address with Notifi and create the account with Notifi.

Using the wallet adapter of your choice, prompt the user to sign and use the signed message in the `logIn()` hook.

```js
const logIn = async () => {
    const loginResult = await client.logIn({
        // replace with your chain
        walletBlockchain: 'APTOS',
        signMessage: async (message, timestamp) => {
            // this signMessage differs by chain
            const { result } = await signMessage({
              address: true,
              message,
              nonce: `${timestamp}`,
            });
            console.log('signedMessage', result);
            return result.signature;
        },
      });
      // client should be authenticated now
      console.log('loginResult', loginResult);
      return loginResult;
};

```

## 🪢 Create the Alert

Once your user enters their contact information and options for their first alert, use the `ensureTargetGroup()` to create a [target group](../integration-overview/alert-intro#target) of their contact information and a [source group](../integration-overview/alert-intro#source) of their desired alert options.

In order to create a target group, `ensureTargetGroup()` must pass in least one email address, phone number, telegramId, or webhook url. DApp admins can update pass in a webhook url to receive all of the notifications instead of a user email address, phone number, or telegramId.

In order to create a source group, `ensureSourceGroup()` must pass in metadata of the alert options returned in the Rendering Alert Options section.

After creating a target group and source group, use the `ensureAlert()` to create the first alert.

This example shows how to create a Broadcast message alert.

```js
 // First create a source group
const sourceGroup = await client.ensureSourceGroup({
  name: 'Default Source Group',
    sourceParams: [
      {
        type: 'BROADCAST',
        name: 'Marketing Broadcast Source',
        blockchainAddress: 'notifi__newFeature'
      }
    ]
});

const source = sourceGroup.sources?.find(it => it?.blockchainAddress === 'notifi__newFeature');
const filter = source?.applicableFilters?.find(it => it?.filterType === 'BROADCAST_MESSAGES');

if (filter === undefined) {
  throw new Error('Unable to find required filter');
}

// Second create a target group
const targetGroup = await client.ensureTargetGroup({
      name: 'Default Target Group',
      webhook: {
        url: 'Notifi Platform', // For BROWSER_PUSH_NOTIFI, url is unused
        format: 'BROWSER_PUSH_NOTIFI',
        headers: [],
  },
})

    // Finally create the alert
    const alert = await client.ensureAlert({
        name: 'User broadcast alerts',
        sourceGroupId: sourceGroup.id,
        targetGroupId: targetGroup.id,
        filterId: filter.id,
    });

    return alert;
}
```

## 🔃 Updating the Alert

If a user wants to update their alert by changing the email address notifications are sent to, or to add a phone number for SMS notifications, you can still use `ensureAlert()` to update.

You'll want to pass in the `name` of the existing alert to make the update to that alert entity. You can use `getAlerts()` to find the alert entity.

```js

const handleUpdateAlert = async () => {
  try {
    const alerts = await getAlerts();
    const response = await ensureAlert({
      name = alerts[0].name,
      sourceGroupId,
      targetGroupId,
      filterId,
      filterOptions,
      groupName = 'default'
    });
    return response;
  } catch (e) {
    if (e instanceof GqlError) {
      // handle the Notifi GqlError
    }
  }
}

```

## 🗑 Deleting the Alert

To delete an alert, use `deleteAlert()`, which simply [takes the `id` of the alert] to be deleted. In our use case where the user only has 1 alert in their account:

```js

const handleDeleteAlert = async () => {
  try {
    const alerts = await getAlert();
    const response = await deleteAlert({
      alertId: alerts?.[0]?.id,
    });
    return response;
  } catch (e) {
    if (e instanceof GqlError) {
      // handle the Notifi GqlError
    }
  }
}
```
