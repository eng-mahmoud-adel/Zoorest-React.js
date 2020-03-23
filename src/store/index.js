import thunk from 'redux-thunk'

import {createStore, compose, applyMiddleware} from 'redux'

import {dummyArticles} from './DummyData/articles'
import {dummyQuestions} from './DummyData/questions'
import {dummyProviders} from './DummyData/providers'
import {dummyTestimonials} from './DummyData/testimonials'
import {dummyPosts} from './DummyData/posts'

const initialState = {
    homepage: {
        isLoading: false,
        heroIsLoading: false,
        hero: {
            title: "Healthy pets are Happy pets ",
            description: "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs",
            image: ""
        }
    },
    providers: {
        sponsored: dummyProviders.slice(0, 4),
        all: dummyProviders,
    },
    articles: {
        recent: dummyArticles.slice(0, 3),
        all: dummyArticles,
    },
    questions: {
        recent: dummyQuestions.slice(0, 4),
        all: dummyQuestions,
    },
    posts: {
        sell: dummyPosts.filter(post => post.post_type === "sell"),
        adopt: dummyPosts.filter(post => post.post_type === "adopt"),
        mate: dummyPosts.filter(post => post.post_type === "mate"),
        lost: dummyPosts.filter(post => post.post_type === "lost"),
        product: dummyPosts.filter(post => post.post_type === "product"),
       // all: dummyPosts,
    },
    testimonials: dummyTestimonials,
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


const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
store.dispatch({
    type: "FETCH_ARTICLES_DATA",

});

export default store
