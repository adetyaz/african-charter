import { ResourcesCard } from '../ui'
import { resourcesData } from '@/app/constants'

const Resources = () => {
	return (
		<section className='resources'>
			<h2>Resources We Provide</h2>

			{resourcesData.map((resource) => (
				<ResourcesCard
					key={resource.id}
					id={resource.id}
					text={resource.text}
					tag={resource.tag}
					icon={resource.icon}
				/>
			))}
		</section>
	)
}

export default Resources
