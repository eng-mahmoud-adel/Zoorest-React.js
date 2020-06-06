import {
    CREATE_ARTICLE_COMMENT,
    GET_ARTICLE_COMMENTS,
    GET_ARTICLES_LOADED,
    GET_ARTICLES_LOADING,
    GET_MORE_ARTICLE_COMMENTS,
    GET_SINGLE_ARTICLE,
    RELATED_ARTICLES,
    UPDATE_ARTICLE,
} from "../../actions/articles";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import Article from "../../../model/Article";
import Comment from "../../../model/Comment";

const initialState = {
    model: {},
    loading: true,
    comments: new ModelPaginatedResource(),
    loadingComments: true,

    related: new ModelPaginatedResource(),
    loadingRelated: true,
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

        case GET_ARTICLES_LOADED:
            return {
                ...state,
                loading: false
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

        case RELATED_ARTICLES:
            return {
                ...state,
                related: new ModelPaginatedResource(action.payload, Article)
            };

        case UPDATE_ARTICLE:
            return {
                ...state,
                model: new Article(action.payload)
            };


        case CREATE_ARTICLE_COMMENT:
            return {
                ...state,
                comments: new ModelPaginatedResource({
                    ...state.comments,
                    data: [new Comment(action.payload), ...state.comments.data],

                    // data: state.comments.data.concat(new Comment(action.payload)),
                }),
            };

        default:
            break;
    }

    return state;
};

export default singleArticleReducer;
