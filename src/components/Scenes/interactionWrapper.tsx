import React from 'react'
import {
	EffectComposer,
	Outline,
	Select,
	Selection,
} from '@react-three/postprocessing'

interface IProps {
	selection: boolean
	children: React.ReactNode
}

export const InteractionWrapper = React.memo((props: IProps) => {
	return (
		<>
			<Selection>
				<EffectComposer multisampling={8} autoClear={false}>
					{/* @ts-ignore */}
					<Outline visibleEdgeColor='white' edgeStrength={0.5} width={2000} />
				</EffectComposer>

				<Select enabled={props.selection}>{props.children}</Select>
			</Selection>
		</>
	)
})
