import ApiService from "../../services/ApiService";

export const GET_PROVIDERS = 'GET_PROVIDERS';
export const GET_MORE_PROVIDERS = 'GET_MORE_PROVIDERS';

export const GET_QUESTION_PROVIDERS = 'GET_QUESTION_PROVIDERS';
export const GET_MORE_QUESTION_PROVIDERS = 'GET_MORE_QUESTION_PROVIDERS';

export const GET_ARTICLE_PROVIDERS = 'GET_ARTICLE_PROVIDERS';
export const GET_MORE_ARTICLE_PROVIDERS = 'GET_MORE_ARTICLE_PROVIDERS';

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

// export const getQuestionsProviders = (limit= 5) => async (dispatch) => {
//     await ApiService.get()
//         .then(
//             (response) => {
//                 dispatch({
//                     type: GET_QUESTION_PROVIDERS,
//                     payload: response.data,
//                 })
//             },
//             (error) => {
//                 console.log(error.response);
//             }
//         );
// };

// export const getMoreQuestionsProviders = (nextPageUrl) => async (dispatch) => {
//     await ApiService.get(nextPageUrl)
//         .then(
//             (response) => {
//                 dispatch({
//                     type: GET_MORE_QUESTION_PROVIDERS,
//                     payload: response.data,
//                 })
//             },
//             (error) => {
//                 console.log(error.response);
//             }
//         );
// };

// export const getArticlesProviders = (limit= 5) => async (dispatch) => {
//     await ApiService.get()
//         .then(
//             (response) => {
//                 dispatch({
//                     type: GET_ARTICLE_PROVIDERS,
//                     payload: response.data,
//                 })
//             },
//             (error) => {
//                 console.log(error.response);
//             }
//         );
// };

// export const getMoreArticlesProviders = (nextPageUrl) => async (dispatch) => {
//     await ApiService.get(nextPageUrl)
//         .then(
//             (response) => {
//                 dispatch({
//                     type: GET_MORE_ARTICLE_PROVIDERS,
//                     payload: response.data,
//                 })
//             },
//             (error) => {
//                 console.log(error.response);
//             }
//         );
// };
