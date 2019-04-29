import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from '../components/pages/Home';
import RegisterForm  from '../components/pages/RegisterForm';
import LoginForm  from '../components/pages/LoginForm';
import '../css/App.css';
import '../css/bootstrap-grid.min.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
  </Switch>
);

export default App;
