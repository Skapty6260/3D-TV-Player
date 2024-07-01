import CameraLogger from '@/helpers/CameraLogger'
import { CameraControls } from '@react-three/drei'
import React, {
	MutableRefObject,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react'
import { Vector3 } from 'three'
import { IAnimationProps } from '@/types'

interface ICameraProps {
	target: MutableRefObject<any>
	animation: {
		delay: number
		callback: (props: IAnimationProps) => void
	}
	cameraPosition: Vector3
	cameraProps?: any
	debug?: boolean
}

const AnimatedCamera = (props: ICameraProps) => {
	const cameraControls: any = useRef<RefObject<CameraControls>>(null)
	const [isEnded, setIsEnded] = useState<boolean>(false) // Animation state

	useEffect(() => {
		if (isEnded) return
		setTimeout(async () => {
			props.animation.callback({
				target: props.target.current.position,
				cameraRef: cameraControls,
				setIsEnded,
			})
		}, props.animation.delay)
	}, [props.target.current])

	return (
		<>
			<perspectiveCamera
				position={props.cameraPosition}
				fov={45}
				{...props.cameraProps}
			/>
			{props.debug && <CameraLogger event={'mousedown'} />}
			<CameraControls
				ref={cameraControls}
				makeDefault
				maxSpeed={0}
				polarRotateSpeed={0}
			/>
		</>
	)
}

export default AnimatedCamera
