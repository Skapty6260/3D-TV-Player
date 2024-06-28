'use client'
import D3Text from '@/components/ui/D3Text'
import React, { useEffect, useRef } from 'react'
import {
	TextFadeIn,
	TextFadeOut,
	TextSlideIn,
	TextSlideOut,
} from '../../Animations/text'

export const StartTextAnimated = ({ tvClicked }: { tvClicked: boolean }) => {
	const textRef1: any = useRef()
	const textRef2: any = useRef()

	useEffect(() => {
		if (textRef1.current == undefined && textRef2.current == undefined) return

		setTimeout(() => {
			TextSlideIn(textRef1)
			TextFadeIn(textRef1, textRef2)
		}, 2500)
	}, [textRef1, textRef2])

	useEffect(() => {
		if (tvClicked !== false) {
			if (textRef1.current == undefined && textRef2.current == undefined) return

			TextSlideOut(textRef1)
			TextFadeOut(textRef1, textRef2)
		}
	}, [tvClicked])

	return (
		<>
			<D3Text
				textRef={textRef1}
				text='Pl-sys86'
				color='white'
				position={[5, 7.5, 0]}
				rotation={[0, Math.PI * 1.52, 0]}
				fontSize={2}
				letterSpacing={0.05}
				outlineBlur={2}
				textAlign={'center'}
				opacity={0}
				glitchEffect={true}
			/>

			<D3Text
				textRef={textRef2}
				text='Click on tv'
				color='gray'
				position={[0.5, 6, 0]}
				rotation={[0, Math.PI * 1.52, 0]}
				fontSize={0.5}
				letterSpacing={0.05}
				outlineBlur={2}
				textAlign={'center'}
				opacity={0}
			/>
		</>
	)
}
