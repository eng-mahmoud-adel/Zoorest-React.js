import {GET_ARTICLES, GET_MORE_ARTICLES} from "../actions/articles";
import {HOMEPAGE_RECENT_ARTICLES} from '../actions/home';
import Article from "../../model/Article";
import ModelPaginatedResource from '../../model/ModelPaginatedResource';
import {dummyArticles} from '../DummyData/articles'

const initialState = {
    recent: dummyArticles.splice(0,3),
    article: new ModelPaginatedResource(),
    all: [],
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ARTICLES:
            return {
                ...state,
                article: new ModelPaginatedResource(action.payload, Article),
                all: state.all.concat(action.payload.data.map(item => new Article(item))),
            };

        case GET_MORE_ARTICLES:
            return {
                ...state,
                article: new ModelPaginatedResource({
                    data: state.recent.data.concat(action.payload.data.map(item => new Article(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data.map(item => new Article(item)))
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

export default articlesReducer;
