// import {dummyArticles} from './DummyData/articles'
import {HOMEPAGE_SPONSORED_PROVIDERS} from '../../actions/home';
import User from "../../../model/User";
import ModelPaginatedResource from '../../../model/ModelPaginatedResource';

import {
    GET_ARTICLE_PROVIDERS,
    GET_MORE_ARTICLE_PROVIDERS,
    GET_MORE_PROVIDERS,
    GET_MORE_QUESTION_PROVIDERS,
    GET_PROVIDERS,
    GET_QUESTION_PROVIDERS
} from '../../actions/providers';

const initialState = {
    sponsored: new ModelPaginatedResource(),
    all: new ModelPaginatedResource(),
};

const providersReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_SPONSORED_PROVIDERS:
            return {
                ...state,
                sponsored: new ModelPaginatedResource({
                    data: state.all.data.concat(action.payload.map(item => new User(item))),
                })
            }

        case GET_PROVIDERS:
            return {
                ...state,
                all: new ModelPaginatedResource(action.payload, User),
                // all: state.all.concat(action.payload.data.map(item => new User(item)))
            }

        case GET_MORE_PROVIDERS:
            return {
                ...state,
                all: new ModelPaginatedResource({
                    data: state.all.data.concat(action.payload.data.map(item => new User(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                })
            }

        case GET_QUESTION_PROVIDERS:
            return {
                ...state,

            }

        case GET_MORE_QUESTION_PROVIDERS:
            return {
                ...state,

            }

        case GET_ARTICLE_PROVIDERS:
            return {
            ...state,

            }

        case GET_MORE_ARTICLE_PROVIDERS:
            return {
            ...state,

            }

        default:
            break;
    }

    return state;
};

export default providersReducer
