import {
	FolderIcon,
	ProfileIcon,
	HomeIcon,
	DocumentIcon,
} from '../components/icons'

export default function getIcon(name: string) {
	if (name === 'folder')
		return <FolderIcon className='resources-card__tag-icon' />
	else if (name === 'profile')
		return <ProfileIcon className='resources-card__tag-icon' />
	else if (name === 'home')
		return <HomeIcon className='resources-card__tag-icon' />
	else if (name === 'document')
		return <DocumentIcon className='resources-card__tag-icon' />
}
