import ApiService from "../../services/ApiService";

export const HOMEPAGE_HERO_SECTION = "HOMEPAGE_HERO_SECTION";
export const HOMEPAGE_DOWNLOAD_APP_SECTION = "HOMEPAGE_DOWNLOAD_APP_SECTION";
export const HOMEPAGE_RECENT_QUESTIONS_SECTION = "HOMEPAGE_RECENT_QUESTIONS_SECTION";
export const HOMEPAGE_NEAREST_PROVIDER_SECTION = "HOMEPAGE_NEAREST_PROVIDER_SECTION";

export const HOMEPAGE_RECENT_QUESTIONS = "HOMEPAGE_RECENT_QUESTIONS";
export const HOMEPAGE_SPONSORED_PROVIDERS = "HOMEPAGE_SPONSORED_PROVIDERS";
export const HOMEPAGE_RECENT_POSTS = "HOMEPAGE_RECENT_POSTS";
export const HOMEPAGE_RECENT_ARTICLES = "HOMEPAGE_RECENT_ARTICLES";
export const HOMEPAGE_TESTIMONIALS = "HOMEPAGE_TESTIMONIALS";

export const getHomeData = () => async (dispatch) => {
    await ApiService.get(`page/home`)
        .then(
            (response) => {

                dispatch({
                    type: HOMEPAGE_HERO_SECTION,
                    payload: response.data.page.sections.filter(section => section.name == "Hero")[0]
                });

                dispatch({
                    type: HOMEPAGE_DOWNLOAD_APP_SECTION,
                    payload: response.data.page.sections.filter(section => section.name === "Download app")[0]
                });

                dispatch({
                    type: HOMEPAGE_RECENT_QUESTIONS_SECTION,
                    payload: response.data.page.sections.filter(section => section.name === "Recent questions")[0]
                });

                dispatch({
                    type: HOMEPAGE_NEAREST_PROVIDER_SECTION,
                    payload: response.data.page.sections.filter(section => section.name === "Sponsored providers")[0]
                });

                dispatch({
                    type: HOMEPAGE_RECENT_QUESTIONS,
                    payload: response.data.recent_questions
                });

                dispatch({
                    type: HOMEPAGE_SPONSORED_PROVIDERS,
                    payload: response.data.sponsored_providers
                });

                dispatch({
                    type: HOMEPAGE_RECENT_POSTS,
                    payload: response.data.recent_posts
                });

                dispatch({
                    type: HOMEPAGE_RECENT_ARTICLES,
                    payload: response.data.recent_articles
                });

                dispatch({
                    type: HOMEPAGE_TESTIMONIALS,
                    payload: response.data.testimonials
                });


            },
            (error) => {
                console.log(error.response);
            }
        );
};
