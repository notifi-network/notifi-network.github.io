---
sidebar_position: 4
---

# Using External API's

Storage APIs will be injected upon startup of your Notifi Hosted routine. You will have access to both persistent and ephemeral storage. Storage namespace is shared across the dapp so that multiple parsers in your dapp can reference/share the same data. Versioning is supported on persistent storage to aid in optimistic locking/updates.

#### Storage Guarantees

- Persistent Storage
  - Georeplicated and durable
  - Kept for lifetime of the dapp account unless the entry is deleted
- Ephemeral Storage
  - Best effort to keep data. Should be treated as ephemeral.

#### API storage limits

- Key are limited to 64 ASCII characters
- Persistent Storage is limited to 1MB entries
- Ephemeral Storage is limited to 50KB entries

#### Admin Portal Storage Editor

This allows developers to CRUD any entry in their storage. Typical usecases for developers is to use this editor to setup keys in persistent storage that are used as config or env variables. Flags can be set to enable/disable features or logging in the next execution of the parser.

#### API and example usage

- Persistent Storage
- Ephemeral Storage
