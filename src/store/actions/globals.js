import ApiService from "../../services/ApiService";

export const GLOBAL_DATA = 'GLOBAL_DATA';

export const getSiteGlobalData = () => async (dispatch) => {
    await ApiService.get(`globalData`)
        .then(
            (response) => {

                dispatch({
                    type: GLOBAL_DATA,
                    payload: response.data
                });

            },
            (error) => {
                console.log(error.response);
            }
        );
};
