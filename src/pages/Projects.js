import React from 'react';

import randGen from '../images/random_gen.png';

const Projects = () => {
	return (
		<React.Fragment>
			<div class='projects'>
				<u>
					<i>Projects</i>
				</u>
			</div>
			<div class='works'>
				<div class='col'>
					<a href='https://edipra98.github.io/Main-SW-Characters/'>
						<img
							src='https://images.unsplash.com/flagged/photo-1589829482673-03413c918c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80'
							alt=''
							class='work-links'
						/>
					</a>
					<div class='project'>Main Star Wars Characters</div>

					<a href='https://github.com/Edipra98/Main-SW-Characters' class='code'>
						&lt;<span class='red-text'>Code</span> /&gt;
					</a>
					<a
						href='https://edipra98.github.io/Main-SW-Characters/'
						class='webpage'
					>
						&lt;<span class='red-text'>Live Site</span> /&gt;
					</a>
				</div>
				<div class='col'>
					<img
						src='https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
						alt=''
						class='work-links'
					/>

					<div class='project'>Movie Browser</div>

					<a href='https://github.com/Edipra98/moviebrowser' class='code'>
						&lt;<span class='red-text'>Code</span> /&gt;
					</a>
				</div>
				<div class='col'>
					<img
						src={randGen}
						alt='Star Wars Storm Trooper and Pokemon Cards'
						class='work-links'
					/>
					<div class='project'>Random Character Generator</div>

					<a
						href='https://github.com/Edipra98/react-random-generator'
						class='code'
					>
						&lt;<span class='red-text'>Code</span> /&gt;
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
