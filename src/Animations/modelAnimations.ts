import gsap, { Power3 } from 'gsap'

export const ModelSlideOut = async (ref: any) => {
	gsap.to(ref.current?.position, {
		x: 100,
		duration: 1,
		ease: Power3.easeIn,
	})
}

export const ModelSlideIn = async (ref: any) => {
	gsap.to(ref.current?.position, {
		x: 0,
		duration: 1.5,
		ease: Power3.easeIn,
	})
}
