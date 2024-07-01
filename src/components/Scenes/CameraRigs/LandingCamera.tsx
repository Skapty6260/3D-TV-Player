import { AnimationStarter } from '../../../Animations/starter'
import { startCameraPositions } from '@/constants'
import AnimatedCamera from './AnimatedCamera'
import { Vector3 } from 'three'
import { IAnimationProps } from '@/types'

const LandingCamera = (props: any) => {
	const animation = (props: IAnimationProps) => {
		AnimationStarter(props)
	}

	return (
		<AnimatedCamera
			target={props.tvRef}
			cameraPosition={startCameraPositions}
			animation={{ delay: 0, callback: animation }}
			debug={true}
		/>
	)
}

export default LandingCamera
