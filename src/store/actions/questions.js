import axios from 'axios'

import config from '../../config'
import {GET_RECENT_ARTICLES} from "./articles";

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_RECENT_QUESTIONS = 'GET_RECENT_QUESTIONS';
export const GET_MORE_RECENT_QUESTIONS = 'GET_MORE_RECENT_QUESTIONS';
export const GET_NOT_ANSWERED_QUESTIONS = 'GET_NOT_ANSWERED_QUESTIONS';
export const GET_MORE_NOT_ANSWERED_QUESTIONS = 'GET_MORE_NOT_ANSWERED_QUESTIONS';
export const GET_MOST_COMMON_QUESTIONS = 'GET_MOST_COMMON_QUESTIONS';
export const GET_MORE_COMMON_QUESTIONS = 'GET_MORE_COMMON_QUESTIONS';

export const QUESTION_CREATED = 'QUESTION_CREATED';
export const GET_QUESTION = 'GET_QUESTION';
export const GET_QUESTION_LOADED = 'GET_QUESTION_LOADED';
export const GET_QUESTION_LOADING = 'GET_QUESTION_LOADING';

export const GET_QUESTION_COMMENTS = 'GET_QUESTION_COMMENTS';
export const GET_MORE_QUESTION_COMMENTS = 'GET_MORE_QUESTION_COMMENTS';
export const GET_QUESTION_COMMENTS_LOADING = 'GET_QUESTION_COMMENTS_LOADING';
export const GET_QUESTION_COMMENTS_LOADED = 'GET_QUESTION_COMMENTS_LOADED';

export const getRecentQuestions = (limit = 5) => async (dispatch) => {
    await axios.get(`${config.apiUrl}questions?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_RECENT_QUESTIONS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );

};

export const getMoreRecentQuestions = (nextPageUrl) => async (dispatch) => {
    await axios.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_RECENT_QUESTIONS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );

};

export const getNotAnsweredQuestions = (limit = 5) => async (dispatch) => {
    await axios.get(`${config.apiUrl}questions?perPage=${limit}&query_type=not_answered`)
        .then(
            (response) => {
                dispatch({
                    type: GET_NOT_ANSWERED_QUESTIONS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreNotAnsweredQuestions = (nextPageUrl) => async (dispatch) => {
    await axios.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_NOT_ANSWERED_QUESTIONS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMostCommonQuestions = (limit = 5) => async (dispatch) => {

    await axios.get(`${config.apiUrl}questions?perPage=${limit}&query_type=common`)
        .then(
            (response) => {
                dispatch({
                    type: GET_MOST_COMMON_QUESTIONS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreMostCommonQuestions = (nextPageUrl) => async (dispatch) => {
    await axios.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_COMMON_QUESTIONS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getSingleQuestion = (id) => async (dispatch) => {
    dispatch({
        type: GET_QUESTION_LOADING
    });
    await axios.get(`${config.apiUrl}questions/${id}`)
        .then(
            (response) => {

                dispatch({
                    type: GET_QUESTION,
                    payload: response.data.data
                });

                dispatch({
                    type: GET_QUESTION_LOADED
                })
            },
            (error) => {
                console.log(error.response);
            }
        );


};


export const getQuestionComments = (id, limit = 5) => async (dispatch) => {
    await axios.get(`${config.apiUrl}questions/${id}/comments?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_QUESTION_COMMENTS,
                    payload: response.data,
                });

                dispatch({
                    type: GET_QUESTION_COMMENTS_LOADED,
                    payload: response.data,
                });
            },
            (error) => {
                console.log(error.response);
            }
        );

};

export const getMoreQuestionComments = (nextPageUrl) => async (dispatch) => {
    await axios.get(nextPageUrl)
        .then(
            (response) => {
                console.log(response.data);
                dispatch({
                    type: GET_MORE_QUESTION_COMMENTS,
                    payload: response.data,
                });

                dispatch({
                    type: GET_QUESTION_COMMENTS_LOADED,
                    payload: response.data,
                });
            },
            (error) => {
                console.log(error.response);
            }
        );
};

// export const createReply = (threadId, data) => async (dispatch) => {
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
