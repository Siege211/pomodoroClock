import React from 'react';
import PlayButton from './PlayButton.js'
import PauseButton from './PauseButton.js'
//Buttons adapted from 'SVG Animated Play Pause Button' by Ryan Haider on codepen.io
const DynamicButton = (props) => {
	return (
		<div>
			<div 
			id='start_stop'
			onClick={props.startTimer}>
				{!props.buttonRender ? <PlayButton/>:<PauseButton/>}
			</div>
		</div>
	)
}
export default DynamicButton