'use client'
import RightArrowIcon from '../icons/RightArrowIcon'
import { questions } from '@/app/constants'
import { useState } from 'react'

const Faq = () => {
	return (
		<section className='faq'>
			<h2>Have questions?</h2>
			<div className='faq__questions'>
				{questions.map((question) => (
					<div className='faq__question' key={question.text}>
						<RightArrowIcon />
						<p>{question.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Faq
