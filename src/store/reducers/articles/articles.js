import {GET_ARTICLES, GET_MORE_ARTICLES} from "../../actions/articles";
import {HOMEPAGE_RECENT_ARTICLES} from '../../actions/home';
import Article from "../../../model/Article";
import ModelPaginatedResource from '../../../model/ModelPaginatedResource';

const initialState = {
    recent: [],
    article: new ModelPaginatedResource(),
    all: new ModelPaginatedResource(),
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ARTICLES:
            return {
                ...state,
                article: new ModelPaginatedResource(action.payload, Article),
                all: new ModelPaginatedResource({
                    data: state.all.data.concat(action.payload.data.map(item => new Article(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
            };

        case GET_MORE_ARTICLES:
            return {
                ...state,
                article: new ModelPaginatedResource({
                    data: state.article.data.concat(action.payload.data.map(item => new Article(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: new ModelPaginatedResource({
                    data: state.all.data.concat(action.payload.data.map(item => new Article(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
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
