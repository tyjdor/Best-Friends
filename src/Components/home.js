import React from "react";
import Button from '@material-ui/core/Button';
import About from './about'
import Explore from './explore'
import BFF from './bff'
import Contact from './contact'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Home() {
  return (
    <Router>
      <div style={{textAlign:'center'}}>
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
          <Route path="/bff">
            <BFF />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}







