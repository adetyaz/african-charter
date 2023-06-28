import Chart from '../ui/Chart'

const Tools = () => {
	return (
		<section className='tools'>
			<h2>Tools</h2>
			<div className='tools__chart'>
				<Chart />
			</div>

			{/* <div className='tools__node tools__node--1'>
				<h4>10 (14.29%)</h4>
				<p>Civic Space</p>
				<svg
					width='2'
					height='83'
					viewBox='0 0 2 83'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0.827148 82.3044L0.827148 38.4139L0.827148 0.734278'
						stroke='#CDCDCD'
						strokeWidth='1.65625'
						strokeDasharray='1.66 1.66'
					/>
				</svg>
			</div> */}
		</section>
	)
}

export default Tools
