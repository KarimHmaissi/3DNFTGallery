import { useEthers } from "@usedapp/core"
import styles from "./WalletConnectButton.module.css"

const ConnectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers()

  if (account) return <button onClick={() => deactivate()}>Disconnect</button>
  else return <button onClick={() => activateBrowserWallet()}>Connect</button>
}

export const WalletConnectButton = () => {
  return (
    <div className={styles.root}>
      <ConnectButton />
    </div>
  )
}
