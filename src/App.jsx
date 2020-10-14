import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './view/Login';
import './sass/index.scss';

 
const App = () => ( 
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
     

    </HashRouter>
  </Router>
);

export default App;
