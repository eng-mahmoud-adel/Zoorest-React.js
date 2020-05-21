import Section from "../../model/Section";
import {
    ADOPTION_PAGE,
    ADOPTION_PAGE_SEO,
    HOMEPAGE_DOWNLOAD_APP_SECTION,
    HOMEPAGE_HERO_SECTION,
    HOMEPAGE_RECENT_QUESTIONS_SECTION,
    HOMEPAGE_SEO,
    HOMEPAGE_SPONSORED_PROVIDER_SECTION,
    PRIVACY_PAGE,
    PROVIDERS_PAGE,
    PROVIDERS_PAGE_SEO,
    QUESTIONS_PAGE,
    QUESTIONS_PAGE_SEO,
    TERMS_PAGE
} from "../actions/pages";
import SEO from "../../model/SEO";

const initialState = {
    homepage: {
        seo: new SEO(),
        heroSection: new Section(),
        downloadAppSection: new Section(),
        recentQuestionsSection: new Section(),
        sponsoredProvidersSection: new Section()
    },
    providers: {
        seo: new SEO(),
        bannerSection: new Section()
    },
    questions: {
        seo: new SEO(),
        bannerSection: new Section()
    },
    adoption: {
        seo: new SEO(),
        bannerSection: new Section()
    },
    articles: {
        seo: new SEO(),
        trending_topics: []
    },
    privacy: {
        content: new Section()
    },
    terms: {
        content: new Section()
    },
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_SEO:
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                homepage: {
                    ...state.homepage,
                    seo: new SEO(action.payload)
                },
            }

        case PROVIDERS_PAGE_SEO:
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                providers: {
                    ...state.providers,
                    seo: new SEO(action.payload)
                },
            }

        case QUESTIONS_PAGE_SEO:
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                questions: {
                    ...state.questions,
                    seo: new SEO(action.payload)
                },
            }

        case ADOPTION_PAGE_SEO:
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                adoption: {
                    ...state.adoption,
                    seo: new SEO(action.payload)
                },
            }

        case HOMEPAGE_HERO_SECTION:
            return {
                ...state,
                homepage: {
                    ...state.homepage,
                    heroSection: new Section(action.payload)
                },
            }

        case HOMEPAGE_DOWNLOAD_APP_SECTION:
            return {
                ...state,
                homepage: {
                    ...state.homepage,
                    downloadAppSection: new Section(action.payload)
                },
            }

        case HOMEPAGE_RECENT_QUESTIONS_SECTION:
            return {
                ...state,
                homepage: {
                    ...state.homepage,
                    recentQuestionsSection: new Section(action.payload)
                },
            }

        case HOMEPAGE_SPONSORED_PROVIDER_SECTION:
            return {
                ...state,
                homepage: {
                    ...state.homepage,
                    sponsoredProvidersSection: new Section(action.payload)
                },
            }


        case PROVIDERS_PAGE:
            return {
                ...state,
                providers: {
                    ...state.providers,
                    bannerSection: new Section(action.payload)
                },
            }

        case QUESTIONS_PAGE:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    bannerSection: new Section(action.payload)
                },
            }

        case ADOPTION_PAGE:
            return {
                ...state,
                adoption: {
                    ...state.adoption,
                    bannerSection: new Section(action.payload)
                },
            }
        case TERMS_PAGE:
            return {
                ...state,
                terms: {
                    ...state.terms,
                    content: new Section(action.payload)
                },
            }
        case PRIVACY_PAGE:
            return {
                ...state,
                privacy: {
                    ...state.privacy,
                    content: new Section(action.payload)
                },
            }

        default:
            break;
    }

    return state;
};

export default pageReducer
