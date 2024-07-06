import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

const CameraLogger = ({ event }: any) => {
	const { camera } = useThree()
	const cameraRef = useRef(camera)

	useEffect(() => {
		const logCameraPosition = () => {
			const { x, y, z } = cameraRef.current.position

			const roundAxis = (axis: number) => Math.round(axis * 100) / 100

			const roundedX = roundAxis(x)
			const roundedY = roundAxis(y)
			const roundedZ = roundAxis(z)

			console.log(
				`Camera position: ${roundedX}, ${roundedY}, ${roundedZ}\nCamera rotation: ${cameraRef.current.rotation.x}, ${cameraRef.current.rotation.y}, ${cameraRef.current.rotation.z}`
			)
		}

		cameraRef.current = camera
		window.addEventListener(event, logCameraPosition)

		return () => {
			window.removeEventListener(event, logCameraPosition)
		}
	}, [])

	return null
}

export default CameraLogger
