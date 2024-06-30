'use client'
import React, { Dispatch, memo, useEffect, useRef } from 'react'

import AnimatedCamera from './SceneComponents/Landing/LandingCamera'
import { StartTextAnimated } from './SceneComponents/Landing/AnimatedText'
import { useD3Hover } from '@/hooks/use3DHover'
import LandingEnvironment from './SceneComponents/Landing/Environment'
import { ForestLocation } from './Models/Forest/Forest'
import { useActions } from '@/hooks/useActions'
import { FallingTV, TVEntity, TVRender } from './Models/TVEntity'
import { InteractionWrapper } from './interactionWrapper'
import PlayerLocation from './SceneComponents/Player/Location'
import PlayerCamera from './SceneComponents/Player/PlayerCamera'

const LandingScene = memo(
	(props: { tvClicked: boolean; setTvClicked: Dispatch<boolean> }) => {
		const { hovered, hover } = useD3Hover()
		const { tvClicked, setTvClicked } = props

		const tvRef: any = useRef<any>(null)
		const locationRef: any = useRef<any>(null)
		const cameraRef: any = useRef<any>(null)

		const { setSceneBreakpoint } = useActions()

		useEffect(() => {
			if (tvClicked === true) {
				hover(false)
				setTimeout(() => setSceneBreakpoint(true), 10000)
			}
		}, [tvClicked])

		useEffect(() => {
			setSceneBreakpoint(false)
		}, [])

		return (
			<>
				{tvClicked == true ? (
					<PlayerCamera
						ref={cameraRef}
						locationRef={locationRef}
						tvRef={tvRef}
					/>
				) : (
					<AnimatedCamera ref={cameraRef} tvRef={tvRef} />
				)}
				<StartTextAnimated tvClicked={tvClicked} />

				<InteractionWrapper selection={hovered}>
					<TVRender
						tvClicked={tvClicked}
						setTvClicked={setTvClicked}
						hover={hover}
						tvRef={tvRef}
					/>
				</InteractionWrapper>

				{/* Location and Scene Environment */}
				{tvClicked !== true ? (
					<ForestLocation />
				) : (
					<PlayerLocation locationRef={locationRef} />
				)}
				<LandingEnvironment floorPosition={tvClicked === true ? -27 : -0.48} />
			</>
		)
	}
)

export default LandingScene
