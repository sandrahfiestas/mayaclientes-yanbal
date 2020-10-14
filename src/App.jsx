import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import Login from './view/Login';
import Home from './view/Home';
import CreateClient from './view/CreateClient';
import './sass/index.scss';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/client" exact component={CreateClient} />
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
