# Node Client

The Node Client is available on [Github](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node).

Generally, it is used for advanced functionality where you need to directly
call Notifi via an API. One example is implementing your own monitoring
service for dapp specific on-chain or off-chain events with a custom parser.
This enables very flexible and custom alert triggering logic where the dapp
fully owns the decision of when to send out notifications.

The Node Client has 9 endpoints which will be described in detail below.
To follow along, please clone the sample of the Node Client on
[Github](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node-sample).

First, start the server with `npm run dev`.

## login

The server will be running at `https://localhost:8080`. To login, you can use the following script below.
Replace the `sid` and `secret` fields with your `sid` and `secret` that can be found on the
[Admin Console](https://admin.dev.notifi.network/).

```
#!/bin/bash

# Test the gateway to see if it's working

curl --location --request POST 'http://localhost:8080/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sid": "9MJEU0",
    "secret": "XBLNWj"
}'
```

This will return a response like the following:

```
{"token":"eyJhbG","expiry":"2023-07-24T22:06:58.735Z"}
```

You will need the token in the future so please save this. If the token
expires, please run this again to issue a new token. In future examples in this
document, the token will be saved as a variable `$LOGIN_TOKEN`.

## sendSimpleHealthThreshold

The variable `healthValue` varies by dapp, and it’s used in conjunction with
`VALUE_THRESHOLD` filters. The user subscribes to a `DIRECT_PUSH` source with
the `VALUE_THRESHOLD` filter, specifying a threshold in the alert filter
options. Then, the service sends a notification to that user's address using a
`healthValue`, which will be evaluated against the threshold that the user
used. Here is a sample test script:

```
#!/bin/bash

curl --location --request POST 'http://localhost:8080/sendSimpleHealthThreshold' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $LOGIN_TOKEN" \
--data-raw '{
    "sid": "9MJEUA",
    "secret": "XBLNWf",
    "walletPublicKey": "8CHibP",
    "walletBlockchain": "SOLANA",
    "healthValue": 0.42
}'
```

If this is successful, the server will respond with:

```
{"message":"success"}
```

# createTenantUser

This creates a tenant user for the platform. Here is a sample script:
The walletPublicKey has to be an id that doesn't exist already.

```
#!/bin/bash

curl --location --request POST 'http://localhost:8080/createTenantUser' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $LOGIN_TOKEN" \
--data-raw '{
    "sid": "9MJEUJ",
    "secret": "XBLNWf",
    "walletPublicKey": "woeijf",
    "walletBlockchain": "SOLANA"
}'
```

If this is successful, the server will respond with:

```
{"userId":"6f97780b"}
```

This is used in the following method.

# createDirectPushAlert

This creates a direct push alert for the relevant user.

```
#!/bin/bash

curl --location --request POST 'http://localhost:8080/createDirectPushAlert' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $LOGIN_TOKEN" \
--data-raw '{
    "sid": "9MJEUJ",
    "secret": "XBLNWf",
    "userId": "658514e6",
    "email": "test@gmail.com"
}'
```

If this is successful, the server will respond with:

```
{"alert":{"id":"9e6b14"}}
```

# deleteUserAlert

You can use this to delete the direct push alert for a user. This is commonly
used if the user looks at the alerts and toggles and wants to remove an alert.

```
#!/bin/bash

curl --location --request POST 'http://localhost:8080/deleteUserAlert' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $LOGIN_TOKEN" \
--data-raw '{
    "sid": "9MJEUJ",
    "secret": "XBLNWf",
    "alertId": "9e6b14"
}'
```

If this is successful, it responds with the `alertId`:

```
{"alertId":"9e6b14"}
```






