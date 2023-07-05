import Image from 'next/image'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '@/app/constants'

const Testimonial = () => {
	return (
		<section className='testimonial'>
			<div className='testimonial__blob'></div>
			<h2>
				<span>The African Charter </span>
				<span>Project is all about</span>
				<span>Open-Source</span>
			</h2>
			<div className='testimonial__cards'>
				{testimonials.map((testimonial) => (
					<TestimonialCard
						text={testimonial.text}
						image={testimonial.image}
						key={testimonial.image}
					/>
				))}

				<div className='testimonial__activity'>
					<div className='testimonial__typing'>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<Image
						src='/assets/images/avatar-1.png'
						alt='avatar'
						height={50}
						width={50}
						className='testimonial-card__avatar'
					/>
				</div>
			</div>
		</section>
	)
}

export default Testimonial
