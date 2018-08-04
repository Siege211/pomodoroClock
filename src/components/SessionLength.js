import React from 'react';
const SessionLength = (props) => {
	return (
		<div id='session-label' className='settings'>
			<h2 className='settingsLabel' id='session-length'>Session Length:{props.length}</h2>
			<div className='settingsAdj'>
				<div className='pointers' id='session-increment' onClick={props.add}>More</div>
				<div className='pointers' id='session-decrement' onClick={props.subtract}>Less</div>
			</div>
		</div>
	)
}
export default SessionLength