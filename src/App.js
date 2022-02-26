import './index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Frontend from './components/pages/FrontEnd';
import Backend from './components/pages/BackEnd';
import Fullstack from './components/pages/FullStack';
export const App =() => {
  return (
    <>
      <Router>
      <Switch>
        <Route path='/' exact component={Frontend} />
        <Route path='/frontend' exact component={Frontend} />
        <Route path='/fullstack' component={Fullstack} />
        <Route path='/backend' component={Backend} />
      </Switch>
    </Router>
    </>
  );
}
