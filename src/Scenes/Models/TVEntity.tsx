import { Component, MutableRefObject, useEffect } from 'react'
import VintageTV from './vintageTV/vintageTV'
import { RigidBody } from '@react-three/rapier'
import { Vector3 } from 'three'
import { tvConfig } from '@/constants'

interface IRenderProps {
	tvRef: MutableRefObject<any>
	isPhysical?: boolean
	onClick?: () => void
	onPointerOver?: () => void
	onPointerOut?: () => void
}

export class TVEntity extends Component<IRenderProps> {
	public tvRef: MutableRefObject<any>
	private isPhysical: boolean
	public position: Vector3

	constructor(props: IRenderProps) {
		super(props)

		this.tvRef = props.tvRef
		this.position = new Vector3(
			tvConfig.position[0],
			tvConfig.position[1],
			tvConfig.position[2]
		)

		props.isPhysical
			? (this.isPhysical = props.isPhysical)
			: (this.isPhysical = false)
	}

	_render(props: IRenderProps) {
		return <VintageTV {...tvConfig} {...props} />
	}

	_physical(props: IRenderProps) {
		return (
			<RigidBody position={this.position} colliders='cuboid'>
				<VintageTV {...tvConfig} {...props} />
			</RigidBody>
		)
	}

	render() {
		return this.isPhysical == true
			? this._physical(this.props)
			: this._render(this.props)
	}
}
