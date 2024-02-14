---
sidebar_position: 2
---

# Supported RPC Blockchain Methods

The RPC APIs will be injected upon startup of your Notifi Hosted routine. The interfaces will be specific to the blockchain your parser is targeting and will be limited to query only.

Supported Chains/RPCs

## EVM

- Ethereum, Polygon, Avalance, Arbitrum, ZKsync, Binance, EVMOS, Optimism

### Methods Supported:

### getAccountBalance

#### Parameters

_required_ `account: string`

The address (20 bytes) to check for balance

_required_ `blockNumber: number`

The blocknumber is in decimal format. Available through `block.blockNumber` invoked on injection of Notifi Hosted routine.

```
 getAccountBalance: (params: {
            account: Common.Hex;
            blockNumber: number;
        }) => Promise<Common.Hex>;
```

#### Response

Returns a hex string to be decoded

### ethCall

#### Parameters

_required_ `data: string`

Data is a hex string of your respective encoded call string

_required_ `blockNumber: number`

The blocknumber is in decimal format. Available through `block.blockNumber` invoked on injection of Notifi Hosted routine.

`EthCallParams { blockNumber: number; data: string; }`

```
        ethCall: (params: EthCallParams) => Promise<Common.Hex>;
```

#### Response

Returns a hex string to be decoded

## Sui

Methods Supported:

### dryRunTransactionBlock

#### Parameters

_required_ `bytes: string`

Bytes is a string of your respective encoded call string utilizing the [serialize](https://docs.sui.io/guides/developer/sui-101/building-ptb) method on a transaction block

```
 dryRunTransactionBlock: (
      bytes: string,
    ) => Promise<DryRunTransactionBlockResponse>;
```

#### Response

Returns a DryRunTransactionBlockResponse object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js).

### getObject

#### Parameters

_required_ `objectId: string`
ObjectId is the string of the respective Object Id

_required_ `options: SuiObjectDataOptions`
Options is a a SuiObjectDataOptions object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js).

```
   getObject: (
      objectId: string,
      options: SuiObjectDataOptions,
    ) => Promise<SuiObjectResponse>;
```

#### Response

Returns a SuiObjectResponse object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js).

### getBalance

#### Parameters

_required_ `owner: string`
Owner is the string of the respective Wallet Id.

_required_ `coinType: string`
CoinType is the string of Coin Type Id.

```
    getBalance: (owner: string, coinType: string) => Promise<CoinBalance>;

```

#### Response

Returns a CoinBalance object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js).

### getCoinMetadata

#### Parameters

_required_ `coinType: string`
CoinType is the string of Coin Type Id.

```
     getCoinMetadata: (coinType: string) => Promise<CoinMetadata>;

```

#### Response

Returns a CoinMetadata object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js).

### getCoinTotalSupply

#### Parameters

_required_ `coinType: string`
CoinType is the string of Coin Type Id.

```
 getCoinTotalSupply: (coinType: string) => Promise<{value: Common.IntString;}>;
```

#### Response

Returns a Integer string accesible through `value`

### getSuiTransactionBlock

#### Parameters

_required_ `digest: string`
Digest is the respective Transaction Digest from the respective transaction

_required_ `transactionResponseOptions: string`
TransactionResponseOptions is the SuiTransactionBlockResponseOptions object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js)

```
getSuiTransactionBlock: (
      digest: string,
      transactionResponseOptions: SuiTransactionBlockResponseOptions,
    ) => Promise<SuiTransactionBlockResponse>;
```

#### Response

Returns a SuiTransactionBlockResponse object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js)

### getDynamicFieldObject

#### Parameters

_required_ `parentId: string`
ParentId is the string of the respective Object Id

_required_ `value: string`
Value is a string of the object value on the respective Object

_required_ `type: string`
Type is the name of the dynamic field on the respective Object

```
     getDynamicFieldObject: (
      parentId: string,
      value: string,
      type: string,
    ) => Promise<any>;
```

#### Response

Returns a the Dynamic Field Object Response

> This method is currently not type safe

### runSuiDevInspectTransaction

#### Parameters

_required_ `sender: string`
Sender is the string of the wallet address of the respective call

_required_ `txBytes: string`
TxBytes is a string of your respective encoded call string utilizing the [serialize](https://docs.sui.io/guides/developer/sui-101/building-ptb) method on a transaction block

```
 runSuiDevInspectTransaction: (
      sender: string,
      txBytes: string,
    ) => Promise<DevInspectResults>;
```

#### Response

Returns a DevInspectResults object from the ["mysten/sui.js" package](https://www.npmjs.com/package/@mysten/sui.js)

## Solana

Methods Supported:

### getSolanaTokenAccountBalance

#### Parameters

_required_ `pubkey: string`
Pubkey is a string of the respective public key of a user

```
  getSolanaTokenAccountBalance: (pubkey: string) => Promise<TokenAmount>;
```

#### Response

Returns a TokenAmount object from the ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js)

### getSolanaBalance

#### Parameters

_required_ `pubkey: string`
Pubkey is a string of the respective public key of a user

```
    getSolanaBalance: (pubkey: string) => Promise<number>;
```

#### Response

Returns a number.

### getSolanaAccountInfo

#### Parameters

_required_ `pubkey: string`
Pubkey is a string of the respective public key of a user

_optional_ `encoding: string`
Encoding is the data response type based on the encoding string from ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js). If not defined, it will default as `json`

_optional_ `dataSlice: string`
DataSlice is the object based on the type from ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js). If not defined, it will default as `undefined`.

_optional_ `minContextSlot: string`
MinContextSlot is the minimum slot number to fetch the slot from.

```
    getSolanaAccountInfo: (
      pubkey: string,
      encoding: string | undefined,
      dataSlice: DataSlice | undefined,
      minContextSlot: number | undefined,
    ) => Promise<AccountInfo<Buffer> | null>;
```

#### Response

Returns a AccountInfo object from the ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js)

### getSolanaProgramAccounts

#### Parameters

_required_ `pubkey: string`
Pubkey is a string of the respective public key of a user

_optional_ `withContext: boolean`
Wrap the result in an RpcResponse JSON object if true

_optional_ `encoding: string`
Encoding is the data response type based on the encoding string from ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js). If not defined, it will default as `json`

_optional_ `filterObject: string`
FilterObject is based on the FilterObject type from ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js). If not defined, it will default as `undefined`

```
 getSolanaProgramAccounts: (
      pubkey: string,
      withContext: boolean | undefined,
      encoding: string | undefined,
      filterObject: ProgramAccountsFilter | undefined,
    ) => Promise<GetProgramAccountsResponse>;
```

#### Response

Returns a GetProgramAccountsResponse object from the ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js)

### getSolanaSlot

#### Parameters

_optional_ `minContextSlot: string`
MinContextSlot is the minimum slot number to fetch the slot from.

```
     getSolanaSlot: (minContextSlot: number | undefined) => Promise<number>;
```

#### Response

Returns a number. If the `minContextSlot` is not defined, will return the latest slot number.

### getSolanaTransaction

#### Parameters

_required_ `signature: string`
Signature is the string of the respective Transaction Signature

_optional_ `encoding: string`
Encoding is the data response type based on the encoding string from ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js). If not defined, it will default as `json`

```
getSolanaTransaction: (
      signature: string,
      encoding: string | undefined,
    ) => Promise<TransactionResponse>;
```

#### Response

Returns a TransactionResponse object from the ["solana/web3.js" package](https://www.npmjs.com/package/@solana/web3.js)
