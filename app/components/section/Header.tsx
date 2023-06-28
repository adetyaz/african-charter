import Image from 'next/image'
import { Navbar } from '../ui'

const Header = () => {
	return (
		<header className='header'>
			<Image
				src='/assets/images/charter-logo-1.png'
				alt='logo'
				height={50}
				width={150}
			/>
			<Navbar />
		</header>
	)
}

export default Header
