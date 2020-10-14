import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './view/Login';
import CreateClient from './view/CreateClient';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/client" exact component={CreateClient} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
