import {GET_ARTICLES, GET_RECENT_ARTICLES} from "../actions/articles";
import {dummyArticles} from '../DummyData/articles'
import Article from "../../model/Article";
import {HOMEPAGE_RECENT_ARTICLES} from '../actions/home';

const initialState = {
    recent: dummyArticles.splice(0,3),
    all: [],
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECENT_ARTICLES:
            return {
                ...state,
                recent: action.payload.map(item => new Article(item)),
            };

        case GET_ARTICLES:
            return {
                ...state,
                all: action.payload,
            };

            case HOMEPAGE_RECENT_ARTICLES:
                return {
                    ...state,
                    recent: action.payload.map(item => new Article(item)),
                };

        default:
            break;
    }

    return state;
};

export default articlesReducer
