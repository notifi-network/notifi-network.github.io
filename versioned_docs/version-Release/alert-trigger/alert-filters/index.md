# Alert Filters

[Additional filters](../../create-topics/api-triggered.md#optional-filters) on topics require the published event, either from your service via [publishFusionMessage](../node-client/index.md#publishfusionmessage) or [Notifi Monitored](../../create-topics/notifi-monitored.md), to supply the appropriate filter values to compare against. Each published event must contain a JSON section for 'filterVariables' that matches the following structure
```JSON
"filterVariables": {
    "version": 1,
    "<filter-name>":{"required-variable-for-filter-0":"some-value", "required-variable-for-filter-1":"some-value1", ...}
}
```

**NOTE: When configuring your filters, make note of the type of values you're expecting to filter against. If you select integer values, but then send a decimal value in your event, it will cause an error and the event will be dropped.**

## Notifi Provided Filters
This is a list of the filters by filter-name and their respective variables.
### aboveThreshold
This filter type will only allow the alert to trigger if the comparisonValue is above the user configured threshold.

Required variables:
  - thresholdComparisonValue (float/long)

Example
```json
{
    "aboveThreshold":{"thresholdComparisonValue": -3}
}
```

### belowThreshold
This filter type will only allow the alert to trigger if the comparisonValue is above the user configured threshold.

Required variables:
  - thresholdComparisonValue (float/long)

Example
```json
{
    "belowThreshold":{"thresholdComparisonValue": 2}
}
```

### aboveOrBelowThreshold
This filter type will only allow the alert to trigger if the thresholdComparisonValue is above or below the user configured threshold. The direction of the comparison is specified by the user on the frontend, and stored in the alert configuration.

Required variables:
  - thresholdComparisonValue (float/long)

Example
```json
{
    "aboveOrBelowThreshold":{"thresholdComparisonValue":"0.001483"}
}
```

### frequency
This filter type will only allow the alert to trigger if the alert has not executed within the time threshold (up to 24 hours)
This is the only filter where there are no required variables, but only optional.

The developer has a choice to configure in one of two ways:<br>
1. No variables are provided. The behavior of the alert will be to drops future alert attempts until the set time has elapsed. Useful in cases where you want to provide account status updates but don't want to spam the user.
2. A debounce key is provided. This key will act as a unique key for this specific user alert for the duration of the configured period. This is useful in the case where a user has created an alert for 'top market movers', and don't want to get spammed by the same market mover repeatedly, but also want to know what the other market moves are. **This key can be up to 16 ASCII characters long.**

*Optional* variables:
  - debounceKey (max 16 ASCII chars)

Example
```json
{
    "frequency":{"debounceKey":"sol/usdc"}
}
```

### subscription
If publishing with publishFusionMessage, and you have configured your topic with a subscription value such as connected wallet (non-secure), then you must provide a subscription value that matches what the user provided on the frontend.

Required variables:
  - value (string)
  - isCaseSensitive (bool)

Example
```json
{
    "subscription": { "value": "0x4444", "isCaseSensitive": false },
}
```