import Image from 'next/image'

const Partners = () => {
	const partners = [
		{
			image: '/assets/images/favicon.png',
			name: 'Africtivistes',
		},
		{
			image: '/assets/images/goree.png',
			name: 'Goree Institute',
		},
		{
			image: '/assets/images/code-for-africa.png',
			name: 'Code for Africa',
		},
		{
			image: '',
			name: 'DWF',
		},
		{
			image: '/assets/images/epd.png',
			name: 'EPD',
		},
		{
			image: '',
			name: 'ecdpm',
		},
	]

	return (
		<section className='partners'>
			<h2>Our Partners</h2>
			<div className='partners__cards'>
				{partners.map((partner) => (
					<div className='partners__card'>
						<Image
							src={partner.image}
							alt={partner.name}
							key={partner.name}
							height={30}
							width={30}
						/>
						<span>{partner.name}</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default Partners
