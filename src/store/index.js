import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import { createBrowserHistory } from 'history'
import {createStore, compose, applyMiddleware} from 'redux'

import {dummyArticles} from './DummyData/articles'

const initialState = {
    homepage: {
        isLoading: false,
        heroIsLoading: false,
        hero: {
            title: "Test Title",
            description: "Doggo ipsum much ruin diet super chub shoober borking doggo tungg, super chub doing me a frighten. You are doin me a concern wrinkler long bois long water shoob dat tungg tho heckin good boys and girls pats, heckin good boys maximum borkdrive ur givin me a spook the neighborhood pupper he made many woofs. Puggorino what a nice floof long doggo I am bekom fat, shooberino ur givin me a spook. Bork yapper puggorino maximum borkdrive, long doggo pupper. woofer stop it fren. Sub woofer doing me a frighten pupperino fat boi adorable doggo puggo, long water shoob doing me a frighten heck.",
            image: ""
        }
    },
    providers: {
        sponsored: [{}, {}, {}, {}],
        all: [],
    },
    articles: {
        recent: dummyArticles.slice(0, 3),
        all: dummyArticles,
    },
    questions: {
        recent: [{}, {}, {}, {}],
        all: [],
    },
    posts: [
        {categoryName: "", post: {}},
        {categoryName: "", post: {}},
        {categoryName: "", post: {}},
        {categoryName: "", post: {}},
    ],
    testimonials: [{}, {}, {}, {}],
    authUser: null,
};

const reducer = (state = initialState, action) => {
    // if (action.type === "FETCH_ARTICLES_DATA") {
    //     return {
    //         articles: [
    //             {
    //                 id: 1,
    //                 title: "title 1",
    //             },
    //             {
    //                 id: 2,
    //                 title: "title 2",
    //             }
    //         ]
    //     }
    // }
    return state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const routerHistory = createBrowserHistory();

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk, routerMiddleware(routerHistory))
    )
);
store.dispatch({
    type: "FETCH_ARTICLES_DATA",

});

export default store
