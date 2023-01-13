# City Coins Test App

Test application for testing migration of City Coins to the DAO
deployment. Provides ability to run transactions against City Coins contracts
in devnet, testnet and mainnet environments.

## Development

```bash
npm install
npm install sass
npm run dev
# or
npm run dev -- --open
```

Will spin up the application pointing to http://localhost:8080

## Target Environment

The application environment can be altered locally by overriding .env with .env.local.
For example copying the contents of .env.staging to .env.local will cause the localhost:8080
application to target testnet instead of devnet.

Alternatively build for testnet by running and deploy the build directory as required;

```bash
npm run build-stag
```

Or equivalently for mainnet run;

```bash
npm run build-prod
```

## Devnet Wallet

To set up a devnet environment;

1. Clone the citycoins/protocol repo
2. run `Clarinet integrate`
3. Load the seed phrase from wallet_1 in citycoins/protocol/settings/Devnet.toml into web wallet.

### Deployment

First build the application;

```bash
npm run build
```

Note you can preview the production build locally with `npm run preview`.

#### Github Pages

Requires access to github settings and for a branch `gh-pages` to be created from `main`.
Then run;

```bash
node ./gh-pages.js
```

This pushes the contents of `build/` to the `gh-pages` branch. Github Pages
has been configured on the repository to serve the application from;

```bash
https://radicleart.github.io/citycoins-client
```

The basic strategy is to deploy the `distribution files` to a branch called `gh-pages` and then configure Github Pages to serve the application from there. Details on Github Pages and Svelte
applications can be found in these guides.

- [Github Pages how to](https://docs.github.com/en/pages)
- [Svelte + Github Pages how to](https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode)

#### Linode / Digital Ocean

Create your preferred target environment (Debian VM + Nginx for example).
Update the deploy script with your config and add your public ssh key to known hosts.
Then run;

```bash
bash ./deploy-remote.sh
```

### Packaging

The application can be packaged and uploaded to the npm registry;

```bash
./node_modules/.bin/svelte-kit package
cd package
npm publish
```

