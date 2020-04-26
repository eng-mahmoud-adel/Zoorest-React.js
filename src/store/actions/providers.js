import ApiService from "../../services/ApiService";

export const GET_PROVIDERS = 'GET_PROVIDERS';
export const GET_MORE_PROVIDERS = 'GET_MORE_PROVIDERS';

export const GET_QUESTION_PROVIDERS = 'GET_QUESTION_PROVIDERS';
export const GET_MORE_QUESTION_PROVIDERS = 'GET_MORE_QUESTION_PROVIDERS';

export const GET_ARTICLE_PROVIDERS = 'GET_ARTICLE_PROVIDERS';
export const GET_MORE_ARTICLE_PROVIDERS = 'GET_MORE_ARTICLE_PROVIDERS';

export const GET_PROVIDER = 'GET_PROVIDER';
export const SET_PROVIDER_LOADING = 'SET_PROVIDER_LOADING';
export const SET_PROVIDER_LOADED = 'SET_PROVIDER_LOADED';
export const UPDATE_PROVIDER = 'UPDATE_PROVIDER';


const ENDPOINT = 'providers'

export const getProviders = (limit = 5) => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_PROVIDERS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreProviders = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_PROVIDERS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getProviderQuestions = (limit= 5, id) => async (dispatch) => {
    await ApiService.get(`questions?perPage=${limit}&user_id=${id}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_QUESTION_PROVIDERS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreProviderQuestions = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_QUESTION_PROVIDERS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getProviderArticles = (limit= 5, id) => async (dispatch) => {
    await ApiService.get(`articles?perPage=${limit}&user_id=${id}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_ARTICLE_PROVIDERS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreProviderArticles = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_ARTICLE_PROVIDERS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};


export const getSingleProvider = (id) => async (dispatch, getState) => {
    dispatch({
        type: SET_PROVIDER_LOADING
    });
    await ApiService.get(`${ENDPOINT}/${id}`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    })
        .then(
            (response) => {

                dispatch({
                    type: GET_PROVIDER,
                    payload: response.data.data
                });

                dispatch({
                    type: SET_PROVIDER_LOADED
                })
            },
            (error) => {
                console.log(error.response);
            }
        );


};

export const setSingleProvider = (model) => async (dispatch) => {
    dispatch({
        type: GET_PROVIDER,
        payload: model
    });

    dispatch({
        type: SET_PROVIDER_LOADED
    })
};

export const viewProvider = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/view`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_PROVIDER,
                payload: response.data.data
            });

        }
    );


};

export const callProvider = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/call`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_PROVIDER,
                payload: response.data.data
            });

        }
    );


};

export const likeProvider = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/like`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_PROVIDER,
                payload: response.data.data
            });

        }
    );


};

export const unlikeProvider = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/unlike`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_PROVIDER,
                payload: response.data.data
            });

        }
    );


};
