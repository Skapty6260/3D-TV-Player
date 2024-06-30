'use client'
import { store } from '@/redux/store'
import { Leva } from 'leva'
import { Provider } from 'react-redux'
import { Canvas } from '@react-three/fiber'
import { useAppSelector } from '@/redux/store'
import { Suspense, useState } from 'react'
import Loading from './loading'
import LandingScene from '@/Scenes/LandingScene'
import { PlayerSection } from '@/components/Layout/PlayerSection/PlayerSection'

export default function Home() {
	const [tvClicked, setTvClicked] = useState<boolean>(false)

	return (
		<Provider store={store}>
			<main className='flex flex-row h-screen w-full relative bg-black'>
				<figure
					className={
						tvClicked === true ? 'h-screen w-2/3 flex' : 'h-screen w-full'
					}
				>
					<Leva />

					{/* 3D */}
					<Suspense fallback={tvClicked === false ? <Loading /> : null}>
						<Canvas>
							<LandingScene tvClicked={tvClicked} setTvClicked={setTvClicked} />
						</Canvas>
					</Suspense>
				</figure>

				{/* Player interface */}

				{tvClicked === true ? <PlayerSection /> : null}
			</main>
		</Provider>
	)
}
