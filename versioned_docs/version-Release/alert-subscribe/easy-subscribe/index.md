
# Easy Subscribe
With the **Easy Subscription** feature, users can subscribe to Community Manager topics directly, without needing to create a Notifi account, sign up on the Notifi React Card, manage notification preferences, or sign their wallet. Users can subscribe using their email address and have the option to receive notifications via a Telegram bot.

# Creating an Easy Subscribe Card Config

To use the **Easy Subscribe** feature, a respective Easy Subscribe card configuration must be created. This configuration sets up an Easy Subscription campaign and provides the necessary endpoints: allowing you to directly use these URLs to join the Telegram bot and send to email addresses for subscribing to Community Manager topics.

### Step 1: Initial Setup – Create a Notifi account and set up Community Manager topics
Visit this [page](../create-topics/announcements) and follow the first two steps to get started.

### Step 2: Create a Card Configuration
1. #### Log in to the [Admin Portal](https://admin.notifi.network) and head to the _Alert Manager_ page.
2. #### Select the UI Config tab and click on "+ UI Card".
2. #### Then, click the Next button on the Easy Subscribe Card. 
Refer to the attached screenshot for guidance.

![UI Config tab](/img/easy-subscribe/1.png)

### Step 3: Config your campaign

1. #### Name your Easy Subscribe Config. While this name is not visible to end users, we recommend choosing a descriptive name for future reference.
2. #### Add the campaign's start and end date. Registration will be disabled once the end date is reached.
3. #### Add the [topics](../../integration-overview/alerts-in-depth.md#topic) you have previously created (see [here](../create-topics)) to the card config.

:::note
The same topic can be used on multiple card configs. 
:::

![Naming card config](/img/easy-subscribe/2.png)


### Step 5 Save and Copy Endpoints

1. #### Save your card configuration.
2. #### Copy the Email and Telegram endpoints (if the Telegram bot is already added) from the bottom of the card.


![Naming card config](/img/easy-subscribe/3.png)

:::note

Check out these sections to set up your Telegram bot and Email domain:

- [Set up a Telegram bot](../target-setup/tg-bot)
- [Set up a custom email domain](../target-setup/email-domain)

:::

### Step 6: Add Templates
These templates will be sent to users who subscribe to topics using the **Easy Subscribe** config. They can be in the form of a greeting or confirmation Email/Telegram message, which the users will receive on their respective platforms upon subscribing to topics.

To upload the templates for each destination, click on **Templates** within the Easy Subscribe config card.
Refer to the attached screenshot for guidance.

![Upload templates](/img/easy-subscribe/5.png)
![Upload templates](/img/easy-subscribe/4.png)


### Step 7: Adding Alerts to Telegram Groups
With our latest feature, admins can now integrate their Telegram bot directly into existing Telegram groups. This integration ensures that any alert sent through the Admin dashboard for community manager topics will also be received in these selected groups.

Follow the steps below to add the bot to your Telegram groups:
1. #### Click on "Add Alerts to Telegram Groups" to initiate the setup. (Refer to the image below for guidance)

![Upload templates](/img/easy-subscribe/7.png)
![Upload templates](/img/easy-subscribe/9.png)

2. #### You have two methods to add your bot to Telegram groups:

   **2.1** Direct Access via Telegram App
   
       - **2.1.1** Click on **OPEN TELEGRAM** to be redirected to your Telegram application.
       - **2.1.2** Once in Telegram, select the desired groups where you want to receive alerts.

   **2.2** Copy and Share the Telegram Bot Link
   
       - **2.2.1** Copy the provided URL and paste it into a browser/device where you are logged into Telegram.
       - **2.2.2** Alternatively, you may share this URL with other admins to add the bot from their sessions.
    
    Refer to the attached screenshot for guidance.

    ![Upload templates](/img/easy-subscribe/8.png)


### Step 8: Integrate Endpoints into Your App

1. #### Email: Use the email endpoint to send users' email addresses via a POST request. Add success/error handling to manage the response effectively.
2. #### Telegram: Redirect users to the provided Telegram URL, allowing them to directly subscribe to your Telegram bot.

Below is an example of how to use these endpoints:


```tsx

  const [emailAddress, setEmailAddress] = useState('');

  const handleEmailAddressChange = (e) => {
    const email = e.target.value;
    setEmailAddress(email);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(emailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailAddress }),
      }).then((res) => res.json());

      if (response.error)
        // handle error
      else
       // handle success
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>      
      <Input
        placeholder='Email address'
        value={emailAddress}
        onChange={handleEmailAddressChange}
      />
      <Button onClick={handleSubmit}>
        Subscribe
      </Button>

      <Link
        href={telegramBotUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button>
          Get Telegram Alerts
        </Button>
      </Link>
    </>
  );
```

![Easy Subscribe UI](/img/easy-subscribe/6.png)
