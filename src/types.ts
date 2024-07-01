import { Dispatch } from 'react'
import { Vector3 } from 'three'

export interface IAnimationProps {
	target: any
	cameraRef: any
	setIsEnded: Dispatch<boolean>
}
