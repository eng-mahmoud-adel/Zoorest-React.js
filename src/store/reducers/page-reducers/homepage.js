import Section from '../../../model/Section';

import {
    HOMEPAGE_DOWNLOAD_APP_SECTION,
    HOMEPAGE_HERO_SECTION,
    HOMEPAGE_NEAREST_PROVIDER_SECTION,
    HOMEPAGE_RECENT_QUESTIONS_SECTION
} from '../../actions/home';

const initialState = {
    heroSection: new Section(),
    downloadAppSection: new Section(),
    recentQuestionsSection: new Section(),
    nearestProviderSection: new Section()
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOMEPAGE_HERO_SECTION:
            return {
                ...state,
                heroSection: new Section(action.payload)
            }

        case HOMEPAGE_DOWNLOAD_APP_SECTION:
            return {
                ...state,
                downloadAppSection: new Section(action.payload)
            }

        case HOMEPAGE_RECENT_QUESTIONS_SECTION:
            return {
                ...state,
                recentQuestionsSection: new Section(action.payload)
            }

        case HOMEPAGE_NEAREST_PROVIDER_SECTION:
            return {
                ...state,
                nearestProviderSection: new Section(action.payload)
            }

        default:
            break;
    }

    return state;
};

export default homePageReducer
