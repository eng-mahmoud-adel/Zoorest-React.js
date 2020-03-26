import axios from 'axios'

import config from './../../config'

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_RECENT_QUESTIONS = 'GET_RECENT_QUESTIONS';
export const GET_NOT_ANSWERED_QUESTIONS = 'GET_NOT_ANSWERED_QUESTIONS';
export const GET_MOST_COMMON_QUESTIONS = 'GET_MOST_COMMON_QUESTIONS';
export const QUESTION_CREATED = 'QUESTION_CREATED';
export const GET_QUESTIONS_LOADED = 'GET_QUESTIONS_LOADED';
export const GET_QUESTIONS_LOADING = 'GET_QUESTIONS_LOADING';

export const getRecentQuestions = (limit = 5, nextPageUrl = null) => async (dispatch, getState) => {
    let url = `${config.apiUrl}questions?perPage=${limit}`;
    if (nextPageUrl !== null) {
        url = nextPageUrl;
    }
    const response = await axios.get(url);

    //todo check for response errors
    dispatch({
        type: GET_RECENT_QUESTIONS,
        payload: response.data,
    })
};

export const getNotAnsweredQuestions = (limit = 5, nextPageUrl = null) => async (dispatch, getState) => {
    let url = `${config.apiUrl}questions?perPage=${limit}&query_type=not_answered`;
    if (nextPageUrl !== null) {
        url = nextPageUrl;
    }
    const response = await axios.get(url);
    //todo check for response errors
    dispatch({
        type: GET_NOT_ANSWERED_QUESTIONS,
        payload: response.data,
    })
};

export const getMostCommonQuestions = (limit = 5, nextPageUrl = null) => async (dispatch, getState) => {
    let url = `${config.apiUrl}questions?perPage=${limit}&query_type=common`;
    if (nextPageUrl !== null) {
        url = nextPageUrl;
    }
    const response = await axios.get(url);

    //todo check for response errors
    dispatch({
        type: GET_MOST_COMMON_QUESTIONS,
        payload: response.data,
    })
};

// export const getQuestions = (id, page = 1) => async (dispatch) => {
//     dispatch({
//         type: GET_QUESTIONS_LOADING
//     });
//     const response = await axios.get(`${config.apiUrl}/threads/${id}/replies?page=${page}`);
//
//     dispatch({
//         type: GET_QUESTIONS,
//         payload: response.data.data
//     });
//     dispatch({
//         type: GET_QUESTIONS_LOADED
//     })
// };

// export const createReply = (threadId, data) => async (dispatch, getState) => {
//     const response = await axios.post(`${config.apiUrl}/threads/${threadId}/replies`, data, {
//         headers: {
//             Authorization: `Bearer ${getState().auth.accessToken}`
//         }
//     });
//
//     dispatch({
//         type: QUESTION_CREATED,
//         payload: response.data
//     });
//
//     dispatch(getQuestions(threadId))
// };
