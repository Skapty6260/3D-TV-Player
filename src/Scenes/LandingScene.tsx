'use client'
import React, { memo, useEffect, useRef, useState } from 'react'

import AnimatedCamera from './SceneComponents/Landing/LandingCamera'
import { StartTextAnimated } from './SceneComponents/Landing/AnimatedText'
import { useD3Hover } from '@/hooks/use3DHover'
import LandingEnvironment from './SceneComponents/Landing/Environment'
import { ForestLocation } from './Models/Forest/Forest'
import { useActions } from '@/hooks/useActions'
import { TVEntity } from './Models/TVEntity'
import { InteractionWrapper } from './interactionWrapper'
import { LittleRoom } from './Models/littleRoom/littleRoom'
import { WitchRoom } from './Models/witchRoom/witchRoom'

const LandingScene = memo(() => {
	const { hovered, hover } = useD3Hover()
	const [tvClicked, setTvClicked] = useState<boolean>(false)

	const tvRef: any = useRef<any>(null)
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
			<AnimatedCamera ref={cameraRef} tvRef={tvRef} />
			<StartTextAnimated tvClicked={tvClicked} />

			<InteractionWrapper selection={hovered}>
				{tvClicked == true ? (
					<TVEntity tvRef={tvRef} isPhysical={true} />
				) : null}
				{tvClicked == false ? (
					<TVEntity
						tvRef={tvRef}
						onPointerOver={() => hover(true)}
						onPointerOut={() => hover(false)}
						onClick={() => setTvClicked(true)}
					/>
				) : null}
			</InteractionWrapper>

			{/* Location and Scene Environment */}
			{tvClicked !== true ? <ForestLocation /> : <WitchRoom />}
			<LandingEnvironment />
		</>
	)
})

export default LandingScene
