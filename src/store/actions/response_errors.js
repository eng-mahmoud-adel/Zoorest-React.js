export const ERROR_401 = 'ERROR_401';
export const ERROR_403 = 'ERROR_403';
export const ERROR_404 = 'ERROR_404';
// export const ERROR_405 = 'ERROR_405';
export const ERROR_422 = 'ERROR_422';
export const ERROR_500 = 'ERROR_500';
export const ERROR_503 = 'ERROR_503';
export const ERROR_NETWORK = 'ERROR_NETWORK';

export const showUnAuthenticatedNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_401,
        payload: message
    });
};

export const showUnAuthorizedNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_403,
        payload: message
    });
};

export const showNotFoundNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_404,
        payload: message
    });
};

export const showValidationNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_422,
        payload: message
    });
};

export const showServerErrorNoty = () => (dispatch) => {
    dispatch({
        type: ERROR_503
    })
};

export const showMaintenanceModeNoty = () => (dispatch) => {
    dispatch({
        type: ERROR_503
    })
};

export const showNetworkErrorNoty = () => (dispatch) => {
    dispatch({
        type: ERROR_NETWORK
    })
};
