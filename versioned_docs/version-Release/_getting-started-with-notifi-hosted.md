---
sidebar_position: 4
---

# Getting Started with Notifi Hosted Development

:::warning

This feature is currently in beta, and is not available to new users
by default. If you would like to use this feature, please
[reach out to Notifi](https://notifi.atlassian.net/servicedesk/customer/portals) 
and ask for it to be enabled for your Dapp account.

:::

In this third Getting Started guide, we will walk through the steps of
creating a topic generated from code that Notifi runs automatically 
to monitor on or off-chain activity.

This guide is intended as a follow-up to the first
[Getting Started](./getting-started) guide, which walks you through the
process of creating a Notifi account and subscription card, and
the [Getting Started With Self-Hosted Messaging](./getting-started-with-self-hosted)
guide, which walks you through the process of creating a topic
that is triggered by code running on your own servers. It is highly
recommended that you follow that startup guide first.

## Prerequisites

- If on Windows, set up [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install).
  This is required for both Docker and for setting up the parser development environment,
  which is instantiated using a [Bash](https://www.gnu.org/software/bash/) script.
  (The CLI can be used directly on a macOS or Linux terminal).
- Install [Docker](https://www.docker.com/).

## Creating a Notifi-Hosted Topic

In the **Alert Manager** page on Admin Portal, click **Create Topic**
(or **+ Topic** if you already have an existing topic), then click
**Have Notifi monitor on or off-chain activity to send alerts**.

:::note

If this button says "Coming soon" instead of "Continue", then Notifi-hosted development
is not enabled for your account. Please 
[reach out to Notifi](https://notifi.atlassian.net/servicedesk/customer/portals).

:::

In the dialog box that appears, enter a name for your topic, then click **Next**.
(We will keep the defaults for the other settings, just as we did for self-hosted topics).

On the second page, we can choose the parameters for when our parser code will run.
We can either have the code trigger on an event on a specific chain, or at a given
time interval. For this guide, we will choose the latter.

- Under "Is this alert on or off chain", choose **Off-chain**
- In the **Name Parser** text box, enter a name for your parser
- Under "How often would you like your parser to run?", choose 
  a frequency of 5 minutes.
- Click **Save Topic**

## Defining Templates

As with self-hosted topics, you will need to define templates. We will define some
basic templates for our Notifi-hosted parser:

1. On the Alert Manager page, go to your newly created topic and click **Define Templates**.
2. In the dialog that appears, you'll be offered some text boxes for defining templates
   for the subject line and content for your Alert History messages.
   - Select one of the available icons in the "Select Icon" dropdown
   - In the **Subject** text box, enter `{{eventdata.subject}}`
   - In the **HTML Content** text box, enter `<span>{{eventdata.message}}</span>`
   - Click **Save**. You'll get a dialog box saying that the template has been uploaded.
3. Click the **Email** button on the left. This will switch your view to editing
   email templates.
   - In the **Subject** text box, enter `{{eventdata.subject}}`
   - In the **Custom HTML** text box, enter `<p>{{eventdata.message}}</p>`
   - Click **Save**. You'll get a dialog box saying that the template has been uploaded.
4. Click the circular X button on the top right to return to Alert Manager.

## Creating the Parser

Now that you have your templates, it's time to create the parser!

1. On the Alert Manager page, go to your topic and click **Edit Parser**.
2. In the dialog box that appears, copy the command shown. It should look something like this:

```bash
FUSION_SOURCE_ID="024ea..." NOTIFI_AUTH_TOKEN="eyJhb..." /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/notifi-network/notifi-parser-sdk/main/start.sh)"
```

3. Paste this command into your terminal (if on Windows, use your WSL terminal).
   This script will set up the Notifi parser development environment, create a directory
   for your parser, and start a shell in that directory with access to the parser CLI.
4. Open the parser source in your IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/)).
   The parser is stored in `$HOME/.notifi/fusion-development/fusion-sources/$PARSER_NAME`,
   where `$HOME` is your home directory and `$PARSER_NAME` is the name you gave to your parser
   earlier.

## Editing And Submitting Your Parser

For our actual parser code, we're going to write something simple that displays the current time.
Replace the code in `src/parser.ts` with the following:

```typescript
import { Offchain, CommonHost, BlockchainType } from "@notifi-network/fusion-types";
const eventID = "07ca3ca8e4d745aab8c966a21bb390d5";

const parse: Offchain.Parser["parse"] = async (
  args,
  rpc,
  storage,
  logger,
  subscriptions
) => {
  const now = new Date();
  const timeString = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
  const event: CommonHost.Event = {
    eventTypeId: eventID.toLowerCase(),
    blockchain: BlockchainType.BLOCKCHAIN_TYPE_OFF_CHAIN,
    metadata: {
      subject: "Test subject",
      message: "The current time is " + timeString
    },
    comparisonValue: "*",
    changeSignature: now.getTime().toString()
  }
  return [ event ];
};

export { parse };
```

Back in the CLI for the Notifi parser environment, type

```bash
$ fusion parser upload
```

to build and upload your parser source to Notifi!

Then, go back to Alert Manager in Admin Portal, click your topic,
and look for the **Parser** card. Click the **Active** button, and enter
a number in the dialog box that appears (this is normally the block number
you want to start from, but since we're writing an off-chain parser, this
can be any number).

<!--TODO: figure out why activating from the CLI doesn't work, or why
the radio button stays at Inactive-->

Wait a few minutes, and you should start seeing emails come in telling you what
time it is!

To deactivate the parser, either click the **Inactive** button in the
Parser card, or enter 

```bash
$ fusion parser deactivate
```

in the Parser CLI.

## Next Steps

### More details on parser development

Notifi hosted parsers can cover other, more complex cases, such as covering events
on a specific chain, and also have access to additional APIs for blockchain access,
storage, and Internet access. For more information, check out our
[Notifi Hosted Development](./notifi-hosted-development) guide!

### Style Your Notifications

We created very basic templates for our messages, but Notifi's template system is
also capable of more advanced templates with additional and nested variables. Check
out our [template guide](./styling-your-notifications/) for more information!

### Adding Additional Destination Platforms

Notifi notifications can be delivered through email, Telegram, Discord, Slack,
and more. A few of these platforms require you to supply a bot for Notifi to use.
It is also possible to send email via your own custom domain:

- [Set up a Telegram bot](./target-setup/tg-bot)
- [Set up a Discord bot](./target-setup/discord-bot)
- [Set up a Slack integration](./target-setup/slack-integration)
- [Set up a custom email domain](./target-setup/email-domain)

### Additional resources

- Notifi [Blog](https://notifi.network/blog)
- Notifi [Demos](https://notifi.network/demos)
- [How To Guide](https://www.figma.com/proto/EDRHnzmXsLRrmM1VBc57Hw/Notifi-Slides?page-id=3859%3A1161&node-id=3859-1287&viewport=643%2C485%2C0.09&scaling=min-zoom&starting-point-node-id=3859%3A1287) of our Community Manager and Admin Portal

### Get Help

<!-- - We use Jira as a ticketing platform to track issues, questions, and requests at Notifi. If you have anything that you need from us, please create a **support ticket** using the link [here](https://notifi.atlassian.net/servicedesk/customer/portals) -->
- Reach out to the key [Notifi contacts](https://docs.google.com/document/d/1zVu-8iXdz1mOGievDutJX4Fs_7RXqe19LdyK4LqNmTA)