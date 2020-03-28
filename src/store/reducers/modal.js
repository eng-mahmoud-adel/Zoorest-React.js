import {HIDE_MODAL, SHOW_MODAL} from "../actions/modal";

let initialState = {
    is_modal_visible: false,
    modal_component: null,
};
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                is_modal_visible: true,
                modal_component: action.payload
            };
        case HIDE_MODAL:
            return {
                ...state,
                is_modal_visible: false,
                modal_component: null
            };
        default:
            return state;
    }
};

export default modalReducer
