import { useEthers } from "@usedapp/core"
import { useGetNftsByWalletAddressQuery } from "./services/NFTService"
import { NftDisplay, History } from "./features/NftDisplay"
import { WalletConnectButton } from "./features/WalletConnectButton"

function App() {
  const { account } = useEthers()

  const { data } = useGetNftsByWalletAddressQuery({}, { skip: !account })

  return (
    <div>
      <NftDisplay nftData={data} />
      <History />
      <WalletConnectButton />
    </div>
  )
}

export default App
