import ApiService from "../../services/ApiService";

export const HOMEPAGE_HERO_SECTION = "HOMEPAGE_HERO_SECTION";
export const HOMEPAGE_DOWNLOAD_APP_SECTION = "HOMEPAGE_DOWNLOAD_APP_SECTION";
export const HOMEPAGE_RECENT_QUESTIONS_SECTION = "HOMEPAGE_RECENT_QUESTIONS_SECTION";
export const HOMEPAGE_SPONSORED_PROVIDER_SECTION = "HOMEPAGE_NEAREST_PROVIDER_SECTION";
export const HOMEPAGE_SEO = "HOMEPAGE_SEO";

export const HOMEPAGE_RECENT_QUESTIONS = "HOMEPAGE_RECENT_QUESTIONS";
export const HOMEPAGE_SPONSORED_PROVIDERS = "HOMEPAGE_SPONSORED_PROVIDERS";
export const HOMEPAGE_RECENT_POSTS = "HOMEPAGE_RECENT_POSTS";
export const HOMEPAGE_RECENT_ARTICLES = "HOMEPAGE_RECENT_ARTICLES";
export const HOMEPAGE_TESTIMONIALS = "HOMEPAGE_TESTIMONIALS";

export const PROVIDERS_PAGE = "PROVIDERS_PAGE";
export const QUESTIONS_PAGE = "QUESTIONS_PAGE";
export const ADOPTION_PAGE = "ADOPTION_PAGE";

export const TERMS_PAGE = "TERMS_PAGE";
export const PRIVACY_PAGE = "PRIVACY_PAGE";

export const getHomeData = () => async (dispatch) => {
    await ApiService.get(`page/home`)
        .then(
            (response) => {

                dispatch({
                    type: HOMEPAGE_SEO,
                    payload: response.data.page.seo
                });

                dispatch({
                    type: HOMEPAGE_HERO_SECTION,
                    payload: response.data.page.sections.find(section => section.name === "Hero")
                });

                dispatch({
                    type: HOMEPAGE_DOWNLOAD_APP_SECTION,
                    payload: response.data.page.sections.find(section => section.name === "Download app")
                });

                dispatch({
                    type: HOMEPAGE_RECENT_QUESTIONS_SECTION,
                    payload: response.data.page.sections.find(section => section.name === "Recent questions")
                });

                dispatch({
                    type: HOMEPAGE_SPONSORED_PROVIDER_SECTION,
                    payload: response.data.page.sections.find(section => section.name === "Sponsored providers")
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

export const getProviderPage = () => async (dispatch) => {
    await ApiService.get(`page/providers`)
        .then(
            (response) => {

                dispatch({
                    type: PROVIDERS_PAGE,
                    payload: response.data.data.sections.find(section => section.name === "Banner")
                });

            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getQuestionsPage = () => async (dispatch) => {
    await ApiService.get(`page/questions`)
        .then(
            (response) => {

                dispatch({
                    type: QUESTIONS_PAGE,
                    payload: response.data.data.sections.find(section => section.name === "Banner")
                });

            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getAdoptionPage = () => async (dispatch) => {
    await ApiService.get(`page/posts`)
        .then(
            (response) => {

                dispatch({
                    type: ADOPTION_PAGE,
                    payload: response.data.data.sections.find(section => section.name === "Banner")
                });

            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getTermsPage = () => async (dispatch) => {
    await ApiService.get(`page/terms-and-conditions`)
        .then(
            (response) => {

                dispatch({
                    type: TERMS_PAGE,
                    payload: response.data.data.sections.find(section => section.name === "Content")
                });

            },
            (error) => {
                console.log(error.response);
            }
        );
};

export const getPrivacyPage = () => async (dispatch) => {
    await ApiService.get(`page/privacy-policy`)
        .then(
            (response) => {

                dispatch({
                    type: PRIVACY_PAGE,
                    payload: response.data.data.sections.find(section => section.name === "Content")
                });

            },
            (error) => {
                console.log(error.response);
            }
        );
};
