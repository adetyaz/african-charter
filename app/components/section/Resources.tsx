import DocumentIcon from '../icons/DocumentIcon'
import FolderIcon from '../icons/FolderIcon'
import HomeIcon from '../icons/HomeIcon'
import ProfileIcon from '../icons/ProfileIcon'
import ResourcesCard from '../ui/ResourcesCard'

const Resources = () => {
	const resourcesData = [
		{
			id: '01',
			text: 'Leverage the best in house tools (70) for the civic society',
			tag: 'tools',
			icon: <FolderIcon />,
		},
		{
			id: '02',
			text: 'Explore over 100 professionals for your next civic projects.',
			tag: 'people',
			icon: <ProfileIcon />,
		},
		{
			id: '03',
			text: 'Browse through over 80 standard organisations',
			tag: 'organization',
			icon: <HomeIcon />,
		},
		{
			id: '04',
			text: 'Over 70 datasets waiting for you to dig in.',
			tag: 'datasets',
			icon: <DocumentIcon />,
		},
	]

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
