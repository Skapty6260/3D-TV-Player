import { VideoType } from '@/types'
import styles from '../PlayerSection.module.scss'
import { motion } from 'framer-motion'
import { useActions } from '@/hooks/useActions'

export const LibraryElement = (props: VideoType) => {
	const { selectVideo } = useActions()

	const handleClick = () => {
		selectVideo(props.url)
	}

	return (
		<motion.li
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}
			className={`${styles.videoComponent}`}
		>
			<button onClick={handleClick}>
				<video className='rounded-t-xl' src={props.url} />
				<p className='w-full text-center mt-4 font-semibold text-lg'>
					{props.title}
				</p>
				<p className='text-gray-400 opacity-70 text-xs w-full text-center'>
					Click to play
				</p>
			</button>
		</motion.li>
	)
}
