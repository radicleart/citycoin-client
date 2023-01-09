# City Coins Test App

Test application for testing migration of City Coins to the DAO
deployment. Provides ability to run transactions against City Coins contracts
in devnet, testnet and mainnet environments.

## Run Project

Project created using

```bash
npm install
npm run dev
```

Will spin up the application pointing to http://localhost:8080

By default this will expect a local devnet to be running. In the City Coins `protocol` repo run `Clarinet integrate` to
spin up a devnet environment.

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
