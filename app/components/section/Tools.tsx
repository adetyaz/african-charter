import {
	LineEight,
	LineFive,
	LineFour,
	LineOne,
	LineSeven,
	LineSix,
	LineThree,
	LineTwo,
} from '../icons'
import Chart from '../ui/Chart'

const Tools = () => {
	return (
		<section className='tools'>
			<h2>Tools</h2>
			<div className='tools__node tools__node--1'>
				<div>
					<h4>10 (14.29%)</h4>
					<p>Civic Space</p>
				</div>
				<LineOne />
			</div>
			<div className='tools__node tools__node--2'>
				<LineTwo />
				<div>
					<h4>9 (12.86%)</h4>
					<p>Rule of Law</p>
				</div>
			</div>
			<div className='tools__node tools__node--3'>
				<LineThree />
				<div>
					<h4>7 (10%)</h4>
					<p>
						<span>Constitutional </span>
						<span>Changes</span>
					</p>
				</div>
			</div>
			<div className='tools__node tools__node--4'>
				<div>
					<h4>2 (2.86%)</h4>
					<p>
						<span>Multi-level</span>
						<span>Democratic</span>
						<span>Governance</span>
					</p>
				</div>
				<LineEight />
			</div>
			<div className='tools__node tools__node--5'>
				<div>
					<h4>9 (14.28%)</h4>
					<p>
						<span>Economic and </span>
						<span>Corporate Governance</span>
					</p>
				</div>
				<LineSeven />
			</div>
			<div className='tools__chart'>
				<Chart />
			</div>
			<div className='tools__node tools__node--6'>
				<div>
					<h4>10 (14.29%)</h4>
					<p>
						<span>Empowerment of </span>
						<span>Women</span>
					</p>
				</div>
				<LineSix />
			</div>
			<div className='tools__node tools__node--7'>
				<div>
					<h4>6 (8.57%)</h4>
					<p>
						<span>Representation of </span>
						<span>marginalised groups</span>
					</p>
				</div>
				<LineSix />
			</div>
			<div className='tools__node tools__node--8'>
				<LineOne />
				<div>
					<h4>7 (10%)</h4>
					<p>Democratic Culture</p>
				</div>
			</div>
			<div className='tools__node tools__node--9'>
				<LineFour />
				<div>
					<h4>9 (14.28%)</h4>
					<p>Electoral Cycle</p>
				</div>
			</div>
		</section>
	)
}

export default Tools
