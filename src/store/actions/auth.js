import axios from 'axios'
import {SubmissionError} from 'redux-form'

import ApiService from "../../services/ApiService";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (values) => async (dispatch) => {

    await ApiService
        .post(`auth/login`, values)
        .then(
            (response) => {
                console.log(response);
                localStorage.setItem('authUser', JSON.stringify(response.data));

                dispatch({
                    type: LOGIN_USER,
                    payload: response.data,
                    accessToken: response.headers.authorization,
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
            type: LOGIN_USER,
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
        type: LOGOUT_USER
    })
};
