import { Environment, MeshReflectorMaterial } from '@react-three/drei'

const LandingEnvironment = ({ floorPosition }: { floorPosition: number }) => {
	return (
		<>
			{/* Floor */}
			<mesh
				position-y={floorPosition}
				receiveShadow
				rotation={[-Math.PI / 2, 0, 0]}
			>
				<planeGeometry args={[200, 200]} />
				<MeshReflectorMaterial
					blur={[100, 100]}
					resolution={2048}
					mixBlur={1}
					mixStrength={10}
					roughness={1}
					metalness={0.5}
					transparent
					opacity={0.2}
					depthScale={1}
					maxDepthThreshold={1.4}
					minDepthThreshold={0.4}
					color={'#333'}
					mirror={1}
				/>
			</mesh>

			{/* Scene Environment */}
			<directionalLight
				castShadow
				intensity={0.2}
				args={[0xffffff, 0.5]}
				position={[-3.54, 10, 3]}
			/>
			<fog attach='fog' args={['#000', 20, 45]} />
			<Environment preset='forest' />
		</>
	)
}

export default LandingEnvironment
