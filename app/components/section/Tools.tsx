'use client'

import Chart from '../ui/Chart'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Tools = () => {
	return (
		<section className='tools'>
			<h2>Tools</h2>

			<div className='tools__chart'>
				<Chart />
			</div>
		</section>
	)
}

export default Tools
