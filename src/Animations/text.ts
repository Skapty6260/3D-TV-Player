import gsap, { Power3 } from 'gsap'

export const TextSlideIn = async (ref: any) => {
	// Dummy Sliding Frames
	gsap.to(ref.current.position, {
		x: 0,
		duration: 1,
		ease: Power3.easeIn,
	})
}

export const TextSlideOut = async (ref: any) => {
	// Dummy Sliding Frames
	gsap.to(ref.current.position, {
		y: 40,
		duration: 1,
		ease: Power3.easeIn,
	})
}

export const TextFadeIn = async (ref: any, ref2: any) => {
	const mat1 = ref.current.textRef.current._baseMaterial
	const mat2 = ref2.current.textRef.current._baseMaterial

	// FadeIn Frames (material opacity based)
	gsap.to(mat1, {
		opacity: 1,
		duration: 1.5,
		ease: Power3.easeInOut,
	})

	gsap.to(mat2, {
		opacity: 0.5,
		delay: 0.5,
		duration: 1.5,
		ease: Power3.easeInOut,
	})
}

export const TextFadeOut = async (ref: any, ref2: any) => {
	const mat1 = ref.current.textRef.current._baseMaterial
	const mat2 = ref2.current.textRef.current._baseMaterial

	// FadeIn Frames (material opacity based)
	gsap.to(mat1, {
		opacity: 0,
		duration: 2.5,
		ease: Power3.easeInOut,
	})

	gsap.to(mat2, {
		opacity: 0,
		duration: 1,
		ease: Power3.easeInOut,
	})
}
