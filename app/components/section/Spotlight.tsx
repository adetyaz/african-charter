import SpotlightCard from '../ui/SpotlightCard'
import { spotlightData } from '@/app/constants'

const Spotlight = () => {
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
