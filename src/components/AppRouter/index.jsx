import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../../pages/Home/index';
import About from '../../pages/About/About';

const AppRouter = () => (
  <Fragment clas>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/about" component={About} />
    </Switch>
  </Fragment>
);

export default AppRouter;
