import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './view/Login';
import Home from './view/Home';
//import Reloj from './view/Auth';
import CreateClient from './view/CreateClient';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/client" component={CreateClient} />
        <Route path="/" component={Login} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
