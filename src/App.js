import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/UI/Header';
import Projects from './pages/Projects';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './components/UI/Footer';

const App = () => {
	return (
		<div className='main'>
			<div className='main-container'>
				<Header />
				<main>
					<Switch>
						<Route path='/' exact>
							<Redirect to='/home' />
						</Route>
						<Route path='/home' exact>
							<Home />
						</Route>
						<Route path='/projects' exact>
							<Projects />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default App;
