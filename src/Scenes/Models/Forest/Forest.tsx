'use client'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Material } from 'three'

export function ForestLocation(props: any) {
	const {
		nodes,
		materials,
	}: { nodes: any; materials: { [name: string]: Material } } = useGLTF(
		'/assets/models/Forest/scene.gltf'
	)

	return (
		<group {...props} dispose={null}>
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
