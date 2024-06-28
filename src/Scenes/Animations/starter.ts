import { Dispatch } from 'react'
import { Vector3 } from 'three'
import gsap, { Power3 } from 'gsap'
import { finalCameraPositions, startCameraPositions } from '@/constants'

interface IProps {
	target: Vector3
	cameraRef: any
	setIsEnded: Dispatch<boolean>
}

// Declaration Constants
const { startX, startY, startZ } = startCameraPositions
const { endX, endY, endZ } = finalCameraPositions

export const AnimationStarter = async ({
	target,
	cameraRef,
	setIsEnded,
}: IProps) => {
	await cameraRef.current?.setLookAt(
		startX,
		startY,
		startZ,
		target.x,
		target.y,
		target.z
	)

	let currentX = startX
	let currentY = startY
	let currentZ = startZ

	await setTimeout(() => {
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
	}, 1000)
}
