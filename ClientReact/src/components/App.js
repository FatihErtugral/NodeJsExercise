import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from '../components/pages/Home';
import '../css/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
