'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { cardImages } from '@/app/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { gsap } from 'gsap'

const Hero = () => {
	// const scopeRef = useRef(null)
	// let mm = gsap.matchMedia(scopeRef)
	// console.log(mm)

	// mm.add('(min-width: 300px)', (context) => {
	// 	gsap.to('.hero__title', {
	// 		y: 100,
	// 	})
	// })

	return (
		<section className='hero'>
			{/* <Image
				src='/assets/images/multicolor-vector.png'
				alt='blob'
				height={500}
				width={500}
				className='hero__blob'
			/> */}
			<h1>
				<span>Find Africa’s best </span>
				<span className='hero__title'>digital democracy</span> tools
			</h1>
			<p>
				<span>
					Open-source resources to strengthen the implementation of the African
					Charter for Democracy,
				</span>
				<span>Elections & Governance (ACDEG) across the continent</span>
			</p>
			<div className='hero__images'>
				{cardImages.map((image) => (
					<Image
						key={image.source}
						src={image.source}
						alt='card image'
						height={270}
						width={200}
					/>
				))}
			</div>
			<div className='hero__mobile-carousel'>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={false}
					modules={[EffectCoverflow, Pagination]}
					className='mySwiper'
				>
					{cardImages.map((image) => (
						<SwiperSlide key={image.source}>
							<Image
								src={image.source}
								alt='card image'
								height={500}
								width={150}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Hero
