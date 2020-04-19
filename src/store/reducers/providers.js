import {dummyProviders} from "../DummyData/providers";
// import {dummyArticles} from './DummyData/articles'
import {HOMEPAGE_SPONSORED_PROVIDERS} from '../actions/home';
import User from "../../model/User";
import ModelPaginatedResource from '../../model/ModelPaginatedResource';

import {GET_PROVIDERS, GET_MORE_PROVIDERS} from '../actions/providers';

const initialState = {
    sponsored: new ModelPaginatedResource(),
    all: [],
};

const providersReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOMEPAGE_SPONSORED_PROVIDERS:
            return {
                ...state,
                sponsored: action.payload.data.map(item => new User(item))
            }

        case GET_PROVIDERS:
            return {
                ...state,
                sponsored: new ModelPaginatedResource(action.payload, User),
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
