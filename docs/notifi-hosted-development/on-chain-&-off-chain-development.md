---
sidebar_position: 1
---

# On-Chain & Off-Chain Development

The Blockchain Development tool is intended to speed up the development process of creating [_topic_](https://notifi-network.github.io/docs/next/integration-overview/alerts-in-depth#topic) parsers for users.

**Requirements**:

- Install [Docker](https://docs.docker.com/get-docker/)
- [VS Code](https://code.visualstudio.com/download) is Recommended
- CLI supported on Mac OSX / Ubuntu Terminal
  > for Windows, paste the startup command into WSL

## Using the Blockchain Development CLI

### You'll Find The CLI Command Here

![Alert Topics](image.png)

<center>

![Edit Parser Modal](image-1.png)

</center>

##### Important parameters:

- `NOTIFI_AUTH_TOKEN`: This token refers to a unique identity for your DAPP and JWT authentication to interact with Notifi Services
- `FUSION_SOURCE_ID`: This ID relates to the [_topic's_](https://notifi-network.github.io/docs/next/integration-overview/alerts-in-depth#topic) respective parser ID. This is particularly useful in CLI commands.

### Paste Command Into Terminal

<center>

_Copy and Paste Into Terminal_

![Terminal Image](image-2.png)

_Expected Result_

![CLI Command Successful](image-3.png)

</center>

### Common Commands

#### Authentication Commands

`fusion auth` (Creating Authentication for a user to run any [Parser Commands](http://localhost:3000/docs/next/notifi-hosted-development/on-chain-&-off-chain-development#parser-commands))

#### Parser Commands

`fusion parser --help`

> Run this command if you forget what commands are available.

![Alt text](image-4.png)

`fusion parser init`

> Run this command if you forget what commands are available.

`fusion parser create`

> Run this command if you forget what commands are available.

`fusion parser activate 'cursor' 'fusionSourceId'`

> Run this command if you forget what commands are available.

> **The Fusion Activate Command must be called at least once**

`fusion parser upload 'fusionSourceId'`

> Run this command if you forget what commands are available.

`fusion parser list`

> Run this command if you forget what commands are available.

![Example of Fusion Parser List Command](image-5.png)

`fusion parser deactivate 'fusionSourceId'`

> Run this command if you forget what commands are available.

### Parser Development States

Templated parsers are available in the following directory:

> /DIRECTORy/PATH

When developing a parser, expected states are to be seen in the following page:

> **The Fusion Activate Command must be called at least once**

![Alt text](image-8.png)

![Alt text](image-9.png)

##### When Parser _Hasn't_ Been Activated

<center>

![Alt text](image-7.png)

</center>

##### When Parser _Has_ Been Activated

<center>

![Alt text](image-6.png)

</center>

Here, parsers can be activated and deactivated outside of the CLI.

### Recommended Steps

1. Copy and Paste the Command into your terminal
2. Run The Command
3. Create / Modify Your Parser
4. Upload Your Parser
5. Activate Your Parser
