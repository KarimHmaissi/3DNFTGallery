import { formatEther } from "@ethersproject/units"
import { useEtherBalance, useEthers } from "@usedapp/core"
import styles from "./WalletConnectButton.module.css"

const ConnectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers()

  if (account) return <button onClick={() => deactivate()}>Disconnect</button>
  else return <button onClick={() => activateBrowserWallet()}>Connect</button>
}

const WalletConnectButton = () => {
  const { account } = useEthers()
  const etherBalance = useEtherBalance(account)
  //   if (chainId && !config.readOnlyUrls[chainId]) {
  //     return <p>Please use either Mainnet or Goerli testnet.</p>
  //   }

  return (
    <div className={styles.root}>
      <ConnectButton />
      {/* {etherBalance && (
        <div className="balance">
          <br />
          Address:
          <p className="bold">{account}</p>
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
        </div>
      )} */}
    </div>
  )
}

export default WalletConnectButton
