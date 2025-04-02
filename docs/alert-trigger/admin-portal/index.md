# Admin Portal & Community Manager

<!--
What to cover: 

- What is Admin Portal for
- How to set up AP 
- How to send test broadcast and directpush

see https://admin.dev.notifi.network/guide
-->

The Notifi [Admin Portal](https://admin.notifi.network) provides a centralized dashboard to manage notifications, topics, card configurations, bot setups, user roles, and reporting. It simplifies the setup and configuration of notifications across multiple channels, ensuring seamless communication with users.

#### 📌 Highly recommended: Please review [How-to Guide: Admin Panel Setup on Figma before proceeding.](https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&type=design&node-id=3859-1287&viewport=633%2C494%2C0.12&scaling=min-zoom&starting-point-node-id=3859%3A1287)

# Key Features

1. **Topic & Card Configuration** – Create and manage notification topics and customize Notifi Cards.

2. **[Bot Setup](https://docs.notifi.network/docs/category/setting-up-targets)** – Configure Telegram and Discord bots for automated alerts.

3. **[Email Sender Management](https://docs.notifi.network/docs/target-setup/email-domain)** – Set up email sender details and manage outbound communications.

4. **[Template Uploads](https://docs.notifi.network/docs/styling-your-notifications)** – Easily upload notification templates for Email, Telegram, SMS, Discord, Wallet Alerts, and more.

5. **User Management** – Invite team members and assign roles based on their responsibilities.

6. **Sending Alerts for Community Manager Topics** – You can send messages directly through our Admin Portal web interface via the Community Manager. For a detailed walkthrough, see [here](https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&node-id=10175-1378&viewport=643%2C485%2C0.09&scaling=min-zoom&starting-point-node-id=3859%3A1287)

7. **Two-Factor Authentication (2FA)** - Notifi Admin offers Two-Factor Authentication (2FA) to enhance security for your team. Once enabled by an admin:

    **7.1** **Mandatory for Team Members** – All invited team members will be required to set up 2FA upon their next login.

    **7.2** **Authenticator App Support** – Users can configure 2FA using an authenticator app like Google Authenticator.

    **7.3** **QR Code Setup** – Easily set up 2FA by scanning a QR code and entering the generated authentication code.
This ensures enhanced security by requiring a second authentication step beyond just a password.

### User Roles & Permissions:

**Admin** – Full access to the Admin Portal, including user management and system-wide settings.

**Developers** – Access the React Notifi Card, enabling them to modify and integrate it as needed.

**Marketers** – Utilize Community Manager for campaign management and engagement tracking.

### Reporting & Analytics:

**Subscriber Insights** – View total subscribers, categorized by destination and topic.

**Message Analytics** – Track total messages sent, messages per topic, and delivery performance.

**Report Generation** – Download detailed reports and filter message data by month.

The Notifi Admin Panel empowers teams to efficiently manage notifications, optimize engagement, and analyze user interactions with minimal complexity. 



<!-- ### Adding additional users to Admin Portal

Log in to the [Notifi Admin Portal](https://admin.dev.notifi.network/) using the admin email address and password.

Click on **Account Settings** in the left hand navigation bar. Then click on the **Add User** button on the top of the page.

<!-- pic -\->

Input the email address of the new user and select which roles are applicable. A single user can have both Developer and Business roles.

* Developer: User can access the React Card and make changes in that instance.
* Business: User can access Community Manager marketing tooling.

Soon, both Developer and Business roles will have access to notification reporting and metrics in the Admin Portal.

<!-- pic -\->

The new user will get an email invite to access the Admin portal. They can finish creating their account by resetting their password.

### Sending a Test Message

Log in to the [Notifi Admin Portal](https://admin.dev.notifi.network/) using an admin or developer email address and password.

Click on Send Test Messages in the left hand navigation bar.

In the Admin console, add a new topic with Type Broadcast. The Broadcast Id must start with the dappID then two underscores. Since the dappID used is “sampledapp”, the Broadcast Id must start with “sampledapp__”.

<!-- pic -\->

Add a subject, and a body, then click **Send Message**. You should see now see “Message sent successfully!” -->

