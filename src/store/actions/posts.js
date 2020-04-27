import ApiService from "../../services/ApiService";

export const GET_SELL_POSTS = "GET_SELL_POSTS";
export const GET_MORE_SELL_POSTS = "GET_MORE_SELL_POSTS";

export const GET_ADOPT_POSTS = "GET_ADOPT_POSTS";
export const GET_MORE_ADOPT_POSTS = "GET_MORE_ADOPT_POSTS";

export const GET_MATE_POSTS = "GET_MATE_POSTS";
export const GET_MORE_MATE_POSTS = "GET_MORE_MATE_POSTS";

export const GET_LOST_POSTS = "GET_LOST_POSTS";
export const GET_MORE_LOST_POSTS = "GET_MORE_LOST_POSTS";

export const GET_PRODUCT_POSTS = "GET_PRODUCT_POSTS";
export const GET_MORE_PRODUCT_POSTS = "GET_MORE_PRODUCT_POSTS";

const ENDPOINT = 'posts';

export const getSellPosts = () => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}?post_type=sell`)
        .then(
            (response) => {
                dispatch({
                    type: GET_SELL_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreSellPosts = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_SELL_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getAdoptPosts = () => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}?post_type=adopt`)
        .then(
            (response) => {
                dispatch({
                    type: GET_ADOPT_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreAdoptPosts = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_ADOPT_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMatePosts = () => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}?post_type=mate`)
        .then(
            (response) => {
                dispatch({
                    type: GET_MATE_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreMatePosts = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_MATE_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getLostPosts = () => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}?post_type=lost`)
        .then(
            (response) => {
                dispatch({
                    type: GET_LOST_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreLostPosts = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_LOST_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getProductPosts = () => async (dispatch) => {
    await ApiService.get(`${ENDPOINT}?post_type=product`)
        .then(
            (response) => {
                dispatch({
                    type: GET_PRODUCT_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getMoreProductPosts = (nextPageUrl) => async (dispatch) => {
    await ApiService.get(nextPageUrl)
        .then(
            (response) => {
                dispatch({
                    type: GET_MORE_PRODUCT_POSTS,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};