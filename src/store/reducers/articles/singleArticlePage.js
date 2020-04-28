import {
    GET_ARTICLE_COMMENTS,
    GET_ARTICLES_LOADING,
    GET_MORE_ARTICLE_COMMENTS,
    GET_SINGLE_ARTICLE,
} from "../../actions/articles";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import Article from "../../../model/Article";
import Comment from "../../../model/Comment";

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
                comments: new ModelPaginatedResource(action.payload, Comment)
            };

        case GET_MORE_ARTICLE_COMMENTS:
            return {
                ...state,
                comments: new ModelPaginatedResource({
                    data: state.comments.data.concat(action.payload.data.map(item => new Comment(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
            };


        default:
            break;
    }

    return state;
};

export default singleArticleReducer;
