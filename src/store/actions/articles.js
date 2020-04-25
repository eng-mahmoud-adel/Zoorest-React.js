import ApiService from "../../services/ApiService";

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_MORE_ARTICLES = 'GET_MORE_ARTICLES';
export const ARTICLE_CREATED = 'ARTICLE_CREATED';
export const GET_SINGLE_ARTICLE = 'GET_SINGLE_ARTICLE';
export const GET_ARTICLES_LOADING = 'GET_ARTICLES_LOADING';
export const GET_ARTICLE_COMMENTS = 'GET_ARTICLE_COMMENTS';
export const GET_MORE_ARTICLE_COMMENTS = 'GET_MORE_ARTICLE_COMMENTS';
export const TOP_ARTICLES = 'TOP_ARTICLES';

const ENDPOINT = 'articles';

export const getArticles = (limit= 3) => async (dispatch) => {
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

