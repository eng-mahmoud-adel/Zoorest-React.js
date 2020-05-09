import ApiService from "../../services/ApiService";

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_RECENT_QUESTIONS = 'GET_RECENT_QUESTIONS';
export const GET_MORE_RECENT_QUESTIONS = 'GET_MORE_RECENT_QUESTIONS';
export const GET_NOT_ANSWERED_QUESTIONS = 'GET_NOT_ANSWERED_QUESTIONS';
export const GET_MORE_NOT_ANSWERED_QUESTIONS = 'GET_MORE_NOT_ANSWERED_QUESTIONS';
export const GET_MOST_COMMON_QUESTIONS = 'GET_MOST_COMMON_QUESTIONS';
export const GET_MORE_COMMON_QUESTIONS = 'GET_MORE_COMMON_QUESTIONS';

export const TOP_QUESTIONS = 'TOP_QUESTIONS';
export const QUESTIONS_ANALYTICS = 'QUESTIONS_ANALYTICS';

export const QUESTION_CREATED = 'QUESTION_CREATED';
export const GET_QUESTION = 'GET_QUESTION';
export const GET_QUESTION_LOADED = 'GET_QUESTION_LOADED';
export const GET_QUESTION_LOADING = 'GET_QUESTION_LOADING';

export const UPDATE_QUESTION = 'UPDATE_QUESTION';


export const GET_QUESTION_COMMENTS = 'GET_QUESTION_COMMENTS';
export const GET_MORE_QUESTION_COMMENTS = 'GET_MORE_QUESTION_COMMENTS';
export const GET_QUESTION_COMMENTS_LOADING = 'GET_QUESTION_COMMENTS_LOADING';
export const GET_QUESTION_COMMENTS_LOADED = 'GET_QUESTION_COMMENTS_LOADED';

export const CREATE_QUESTION_COMMENT = 'CREATE_QUESTION_COMMENT';

const ENDPOINT = 'questions'
const CommentsEndpoint = 'comments/'
const VIEW = 'view'

export const getRecentQuestions = (limit = 5) => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}?perPage=${limit}`)
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
    await ApiService.get(nextPageUrl)
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
    await ApiService.get(`${ENDPOINT}?perPage=${limit}&query_type=not_answered`)
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
    await ApiService.get(nextPageUrl)
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

    await ApiService.get(`${ENDPOINT}?perPage=${limit}&query_type=common`)
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
    await ApiService.get(nextPageUrl)
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

export const getTopQuestions = (limit = 4) => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}/top?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: TOP_QUESTIONS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );

};

export const getQuestionsAnalytics = () => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}/analytics`)
        .then(
            (response) => {
                dispatch({
                    type: QUESTIONS_ANALYTICS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );

};

export const createQuestion = (data, onSuccess, onError, onFinally) => async (dispatch) => {

    await ApiService
        .post(`${ENDPOINT}`, data)
        .then(
            (response) => {
                dispatch({
                    type: QUESTION_CREATED,
                    payload: response.data.data,
                });

                if (onSuccess) {
                    onSuccess();
                }
            },
            (error) => {
                onError(error.response);
            }
        ).finally(() => {
            onFinally();
        });
};


export const getSingleQuestion = (id) => async (dispatch, getState) => {
    dispatch({
        type: GET_QUESTION_LOADING
    });
    await ApiService.get(`${ENDPOINT}/${id}`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    })
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

export const setSingleQuestion = (question) => async (dispatch) => {
    dispatch({
        type: GET_QUESTION,
        payload: question
    });

    dispatch({
        type: GET_QUESTION_LOADED
    })
};

export const viewQuestion = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/${VIEW}`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_QUESTION,
                payload: response.data.data
            });

        }
    );


};

export const likeQuestion = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/like`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            // dispatch({
            //     type: UPDATE_QUESTION,
            //     payload: response.data.data
            // });

        }
    );


};

export const unlikeQuestion = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/unlike`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            // dispatch({
            //     type: UPDATE_QUESTION,
            //     payload: response.data.data
            // });

        }
    );


};


export const getQuestionComments = (id, limit = 5) => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}/${id}/comments?perPage=${limit}`)
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
    await ApiService.get(nextPageUrl)
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

export const addComment = (question_id, data, callback) => async (dispatch, getState) => {

    await ApiService
        .post(`${ENDPOINT}/${question_id}/${CommentsEndpoint}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${getState().authUser.accessToken}`
                }
            })
        .then(
            (response) => {
                dispatch({
                    type: CREATE_QUESTION_COMMENT,
                    payload: response.data.data,
                });

                if(callback) {
                    callback();
                }
            },
            (error) => {
                console.log(error.response);

                if(callback) {
                    callback();
                }
            }
        );
};

