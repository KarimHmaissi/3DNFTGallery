import { useAppSelector } from "../../app/hooks"
import styles from "./NftDisplay.module.css"
import { selectHistory } from "./nftSlice"

const History = () => {
  const history = useAppSelector(selectHistory)

  return (
    <div className={styles.history}>
      {history.map((url) => (
        <img className={styles.image} src={url} alt={url} />
      ))}
    </div>
  )
}

export default History
