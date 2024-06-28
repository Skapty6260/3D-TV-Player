import { CameraControls } from '@react-three/drei'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { AnimationStarter } from '../../Animations/starter'
import { startCameraPositions } from '@/constants'

const LandingCamera = (props: any) => {
	const cameraControls: any = useRef<RefObject<CameraControls>>(null)
	const [isEnded, setIsEnded] = useState<boolean>(false)

	useEffect(() => {
		if (isEnded) return
		setTimeout(() =>
			AnimationStarter({
				target: props.tvRef.current.position,
				cameraRef: cameraControls,
				setIsEnded,
			})
		)
	}, [props.tvRef.current])

	return (
		<>
			<perspectiveCamera position={startCameraPositions} fov={45} {...props} />
			{/* <CameraLogger event='mousedown' /> */}
			<CameraControls
				ref={cameraControls}
				makeDefault
				maxSpeed={0}
				polarRotateSpeed={0}
			/>
		</>
	)
}

export default LandingCamera
