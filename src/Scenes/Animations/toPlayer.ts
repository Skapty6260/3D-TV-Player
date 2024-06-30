import { Dispatch } from 'react'
import { Vector3 } from 'three'
import gsap, { Power3 } from 'gsap'
import {
	finalPlayerCameraPositions,
	startPlayerCameraPositions,
} from '@/constants'
import { useFrame } from '@react-three/fiber'

interface IProps {
	target: Vector3
	cameraRef: any
	setIsEnded: Dispatch<boolean>
}

// Declaration Constants
const { startX, startY, startZ } = startPlayerCameraPositions
const { endX, endY, endZ } = finalPlayerCameraPositions

export const AnimationToPlayer = async ({
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

	// useFrame((state, delta) => {
	// 	if (currentX <= endX && currentY <= endY && currentZ <= endZ) {
	// 		setIsEnded(true)
	// 	}

	// 	currentX < endX ? (currentX -= delta * 5) : (currentX = endX)
	// 	currentY > endY ? (currentY -= delta * 5) : (currentY = endY)
	// 	currentZ < endZ ? (currentZ += delta * 5) : (currentZ = endZ)

	// 	state.camera.position.set(currentX, currentY, currentZ)
	// })

	gsap.to(cameraRef.current?.position, {
		x: endX,
		y: endY,
		z: endZ,
		duration: 5,
		ease: Power3.easeInOut,

		onUpdate: () => {
			currentX < endX ? (currentX -= 0.15) : (currentX = endX)
			currentY > endY ? (currentY -= 0.15) : (currentY = endY)
			currentZ < endZ ? (currentZ += 0.15) : (currentZ = endZ)

			cameraRef.current?.setLookAt(
				currentX,
				currentY + 5,
				currentZ,
				target.x,
				target.y,
				target.z
			)
		},
	})

	// await setTimeout(() => {
	// 	gsap.to(cameraRef.current?.position, {
	// 		x: endX,
	// 		y: endY,
	// 		z: endZ,
	// 		duration: 5,
	// 		ease: Power3.easeInOut,

	// 		onUpdate: () => {
	// 			currentX < endX ? (currentX -= 0.15) : (currentX = endX)
	// 			currentY > endY ? (currentY -= 0.15) : (currentY = endY)
	// 			currentZ < endZ ? (currentZ += 0.15) : (currentZ = endZ)

	// 			cameraRef.current?.setLookAt(
	// 				currentX,
	// 				currentY,
	// 				currentZ,
	// 				target.x,
	// 				target.y,
	// 				target.z
	// 			)
	// 		},
	// 	})

	// 	setIsEnded(true)
	// })
}
