'use client'
import Header from './components/section/Header'
import Hero from './components/section/Hero'
import Testimonial from './components/section/Testimonial'
import Spotlight from './components/section/Spotlight'
import Tools from './components/section/Tools'
import Resources from './components/section/Resources'
import Subscribe from './components/section/Subscribe'
import Faq from './components/section/Faq'
import Partners from './components/section/Partners'
import Footer from './components/section/Footer'
// import { gsap } from 'gsap'
// import { useEffect, useRef } from 'react'
// import Lenis from '@studio-freight/lenis'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {
	// const scrollRef = useRef<Lenis>()

	// useEffect(() => {
	// 	scrollRef.current = new Lenis({
	// 		duration: 0.6,
	// 		easing: (t) => {
	// 			return Math.min(1, 1.001 - Math.pow(2, -10 * t))
	// 		}, // https://www.desmos.com/calculator/brs54l4xou
	// 		smoothTouch: true,
	// 		smoothWheel: true,
	// 	})

	// 	scrollRef.current.on('scroll', ScrollTrigger.update)

	// 	const updateFunc: gsap.TickerCallback = (time) => {
	// 		scrollRef.current?.raf(time)
	// 	}
	// 	gsap.ticker.add(updateFunc)
	// 	gsap.ticker.lagSmoothing(1)

	// 	return () => {
	// 		gsap.ticker.remove(updateFunc)
	// 		scrollRef.current?.destroy()
	// 	}
	// }, [])

	return (
		<>
			<Header />
			<main>
				<Hero />
				<Testimonial />
				<Spotlight />
				<Tools />
				<Resources />
				<Subscribe />
				<Faq />
				<Partners />
			</main>
			<Footer />
		</>
	)
}
