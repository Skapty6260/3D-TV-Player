import { useEffect, useState } from 'react'

export const useD3Hover = () => {
	const [hovered, hover] = useState<boolean>(false)

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'default'
	}, [hovered])

	return { hovered, hover }
}
