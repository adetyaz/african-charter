type Props = {
	id: string
	text: string
	tag: string
	icon: React.ReactElement
}

const ResourcesCard = ({ id, text, tag, icon }: Props) => {
	return (
		<div className='resources-card'>
			<div className='resources-card__number'>
				<h3>{id}</h3>
				{icon}
			</div>
			<p>{text}</p>

			<h1>{tag}</h1>
		</div>
	)
}

export default ResourcesCard
