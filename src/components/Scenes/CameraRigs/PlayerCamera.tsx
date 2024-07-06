import { useEffect, useState } from 'react'
import { Vector3 } from 'three'
import { Effects } from '@react-three/drei'
import { GlitchPass, FilmPass } from 'three/examples/jsm/Addons.js'
import { extend } from '@react-three/fiber'
import { WaterPass } from '../shaders/WaterPass'
import { useSelector } from 'react-redux'

extend({ GlitchPass, FilmPass })

const PlayerCamera = (props: any) => {
	const [stopped, stopEffects] = useState<boolean>(false)
	const selector = useSelector((state: any) => state)

	useEffect(() => {
		if (selector.CurrentVideo.video !== '/assets/textures/tv_enabled.mp4')
			stopEffects(true)
	}, [selector.CurrentVideo.video])

	return (
		<>
			{stopped == false && (
				<Effects>
					{/* @ts-ignore */}
					<glitchPass attachArray='passes' />
					{/* @ts-ignore */}
					<filmPass attachArray='passes' />
				</Effects>
			)}
			<perspectiveCamera
				aspect={(window.innerWidth * window.innerHeight) / 2}
				position={new Vector3(-11.34, 2.36, -4.09)}
			/>
		</>
	)
}

export default PlayerCamera
