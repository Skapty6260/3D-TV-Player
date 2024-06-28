import LandingScene from '@/Scenes/LandingScene'
import PlayerScene from '@/Scenes/PlayerScene'

import { Canvas } from '@react-three/fiber'
import { useAppSelector } from '@/redux/store'
import React from 'react'

const MixedScene = () => {
	const { SceneBreakpoint } = useAppSelector(state => state)

	return (
		<Canvas>
			{SceneBreakpoint === false ? <LandingScene /> : <PlayerScene />}
		</Canvas>
	)
}

export default MixedScene
