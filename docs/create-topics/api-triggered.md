---
sidebar_position: 2
---

# Send alerts triggered by API call

Triggering notifications via API calls from your server can be done by creating a topic, and then using Notifi NodeJS SDK package [here](https://www.github.com/notifi-network/notifi-sdk-ts/packages/node-client) to trigger from your server

#### Step 1

Log in to the [Admin Portal](https://admin.notifi.network) (create an account if you haven't done so already) and head to the _Alert Manager_ page.
Select the _Topics_ tab (default) and click on "+ Topic" in the top right, then select the "Send an alert triggered by an API call from my server". 

![create announcement](/img/create-topics/1.png)

#### Step 2

Configure your infrastructure to publish to your *topic*.

First step is to install the NPM package in the NodeJS application that will be sending this notification.
Ensure this application is running in a secure location that can access sensitive credentials that will be used to initialize the Notifi NodeJS SDK. Never allow the initialization credentials to ever be sent to a user's web browser.
npm install blahblah
Decide where to store your initialization credentials. This is app specific. We highly recommend not storing in anything that's committed to source control such as git. Here are some ideas of how to store secrets for a NodeJS app. 

Second step is to create a topic that will be triggered by this API call if you haven't already done so. 

Third step, make note of the topic identifier to use in a publishFusionMessage. To get started you may also copy/paste the sample code that's provided after you've created a topic. This must be copy/pasted in the same NodeJS app you did step (1) in.

Fourth step, you should modify the sample to only call the initialization routine once daily, and then customize the publishFusionMessage with your specific topic data. You may pass whatever JSON object you'd like. This JSON object is what will be used to help render notifications later. If you have defined any optional filters for the user to be able to specify when registering for an alert on this topic, then you must also make sure to pass in the required filter parameter variables in your call.

Now that you're triggering the notifications with your custom JSON object, you can configure your templates so that the notifications are rendered appropriated per destination.
