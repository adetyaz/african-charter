'use client'
import Image from 'next/image'

type Props = {
	text: string
	image: string
}

const TestimonialCard = ({ text, image }: Props) => {
	return (
		<div className='testimonial-card'>
			<Image
				src={image}
				alt='avatar'
				height={50}
				width={50}
				className='testimonial-card__avatar'
			/>
			<div className='testimonial-card__comment'>{text}</div>
		</div>
	)
}

export default TestimonialCard
