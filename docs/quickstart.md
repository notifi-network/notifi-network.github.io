---
sidebar_position: 2
---

# Quickstart

The easiest way to get started with Notifi is to use the React card. This is a
drop-in component that makes it easy to send notifications.

If you don’t have Node.js installed, install it from
[here](https://nodejs.org/en). Then download the SDK by cloning
[this repository](https://github.com/notifi-network/notifi-sdk-ts).

```bash
git clone https://github.com/notifi-network/notifi-sdk-ts
```

You can also download a zip file of the code at
[this link](https://github.com/notifi-network/notifi-sdk-ts/archive/refs/heads/main.zip).

Change into the `notifi-sdk-ts` folder. 

```bash 
cd notifi-sdk-ts/
``` 

Run the following commands in the folder to install the relevant dependencies
and build the SDK.

```bash
npm install
```

```bash
npx lerna run build
```

Now, run the `notifi-react-example` with the following command:

```
npx lerna --scope=@notifi-network/notifi-react-example run start
```

Once this finishes, you should be able to see sample cards in your browser if
you navigate to [http://localhost:3000/](http://localhost:3000/). Clicking
**Edit** on the card will let you update your email, phone number, and Telegram
ID. After updating the fields, you will need to verify that your contact
information is correct by clicking the link sent to you.

<img
  src={require('/img/quickstart/1.png').default}
  alt="Example card"
  width="30%" height="15%"
/>

Log into the [Admin console](https://admin.dev.notifi.network/cards). Under the
**Card Management** section, create a Config and note the Config ID, which will
be needed later.  Also, note the DappID which can be found in the **App
Settings** [page](https://admin.dev.notifi.network/settings).

![2](/img/quickstart/2.png)

![3](/img/quickstart/3.png)

In the file `packages/notifi-react-example/src/NotifiCard/DemoPreviewCard.tsx`,
update the following lines by placing the DappID in the **dappAddress**
field and the Config ID in the **cardId** field.

```
dappAddress="" 
<NotifiSubscriptionCard darkMode cardId="" />
```

In the Admin console, add a new topic with Type **Broadcast**. The Broadcast Id
must start with the DappID then two underscores. Since the DappID used is
“sampledapp”, the Broadcast Id must start with “sampledapp__”.

<img
  src={require('/img/quickstart/4.png').default}
  alt="Example Broadcast"
  width="60%" height="30%"
/>

After this is done, restart the server with the following command:

```
npx lerna --scope=@notifi-network/notifi-react-example run start
```

Ensure the Broadcast Id that you created is enabled in the card and turned on.

<img
  src={require('/img/quickstart/5.png').default}
  alt="Example Broadcast on Card"
  width="60%" height="30%"
/>

Finally, go back to the Admin console under the **Send Test Messages** screen.
Add the same Broadcast Id that you added earlier, a subject, and a body, then
click **Send Message**. You should see now see “Message sent successfully!”

<img
  src={require('/img/quickstart/6.png').default}
  alt="Example Message"
  width="60%" height="30%"
/>

<!--
## Tutorial Video

Here is a [link](https://www.youtube.com/watch?v=Nk2F_bd4ftw) covering how to setup the React Card config.

The video covers the following:

- Configuring the card in our developer tool
- Adding Event Types
- Installing the react package into your project
- Updating the default values to match your dapp
-->

