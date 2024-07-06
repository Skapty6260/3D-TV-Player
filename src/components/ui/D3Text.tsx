import { Text } from '@react-three/drei'
import { ReactThreeFiber } from '@react-three/fiber'
import React from 'react'

interface TextProps {
	characters?: string
	color?: ReactThreeFiber.Color
	fontSize?: number
	fontWeight?: number | string
	fontStyle?: 'italic' | 'normal'
	maxWidth?: number
	lineHeight?: number
	letterSpacing?: number
	textAlign?: 'left' | 'right' | 'center' | 'justify'
	font?: string
	anchorX?: number | 'left' | 'center' | 'right'
	anchorY?:
		| number
		| 'top'
		| 'top-baseline'
		| 'middle'
		| 'bottom-baseline'
		| 'bottom'
	clipRect?: [number, number, number, number]
	depthOffset?: number
	direction?: 'auto' | 'ltr' | 'rtl'
	overflowWrap?: 'normal' | 'break-word'
	whiteSpace?: 'normal' | 'overflowWrap' | 'nowrap'
	outlineWidth?: number | string
	outlineOffsetX?: number | string
	outlineOffsetY?: number | string
	outlineBlur?: number | string
	outlineColor?: ReactThreeFiber.Color
	outlineOpacity?: number
	strokeWidth?: number | string
	strokeColor?: ReactThreeFiber.Color
	strokeOpacity?: number
	fillOpacity?: number
	sdfGlyphSize?: number
	debugSDF?: boolean
	onSync?: (troika: any) => void
}

export type D3TextProps = JSX.IntrinsicElements['mesh'] &
	TextProps & {
		text: string
		color: string
		textRef: any
		glitchEffect?: boolean
		fontFamily?: string
		opacity?: number
	}

const D3Text = (props: D3TextProps) => {
	let font
	if (!props.fontFamily) font = '/fonts/Poppins.ttf'
	else font = props.fontFamily

	return (
		<Text font='/fonts/Poppins.ttf' ref={props.textRef} {...props}>
			{props.text}
			<meshBasicMaterial opacity={props.opacity} color={props.color} />
		</Text>
	)
}

export default D3Text
