export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (component) => (dispatch) => {
    dispatch({
        type: SHOW_MODAL,
        payload: component,
    })
};

export const hideModal = () => (dispatch) => {
    dispatch({
        type: HIDE_MODAL,
        payload: null
    })
};
