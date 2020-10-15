import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './view/Login';
import Home from './view/Home';
import CreateClient from './view/CreateClient';
import Calendar from './components/date/Calendar';
import CreateOrder from './view/CreateOrder';
import AddOrder from './view/AddOrder';
import borrar from './components/StepFour';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
      <Route path="/appOrder" component={AddOrder}/>
        <Route path="/createOrder" component={CreateOrder}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/home" component={Home} />
        <Route path="/client" component={CreateClient} />
        {/* <Route path="/" component={Login} /> */}
        <Route path="/" component={borrar} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
