import React from 'react';

const Footer = () => {
	return (
		<footer
			style={{
				padding: '1rem',
				display: 'table',
				margin: 'auto',
				alignItems: 'center',
				textAlign: 'center',
				fontSize: '1rem',
				textShadow:
					'0 0 0.75rem black, 0 0 0.75rem black, 0 0 0.75rem black, 0 0 0.75rem black, 0 0 0.75rem black, 0 0 0.75rem black, 0 0 0.75rem black',
			}}
		>
			<div
				className={{
					display: 'tableCell',
					verticalAlign: 'middle',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<div>&copy; 2022 Daniel Arpide</div>
				<div>Contact Me: djarpide@gmail.com</div>
			</div>
		</footer>
	);
};

export default Footer;
