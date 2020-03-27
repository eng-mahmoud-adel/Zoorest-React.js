import {
    GET_MORE_COMMON_QUESTIONS,
    GET_MORE_NOT_ANSWERED_QUESTIONS,
    GET_MORE_RECENT_QUESTIONS,
    GET_MOST_COMMON_QUESTIONS,
    GET_NOT_ANSWERED_QUESTIONS, GET_QUESTION, GET_QUESTION_LOADED, GET_QUESTION_LOADING,
    GET_RECENT_QUESTIONS
} from "../../actions/questions";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";

const initialState = {
    model: {},
};

const singleQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTION:
            return {
                ...state,
                model: action.payload,
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
        default:
            break;
    }

    return state;
};

export default singleQuestionReducer;
