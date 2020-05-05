export const ERROR_401 = 'ERROR_401';
export const ERROR_403 = 'ERROR_403';
export const ERROR_404 = 'ERROR_404';
// export const ERROR_405 = 'ERROR_405';
export const ERROR_422 = 'ERROR_422';
export const ERROR_500 = 'ERROR_500';
export const ERROR_503 = 'ERROR_503';

export const showUnAuthenticatedNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_401,
        message: message
    });
};

export const showUnAuthorizedNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_403,
        message: message
    });
};

export const showNotFoundNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_404,
        message: message
    });
};

export const showValidationNoty = (message) => (dispatch) => {
    dispatch({
        type: ERROR_422,
        message: message
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
