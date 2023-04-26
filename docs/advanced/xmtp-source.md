# Alerts for new XMTP messages

This page will walk through an integration of XMTP as a [source](../integration-overview/alert-depth#source) using the **Notifi React Card** and **Admin Panel**. This will alert an user whenever they receive a new message to any XMTP conversation they have at the time of subscribing. 

Make sure you are using a SDK version above the following ones: 

```
"@notifi-network/notifi-core": "^0.59.2-alpha.3+7347f24",
"@notifi-network/notifi-react-card": "^0.59.2-alpha.3+7347f24",
```

## Setting up Card Config 

#### Step 1 

Log in to the [Admin Panel](https://admin.dev.notifi.network) and edit the Card you want to use (or create a new one). Turn on _Advanced Mode_ in the bottom of the config. 

![Toggle on Advanced Mode](/img/xmtp-source/1.png)

A new section **Inputs** will appear

#### Step 2 

Add a new **input** of type `XMTP Input` and click on **+**. 

:::note
The input can be named arbitrarily, however it will be referenced in the code later. We are using `XMTPTopics` in this example (these topics are XMTP topics, not Notifi topics).
:::

![Create new input type](/img/xmtp-source/2.png)

#### Step 3 

Create a new Notifi Topic of type **XMTP** (note that the name selected for Topic is shown on the React Card Toggle). 

![Create xmtp topic](/img/xmtp-source/3.png)

Click on **+** and select the input created in [step 2](#step-2) as input reference. 

![Select xmtp input](/img/xmtp-source/4.png)

## Setting up React Card 

To set up the **React Card** we need to pass in the XMTP topics the user wants to subscribe to as `input` field in the `NotifiSubscriptionCard` component. We can use the **input reference** that we defined above for this. 

#### Step 1 

Fetch the XMTP conversations and topics the user wants to subscribe to. In this example we fetch them using the `wagmi` package and `useXmtpStore` from [`https://github.com/xmtp-labs/xmtp-inbox-web/store/xmtp`](https://github.com/xmtp-labs/xmtp-inbox-web/store/xmtp).

```typescript
import { useAccount } from "wagmi";
import { useXmtpStore } from "../store/xmtp";

...

const { conversations } = useXmtpStore();
const { address } = useAccount();
```

#### Step 2 

Create a `string[]` containing all xmtp topic names. This array will be used as input reference later on. 

```typescript 
// helper function 
const buildContentTopic = (name: string): string => `/xmtp/0/${name}/proto`;

const buildUserInviteTopic = useCallback((): string => {
  return buildContentTopic(`invite-${address}`);
}, [address]);

const buildUserIntroTopic = useCallback((): string => {
  return buildContentTopic(`intro-${address}`);
}, [address]);

// this is the object we will pass as input reference
let topics = useMemo<string[]>(
  () => [buildUserInviteTopic(), buildUserIntroTopic()],
  [buildUserIntroTopic, buildUserInviteTopic],
);

const addTopic = (topicName: string) => {
  if (!topics.includes(topicName)) {
    topics.push(topicName);
  }
};

conversations.forEach((c) => {
  addTopic(c.topic);
});
```

#### Step 3

Pass the `string[]` array as field into the `NotifiSubscriptionCard` component. 

```typescript
<NotifiSubscriptionCard
  // Mind that "XMTPTopics" must match the name of the input reference defined in the Admin Panel
  inputs={{ XMTPTopics: topics }}
  cardId="<YOUR CARD ID HERE"
/>
```


### Full code example 

  ```typescript
  import { NotifiSubscriptionCard } from "@notifi-network/notifi-react-card";
  import React, { SetStateAction, useCallback, useMemo } from "react";
  import { useAccount } from "wagmi";
  import { useXmtpStore } from "../store/xmtp";
  import { NotifiContextWrapper } from "./contexts/NotifiContextWrapper";
  import { Modal } from "./Modal";
  type Props = {
    show: boolean;
    setShowNotifiModal: React.Dispatch<SetStateAction<boolean>>;
  };

  export const NotifiModal = ({ setShowNotifiModal, show }: Props) => {
    const { conversations } = useXmtpStore();
    const { address } = useAccount();

    const buildContentTopic = (name: string): string => `/xmtp/0/${name}/proto`;

    const buildUserInviteTopic = useCallback((): string => {
      return buildContentTopic(`invite-${address}`);
    }, [address]);

    const buildUserIntroTopic = useCallback((): string => {
      return buildContentTopic(`intro-${address}`);
    }, [address]);

    let topics = useMemo<string[]>(
      () => [buildUserInviteTopic(), buildUserIntroTopic()],
      [buildUserIntroTopic, buildUserInviteTopic],
    );

    const addTopic = (topicName: string) => {
      if (!topics.includes(topicName)) {
        topics.push(topicName);
      }
    };

    conversations.forEach((c) => {
      addTopic(c.topic);
    });

    return (
      <Modal
        title=""
        size="sm"
        show={show}
        onClose={() => setShowNotifiModal(false)}>
        {!address ? (
          <>Loading...</>
        ) : (
          <NotifiContextWrapper>
            <NotifiSubscriptionCard
              inputs={{ XMTPTopics: topics }}
              cardId="<YOUR CARD ID HERE>"
            />
          </NotifiContextWrapper>
        )}
      </Modal>
    );
  };
  ```






