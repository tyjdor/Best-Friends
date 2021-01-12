import React from 'react';
import BFF from './Components/bff';
import About from './Components/about';
import Explore from './Components/explore';
import Contact from './Components/contact';
import Login from './Components/login';
import Logout from './Components/logout';
import GuardedRoute from './Components/guardroute';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
	return (
		<>
			<Router>
				<div style={{ textAlign: 'center' }}>
					<Button><Link to="/about">About</Link></Button>
					<Button><Link to="/explore">Explore</Link></Button>
					<Button><Link to="/bff">Your BFFs</Link></Button>
					<Button><Link to="/contact">Contact</Link></Button>
					<Switch>
						<Route exact path="/about">
							<About />
						</Route>
						<Route path="/explore">
							<Explore />
						</Route>
						<Route path="/bff" >
							<BFF />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
					<GuardedRoute path='/bff' component={BFF} auth={false} />

				</div>
			</Router>

			<Login />
			<Logout />

		</>
	);
}