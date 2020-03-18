import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../../pages/Home/index';
import About from '../../pages/About/About';
import ArticleCards from '../../pages/ShowingCards/ArticleCards';
import PostCards from '../../pages/ShowingCards/PostCards';
import QuestionCards from '../../pages/ShowingCards/QuestionCards';
import CommentCards from '../../pages/ShowingCards/CommentCards';
import AdsCard from '../../pages/ShowingCards/AdsCard';
import Forms from '../../pages/ShowingForms/Forms';

const AppRouter = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/about" component={About} />
      <Route path="/article" component={ArticleCards} />
      <Route path="/post" component={PostCards} />
      <Route path="/question" component={QuestionCards} />
      <Route path="/comment" component={CommentCards} />
      <Route path="/advertisement" component={AdsCard} />
      <Route path="/forms" component={Forms} />
    </Switch>
  </Fragment>
);

export default AppRouter;
