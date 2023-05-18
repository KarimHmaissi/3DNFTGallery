import { useEthers } from "@usedapp/core"
import NftDisplay from "./features/NftDisplay/NftDisplay"
import History from "./features/NftDisplay/History"
import { useGetNftsByWalletAddressQuery } from "./services/NFTService"
import WalletConnectButton from "./features/WalletConnectButton/WalletConnectButton"

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
