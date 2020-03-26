import {GET_ARTICLES, GET_RECENT_ARTICLES} from "../actions/articles";
// import {dummyArticles} from './DummyData/articles'

const initialState = {
    recent: [],
    all: [],
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECENT_ARTICLES:
            return {
                ...state,
                recent: action.payload,
            };
        case GET_ARTICLES:
            return {
                ...state,
                all: action.payload,
            };
        default:
            break;
    }

    return state;
};

export default articlesReducer
