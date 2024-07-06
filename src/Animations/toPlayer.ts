import { Dispatch } from 'react'
import { Vector3 } from 'three'
import {
	finalPlayerCameraPositions,
	startPlayerCameraPositions,
} from '@/constants'

interface IProps {
	target: Vector3
	cameraRef: any
	setIsEnded: Dispatch<boolean>
}

// Start from fast moving camera to the bottom of new floor
// After set tv fall on the floor
// Run player section and animations

// Declaration Constants
const endX = finalPlayerCameraPositions.x
const endY = finalPlayerCameraPositions.y
const endZ = finalPlayerCameraPositions.z

export const AnimationToPlayer = async ({
	target,
	cameraRef,
	setIsEnded,
}: IProps) => {
	let currentX = startPlayerCameraPositions.x
	let currentY = startPlayerCameraPositions.y
	let currentZ = startPlayerCameraPositions.z

	gsap.to(cameraRef.current?.position, {
		x: endX,
		y: endY,
		z: endZ,
		duration: 2.5,
		ease: Power3.easeInOut,

		onUpdate: () => {
			currentX < endX ? (currentX += 0.15) : (currentX = endX)
			currentY > endY ? (currentY -= 0.15) : (currentY = endY)
			currentZ < endZ ? (currentZ += 0.15) : (currentZ = endZ)

			cameraRef.current?.setLookAt(
				currentX - 2.5,
				currentY - 1.5,
				currentZ,
				target.x,
				target.y,
				target.z
			)
		},
	})

	setIsEnded(true)
}
