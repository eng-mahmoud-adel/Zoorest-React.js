import {GET_USER_DATA, LOGIN_USER, LOGOUT_USER} from '../actions/auth'

const initialState = {
    user: null,
    accessToken: localStorage.getItem('access_token')
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                accessToken: action.accessToken
            };
        case GET_USER_DATA:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                accessToken: null,
            };
        default:
            return state;
    }
};

export default authReducer
