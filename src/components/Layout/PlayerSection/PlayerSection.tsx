import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import styles from './PlayerSection.module.scss'
import { KnobButton } from '@/components/ui/KnobButton'
import Library from './Library/Library'

// ToDo: refactor the code to components, create video card component and delete the debug mode.
const PlayerComponent = () => {
	return (
		<motion.section
			animate={{ transform: 'translateX(0px)' }}
			transition={{ duration: 0.5, ease: 'easeIn' }}
			className={styles.sectionWrapper}
		>
			<motion.div
				transition={{ duration: 1, ease: 'easeIn' }}
				className={styles.innerWrapper}
			>
				<motion.nav
					animate={{ opacity: 1, transform: 'translateY(0px)' }}
					transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}
					className={styles.navWrapper}
				>
					<ul>
						<li>
							<KnobButton label='Lib' active />
						</li>
						<li>
							<KnobButton label='YT' notAllowed={true} />
						</li>
					</ul>

					<input
						type='text'
						className='h-[2.5rem] rounded-xl px-3'
						placeholder='Search for video...'
					/>
				</motion.nav>

				<div>
					<Suspense
						fallback={
							<p>
								Internal Library
								<br />
								Loading...
							</p>
						}
					>
						<Library />
					</Suspense>
				</div>
			</motion.div>
		</motion.section>
	)
}

export const PlayerSection = ({ debug }: { debug?: boolean }) => {
	const { SceneBreakpoint } = useSelector((state: any) => state)

	if (debug) {
		return <PlayerComponent />
	}

	return SceneBreakpoint && <PlayerComponent />
}
