import ApiService from "../../services/ApiService";

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_MORE_ARTICLES = 'GET_MORE_ARTICLES';
export const ARTICLE_CREATED = 'ARTICLE_CREATED';
export const GET_ARTICLES_LOADED = 'GET_ARTICLES_LOADED';
export const GET_ARTICLES_LOADING = 'GET_ARTICLES_LOADING';

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

