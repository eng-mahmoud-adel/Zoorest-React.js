import ApiService from "../../services/ApiService";

export const GET_USER = "GET_USER";
export const SET_USER_LOADING = "SET_USER_LOADING";
export const SET_USER_LOADED = "SET_USER_LOADED";

const ENDPOINT = 'user';

export const getSingleUser = (id) => async (dispatch, getState) => {
    dispatch({
        type: SET_USER_LOADING
    });
    await ApiService.get(`${ENDPOINT}/${id}`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    })
        .then(
            (response) => {

                dispatch({
                    type: GET_USER,
                    payload: response.data.data
                });

                dispatch({
                    type: SET_USER_LOADED
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};