import React from 'react';

const Home = () => {
	return (
		<React.Fragment>
			<div className='center-center'>
				<div className='quote'>
					<div className='quote-inside'>
						Many of life’s failures are people who did not realize how close
						they were to success when they gave up.
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
						part of was when I worked with a team to develop an application
						using the Spotify API, during the creation of this I found that I
						leaned towards software within my degree. While this may have been
						the case, there was always an itch for using my hands that was never
						scratched through software. This itch would soon be scratched as I
						started tinkering more with computers and laptops, even going as far
						as diagnosing why and how a family members computer turned off and
						was essentially "dead." Currently I am a junior IT technician with
						an aspiration of becoming a network engineer.
					</i>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
