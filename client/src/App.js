import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';

const App = () => (
  <Router>
        <Route exact path="/" component={home} />
    
  </Router>
);

export default App;
