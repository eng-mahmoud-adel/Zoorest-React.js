import Section from "../../model/Section";
import {
    HOMEPAGE_DOWNLOAD_APP_SECTION,
    HOMEPAGE_HERO_SECTION,
    HOMEPAGE_RECENT_QUESTIONS_SECTION,
    HOMEPAGE_SPONSORED_PROVIDER_SECTION,
    PROVIDERS_PAGE,
    QUESTIONS_PAGE,
    ADOPTION_PAGE
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

        default:
            break;
    }

    return state;
};

export default pageReducer
