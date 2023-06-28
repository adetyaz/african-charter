import { navLinks } from '@/app/constants'

const Navbar = () => {
	return (
		<nav className='nav'>
			<ul className='nav__items'>
				{navLinks.map((nav) => (
					<li key={nav.link} className='nav__list'>
						<a className='nav__link'>{nav.link}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
