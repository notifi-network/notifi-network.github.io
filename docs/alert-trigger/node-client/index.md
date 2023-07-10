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

Here is a sample test script:

```
#!/bin/bash

# Test the gateway to see if it's working

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

The variable `healthValue` varies by dapp, and it’s used in conjunction with
`VALUE_THRESHOLD` filters. The user subscribes to a `DIRECT_PUSH` source with
the `VALUE_THRESHOLD` filter, specifying a threshold in the alert filter
options. Then, the service sends a notification to that user's address using a
`healthValue`, which will be evaluated against the threshold that the user
used.

If this is successful, the server will respond with:

```
{"message":"success"}
```

