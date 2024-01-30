# Node Client

The Node Client is available on [Github](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node).

Using the Notifi Node SDK, developers are provided with a very flexible and custom alert triggering tool where the dapp
fully owns the decision of when to send out notifications.

For publishing to your [topic](../../integration-overview/alerts-in-depth.md#topic) the Node Client has 2 endpoints which are of importance.
To follow along, please clone the sample of the Node Client on
[Github](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node-sample).

First, start the server with `npm run dev`.

## login

The server will be running at `https://localhost:8080`. To login, you can use the following script below.
Replace the `sid` and `secret` fields with your `sid` and `secret` that can be found in the
[Admin Console](https://admin.notifi.network/).

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

## publishFusionMessage

To [publish messages to your topic](https://github.com/notifi-network/notifi-sdk-ts/tree/main/packages/notifi-node-sample#send-a-fusion-broadcast-message-ap-v2-using-http-post), you can now use the LOGIN_TOKEN obtained above, along with the FusionEventId that identifies the topic.
The `eventTypeId` can be obtained from here. The `variablesJson` member is required, but can take any shape you want. You can then create your message templates to reference the JSON path that you've specified. Here is a sample test script below.


*NOTE: For any topic that was created for Community Manager, you can publish to it from this API, but we highly recommend you use our Community Manager in Admin Portal, as topics created for Community Manager adhere to a strict schema that can change without notice.*

```
#!/bin/bash

curl --location --request POST 'http://localhost:8080/publishFusionMessage' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $LOGIN_TOKEN" \
--data-raw '{
  "variables": [
    {
      "eventTypeId": "71cc71b9c5de4a838e8c8bf46d25fb2c",
      "variablesJson": {
        "Platform": {
          "message__markdown": "[link text](https://bots.ondiscord.xyz)",
          "message": "gets overriden by message__markdown",
          "subject": "dpush test"
        },
        "Email": {
          "message": "gets overriden by message__markdown",
          "message__markdown": "[link text](https://bots.ondiscord.xyz)",
          "subject": "dpush test"
        }
      }
    }
  ]
}'
```

If this is successful, the server will respond with:

```
{
  "result": {
    "indexToResultIdMap": {
      "0": "c1665c4b-5389-400e-b026-bd93471a0d00"
    }
  }
}
```


