import {
	FolderIcon,
	ProfileIcon,
	HomeIcon,
	DocumentIcon,
} from '../components/icons'

export default function getIcon(name: string) {
	if (name === 'folder') return FolderIcon
	else if (name === 'profile') return ProfileIcon
	else if (name === 'home') return HomeIcon
	else if (name === 'document') return DocumentIcon
}
