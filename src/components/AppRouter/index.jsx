import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../../pages/Home/index';
import About from '../../pages/About/About';
import ArticleCards from '../../pages/ShowingCards/ArticleCards';
import PostCards from '../../pages/ShowingCards/PostCards';
import CommentCards from '../../pages/ShowingCards/CommentCards';
import AdsCard from '../../pages/ShowingCards/AdsCard';
import Forms from '../../pages/ShowingForms/Forms';
import singleQuestionReducer from "../../pages/Questions/details";
import AllQuestionsContainer from "../../pages/Questions";
import Doctors from '../../pages/FindDoctors/Doctors';
import DoctorProfile from '../../pages/FindDoctors/Doctor/index';

const AppRouter = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/article" component={ArticleCards}/>
            <Route path="/post" component={PostCards}/>
            {/*<Route path="/demo-question" component={QuestionCards}/>*/}

            <Route path="/question/:id" component={singleQuestionReducer}/>
            <Route path="/question" component={AllQuestionsContainer}/>

            <Route path="/comment" component={CommentCards}/>

            <Route exact path="/doctor" component={Doctors}/>
            <Route path="/doctor/profile/:id" component={DoctorProfile}/>

            <Route path="/advertisement" component={AdsCard}/>
            <Route path="/forms" component={Forms}/>
        </Switch>
    </Fragment>
);

export default AppRouter;
