import React from 'react';
const PlayButton = () => {
	return(
		<svg>
			<circle 
				id='circle'
				cx="51" cy="51" r="50" 
				stroke-dasharray="314" 
				stroke-dashoffset="0"
				style={{
					strokeWidth:'2px',
					stroke:'white'
				}}
					/>
			<line 
				id='line1' x1='38' y1='30'
				x2='38' y2='70'
				style={{
					strokeWidth:'4px',
					stroke:'white',
					strokeLinecap:'round'
				}}
			/>	
			<path 
				id='line2' 
				d="M 38 30 L 70 50 L 38 70"
				rx="10" ry="10"
				style={{
					strokeWidth:'4px',
					stroke:'white',
					fill:'white',
					strokeLinejoin:'round',
					strokeLinecap:'round'
				}}>
				
			</path>	
			
		</svg>
	)
}
export default PlayButton