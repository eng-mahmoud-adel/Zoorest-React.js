import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Policy from '../../pages/Policy';
// import Login from '../../pages/Login';
// import Thread from '../../pages/Thread'
// import Register from '../../pages/Register';

import About from '../../pages/About/About';

const AppRouter = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/policy" component={Policy} />
      <Route path="/about" component={About} />
    </Switch>
  </Fragment>
);

export default AppRouter;
