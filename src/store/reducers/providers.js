// import {dummyArticles} from './DummyData/articles'
import {HOMEPAGE_SPONSORED_PROVIDERS} from '../actions/home';
import User from "../../model/User";
import ModelPaginatedResource from '../../model/ModelPaginatedResource';

import {GET_MORE_PROVIDERS, GET_PROVIDERS} from '../actions/providers';

const initialState = {
    sponsored: [],
    all: [],
};

const providersReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_SPONSORED_PROVIDERS:
            return {
                ...state,
                sponsored: action.payload.map(item => new User(item))
            }

        case GET_PROVIDERS:
            return {
                ...state,
                sponsored: action.payload.map(item => new User(item)),
                all: state.all.concat(action.payload.data.map(item => new User(item)))
            }

        case GET_MORE_PROVIDERS:
            return {
                ...state,
                sponsored: new ModelPaginatedResource({
                    data: state.sponsored.data.concat(action.payload.data.map(item => new User(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data)
            }

        default:
            break;
    }

    return state;
};

export default providersReducer
