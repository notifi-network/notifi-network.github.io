---
sidebar_position: 4
---

# Where to start

There are many ways to integrate Notifi into you dApp. Here are some pointers to help decide on the approach of integration. 

#### What UI elements are required for the user to sign up to the alert?

With the **Notifi Frontend Client** any JS based UI can be used to allow users to subscribe to alerts. 
This includes custom UI elements like sliders or buttons to pick threshholds, as long as the source of the alert can take those inputs as parameter. 

If only a standard form to collect the users targets is required, we recommend using the **Notifi React Card**. 

:::note

Feel free to reach out, if your use case is not supported by the React Card and we are happy to consider expanding the React Card to support it! 

:::

#### What is the desired trigger for your alert?

- **Manual:** Let users sign up to [Broadcast](alert-depth#broadcast) or [Direct Push](alert-depth#direct-push) and use **Community Manager** in the **Admin Panel** Web UI to send out messages to users who have subscribed to those topics. 

- **Existing [sources](alert-depth#source):** Use the **Admin Panel** to configure a **React Card**. Alternatively you can use the **Notifi Frontend Client** by passing the corresponding `EventTypeItem` of the source in `NotifiFrontendClient.ensureAlert()`

- **DApp specific on-chain or off-chain events:** This requires a [custom parser source](alert-depth#custom-parser-source). Alternatively you can implement your own monitoring service that uses the **Notifi Node Client** to trigger alerts appropriately. 

## Example integrations 

- **Allow users to opt-in to announcements and product updates**

  If you use React configure a card in the **Admin Panel** and add the **Notifi React Card** to the dapp frontend. This will automatically set up relevant sources and filters. 

  If you don't use React use the **Notifi Frontend Client** to create alerts by using the Broadcast or Direct Push `EventType` with the correct `id`. 

  To send out announcements use the **Community Manager** in the Admin Panel. 

- **Send out an alert when price of an asset on Coingecko changed**

  This is very similar to the announcement integration above, except you would use the price change source type. Make sure to configure corresponding parameters like the asset to watch or price threshholds when configuring the card in the **Admin Panel** (when using React Card) or in the `EventTypeItem` passed to the **Notifi Frontend Client** respectively. 

  Note: For prices not listed on Coingecko a more custom solution is required

- **Send out an alert when a new DAO proposal has been created** 

  This requires a custom parser that can act as source for the alert. If Notifi provides this source, the **React Card** can be used for creating alerts or by using the **Notifi Frontend Client**. Alerts will be triggered automatically in this case. 

  If the parser is not hosted by Notifi, use a Broadcast source and the **Notifi Node Client** to trigger alerts on that topic. 

- **Send out an alert to an user when their position reaches a certain LTV (loan-to-value) threshhold that the user can choose**

  This requires a custom UI to allow users to choose their threshhold when subscribing as well as a custom parser as source for the alert.
  The same integration path as the example above can be applied, however the **React Card** does not support custom UI elements to let users pick their threshhold. Therefore the **Notifi Frontend Client** needs to be used to create alerts. 

  If the parser is not hosted by Notifi a Direct Push source should be used since the alerts are supposed to go to one user at the time. 
  



<!--
Rough decision making chart for what to use: 



Do you require special UI elements for users to sign up to your alert (e.g. sliders, buttons, etc. to pick threshholds)? 

- Yes -> build UI components and use Notifi React Hooks (if on React) or Frontend Client to create alerts 
- No -> Use Notifi React Card (if on React) or follow simple example of Frontend Client 

  Note: The React card has components for users to enter the target (Email, SMS, Telegram) and basic opt-in check boxes

What is the desired trigger for your alert? 

- Manual (e.g. announcement of new features) -> use Admin Panel - Send Test Messages or Community Manager to draft messages and send them
- Existing topic type (Price change, Balance change, etc.) -> use Admin Panel card config for React Card or pass correct `EventTypeItem` in `NotifiFrontendClient.ensureAlert()`
- Events on the blockchain (e.g. liquidation, certain transactions, etc.) -> this requires a custom parser, reach out to us. If you are able to run your own parser that monitors blockchain transactions, you can have it trigger notifications through the Node Client. 
- Off-chain events -> Reach out to us or run a service that calls Node Client to send out notifications. 


Example use cases and how to integrate: 

- Allow users to opt-in to announcements and product updates

  If on React configure a card in the Admin Panel and add the React Card to the dapp frontend. This will automatically set up relevant sources and filters. 
  If not on React use the Frontend Client to create alerts, make sure to use the correct topic id.
  Send out announcements from the Community Manager in the Admin Panel. 

- Send out alert when price of an asset on Coingecko changed 

  Same as announcements and product updates, use topic type price change. 
  Alerts will be send automatically whenever the coingecko price of a supported assets changes. 

  Note: For prices from outside Coingecko or other assets a more custom solution is required


- Send out alerts when a liquidation has happened 

  This requires a custom parser that can act as source for the alert. If Notifi provides this source, the React Card can be used (configured with the correct topic type) for creating alerts or by using the Frontend Client. Alerts will be triggered automatically in this case. 
  If the parser is not hosted by Notifi, a generic broadcast topic should be created, and the Node Client can be called to trigger alerts on that topic. For subscribing the React Card or Frontend Client can be used (with selecting the generic broadcast topic)

- Alert the user when their position reaches a certain LTV (loan-to-value) threshhold that the user can choose

  This requires a custom UI to allow users to choose their threshhold when subscribing as well as a custom parser as source for the alert. Build the UI components and use the React Hooks or Frontend Client to create the alerts. 
  Contact us for a custom parser as source, or alternatively you can run a service that uses the Node Client to send out Direct Push notifications. 

  -->
