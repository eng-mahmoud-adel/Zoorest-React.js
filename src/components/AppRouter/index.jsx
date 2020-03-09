import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../../pages/Home/index';
import About from '../../pages/About/About';
import Article from '../../pages/Articles/Article';

const AppRouter = () => (
  <Fragment clas>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/about" component={About} />
      <Route path="/find" component={Article} />
    </Switch>
  </Fragment>
);

export default AppRouter;
