'use client'
import { store, useAppSelector } from '@/redux/store'
import { Leva } from 'leva'
import { Provider } from 'react-redux'
import MixedScene from './MixedScene'

export default function Home() {
	return (
		<Provider store={store}>
			<main className='flex h-screen w-full flex-col relative bg-black'>
				<section className='h-screen w-full'>
					<Leva />
					<MixedScene />
				</section>
			</main>
		</Provider>
	)
}
