import { CameraControls, OrbitControls } from '@react-three/drei'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { startPlayerCameraPositions } from '@/constants'
import { AnimationToPlayer } from '@/Scenes/Animations/toPlayer'
import CameraLogger from '@/helpers/CameraLogger'

const PlayerCamera = (props: any) => {
	const cameraControls: any = useRef<RefObject<CameraControls>>(null)
	const [isEnded, setIsEnded] = useState<boolean>(false)

	useEffect(() => {
		if (isEnded) return
		setTimeout(
			() =>
				AnimationToPlayer({
					target: props.locationRef.current.position,
					cameraRef: cameraControls,
					setIsEnded,
				}),
			1000
		)
	}, [props.tvRef.current])

	return (
		<>
			<perspectiveCamera
				position={startPlayerCameraPositions}
				lookAt={[0, 0, 0]}
				fov={45}
				{...props}
			/>
			<CameraLogger event='mousedown' />
			<CameraControls
				ref={cameraControls}
				makeDefault
				maxSpeed={0}
				polarRotateSpeed={0}
			/>
		</>
	)
}

export default PlayerCamera
