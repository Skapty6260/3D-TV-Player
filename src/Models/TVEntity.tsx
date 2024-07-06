import { Component, Dispatch, MutableRefObject, useEffect, useRef } from 'react'
import VintageTV from './vintageTV/vintageTV'
import { Vector3 } from 'three'
import { tvConfig } from '@/constants'
import { useFrame } from '@react-three/fiber'

interface IRenderProps {
	tvRef: MutableRefObject<any>
	isFalling?: boolean
	isEnabled?: boolean
	onClick?: () => void
	onPointerOver?: () => void
	onPointerOut?: () => void
}

export class TVEntity extends Component<IRenderProps> {
	public tvRef: MutableRefObject<any>
	private isFalling: boolean
	private isEnabled: boolean
	public position: Vector3

	constructor(props: IRenderProps) {
		super(props)

		this.tvRef = props.tvRef
		this.position = new Vector3(
			tvConfig.position[0],
			tvConfig.position[1],
			tvConfig.position[2]
		)

		props.isFalling
			? (this.isFalling = props.isFalling)
			: (this.isFalling = false)

		props.isEnabled
			? (this.isEnabled = props.isEnabled)
			: (this.isEnabled = false)
	}

	_render(props: IRenderProps) {
		return this.isFalling ? (
			<VintageTV
				isEnabled={this.isEnabled}
				rotation={tvConfig.rotation}
				scale={3}
				{...props}
			/>
		) : (
			<VintageTV {...tvConfig} {...props} />
		)
	}

	render() {
		return this._render(this.props)
	}
}

export const FallingTV = (props: IRenderProps) => {
	const groupRef = useRef<any>(null)

	useEffect(() => {
		groupRef.current.position.y = 20
		groupRef.current.position.z = -6
	}, [groupRef.current])

	useFrame((_, delta) => {
		if (groupRef.current.position.y <= 0)
			return (groupRef.current.position.y = 0)
		else groupRef.current.position.y -= 35 * delta
	})

	return (
		<group ref={groupRef} castShadow receiveShadow>
			<TVEntity {...props} />
		</group>
	)
}

interface ITvRenderProps {
	tvRef: MutableRefObject<any>
	isFalling: boolean
	tvClicked: boolean
	setTvClicked: Dispatch<boolean>
	hover: Dispatch<boolean>
}

export const TVRender = (props: ITvRenderProps) => {
	const { tvClicked, isFalling, setTvClicked, hover, tvRef } = props

	if (isFalling == true) {
		return <FallingTV isEnabled={tvClicked} tvRef={tvRef} isFalling={true} />
	} else {
		if (tvClicked == true) {
			return <TVEntity isEnabled={tvClicked} tvRef={tvRef} />
		}

		return (
			<TVEntity
				tvRef={tvRef}
				onPointerOver={() => hover(true)}
				onPointerOut={() => hover(false)}
				onClick={() => setTvClicked(true)}
			/>
		)
	}
}
