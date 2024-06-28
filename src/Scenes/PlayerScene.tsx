'use client'
import React, { RefObject, useRef } from 'react'
import VintageTV from './Models/vintageTV/vintageTV'
import { finalCameraPositions } from '@/constants'
import { Vector3 } from 'three'
import { CameraControls } from '@react-three/drei'

const PlayerScene = () => {
	const { endX, endY, endZ } = finalCameraPositions // Return camera to default render position
	const cameraControls: any = useRef<RefObject<CameraControls>>(null)

	return (
		<>
			<ambientLight intensity={0.5} color={'white'} />
			<perspectiveCamera position={new Vector3(endX, endY, endZ)} fov={45} />
			<CameraControls
				ref={cameraControls}
				makeDefault
				maxSpeed={0}
				polarRotateSpeed={0}
			/>

			<VintageTV position={[1, 2.25, 0]} rotation={[0, 5, 0]} />
		</>
	)
}

export default PlayerScene
