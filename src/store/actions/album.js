import ApiService from "../../services/ApiService";

export const GET_SINGLE_ALBUM = "GET_SINGLE_ALBUM";
export const SET_ALBUM_LOADING = "SET_ALBUM_LOADING";
export const SET_ALBUM_LOADED = "SET_ALBUM_LOADED";
export const CREATE_ALBUM = "CREATE_ALBUM";

const ENDPOINT = 'album';

export const getSingleAlbum = (id) => async (dispatch, getState) => {
    dispatch({
        type: SET_ALBUM_LOADING
    });
    await ApiService.get(`${ENDPOINT}/${id}`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    })
        .then(
            (response) => {

                dispatch({
                    type: GET_SINGLE_ALBUM,
                    payload: response.data.data
                });

                dispatch({
                    type: SET_ALBUM_LOADED
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const createAlbum = (request) => async (dispatch, getState) => {
    await ApiService.post(`${ENDPOINT}`, request, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    })
        .then(
            (response) => {

                dispatch({
                    type: CREATE_ALBUM,
                    payload: response.data.data
                });
            },
            (error) => {
                console.log(error.response);
            }
        );
};