import {combineReducers} from 'redux'

import authReducer from './auth'
import articlesReducer from "./articles/articles";
import singleArticleReducer from "./articles/singleArticlePage";
import providersReducer from "./providers/providers";
import singleProviderPage from "./providers/singleProviderPage";
import questionsReducer from "./questions/indexPage";
import testimonialsReducer from "./testimonials";
import postsReducer from "./posts";
import singleQuestionReducer from "./questions/singleQuestionPage";
import i18nReducer from "./i18n";
import modalReducer from "./modal";
import globalReducer from "./globals";
import pageReducer from "./pages";

const reducer = combineReducers({
    pages: pageReducer,
    singleQuestionPage: singleQuestionReducer,
    modal: modalReducer,

    articles: articlesReducer,
    singleArticlePage: singleArticleReducer,

    authUser: authReducer,
    providers: providersReducer,
    singleProviderPage: singleProviderPage,
    questions: questionsReducer,
    testimonials: testimonialsReducer,
    posts: postsReducer,
    i18n: i18nReducer,
    globals: globalReducer,
});

export default reducer
