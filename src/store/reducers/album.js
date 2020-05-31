import {CREATE_ALBUM, GET_SINGLE_ALBUM, SET_ALBUM_LOADED, SET_ALBUM_LOADING} from '../actions/album';
import Album from '../../model/Album';

const initialState = {
    model: null,
    loading: true,
};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_ALBUM:
            return {
                ...state,
                model: new Album(action.payload),
            };

        case SET_ALBUM_LOADED:
            return {
                ...state,
                loading: false
            };
        case SET_ALBUM_LOADING:
            return {
                ...state,
                loading: true
            };
        case CREATE_ALBUM:
            return {
                ...state,
                model: new Album(action.payload)
            };
        default:
            return state;
    }
}

export default albumReducer;
