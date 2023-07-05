import getIcon from '@/app/utils/getIcons'
import { ArrowIcon } from '../icons'

type Props = {
	id: string
	text: string
	tag: string
	icon: string
}

const ResourcesCard = ({ id, text, tag, icon }: Props) => {
	return (
		<div className='resources-card'>
			<div className='resources-card__number'>
				<h3>{id}</h3>
				{getIcon(icon)}
			</div>
			<p>{text}</p>
			<h1>{tag}</h1>
			<div className='resources-card__icon-wrapper'>
				<p>learn more</p>
				<ArrowIcon className='resources-card__icon' />
			</div>
		</div>
	)
}

export default ResourcesCard
