import {combineReducers} from 'redux'

import authReducer from './auth'
import articlesReducer from "./articles/articles";
import singleArticleReducer from "./articles/singleArticlePage";
import providersReducer from "./providers/providers";
import singleProviderPage from "./providers/singleProviderPage";
import questionsReducer from "./questions/indexPage";
import testimonialsReducer from "./testimonials";
import postsReducer from "./adoption/posts";
import singlePostReducer from "./adoption/singlePostPage";
import singleQuestionReducer from "./questions/singleQuestionPage";
import i18nReducer from "./i18n";
import modalReducer from "./modal";
import globalReducer from "./globals";
import pageReducer from "./pages";
import notyReducer from "./noty";
import singleUserReducer from './users/singleUserPage';

const reducer = combineReducers({
    pages: pageReducer,
    singleQuestionPage: singleQuestionReducer,
    modal: modalReducer,

    articles: articlesReducer,
    singleArticlePage: singleArticleReducer,

    authUser: authReducer,

    singleUserPage: singleUserReducer,

    providers: providersReducer,
    singleProviderPage: singleProviderPage,
    questions: questionsReducer,
    testimonials: testimonialsReducer,

    posts: postsReducer,
    singlePostReducer: singlePostReducer,

    noty: notyReducer,
    i18n: i18nReducer,
    globals: globalReducer,
});

export default reducer
