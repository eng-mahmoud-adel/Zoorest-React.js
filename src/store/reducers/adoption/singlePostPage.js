import {
    GET_SINGLE_POST,
    GET_POSTS_LOADING,
    GET_POST_COMMENTS,
    GET_MORE_POST_COMMENTS,
} from "../../actions/posts";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import Post from "../../../model/Post";

const initialState = {
    model: new Post(),
    loading: true,
    comments: new ModelPaginatedResource(),
    loadingComments: true,
};

const singlePostReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SINGLE_POST: 
            return {
                ...state,
                model: new Post(action.payload)
            };

        case GET_POSTS_LOADING: 
            return {
                ...state,
                loading: false
            };

        case GET_POST_COMMENTS:
            return {
                ...state,
                comments: new ModelPaginatedResource(action.payload),
            };

        case GET_MORE_POST_COMMENTS:
            return {
                ...state,
                comments: state.comments.concat(new ModelPaginatedResource(action.payload))
            };
        

        default:
            break;
    }

    return state;
};

export default singlePostReducer;