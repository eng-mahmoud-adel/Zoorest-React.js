import ApiService from "../../services/ApiService";

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_RECENT_ARTICLES = 'GET_RECENT_ARTICLES';
export const ARTICLE_CREATED = 'ARTICLE_CREATED';
export const GET_ARTICLES_LOADED = 'GET_ARTICLES_LOADED';
export const GET_ARTICLES_LOADING = 'GET_ARTICLES_LOADING';

const ENDPOINT = 'articles/'
const Recent_Articles = `${ENDPOINT}recent`

export const getRecentArticles = (limit = 3) => async (dispatch) => {
    await ApiService
        .get(`${Recent_Articles}?perPage=${limit}`)
        .then(
            (response) => {
                console.log(response.data);
                dispatch({
                    type: GET_RECENT_ARTICLES,
                    payload: response.data.data
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};
