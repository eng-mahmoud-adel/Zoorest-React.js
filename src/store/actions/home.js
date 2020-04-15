import ApiService from "../../services/ApiService";


import {GET_RECENT_ARTICLES} from './articles';

export const HOMEPAGE_RECENT_QUESTIONS= "HOMEPAGE_RECENT_QUESTIONS";
export const RECENT_POSTS= "RECENT_POSTS";
export const GET_TESTIMONIALS= "GET_TESTIMONIALS";

export const getHomeData = () => async (dispatch) => {
    await ApiService.get(`page/home`)
        .then(
            (response) => {

                dispatch({
                    type: HOMEPAGE_RECENT_QUESTIONS,
                    payload: response.data.recent_questions
                });

                dispatch({
                    type: RECENT_POSTS,
                    payload: response.data.recent_posts
                });

                dispatch({
                    type: GET_RECENT_ARTICLES,
                    payload: response.data.recent_articles
                });

                dispatch({
                    type: GET_TESTIMONIALS,
                    payload: response.data.testimonials
                });

                
            },
            (error) => {
                console.log(error.response);
            }
        );
};
