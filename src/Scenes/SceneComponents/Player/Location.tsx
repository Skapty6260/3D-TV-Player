import { LittleRoom } from '@/Scenes/Models/littleRoom/littleRoom'
import React from 'react'

const PlayerLocation = ({ locationRef }: any) => {
	// Todo: Add table that only will be fixed and table would fall on it and after that redirect to the player by adding new layout with player scene and make camera animation while falling

	return (
		<LittleRoom
			castShadow
			receiveShadow
			locationRef={locationRef}
			position={[1, -20, 0]}
			rotation-y={10.5}
			rotation-z={-0}
			rotation-x={-0}
		/>
	)
}

export default PlayerLocation
