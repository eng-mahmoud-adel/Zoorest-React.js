import axios from 'axios'

import config from './../../config'

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_RECENT_ARTICLES = 'GET_RECENT_ARTICLES';
export const ARTICLE_CREATED = 'ARTICLE_CREATED';
export const GET_ARTICLES_LOADED = 'GET_ARTICLES_LOADED';
export const GET_ARTICLES_LOADING = 'GET_ARTICLES_LOADING';

export const getRecentArticles = (limit = 3) => async (dispatch, getState) => {
    const response = await axios.get(`${config.apiUrl}articles?perPage=${limit}`);
    console.log(response);
    //todo check for response errors
    dispatch({
        type: GET_RECENT_ARTICLES,
        payload: response.data.data,
    })
};

export const getArticles = (id, page = 1) => async (dispatch) => {
    dispatch({
        type: GET_ARTICLES_LOADING
    });
    const response = await axios.get(`${config.apiUrl}/threads/${id}/replies?page=${page}`);

    dispatch({
        type: GET_ARTICLES,
        payload: response.data.data
    });
    dispatch({
        type: GET_ARTICLES_LOADED
    })
};

// export const createReply = (threadId, data) => async (dispatch, getState) => {
//     const response = await axios.post(`${config.apiUrl}/threads/${threadId}/replies`, data, {
//         headers: {
//             Authorization: `Bearer ${getState().auth.accessToken}`
//         }
//     });
//
//     dispatch({
//         type: ARTICLE_CREATED,
//         payload: response.data
//     });
//
//     dispatch(getArticles(threadId))
// };
