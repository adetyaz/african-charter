import Image from 'next/image'
import TestimonialCard from '../ui/TestimonialCard'

const Testimonial = () => {
	const testimonials = [
		{
			image: '/assets/images/avatar-1.png',
			text: 'I’m trying to get data on the last Kenyan election.',
		},
		{
			image: '/assets/images/avatar-2.png',
			text: 'I’m currently working on a platform that monitors how money is spent within the confines of election in Niger...',
		},
		{
			image: '/assets/images/avatar-3.png',
			text: 'The data on how the youth in Africa are dominating the tech scene is....',
		},
	]

	return (
		<section className='testimonial'>
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
