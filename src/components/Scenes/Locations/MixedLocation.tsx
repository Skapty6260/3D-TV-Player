import { useRef } from 'react'
import { ForestLocation } from '../../../Models/Forest/Forest'
import PlayerLocation from './Location'
import { AnimatePresence, motion } from 'framer-motion'

const MixedLocation = ({
	tvClicked,
	locationRef,
}: {
	tvClicked: boolean
	locationRef: any
}) => {
	return (
		<AnimatePresence>
			{tvClicked !== true ? (
				<motion.group initial={{ opacity: 1 }} animate={{ opacity: 0 }}>
					<ForestLocation />
				</motion.group>
			) : (
				<PlayerLocation locationRef={locationRef} />
			)}
		</AnimatePresence>
	)
}

export default MixedLocation
