import {GET_SINGLE_PET, SET_PET_LOADING, SET_PET_LOADED, CREATE_PET} from '../actions/pet';
import Pet from '../../model/Pet';

const initialState = {
    model: null,
    loading: true,
};

const singlePetReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_PET:
            return {
                ...state,
                model: new Pet(action.payload),
            };

        case SET_PET_LOADED:
            return {
                ...state,
                loading: false
            };
        case SET_PET_LOADING:
            return {
                ...state,
                loading: true
            };
        case CREATE_PET:
            return {
                ...state,
                model: new Pet(action.payload),
            };
    }
    return state;
}

export default singlePetReducer;