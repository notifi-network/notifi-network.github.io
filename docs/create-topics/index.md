---
sidebar_position: 40
---

# Creating Topics

Notifi topics are pub/sub topics (https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) that have been simplified into three separate categories.
- [Community Manager Announcements](./announcements.md)
- [Topics *published* by calling an API from self hosted infrastructure](./api-triggered.md)
- [Topics *published* by code/logic hosted by Notifi](./notifi-monitored.md)

In each of these categories, the common requirement is that a *topic* must be published to.

For end users, they sign up for alerts by subscribing to topics, specifying any optional filters such as thresholds that would further help customize their alert preferences, and where to receive the alert.