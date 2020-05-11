import {GET_USER, SET_USER_LOADED, SET_USER_LOADING} from '../../actions/user';
import User from '../../../model/User';

const initialState = {
    model: new User(),
    loading: true,
};

const singleUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                model: new User(action.payload),
            };

        case SET_USER_LOADED:
            return {
                ...state,
                loading: false
            };
        case SET_USER_LOADING:
            return {
                ...state,
                loading: true
            };
    }
    return state;
}

export default singleUserReducer;