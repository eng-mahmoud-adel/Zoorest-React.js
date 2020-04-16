import {dummyProviders} from "../DummyData/providers";
// import {dummyArticles} from './DummyData/articles'
import {HOMEPAGE_SPONSORED_PROVIDERS} from '../actions/home';
import Providers from "../../model/Providers";

const initialState = {
    sponsored: dummyProviders.slice(0, 4),
    all: dummyProviders,
};

const providersReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOMEPAGE_SPONSORED_PROVIDERS:
            return {
                ...state,
                sponsored: action.payload.map(item => new Providers(item))
            }

        default:
            break;
    }

    return state;
};

export default providersReducer
