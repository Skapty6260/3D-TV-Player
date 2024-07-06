import { VideoType } from '@/types'
import React from 'react'
import { LibraryElement } from './LibraryElement'

// https://www.youtube.com/watch?v=ZKhfKFcL7tg
// https://youtu.be/7vXULMiEZrs
//

const InternalLibrary: VideoType[] = [
	{
		title: 'Rain on flowers',
		url: '/videos/FlowerRain.mp4',
	},
	{
		title: 'Thunder with Rain white background',
		url: '/videos/ThunderRain.mp4',
	},
	{
		title: 'Epic Trailer | This summer...',
		url: '/videos/Trailer.mp4',
	},
	{
		title: '6 AM | Film Riot',
		url: '/videos/6AM.mp4',
	},
	{
		title: 'Video 5',
		url: '/assets/textures/tv_enabled.mp4',
	},
	{
		title: 'Video 6',
		url: '/assets/textures/tv_enabled.mp4',
	},
	{
		title: 'Video 7',
		url: '/assets/textures/tv_enabled.mp4',
	},
	{
		title: 'Video 8',
		url: '/assets/textures/tv_enabled.mp4',
	},
	{
		title: 'Video 9',
		url: '/assets/textures/tv_enabled.mp4',
	},
]

const Library = () => {
	return (
		<ul className='mt-4 flex flex-wrap justify-between w-full h-full items-center px-8'>
			{InternalLibrary.map((video, i) => (
				<LibraryElement key={i} {...video} />
			))}
		</ul>
	)
}

export default Library
