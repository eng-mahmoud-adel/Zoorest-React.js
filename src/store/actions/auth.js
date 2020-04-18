import {SubmissionError} from 'redux-form'

import ApiService from "../../services/ApiService";
import LoginRequest from "../../model/Request/LoginRequest";
import {HIDE_MODAL} from "./modal";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_USER_DATA = 'GET_USER_DATA';

export const login = (request: LoginRequest) => async (dispatch) => {

    await ApiService
        .post(`auth/login`, request.toJSON())
        .then(
            (response) => {
                console.log(response);

                if (request.isRememberMeChecked()) {
                    //save only the access token locally, and get user data using this key
                    localStorage.setItem('access_token', response.headers.authorization);
                    sessionStorage.setItem('access_token', response.headers.authorization);

                } else {
                    localStorage.removeItem('access_token');
                    sessionStorage.setItem('access_token', response.headers.authorization);
                }

                dispatch({
                    type: LOGIN,
                    payload: response.data,
                    accessToken: response.headers.authorization,
                })

                //Close Modal After A successful login
                dispatch({type: HIDE_MODAL, payload: null})
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getAuthData = () => async (dispatch, getState) => {

    //if there is no access token in the state, dont attempt to retrieve data
    if (!getState().authUser.accessToken) {
        return;
    }
    await ApiService
        .post(`auth/getData`, {}, {
            headers: {
                Authorization: `Bearer ${getState().authUser.accessToken}`
            }
        })
        .then(
            (response) => {
                console.log(response);
                dispatch({
                    type: GET_USER_DATA,
                    payload: response.data,
                })
            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const registerUser = (values) => async (dispatch) => {
    try {
        const response = await ApiService.post(`auth/register`, {
            name: values.name,
            email: values.email,
            password: values.password
        });

        dispatch({
            type: LOGIN,
            payload: response.data.data
        })
    } catch (errors) {
        throw new SubmissionError({
            ...errors.response.data.data,
            _error: "Something went wrong. Please check for validation errors."
        })
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('authUser');
    dispatch({
        type: LOGOUT
    })
};
