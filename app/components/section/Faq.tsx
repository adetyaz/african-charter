import RightArrowIcon from '../icons/RightArrowIcon'

const Faq = () => {
	const questions = [
		{
			text: 'How easy can I get resources?',
		},
		{
			text: 'Are the resources free?',
		},
		{
			text: 'Do we get custom requests?',
		},
		{
			text: 'How discreet can it be?',
		},
	]

	return (
		<section className='faq'>
			<h2>Have questions?</h2>
			<div className='faq__questions'>
				{questions.map((question) => (
					<div className='faq__question' key={question.text}>
						<RightArrowIcon />
						<p>{question.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Faq
