import {combineReducers} from 'redux'

import authReducer from './auth'
import articlesReducer from "./articles";
import homePageReducer from "./page-reducers/homepage";
import providersReducer from "./providers";
import questionsReducer from "./questions";
import testimonialsReducer from "./testimonials";
import postsReducer from "./posts";
import questionsPageReducer from "./page-reducers/questions_page";

const reducer = combineReducers({
    homepage: homePageReducer,
    questionsPage: questionsPageReducer,

    articles: articlesReducer,
    authUser: authReducer,
    providers: providersReducer,
    questions: questionsReducer,
    test: testimonialsReducer,
    posts: postsReducer,
});

export default reducer
