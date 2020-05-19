import ApiService from "../../services/ApiService";

export const GET_SINGLE_PET = "GET_SINGLE_PET";
export const SET_PET_LOADING = "SET_PET_LOADING";
export const SET_PET_LOADED = "SET_PET_LOADED";

export const CREATE_PET = "CREATE_PET";

const ENDPOINT = 'pet';

export const getSinglePet = (id) => async (dispatch, getState) => {
    dispatch({
        type: SET_PET_LOADING
    });
    await ApiService.get(`${ENDPOINT}/${id}`, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    })
        .then(
            (response) => {

                dispatch({
                    type: GET_SINGLE_PET,
                    payload: response.data.data
                });

                dispatch({
                    type: SET_PET_LOADED
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const createPet = (request) => async (dispatch, getState) => {
    await ApiService.get(`${ENDPOINT}`, request, {
        headers: {
            Authorization: `Bearer ${getState().authUser.accessToken}`
        }
    })
        .then(
            (response) => {
                dispatch({
                    type: CREATE_PET,
                    payload: response.data.data
                });
            },
            (error) => {
                console.log(error.response);
            }
        );
};