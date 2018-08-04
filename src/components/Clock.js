import React from 'react';
// this should include the timer number being decremented
// and also the 'timer-label', maybe with a string of 'Countdown?', or "Time left?"
const Clock = (props) => {
	return (
		<div className='clock'>
		<div id='timer-label'>{props.timerLabel?'Session':'Break'}
		</div>
		{props.countdown}
		{props.children}
		</div>
	)
}
export default Clock