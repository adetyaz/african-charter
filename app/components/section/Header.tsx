import Image from 'next/image'
import { Navbar } from '../ui'

const Header = () => {
	return (
		<header className='header'>
			<Image
				src='/assets/images/charter-logo-1.png'
				alt='logo'
				height={30}
				width={100}
			/>
			<Navbar />
			<div className='toggle'></div>
		</header>
	)
}

export default Header
