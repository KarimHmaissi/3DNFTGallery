import { ThreeEvent, Vector3, useLoader } from "@react-three/fiber"
import React, { useState } from "react"
import { Mesh, TextureLoader } from "three"

import { useAppDispatch } from "../../app/hooks"
import { addToHistory } from "./nftSlice"

interface ImageProps {
  url: string
  position: Vector3
}

export function Image(props: ImageProps) {
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
