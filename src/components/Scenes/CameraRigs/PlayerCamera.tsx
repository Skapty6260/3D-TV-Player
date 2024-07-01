import { startPlayerCameraPositions } from '@/constants'
import { AnimationToPlayer } from '@/Animations/toPlayer'
import AnimatedCamera from './AnimatedCamera'
import { IAnimationProps } from '@/types'
import { Vector3 } from 'three'

const PlayerCamera = (props: any) => {
	const animation = (props: IAnimationProps) => {
		AnimationToPlayer(props)
	}

	return (
		<AnimatedCamera
			target={props.locationRef}
			cameraPosition={startPlayerCameraPositions}
			animation={{ delay: 0, callback: animation }}
			cameraProps={{ lookAt: [0, 0, 0] }}
		/>
	)
}

export default PlayerCamera
