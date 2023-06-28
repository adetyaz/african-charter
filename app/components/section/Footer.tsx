import Image from 'next/image'
import LocationIcon from '../icons/LocationIcon'
import TelephoneIcon from '../icons/TelephoneIcon'
import FaxIcon from '../icons/FaxIcon'
import FacebookIcon from '../icons/FacebookIcon'
import TwitterIcon from '../icons/TwitterIcon'
import RssIcon from '../icons/RssIcon'
import LinkendinIcon from '../icons/LinkendinIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import PinterestIcon from '../icons/PinterestIcon'
import InstagramIcon from '../icons/InstagramIcon'
import GoogleplusIcon from '../icons/GoogleplusIcon'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__items'>
				<Image
					src='/assets/images/charter-logo-2.png'
					alt='footer logo'
					height={100}
					width={150}
				/>
				<div className='footer__text-items'>
					<div>
						<LocationIcon />
						<p>123, Bourdillon Avenue, Ikoyi, Lagos</p>
					</div>
					<div>
						<div>
							<TelephoneIcon />
							<p>(123) 456-7890</p>
						</div>
						<div>
							<FaxIcon />
							<p>(123) 456-7890</p>
						</div>
					</div>
					<div>
						<span>Social Media</span>
						<FacebookIcon />
						<TwitterIcon />
						<LinkendinIcon />
						<YoutubeIcon />
						<InstagramIcon />
						<GoogleplusIcon />
						<PinterestIcon />
						<RssIcon />
					</div>
				</div>
			</div>
			<div className='footer__tag'>
				<ul>
					<li>About us</li>
					<li>Contact us</li>
					<li>Help</li>
					<li>Privacy Policy</li>
					<li>Disclaimer</li>
				</ul>
				<span>Copyright © 2023 • EPD</span>
			</div>
		</footer>
	)
}

export default Footer
