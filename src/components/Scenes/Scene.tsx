'use client'
import React, { Dispatch, memo, useEffect, useRef, useState } from 'react'

import { StartTextAnimated } from '../ui/AnimatedText'
import { useD3Hover } from '@/hooks/use3DHover'
import LandingEnvironment from './Environment'
import { useActions } from '@/hooks/useActions'
import { TVRender } from '../../Models/TVEntity'
import { InteractionWrapper } from './interactionWrapper'
import { PlayerCamera, LandingCamera } from './CameraRigs'
import { ForestLocation } from '@/Models/Forest/Forest'
import { ModelSlideOut } from '@/Animations/modelAnimations'
import { useSelector } from 'react-redux'

const Scene = memo(
	(props: { tvClicked: boolean; setTvClicked: Dispatch<boolean> }) => {
		const { hovered, hover } = useD3Hover()
		const { tvClicked, setTvClicked } = props

		const tvRef: any = useRef<any>(null)
		const locationRef: any = useRef<any>(null)
		const cameraRef: any = useRef<any>(null)

		const { setSceneBreakpoint } = useActions()
		const { SceneBreakpoint } = useSelector((state: any) => state)

		useEffect(() => {
			setSceneBreakpoint(false)
		}, [])

		return (
			<>
				{SceneBreakpoint == true ? (
					<PlayerCamera ref={cameraRef} />
				) : (
					<LandingCamera ref={cameraRef} tvRef={tvRef} />
				)}
				{SceneBreakpoint == true ? null : (
					<StartTextAnimated tvClicked={tvClicked} />
				)}

				<InteractionWrapper selection={hovered}>
					<TVRender
						isFalling={SceneBreakpoint}
						tvClicked={tvClicked}
						setTvClicked={setTvClicked}
						hover={hover}
						tvRef={tvRef}
					/>
				</InteractionWrapper>

				{/* Location and Scene Environment */}
				{SceneBreakpoint == true ? null : (
					<ForestLocation
						hover={hover}
						tvClicked={tvClicked}
						setSceneBreakpoint={setSceneBreakpoint}
						locationRef={locationRef}
					/>
				)}
				<LandingEnvironment floorPosition={-0.48} />
			</>
		)
	}
)

export default Scene
