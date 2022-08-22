import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<div className='container-table navigation'>
				<Link to='/' className='link-main'>
					Home
				</Link>
				<Link to='/projects' className='link-main'>
					Projects
				</Link>
			</div>
			<div className='col labels-social__links social'>
				<a href='https://www.linkedin.com/in/daniel-j-arpide/'>
					<i className='fab fa-linkedin social'></i>
				</a>
				<a href='https://github.com/Edipra98'>
					<i className='fab fa-github-square social'></i>
				</a>
			</div>
		</header>
	);
};

export default Header;
