import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Material } from 'three'

export function LittleRoom(props: any) {
	const {
		nodes,
		materials,
	}: { nodes: any; materials: { [name: string]: Material } } = useGLTF(
		'/assets/models/littleRoom/little.gltf'
	)
	return (
		<group {...props} ref={props.locationRef} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={1.896}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group castShadow receiveShadow scale={[2.563, 0.174, 2.431]}>
						{/* <mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_4.geometry}
							material={materials.Material}
						/> */}
						{/* <mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_5.geometry}
							material={materials.under_cama2}
						/> */}
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_6.geometry}
							material={materials.under}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_7.geometry}
							material={materials.under_1}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_8.geometry}
							material={materials.window1}
						/>
					</group>
					{/* <group
						position={[-0.422, 0.176, -0.548]}
						scale={[0.604, 0.056, 0.39]}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_10.geometry}
							material={materials.cama}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_11.geometry}
							material={materials.cama_under}
						/>
					</group> */}
					{/* <group position={[-0.797, 0.414, 0.608]} scale={[0.04, 0.011, 0.043]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_19.geometry}
							material={materials['Material.002']}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Object_20.geometry}
							material={materials['Material.003']}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_13.geometry}
						material={materials.under_cama2}
						position={[-0.84, 0.11, 0.541]}
						rotation={[0, 0, -Math.PI]}
						scale={[-0.156, 0.017, 0.484]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_15.geometry}
						material={materials.window1}
						position={[-0.809, 0.427, 0.24]}
						scale={[0.031, 0.043, 0.037]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_17.geometry}
						material={materials['Material.001']}
						position={[-0.809, 0.41, 0.241]}
						rotation={[-Math.PI, 0, -Math.PI]}
						scale={[-0.044, 0.028, 0.047]}
					/> */}
					{/* <mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_22.geometry}
						material={materials.material_0}
						position={[-0.814, 0.123, 0.28]}
						scale={[0.08, 0.089, 0.06]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_24.geometry}
						material={materials.cama}
						position={[0.965, 0.092, -0.293]}
						scale={[0.241, 0.008, 0.714]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_26.geometry}
						material={materials.cama}
						position={[0.729, 0.536, 0.258]}
						rotation={[0, 0, -1.578]}
						scale={[0.023, 0.046, 0.031]}
					/> */}
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/scene.gltf')
