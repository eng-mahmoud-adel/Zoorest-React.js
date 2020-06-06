import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../../pages/home/index';
import AllArticlesContainer from '../../pages/articles/index';
import SingleArticleContainer from '../../pages/articles/id/index';

import QuestionDetails from "../../pages/question/id";
import QuestionsAll from "../../pages/question";
import Doctors from '../../pages/providers';
import DoctorProfile from '../../pages/providers/id/index';
// import AllPostsContainer from '../../pages/adoption/index';
// import SinglePostContainer from '../../pages/adoption/id/index';
import LoginPage from "../../pages/auth/login";
import SignUpPage from "../../pages/auth/signup";
import TypographyPage from "../../pages/demo/typography";
import PrivacyPage from "../../pages/privacy";
import TermsPage from "../../pages/terms";
import User from '../../pages/user/index';
import PetDetails from '../Cards/Pets/PetDetails/PetDetails';
import ProfileForm from '../Forms/ProfileForm';


const AppRouter = () => (
    <Switch>
            <Route exact path="/" component={HomeContainer}/>

            <Route exact path="/articles" component={AllArticlesContainer}/>
            <Route path="/articles/:id/:slug" component={SingleArticleContainer}/>

            {/*<Route exact path="/post" component={AllPostsContainer}/>*/}
            {/*<Route path="/post/:id" component={SinglePostContainer}/>*/}
            {/*<Route path="/demo-question" component={QuestionCards}/>*/}

            <Route path="/questions/:id/:slug" component={QuestionDetails}/>
            <Route path="/questions" component={QuestionsAll}/>


            <Route exact path="/providers" component={Doctors}/>
            <Route path="/providers/:id" component={DoctorProfile}/>

            <Route exact path="/user/:id" component={User}/>
            <Route path="/user/:id/pet-details" component={PetDetails}/>
            <Route path="/user/:id/edit-profile" component={ProfileForm}/>

            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignUpPage}/>

            <Route path="/privacy-policy" component={PrivacyPage}/>
            <Route path="/terms-and-conditions" component={TermsPage}/>

            <Route path="/demo/typography" component={TypographyPage}/>

            {/*todo <AuthRoute
            path="/providers/:id/edit"
            component={}
            props={}
            isAuthenticated={check if auth user exists}
            />*/}

    </Switch>
);

export default AppRouter;
