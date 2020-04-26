import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import {
    GET_PROVIDER, 
    SET_PROVIDER_LOADED, 
    SET_PROVIDER_LOADING,
    GET_ARTICLE_PROVIDERS,
    GET_MORE_ARTICLE_PROVIDERS,
    GET_QUESTION_PROVIDERS,
    GET_MORE_QUESTION_PROVIDERS,
} from "../../actions/providers";
import User from "../../../model/User";
import {dummyArticles} from "../../DummyData/articles";
import {dummyQuestions} from "../../DummyData/questions";
import Question from "../../../model/Question";
import Article from "../../../model/Article";

const initialState = {
    model: new User(),
    loading: true,

    articles: new ModelPaginatedResource(),
    loadingArticles: false,

    questions: new ModelPaginatedResource(),
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

        case GET_QUESTION_PROVIDERS:
            return {
                ...state,
                questions: new ModelPaginatedResource(action.payload)
            }

        case GET_MORE_QUESTION_PROVIDERS:
            return {
                ...state,
                questions: new ModelPaginatedResource({
                    data: state.questions.data.concat(action.payload.data.map(item => new Question(item))),
                    links: new ModelPaginatedResource(action.payload.links),
                    meta: new ModelPaginatedResource(action.payload.meta)
                })
            }

        case GET_ARTICLE_PROVIDERS:
            return {
            ...state,
            articles: new ModelPaginatedResource(action.payload)
            }

        case GET_MORE_ARTICLE_PROVIDERS:
            return {
            ...state,
            articles: new ModelPaginatedResource({
                data: state.questions.data.concat(action.payload.data.map(item => new Article(item))),
                links: new ModelPaginatedResource(action.payload.links),
                meta: new ModelPaginatedResource(action.payload.meta)
            })
            }

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
