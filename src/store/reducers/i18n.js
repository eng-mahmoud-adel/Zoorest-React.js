import {UPDATE_LOCALE} from "../actions/i18n";

const initialState = {
    value: "en"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOCALE:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}
