import {GET_USER_DATA, LOGIN, LOGOUT} from '../actions/auth'

const initialState = {
    user: null,
    accessToken: sessionStorage.getItem('access_token') || localStorage.getItem('access_token')
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
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
        case LOGOUT:
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
