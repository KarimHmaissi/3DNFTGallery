import React, { Suspense, useState } from "react"
import { Canvas, ThreeEvent, Vector3, useLoader } from "@react-three/fiber"
import { PresentationControls, Stars } from "@react-three/drei"
import { Mesh, TextureLoader } from "three"

import { NftData } from "../../services"
import { useAppDispatch } from "../../app/hooks"
import { addToHistory } from "./nftSlice"
import styles from "./NftDisplay.module.css"

const generateRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

function Image(props: { url: string; position: Vector3 }) {
  const { url, position } = props

  const dispatch = useAppDispatch()

  const myMesh = React.useRef<Mesh>(null)

  const [isSelected, setIsSelected] = useState(false)

  const texture = useLoader(TextureLoader, url)

  const onClickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()

    if (isSelected) {
      dispatch(addToHistory(url))
    }
    setIsSelected((isSelected) => !isSelected)
  }

  return (
    <mesh
      onClick={onClickHandler}
      position={isSelected ? [0, 0, 1] : position}
      ref={myMesh}
      scale={isSelected ? 3 : [1, 1, 1]}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
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
