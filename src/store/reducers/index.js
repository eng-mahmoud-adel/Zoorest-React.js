import {combineReducers} from 'redux'

import authReducer from './auth'
import articlesReducer from "./articles/articles";
import singleArticleReducer from "./articles/singleArticlePage";
import homePageReducer from "./page-reducers/homepage";
import providersReducer from "./providers";
import questionsReducer from "./questions/indexPage";
import testimonialsReducer from "./testimonials";
import postsReducer from "./posts";
import questionsPageReducer from "./page-reducers/questions_page";
import singleQuestionReducer from "./questions/singleQuestionPage";
import i18nReducer from "./i18n";
import modalReducer from "./modal";

const reducer = combineReducers({
    homepage: homePageReducer,
    questionsPage: questionsPageReducer,
    singleQuestionPage: singleQuestionReducer,
    modal: modalReducer,

    articles: articlesReducer,
    singleArticlePage: singleArticleReducer,

    authUser: authReducer,
    providers: providersReducer,
    questions: questionsReducer,
    testimonials: testimonialsReducer,
    posts: postsReducer,
    i18n: i18nReducer,
});

export default reducer
