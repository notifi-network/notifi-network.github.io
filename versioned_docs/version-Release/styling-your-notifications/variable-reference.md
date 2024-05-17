# Notifi Templates Variable Reference

The following variables are available when [creating templated messages](./index.md).

## `eventData`

This object contains the variables passed in through `variablesJson` in `publishFusionMessage`
for self-hosted topics, and the variables passed in through `metadata` in events
returned by Fusion parsers.

## `alertData`

This object contains some extra information related to the alert, including
the results from running filters.

### `alertData.threshold`

If you created a threshold filter when creating the notification topic
(e.g. only notify me when my C-Ratio is below 50%), this property contains
that threshold.

### `alertData.thresholdDirection`

If you created a threshold filter when creating the notification topic
(e.g. only notify me when my C-Ratio is below 50%), this property contains
the direction of that threshold, either `"above"` or `"below"`.

## `notifiData`

This object contains extra properties supplied with each alert.

### `notifiData.tenantName`

The name of your Dapp account, given when the account was created.

### `notifiData.sourceTypeId`

A unique ID given to the source of the message - for instance, all messages
sent by the same parser will have the same `sourceTypeId`.

### `notifiData.alertId`

A unique ID assigned to the alert.

### `notifiData.comparisonValue`

The "comparison value" for the alert, as set in the `comparisonValue` property
when returning the event from a parser. Users can filter incoming messages to ones
where this comparison value is either above or below a given value.

### `notifiData.eventTypeId`

The "Event Type ID" corresponding to the notification topic.

### `notifiData.blockchain`

The name of the blockchain the event was triggered on. Usually only applicable to
parser events - self-hosted events will always report this as `OFFCHAIN`.

### `notifiData.pixelUrl`

A URL leading to a tracking pixel that can be attached to an email, thus giving
insight as to when the email was opened.

```html
<img src="{{notifiData.pixelUrl}}" alt="Tracking Pixel" width="1" height="1" border="0" style="display:none;">
```

:::note

In accordance with our privacy policy,
Notifi does **not** store IP addresses or any other identifying information reported
by the tracking pixel. Accessing the tracking pixel link will only record that the email
has been opened.

:::

## `unsubscribe_url`

A URL allowing the recipient of a notification to unsubscribe from it.

```html
<a style="text-size: 8pt;" href="{{unsubscribe_url}}">Unsubscribe</a>
```

:::note

Users can also unsubscribe from notifications either through the [Notifi Hub](https://notifi.network/login)
or through the [React card](../alert-subscribe/react-card/) or other UI. The unsubscribe URL
is useful to allow a user to do this without logging in.

:::