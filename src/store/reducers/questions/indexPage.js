import {
    GET_MORE_COMMON_QUESTIONS,
    GET_MORE_NOT_ANSWERED_QUESTIONS,
    GET_MORE_RECENT_QUESTIONS,
    GET_MOST_COMMON_QUESTIONS,
    GET_NOT_ANSWERED_QUESTIONS,
    GET_RECENT_QUESTIONS
} from "../../actions/questions";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import Question from "../../../model/Question";
import {dummyQuestions} from "../../DummyData/questions";

const initialState = {
    recent: new ModelPaginatedResource(),
    not_answered: new ModelPaginatedResource(),
    most_common: new ModelPaginatedResource(),
    recent_questions: dummyQuestions,
    all: [],
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECENT_QUESTIONS:
            return {
                ...state,
                // recent: new ModelPaginatedResource(action.payload),
                recent: action.payload.map(item => (new ModelPaginatedResource(new Question(item)))),
                all: state.all.concat(action.payload.data)
            };
        case GET_MORE_RECENT_QUESTIONS:
            return {
                ...state,
                recent: new ModelPaginatedResource({
                    data: state.recent.data.concat(action.payload.data),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data)

            };
        case GET_NOT_ANSWERED_QUESTIONS:
            return {
                ...state,
                not_answered: new ModelPaginatedResource(action.payload),
                all: state.all.concat(action.payload.data)

            };
        case GET_MORE_NOT_ANSWERED_QUESTIONS:
            return {
                ...state,
                not_answered: new ModelPaginatedResource({
                    data: state.not_answered.data.concat(action.payload.data),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data)

            };
        case GET_MOST_COMMON_QUESTIONS:
            return {
                ...state,
                most_common: new ModelPaginatedResource(action.payload),
                all: state.all.concat(action.payload.data)

            };
        case GET_MORE_COMMON_QUESTIONS:
            return {
                ...state,
                most_common: new ModelPaginatedResource({
                    data: state.most_common.data.concat(action.payload.data),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data)
            };

        default:
            break;
    }

    return state;
};

export default questionsReducer;
