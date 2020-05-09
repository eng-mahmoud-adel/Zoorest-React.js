import {
    GET_MORE_COMMON_QUESTIONS,
    GET_MORE_NOT_ANSWERED_QUESTIONS,
    GET_MORE_RECENT_QUESTIONS,
    GET_MOST_COMMON_QUESTIONS,
    GET_NOT_ANSWERED_QUESTIONS,
    GET_RECENT_QUESTIONS,
    QUESTION_CREATED,
    QUESTIONS_ANALYTICS,
    TOP_QUESTIONS,
} from "../../actions/questions";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";

import {HOMEPAGE_RECENT_QUESTIONS} from "../../actions/pages";
import Question from "../../../model/Question";

const initialState = {
    recent: new ModelPaginatedResource(),
    not_answered: new ModelPaginatedResource(),
    most_common: new ModelPaginatedResource(),
    recent_questions: [],
    top: new ModelPaginatedResource(),
    analytics: {
        total: 0,
        open: 0,
        closed: 0,
        answers: 0
    },
    all: [],
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_RECENT_QUESTIONS:
            return {
                ...state,
                recent: new ModelPaginatedResource(action.payload, Question),
                all: state.all.concat(action.payload.data.map(item => new Question(item)))
            };
        case GET_MORE_RECENT_QUESTIONS:
            return {
                ...state,
                recent: new ModelPaginatedResource({
                    data: state.recent.data.concat(action.payload.data.map(item => new Question(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data)

            };
        case GET_NOT_ANSWERED_QUESTIONS:
            return {
                ...state,
                not_answered: new ModelPaginatedResource(action.payload, Question),
                all: state.all.concat(action.payload.data.map(item => new Question(item)))

            };
        case GET_MORE_NOT_ANSWERED_QUESTIONS:
            return {
                ...state,
                not_answered: new ModelPaginatedResource({
                    data: state.not_answered.data.concat(action.payload.data.map(item => new Question(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data.map(item => new Question(item)))

            };
        case GET_MOST_COMMON_QUESTIONS:
            return {
                ...state,
                most_common: new ModelPaginatedResource(action.payload, Question),
                all: state.all.concat(action.payload.data.map(item => new Question(item)))

            };
        case GET_MORE_COMMON_QUESTIONS:
            return {
                ...state,
                most_common: new ModelPaginatedResource({
                    data: state.most_common.data.concat(action.payload.data.map(item => new Question(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                }),
                all: state.all.concat(action.payload.data.map(item => new Question(item)))
            };
        case HOMEPAGE_RECENT_QUESTIONS:
            return {
                ...state,
                recent_questions: action.payload.map(item => new Question(item)),
                all: state.all.concat(action.payload.map(item => new Question(item)))
            };

        case TOP_QUESTIONS:
            return {
                ...state,
                top: new ModelPaginatedResource(action.payload, Question),
            };

        case QUESTIONS_ANALYTICS:
            return {
                ...state,
                analytics: action.payload,
            };

        case QUESTION_CREATED:
            let newQuestion = new Question(action.payload);
            return {
                ...state,
                not_answered: new ModelPaginatedResource({
                    data: state.not_answered.data.concat(newQuestion),
                }),
                recent: new ModelPaginatedResource({
                    data: state.recent.data.concat(newQuestion),
                }),
                all: state.all.concat(newQuestion),
                analytics: {
                    ...state.analytics,
                    total: state.analytics + 1,
                    open: state.open + 1,
                },
            };
        default:
            break;
    }

    return state;
};

export default questionsReducer;
