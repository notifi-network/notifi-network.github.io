---
sidebar_position: 3
---

# Alerts in Depth {#alerts-in-depth}

An **alert** is a tuple of a [Topic](#topic) (sometimes referred to as "source" as well), [Filter](#filter), and [Target](#target), which are represented by `sourceGroup`, `Filter`, and `TargetGroup` objects respectively. Existing topics, filters, and targets can be reused.

As long as the alert exists, the user will receive notifications to their specified channels whenever they are triggered.

## Topics {#topic}

The topic of an alert serves as a way for users to subscribe to specific categories of alerts and can be triggered manually through the [Admin Portal](../alert-trigger/admin-portal/) web UI, programmatically through an API, or through a Notifi hosted monitoring service. 

### Topic types {#topic-type}

- #### Announcements through Community Manager

  Topics of these alerts are triggered manually through the [Community Manager](../alert-trigger/admin-portal/) feature of the Admin Portal. Common use cases for this type of topic include project announcements (e.g. for new launches, events, etc.), marketing campaigns, and others. 

- #### Alerts triggered through API call 

  Notifi provides a [Node Client](../alert-trigger/node-client/) which can be called to programmatically trigger notifications. This can be used to send out notifications based on events from an external service that also is required for things other than triggering notifications. 

- #### Notifi hosted monitoring service

  The most common type of topic involves creating a monitoring service hosted by Notifi that can pull on-chain and off-chain data and trigger notifications based on set conditions. This is often the simplest and fastest solution to start sending out automated notifications as Notifi has set up the required infrastructure already and provides a simple and fast toolkit to define the triggering conditions. 

## Filters {#filter}

Filters are used in combination with [Topics](#topic) to enable a variety of alerts using the same source.
For example, different filters could be used to allow different threshholds on loan health alerts, token balance changes, etc. This allows a user to fully customize an alert to their preferences.

## Targets {#target}

A [Target](#target) is a destination for an alert, which is a communication channel: email adress, Telegram account, Discord account, or phone number.

They are represented as `Target` objects and used in alerts as `TargetGroup` objects, which are a collection of `Target` objects.

:::note

Typically one `targetGroup` should only contain [targets](#target) owned by the same user. This ensures that one alert is clearly associated with only one user.

:::
