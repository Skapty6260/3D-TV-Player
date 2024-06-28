import Image from 'next/image'
import React from 'react'

import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<nav
			className={`${styles.glassmorphism} flex w-1/2 translate-x-[50%] justify-center sticky top-0 z-10 h-[10vh] items-center`}
		>
			<Image src='/icon.png' alt='logo' width={100} height={100} />

			<ul className={styles.list}>
				<li>
					<b>00</b>Sigma
				</li>
				<li>
					<b>00</b>Player
				</li>
				<li>
					<b>00</b>Moment
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
