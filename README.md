# 3D NFT Gallery

## To run

Create a .env file with the following variable. Updating apiKey with your own Alchemy API key.

```
VITE_ALCHEMY_KEY=apiKey
```

## To do in a real production environment 

- Write more extensive testing for the service, WalletConnectButton and NftDisplay
- Fix the z-index fighting issues 
- Add husky pre commit/push hooks to run linting, tests and build
- Create pipeline scripts
- Create a docker image for deployment
