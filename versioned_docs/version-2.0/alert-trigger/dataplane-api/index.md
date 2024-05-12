# Dataplane API

The Dataplane API is a very low-level REST API located at https://dpapi.notifi.network/,
and handles some functions that don't make sense to integrate into the 
[GraphQL API](../../alert-subscribe/graphql-api/index.md).

The only such function that is intended for external use is the `FusionIngest` API,
which is used for sending direct messages:

## FusionIngest

### Request

**URL**: https://dpapi.notifi.network/FusionIngest/

**Method**: POST

**Required Headers**:

- `Authorization`: `Bearer <JWT>`, where `<JWT>` is an authorization token obtained
  from the `logIn` or `logInWithService` APIs in the [GraphQL API](../../alert-subscribe/graphql-api/index.md).
- `Content-Type`: `application/json`

**Body**: An array of JSON objects with the following properties:

- `eventTypeId`: The Event Type ID of the topic you want to send the message on
- `variablesJson`: An object containing variables to apply to the message. This will
  appear as the `eventData` object in the topic's templates.
- `specificWallets`: (Optional) An array of objects with the following properties:
  - `walletPublicKey`: The public key of a wallet you want to send to
  - `walletBlockchain`: The name of the blockchain in all-caps (e.g. `ETHEREUM` or `SOLANA`)

An example:
```json
[
    {
        "eventTypeId": "<YOUR EVENT TYPE ID>",
        "variablesJson": {
            "subject": "Test subject",
            "message": "Test message",
            "param1": 12345,
            "param2": [1, 2, 3, "4", "5"]
        },
        "specificWallets": [
            {
                "walletPublicKey": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
                "walletBlockchain": "ETHEREUM"
            }
        ]
    }
]
```

### Response

**Status Code**: 200 on success, 400 when a request parameter is invalid or too large, 500 otherwise

**Body**: A JSON document with the following property:

- `indexToResultIdMap`: An object that maps each index in the request array
  to the ID of an operation tracking sending the message. (There is currently
  no use for these IDs).