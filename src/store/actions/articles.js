import ApiService from "../../services/ApiService";

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_MORE_ARTICLES = 'GET_MORE_ARTICLES';
export const ARTICLE_CREATED = 'ARTICLE_CREATED';
export const GET_SINGLE_ARTICLE = 'GET_SINGLE_ARTICLE';
export const GET_ARTICLES_LOADING = 'GET_ARTICLES_LOADING';
export const GET_ARTICLE_COMMENTS = 'GET_ARTICLE_COMMENTS';
export const GET_MORE_ARTICLE_COMMENTS = 'GET_MORE_ARTICLE_COMMENTS';
export const TOP_ARTICLES = 'TOP_ARTICLES';
export const RELATED_ARTICLES = 'RELATED_ARTICLES';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const CREATE_ARTICLE_COMMENT = 'CREATE_ARTICLE_COMMENT';

const ENDPOINT = 'articles';

export const getArticles = (limit = 3) => async (dispatch) => {
    await ApiService
        .get(`${ENDPOINT}?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_ARTICLES,
                    payload: response.data
                })
            },

            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreArticles = (nextPageUrl) => async (dispatch) => {
    await ApiService
        .get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_ARTICLES,
                    payload: response.data
                })
            },

            (error) => {
                console.log(error.response);
            }
        );
};

export const getSingleArticle = (id) => async (dispatch) => {
    await ApiService
        .get(`${ENDPOINT}/${id}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_SINGLE_ARTICLE,
                    payload: response.data.data
                });

                dispatch({
                    type: GET_ARTICLES_LOADING
                });
            },

            (error) => {
                console.log(error.response);
            }
        );
};

export const getArticleComments = (id, limit = 5) => async (dispatch) => {
    await ApiService
        .get(`${ENDPOINT}/${id}/comments?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_ARTICLE_COMMENTS,
                    payload: response.data
                });
            },

            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreArticleComments = (nextPageUrl) => async (dispatch) => {
    await ApiService
        .get(`${nextPageUrl}`)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_ARTICLE_COMMENTS,
                    payload: response.data
                })
            },

            (error) => {
                console.log(error.response);
            }
        );
};

export const getTopArticles = (limit = 4) => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}/top?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: TOP_ARTICLES,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );

};

export const getRelatedArticles = (id, limit = 5) => async (dispatch) => {
    await ApiService
        .get(`${ENDPOINT}/${id}/related?perPage=${limit}`)
        .then(
            (response) => {
                dispatch({
                    type: RELATED_ARTICLES,
                    payload: response.data
                });
            },

            (error) => {
                console.log(error.response);
            }
        );
};


export const viewArticle = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/view`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_ARTICLE,
                payload: response.data.data
            });
        }
    );


};
export const shareArticle = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/share`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_ARTICLE,
                payload: response.data.data
            });

        }
    );


};

export const likeArticle = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/like`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_ARTICLE,
                payload: response.data.data
            });

        }
    );


};

export const unlikeArticle = (id) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}/${id}/unlike`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    }).then(
        (response) => {

            console.log(response);

            dispatch({
                type: UPDATE_ARTICLE,
                payload: response.data.data
            });

        }
    );
};

export const addComment = (article_id, data, callback) => async (dispatch, getState) => {

    await ApiService
        .post(`${ENDPOINT}/${article_id}/comments`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${getState().authUser.accessToken}`
                }
            })
        .then(
            (response) => {
                dispatch({
                    type: CREATE_ARTICLE_COMMENT,
                    payload: response.data.data,
                });

                if (callback) {
                    callback();
                }
            },
            (error) => {
                console.log(error.response);

                if (callback) {
                    callback();
                }
            }
        );
};
