---
sidebar_position: 4
---

# Templates 

## Overview
Once a topic is created, templates need to be created and uploaded. Currently, we have three types of topics: Community Manager topics, Alert Triggered by API, and Notifi hosted topics. Alert triggered by an API and Notifi hosted topics will need a template. Community Manager topics do not need templates since they will use a default template.

Notifi templates use mustache templates to render all notifications. Check out the [mustache documentation](https://mustache.github.io/mustache.5.html) to learn more about how to construct mustache templates.

## Template Variables
When constructing your mustache templates, you have access to template variables provided by your topic payload. The template variables differs based on the topic payload, and these variables can be accessed in mustache templates via the ``{{eventData}}`` object.

### Alert Triggered by API Topics
In the case of an Alert Triggered by an API, the template variables will contain the payload sent by the sender (your tenant service). Here's an example:
The following is an example payload for alert triggered by an API:
```
{
    "data":[{
        "eventTypeId": "{topicId}",
        "variablesJson": {
            "testVar1": "Hello World",
            "testVar2": {
                "testVar3": "Test"
            }
        }
    }]
}
```
Here's an example template using the variables from the payload:
```
{{eventData.testVar1}}
This is a mustache template. 
{{eventData.testVar2.testVar3}}
```
Given the above payload and template renders this:
```
Hello World
This is a mustache template. 
Test
```
### Notifi Hosted Topics
Notifi hosted topics is coming soon. Similar to Alert Triggered by an API, Notifi hosted topics will have template variables made available to the mustache templates. The main differentiator will be the source of the payload. In Alert Triggered by an API, the payload is determined by the sender. In Notifi hosted topics, the payload is determined by the parser run by Notifi.
## Steps
In order to upload templates, navigate to the Alert Manager in Notifi Admin Portal. Click the "Define Templates" button to upload templates for the desired topic. Reminder that this option will not be available for Community Manager topic. If you do not see the "Define Templates" button for your topic, check if it is a Community Manager topic.
![topic created](/img/create-topics/3.png)

Clicking the "Define Template" button should navigate you to a screen like this. 
![Upload Template Screen](/img/create-topics/4.png)

Created topics will need a template for each target destination (alert history, email, Discord, etc.) as indicated above. Alert History is a required template. The other destinations are needed based on your tenant's needs. If your tenant wants email and Telegram notifications, email and Telegram templates are needed.