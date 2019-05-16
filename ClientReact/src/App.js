import React from 'react';
import './css/bootstrap-grid.min.css';
import './css/member.css';

import { Switch, Route } from 'react-router-dom';

import { Login } from './components/Login/Login';
import Home from './pages/Home';
import {Register} from './components/RegisterForm'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default App;
