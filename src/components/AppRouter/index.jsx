import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Policy from '../../pages/Policy';
// import Login from '../../pages/Login';
// import Thread from '../../pages/Thread'
// import Register from '../../pages/Register';

const AppRouter = () => (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/policy" component={Policy} />
  </Fragment>
);

export default AppRouter;
