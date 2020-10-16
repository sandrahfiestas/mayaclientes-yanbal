import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './view/Login';
import Home from './view/Home';
import CreateClient from './view/CreateClient';
import CreateOrder  from './view/CreateOrder';
import Oportunity from './view/Oportunity';
import './sass/index.scss';


const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/client" component={CreateClient} />
        <Route path="/order" component={CreateOrder} />
        <Route path="/oportunity" component={Oportunity}/>
        <Route path="/" component={Login} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
