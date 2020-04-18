import {
    CREATE_QUESTION_COMMENT,
    GET_MORE_QUESTION_COMMENTS,
    GET_QUESTION,
    GET_QUESTION_COMMENTS,
    GET_QUESTION_COMMENTS_LOADED,
    GET_QUESTION_LOADED,
    GET_QUESTION_LOADING,
    UPDATE_QUESTION,
} from "../../actions/questions";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import Question from "../../../model/Question";

const initialState = {
    model: {},
    loading: true,

    comments: new ModelPaginatedResource(),
    loadingComments: true,
};

const singleQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTION:
            return {
                ...state,
                model: new Question(action.payload),
            };
        case UPDATE_QUESTION:
            return {
                ...state,
                model: new Question(action.payload),
            };
        case GET_QUESTION_LOADED:
            return {
                ...state,
                loading: false
            };
        case GET_QUESTION_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_QUESTION_COMMENTS:
            return {
                ...state,
                comments: new ModelPaginatedResource(action.payload)
            };
        case GET_MORE_QUESTION_COMMENTS:
            return {
                ...state,
                comments: new ModelPaginatedResource(action.payload)
            };
        case GET_QUESTION_COMMENTS_LOADED:
            return {
                ...state,
                loadingComments: false
            };
        case CREATE_QUESTION_COMMENT:
            return {
                ...state,
                comments: new ModelPaginatedResource({
                    ...state.comments,
                    data: [new Question(action.payload), ...state.comments.data],
                }),
            };

        default:
            break;
    }

    return state;
};

export default singleQuestionReducer;
