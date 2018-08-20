import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from './components/Grid'
import Banner from './components/Banner/Banner.js';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => (
  <Router>
  	<Container>
	  	<Banner />
	  	<Switch>
	  		<Route exact path="/" component={SignIn} />
	  		<Route exact path="/SignUp" component={SignUp} />
	    	<Route exact path="/Home" component={Home} />
	    </Switch>
    </Container>
  </Router>
);

export default App;
