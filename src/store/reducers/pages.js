import Section from "../../model/Section";
import {
    ADOPTION_PAGE,
    HOMEPAGE_DOWNLOAD_APP_SECTION,
    HOMEPAGE_HERO_SECTION,
    HOMEPAGE_RECENT_QUESTIONS_SECTION,
    HOMEPAGE_SPONSORED_PROVIDER_SECTION,
    PRIVACY_PAGE,
    PROVIDERS_PAGE,
    QUESTIONS_PAGE,
    TERMS_PAGE
} from "../actions/pages";

const initialState = {
    homepage: {
        heroSection: new Section(),
        downloadAppSection: new Section(),
        recentQuestionsSection: new Section(),
        sponsoredProvidersSection: new Section()
    },
    providers: {
        bannerSection: new Section()
    },
    questions: {
        bannerSection: new Section()
    },
    adoption: {
        bannerSection: new Section()
    },
    articles: {
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
