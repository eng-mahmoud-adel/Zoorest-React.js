import ModelPaginatedResource from "../../../model/ModelPaginatedResource";
import {
    BOOK_APPOINTMENT,
    GET_ARTICLE_PROVIDERS,
    GET_MORE_ARTICLE_PROVIDERS,
    GET_MORE_QUESTION_PROVIDERS,
    GET_PROVIDER,
    GET_PROVIDER_APPOINTMENTS,
    GET_PROVIDER_APPOINTMENTS_LOADING,
    GET_QUESTION_PROVIDERS,
    SET_PROVIDER_LOADED,
    SET_PROVIDER_LOADING,
} from "../../actions/providers";
import User from "../../../model/User";
import Question from "../../../model/Question";
import Article from "../../../model/Article";
import Appointment from "../../../model/Appointment";

const initialState = {
    model: new User(),
    loading: true,

    articles: new ModelPaginatedResource(),
    loadingArticles: false,

    questions: new ModelPaginatedResource(),
    loadingQuestions: false,

    appointments: [],
    loadingAppointments: false,
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
                questions: new ModelPaginatedResource(action.payload, Question)
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
                    data: state.articles.data.concat(action.payload.data.map(item => new Article(item))),
                    links: new ModelPaginatedResource(action.payload.links),
                    meta: new ModelPaginatedResource(action.payload.meta)
                })
            }

        case GET_PROVIDER_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload.map(appointment => new Appointment(appointment)),
                loadingAppointments: false,
            }
        case GET_PROVIDER_APPOINTMENTS_LOADING:
            return {
                ...state,
                loadingAppointments: true,
            }

        case BOOK_APPOINTMENT:
            return {
                ...state,
                appointments: state.appointments.map((item, index) => {

                    //update only the item where the state id equals the new item id
                    if (item.id === action.payload.id) {
                        return new Appointment(action.payload)
                    }

                    return item;
                }),
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
