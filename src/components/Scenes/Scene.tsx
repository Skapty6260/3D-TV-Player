'use client'
import React, { Dispatch, memo, useEffect, useRef } from 'react'

import { StartTextAnimated } from '../ui/AnimatedText'
import { useD3Hover } from '@/hooks/use3DHover'
import LandingEnvironment from './Environment'
import { useActions } from '@/hooks/useActions'
import { TVRender } from '../../Models/TVEntity'
import { InteractionWrapper } from './interactionWrapper'
import { PlayerCamera, LandingCamera } from './CameraRigs'
import MixedLocation from './Locations/MixedLocation'

const Scene = memo(
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
				// setTimeout(() => setSceneBreakpoint(true), 5000)
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
					<LandingCamera ref={cameraRef} tvRef={tvRef} />
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
				<MixedLocation tvClicked={tvClicked} locationRef={locationRef} />
				<LandingEnvironment floorPosition={tvClicked === true ? -27 : -0.48} />
			</>
		)
	}
)

export default Scene
