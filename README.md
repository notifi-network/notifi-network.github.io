# [https://notifi-network.github.io/](https://notifi-network.github.io/)

(Also hosted at [https://docs.notifi.network/](https://docs.notifi.network).)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

clone the github repo 

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The website will automatically be built any time changes are pushed to the `main` branch by GitHub Actions.

Using SSH:

```
$ USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
