# Sending an alert through the Admin Portal

<!--
What to cover: 

- What is Admin Panel for
- How to set up AP 
- How to send test broadcast and directpush

see https://admin.dev.notifi.network/guide
-->

### Setup

Log in to the [Notifi Admin Portal](https://admin.dev.notifi.network/) using the admin email address and password.

Click on **Account Settings** in the left hand navigation bar. Then click on the **Add User** button on the top of the page.

<!-- pic -->

Input the email address of the new user and select which roles are applicable. A single user can have both Developer and Business roles.

* Developer: User can access the React Card and make changes in that instance.
* Business: User can access Community Manager marketing tooling.

Soon, both Developer and Business roles will have access to notification reporting and metrics in the Admin Portal.

<!-- pic -->

The new user will get an email invite to access the Admin portal. They can finish creating their account by resetting their password.

### Card Management

<!-- todo -->

### Sending a Test Message

Log in to the [Notifi Admin Portal](https://admin.dev.notifi.network/) using an admin or developer email address and password.

Click on Send Test Messages in the left hand navigation bar.

In the Admin console, add a new topic with Type Broadcast. The Broadcast Id must start with the dappID then two underscores. Since the dappID used is “sampledapp”, the Broadcast Id must start with “sampledapp__”.

<!-- pic -->

