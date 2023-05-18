import { PresentationControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import { NftData } from "../../services"
import { Image } from "./Image"
import styles from "./NftDisplay.module.css"

const generateRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export function NftDisplay(props: { nftData: NftData | undefined }) {
  const { nftData } = props

  return (
    <div id="canvas-container" className={styles.canvas}>
      <Canvas>
        <PresentationControls
          enabled={true}
          global={true}
          cursor={true}
          snap={true}
          speed={1}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[0, Math.PI / 2]}
          azimuth={[-Infinity, Infinity]}
          config={{ mass: 1, tension: 170, friction: 26 }}
        >
          <Stars />
          <ambientLight intensity={0.4} />
          <spotLight position={[30, 30, 10]} />
          <Suspense fallback={null}>
            {nftData &&
              nftData.ownedNfts.map((nft) => {
                return nft.image.pngUrl ? (
                  <Image
                    key={nft.image.pngUrl}
                    url={nft.image.pngUrl}
                    position={[
                      generateRandomNumber(-3, 3),
                      generateRandomNumber(-3, 3),
                      0,
                    ]}
                  />
                ) : null
              })}
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
