import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../../pages/Home/index';
import About from '../../pages/About/About';
import AllArticlesContainer from '../../pages/Articles/index';
import SingleArticleContainer from '../../pages/Articles/details/index';
import CommentCards from '../../pages/ShowingCards/CommentCards';
import AdsCard from '../../pages/ShowingCards/AdsCard';
import Forms from '../../pages/ShowingForms/Forms';
import QuestionDetails from "../../pages/Questions/details";
import QuestionsAll from "../../pages/Questions";
import Doctors from '../../pages/FindDoctors';
import DoctorProfile from '../../pages/FindDoctors/Doctor/index';
import AllPostsContainer from '../../pages/Adoption/index';
import SinglePostContainer from '../../pages/Adoption/index';

const AppRouter = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/about" component={About}/>

            <Route exact path="/article" component={AllArticlesContainer}/>
            <Route path="/article/:id" component={SingleArticleContainer}/>

            <Route path="/post" component={AllPostsContainer}/>
            <Route path="/post/:id" component={SinglePostContainer}/>
            {/*<Route path="/demo-question" component={QuestionCards}/>*/}

            <Route path="/question/:id" component={QuestionDetails}/>
            <Route path="/question" component={QuestionsAll}/>

            <Route path="/comment" component={CommentCards}/>

            <Route exact path="/doctor" component={Doctors}/>
            <Route path="/doctor/profile/:id" component={DoctorProfile}/>
            {/*todo <AuthRoute
            path="/doctor/profile/:id/edit"
            component={}
            props={}
            isAuthenticated={check if auth user exists}
            />*/}

            <Route path="/advertisement" component={AdsCard}/>
            <Route path="/forms" component={Forms}/>
        </Switch>
    </Fragment>
);

export default AppRouter;
