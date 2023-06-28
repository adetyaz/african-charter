import Image from 'next/image'
import { partners } from '@/app/constants'

const Partners = () => {
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
