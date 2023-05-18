import { useEthers } from "@usedapp/core"
import "./App.css"
import NftDisplay from "./features/NftDisplay/NftDisplay"
import History from "./features/NftDisplay/History"
import { useGetNftsByWalletAddressQuery } from "./services/NFTService"
import WalletConnectButton from "./features/WalletConnectButton/WalletConnectButton"

function App() {
  const { account } = useEthers()

  const { data, error, isLoading } = useGetNftsByWalletAddressQuery(
    {},
    { skip: !account },
  )
  console.log({ data, error, isLoading, account })

  return (
    <div>
      <NftDisplay nftData={data} />
      <History />
      <WalletConnectButton />
    </div>
  )
}

export default App
