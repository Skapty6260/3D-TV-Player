'use client'
import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Material } from 'three'
import { ModelSlideOut } from '@/Animations/modelAnimations'

export function ForestLocation(props: any) {
	const {
		nodes,
		materials,
	}: { nodes: any; materials: { [name: string]: Material } } = useGLTF(
		'/assets/models/Forest/scene.gltf'
	)

	useEffect(() => {
		if (props.tvClicked === true) {
			props.hover(false)

			setTimeout(async () => {
				ModelSlideOut(props.locationRef)
			}, 1000)
			setTimeout(() => props.setSceneBreakpoint(true), 3000)
		}
	}, [props.tvClicked])

	return (
		<group ref={props.locationRef} {...props} dispose={null}>
			<group scale={0.01}>
				<group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Base_Mesh_Base_Material_0.geometry}
						material={materials.Base_Material}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Base_Mesh_Base_Material_0_1.geometry}
						material={materials.Base_Material}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Base_Mesh_Base_Material_0_2.geometry}
						material={materials.Base_Material}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.VFX_Mesh_VFX_Material_0.geometry}
					material={materials.VFX_Material}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/scene.gltf')
