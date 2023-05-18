# 3D NFT Gallery

## To run

Create a .env file with the following variable. Updating apiKey with your own Alchemy API key.

```
VITE_ALCHEMY_KEY=apiKey
```

## To do in a real production environment 

- Pull address from connected wallet - The address is hardcoded atm as didnt have a wallet with any NFTs, however functionality exists to add in dynamic wallet address
- Write more extensive testing for the service, WalletConnectButton and NftDisplay. Would have really liked to have added more testing for the rendered images and wallet connection but ran out of time
- Write a e2e test for the application in cypress
- Add mock service worker or equivalent for easier testing of api calls
- Fix the z-index fighting issues 
- Add husky pre commit/push hooks to run linting, tests and build
- Create pipeline scripts
- Create a docker image for deployment
