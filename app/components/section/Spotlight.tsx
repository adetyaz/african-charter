import SpotlightCard from '../ui/SpotlightCard'

const Spotlight = () => {
	const spotlightData = [
		{
			tag: 'Coming Soon..',
			title: 'Democracy in Africa',
			text: 'A massive open online course (MOOC) addressing the information deficit and media bias during elections. The program targets civic society, pro...',
			date: 'July 2 - 20, 2023',
			status: 'Free',
			image: '/assets/images/digital-africa.png',
			backText: 'MOOC',
		},
		{
			tag: 'Latest...',
			title: 'Media & Elections',
			text: 'A massive open online course (MOOC) addressing the information deficit and media bias during elections. The program targets civic society, pro...',
			date: '',
			status: '',
			image: '/assets/images/digital-microphone.png',
			backText: 'MEDIA',
		},
		{
			tag: 'Now..',
			title: 'Digitalisation & Democracy',
			text: 'A massive open online course (MOOC) addressing the information deficit and media bias during elections. The program targets civic society, pro...',
			date: '',
			status: '',
			image: '/assets/images/digital-bulb.png',
			backText: 'DIGITAL',
		},
		{
			tag: 'Ongoing',
			title: 'The Role of Open Source',
			text: 'A massive open online course (MOOC) addressing the information deficit and media bias during elections. The program targets civic society, pro...',
			date: '',
			status: '',
			image: '/assets/images/digital-africa.png',
			backText: 'OPEN',
		},
	]

	return (
		<section className='spotlight'>
			<h2>Spotlight</h2>

			<div className='spotlight__cards'>
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
