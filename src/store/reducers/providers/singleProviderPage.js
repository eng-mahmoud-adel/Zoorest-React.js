import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import {GET_PROVIDER, SET_PROVIDER_LOADED, SET_PROVIDER_LOADING} from "../../actions/providers";
import User from "../../../model/User";
import {dummyArticles} from "../../DummyData/articles";
import {dummyQuestions} from "../../DummyData/questions";

const initialState = {
    model: {},
    loading: true,

    articles: new ModelPaginatedResource({data: dummyArticles}),
    loadingArticles: false,

    questions: new ModelPaginatedResource({data: dummyQuestions}),
    loadingQuestions: false,
};

const singleProviderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROVIDER:
            return {
                ...state,
                model: new User(action.payload),
            };
        case SET_PROVIDER_LOADED:
            return {
                ...state,
                loading: false
            };
        case SET_PROVIDER_LOADING:
            return {
                ...state,
                loading: true
            };

        // case GET_QUESTION_COMMENTS:
        //     return {
        //         ...state,
        //         articles: new ModelPaginatedResource(action.payload)
        //     };
        // case GET_MORE_QUESTION_COMMENTS:
        //     return {
        //         ...state,
        //         articles: new ModelPaginatedResource(action.payload)
        //     };
        // case GET_QUESTION_COMMENTS_LOADED:
        //     return {
        //         ...state,
        //         loadingArticles: false
        //     };
        default:
            break;
    }

    return state;
};

export default singleProviderReducer;
