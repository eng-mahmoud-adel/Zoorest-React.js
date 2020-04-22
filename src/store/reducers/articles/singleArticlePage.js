import {
    GET_SINGLE_ARTICLE,
    GET_ARTICLE_COMMENTS,
    GET_MORE_ARTICLE_COMMENTS,
    GET_ARTICLES_LOADING,
} from "../../actions/articles";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import Article from "../../../model/Article";

const initialState = {
    model: new Article(),
    loading: true,
    comments: new ModelPaginatedResource(),
    loadingComments: true,
};

const singleArticleReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SINGLE_ARTICLE: 
            return {
                ...state,
                model: new Article(action.payload)
            };

        case GET_ARTICLES_LOADING: 
            return {
                ...state,
                loading: true
            };

        case GET_ARTICLE_COMMENTS:
            return {
                ...state,
                comments: new ModelPaginatedResource(action.payload)
            };

        case GET_MORE_ARTICLE_COMMENTS:
            return {
                ...state,
                comments: new ModelPaginatedResource(action.payload)
            };
        

        default:
            break;
    }

    return state;
};

export default singleArticleReducer;