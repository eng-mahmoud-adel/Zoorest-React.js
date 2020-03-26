import {dummyProviders} from "../DummyData/providers";
// import {dummyArticles} from './DummyData/articles'

const initialState = {
    sponsored: dummyProviders.slice(0, 4),
    all: dummyProviders,
};

const providersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            break;
    }

    return state;
};

export default providersReducer
