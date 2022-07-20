import React from 'react';

const Home = () => {
	return (
		<React.Fragment>
			<div className='quote'>
				<div className='quote-inside'>
					Many of life’s failures are people who did not realize how close they
					were to success when they gave up.
				</div>
				<div className='author'>&mdash; Thomas A. Edison &mdash;</div>
			</div>
			<div className='about'>
				<p className='about-me'>About me:</p>
				<i className='tab'>
					&ensp;My name is Daniel Arpide and I'm a graduate of Wentworth
					Institute of Technology with a degree in Computer Engineering. While
					having a curriculum based in both Computer Science and computer
					hardware, I have always had a stronger interest in the Computer
					Science side of the courses. In college the largest project I was a
					part of was when I worked with a team to develop an application using
					the Spotify API, while creating this I found out that programming was
					the path I wanted to take in my career. Currently junior software
					engineer focusing in web development.
				</i>
			</div>
		</React.Fragment>
	);
};

export default Home;
