import {dummyQuestions} from "../DummyData/questions";
import {GET_MOST_COMMON_QUESTIONS, GET_NOT_ANSWERED_QUESTIONS, GET_RECENT_QUESTIONS} from "../actions/questions";

const initialState = {
    recent: [],
    not_answered: [],
    recent_questions: [],
    most_common: [],
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECENT_QUESTIONS:
            return {
                ...state,
                recent: [...state.recent, ...action.payload.data],
            };
        case GET_NOT_ANSWERED_QUESTIONS:
            return {
                ...state,
                not_answered: [...state.not_answered, ...action.payload.data],
            };
        case GET_MOST_COMMON_QUESTIONS:
            return {
                ...state,
                most_common: [...state.most_common, ...action.payload.data],
            };
        default:
            break;
    }

    return state;
};

export default questionsReducer;
