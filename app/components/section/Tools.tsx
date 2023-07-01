import Chart from '../ui/Chart'

const Tools = () => {
	return (
		<section className='tools'>
			<h2>Tools</h2>
			<div className='tools__chart'>
				<Chart />
			</div>

			<div className='tools__node tools__node--1'>
				<h4>10 (14.29%)</h4>
				<p>Civic Space</p>
			</div>
		</section>
	)
}

export default Tools
