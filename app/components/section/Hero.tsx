import Image from 'next/image'

const Hero = () => {
	const cardImages = [
		{
			source: '/assets/images/card-1.png',
		},
		{
			source: '/assets/images/card-2.png',
		},
		{
			source: '/assets/images/card-3.png',
		},
		{
			source: '/assets/images/card-4.png',
		},
	]

	return (
		<section className='hero'>
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
		</section>
	)
}

export default Hero
