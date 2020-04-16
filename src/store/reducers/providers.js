import {dummyProviders} from "../DummyData/providers";
// import {dummyArticles} from './DummyData/articles'
import {HOMEPAGE_SPONSORED_PROVIDERS} from '../actions/home';
import User from "../../model/User";

const initialState = {
    sponsored: dummyProviders.slice(0, 4),
    all: dummyProviders,
};

const providersReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOMEPAGE_SPONSORED_PROVIDERS:
            return {
                ...state,
                sponsored: action.payload.map(item => new User(item))
            }

        default:
            break;
    }

    return state;
};

export default providersReducer
