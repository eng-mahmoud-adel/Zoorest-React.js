import {GET_ARTICLES, GET_MORE_ARTICLES, TOP_ARTICLES} from "../../actions/articles";
import {HOMEPAGE_RECENT_ARTICLES} from '../../actions/pages';
import Article from "../../../model/Article";
import ModelPaginatedResource from '../../../model/ModelPaginatedResource';

const initialState = {
    recent: [],
    article: new ModelPaginatedResource(),
    all: new ModelPaginatedResource(),
    top: new ModelPaginatedResource(),
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


        case TOP_ARTICLES:
            return {
                ...state,
                top: new ModelPaginatedResource(action.payload, Article),
            };


        default:
            break;
    }

    return state;
};

export default articlesReducer;
