import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './view/Login';
import Home from './view/Home';
import CreateClient from './view/CreateClient';
import Calendar from './components/calendar/Calendar';
import CreateOrder from './view/CreateOrder';
import AppOrder from './view/AppOrder';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/appOrder" component={AppOrder}/>
        <Route path="/createOrder" component={CreateOrder}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/home" component={Home} />
        <Route path="/client" component={CreateClient} />
        <Route path="/" component={Login} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
