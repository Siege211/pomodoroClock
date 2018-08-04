import React from 'react';
const BreakLength = (props) => {
	return (
		<div id='break-label' className='settings'>
			<h2 className='settingsLabel' id='break-length'>Break Length:{props.length}</h2>
			<div className='settingsAdj'>
				<div className='pointers' id='break-increment' onClick={props.add}>More</div>
				<div className='pointers' id='break-decrement' onClick={props.subtract}>Less</div>
			</div>
		</div>
	)
}
export default BreakLength