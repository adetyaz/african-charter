'use client'
import SpotlightCard from '../ui/SpotlightCard'
import { spotlightData } from '@/app/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Spotlight = () => {
	const cardsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.fromTo(
			[cardsRef.current?.children],
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.3,
				duration: 1,
				ease: 'Power4.easeOut',
				scrollTrigger: {
					trigger: '.spotlight',

					start: 'top 200px',
				},
			}
		)
	}, [])

	return (
		<section className='spotlight'>
			<h2>Spotlight</h2>

			<div className='spotlight__cards' ref={cardsRef}>
				{spotlightData.map((info) => (
					<SpotlightCard
						key={info.tag}
						tag={info.tag}
						title={info.title}
						text={info.text}
						date={info.date}
						status={info.status}
						image={info.image}
						backText={info.backText}
					/>
				))}
			</div>
		</section>
	)
}

export default Spotlight
