'use client'
import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Material } from 'three'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { DoubleSide } from 'three'

const Screen = (props: any, { enabled }: { enabled: boolean }) => {
	if (!enabled && enabled === false) {
		return <mesh {...props} />
	}

	const [video] = useState(() => {
		const vid = document.createElement('video')
		vid.src = '/assets/textures/tv_enabled.mp4'
		vid.crossOrigin = 'Anonymous'
		vid.loop = true
		vid.volume = 0.1
		vid.muted = false
		vid.play()
		return vid
	})

	return (
		<mesh
			castShadow
			receiveShadow
			geometry={props.geometry}
			position={[0, 3.626, 2.249]}
			rotation={[Math.PI / 2, 0, 0]}
			scale={[5.667, 1, 4.011]}
		>
			<meshStandardMaterial emissive={'white'} side={DoubleSide}>
				<videoTexture attach='map' args={[video]} />
				<videoTexture attach='emissiveMap' args={[video]} />
			</meshStandardMaterial>
		</mesh>
	)
}

export default function VintageTV(props: any) {
	const {
		nodes,
		materials,
	}: { nodes: any; materials: { [name: string]: Material } } = useGLTF(
		'/assets/models/Tv/scene.gltf'
	)

	return (
		<group ref={props.tvRef} {...props} castShadow receiveShadow dispose={null}>
			<group scale={0.3}>
				<group position={[0, 2.977, 0]} scale={[6.822, 6.475, 6.181]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box_Wood_Box_0.geometry}
						material={materials.Wood_Box}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box_Black_Rubber_TV_0.geometry}
						material={materials.Black_Rubber_TV}
					/>
				</group>
				<group position={[0, 3.704, 2.49]} scale={[6.78, 4.897, 0.698]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen_Holder_Border_Around_Screen_0.geometry}
						material={materials.Border_Around_Screen}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Screen_Holder_Border_Screen_0.geometry}
						material={materials.Border_Screen}
					/>
				</group>

				{/* Screen */}
				<Screen
					enabled={props.isEnabled}
					castShadow
					receiveShadow
					geometry={nodes.Screen_Screen1_0.geometry}
					material={materials.Screen1}
					position={[0, 3.626, 2.249]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={[5.667, 1, 4.011]}
				/>

				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Case_Lower_Yellow_Plastic_0.geometry}
					material={materials.Yellow_Plastic}
					position={[0, 0.566, 2.229]}
					scale={[6.689, 1.8, 1]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Backside_TV_Back_0.geometry}
					material={materials.TV_Back}
					position={[0, 3, -6.254]}
					scale={[6.568, 6.288, 6.301]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Air_Air_Knob_0.geometry}
					material={materials.Air_Knob}
					position={[0, 4.202, -4.827]}
					rotation={[-1.579, 0.045, -0.022]}
					scale={0.393}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Front_Knobs_Front_Buttons_0.geometry}
					material={materials.Front_Buttons}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Clips_Clips1_0.geometry}
					material={materials.Clips1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Brown_Knobs_Brown_Knobs1_0.geometry}
					material={materials.Brown_Knobs1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Smaller_Knobs_Smaller_Knobs1_0.geometry}
					material={materials.Smaller_Knobs1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.White_Cyl_Knobs_Yellow_Plastic_0.geometry}
					material={materials.Yellow_Plastic}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Black_Rubber_Black_Rubber_TV_0.geometry}
					material={materials.Black_Rubber_TV}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Backside_Blur_Back_Blur_0.geometry}
					material={materials.Back_Blur}
					position={[0, 3.003, -2.935]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={[6.556, 1, 6.323]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/scene.gltf')
