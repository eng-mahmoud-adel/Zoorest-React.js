import {GET_USER_DATA, LOGIN, LOGOUT, SIGNUP, UPDATE_PROFILE} from '../actions/auth'
import User from "../../model/User";

const initialState = {
    user: null,
    accessToken: sessionStorage.getItem('access_token') || localStorage.getItem('access_token')
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
        case LOGIN:
            return {
                ...state,
                user: new User(action.payload),
                accessToken: action.accessToken
            };
        case GET_USER_DATA:
            return {
                ...state,
                user: new User(action.payload),
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                accessToken: null,
            };

        case UPDATE_PROFILE:
            return {
                ...state,
                user: new User(action.payload),
            };

        default:
            return state;
    }
};

export default authReducer
