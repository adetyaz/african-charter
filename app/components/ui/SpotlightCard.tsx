import Image from 'next/image'
import ArrowIcon from '../icons/ArrowIcon'

type Props = {
	tag?: string
	title?: string
	text?: string
	date?: string
	status?: string
	image: string
	backText?: string
}

const SpotlightCard = ({
	tag,
	title,
	text,
	date,
	status,
	image,
	backText,
}: Props) => {
	return (
		<div className='spotlight-card'>
			<div>
				<div className='spotlight-card__tagline'>
					<p>{tag}</p>
					<Image
						src='/assets/images/person-icon.png'
						alt='person icon'
						height={25}
						width={25}
					/>
				</div>
				<h3 className='spotlight-card__title'>{title}</h3>
				<p className='spotlight-card__description'>{text}</p>
			</div>
			<div>
				{date && (
					<>
						<p>{date}</p>
						<p>{status}</p>
					</>
				)}
				<div className='spotlight-card__icon-wrapper'>
					<ArrowIcon />
				</div>
			</div>

			<h1 className='spotlight-card__backText'>{backText}</h1>
			<Image
				src={image}
				alt='spotlight image'
				height={300}
				width={250}
				className='spotlight-card__image'
			/>
		</div>
	)
}

export default SpotlightCard
