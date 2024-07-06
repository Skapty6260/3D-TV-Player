'use client'
import { PlayerSection } from '@/components/Layout/PlayerSection/PlayerSection'
import { store } from '@/redux/store'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

const Player = () => {
	return (
		<Provider store={store}>
			<main className='bg-white h-screen w-full'>
				<PlayerSection debug={true} />
			</main>
		</Provider>
	)
}

export default Player
