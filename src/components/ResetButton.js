import React from 'react';
const ResetButton = (props) => {
	return (
		<div id='reset'
		onClick={props.reset}>
		<div 
		className='pointers'
		style={{
			borderRadius: '95%',
			backgroundColor: 'black',
			height: '100px',
			width: '100px',
			color: 'white',
			display:'flex',
			fontSize: '25px',
			position: 'relative',
			bottom:'175px',
			left: '400px',
			justifyContent:'center',alignItems:'center'
		}}>Reset</div>
		</div>
	)
}
export default ResetButton