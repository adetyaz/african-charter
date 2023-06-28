import Image from 'next/image'
import { ConnectorIcon } from '../icons'

const Subscribe = () => {
	return (
		<section className='subscribe'>
			<div className='subscribe__text-content'>
				<h2>
					Discover how you can use our <span>digital tools</span> to strengthen
					your democracy
				</h2>
				<form className='subscribe__form-group'>
					<input
						type='text'
						placeholder='your@email.com'
						className='subscribe__input-form'
					/>
					<button type='submit' className='subscribe__button'>
						Get Started
					</button>
					<div className='subscribe__form-attachments'>
						<ConnectorIcon />
						<span>Join 80+ organisations</span>
						<div>
							<Image
								src='/assets/images/avatars.png'
								alt='avatars'
								width={50}
								height={20}
							/>
						</div>
					</div>
				</form>
			</div>
			<div className='subscribe__image'>
				<Image
					src='/assets/images/subscribe-image.png'
					alt='subscribe image'
					height={450}
					width={450}
				/>
			</div>
		</section>
	)
}

export default Subscribe
