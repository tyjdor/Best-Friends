import React from 'react';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import BFF from './Components/bff';
import About from './Components/about';
import Explore from './Components/explore';
import Contact from './Components/contact';
import Login from './Components/login';
import Logout from './Components/logout';
import GuardedRoute from './Components/guardroute';
import Unauthorized from './Components/unauthorized';

function App({ authenticated }) {

	return (
		<>

			<Router>
				<div style={{ textAlign: 'center' }}>
					<Button><Link to="/">About</Link></Button>
					<Button><Link to="/explore">Explore</Link></Button>
					<Button><Link to="/bff">Your BFFs</Link></Button>
					<Button><Link to="/contact">Contact</Link></Button>
					<Switch>
						<Route exact path="/" component={About} />
						<Route path="/about" component={About} />
						<Route path="/explore" component={Explore} />
						<GuardedRoute path='/bff' component={BFF} auth={authenticated} />
						<Route path="/contact" component={Contact} />
						<Route path="/unauthorized" component={Unauthorized} />
						<Route path="/" component={Notfound} />
					</Switch>
				</div>
			</Router>
			<Login />
			<Logout />

		</>
	);
}



export default connect((state /*, ownProps*/) => {
	return {
		authenticated: state.authenticated
	};
})(App);