import Section from '../../../model/Section';

import {
    HOMEPAGE_HERO_SECTION, 
    HOMEPAGE_DOWNLOAD_APP_SECTION, 
    HOMEPAGE_RECENT_QUESTIONS_SECTION, 
    HOMEPAGE_NEAREST_PROVIDER_SECTION
} from '../../actions/home';

const initialState = {
    heroSection: {
        title: "Healthy pets are Happy pets ",
        description: "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs",
        image: ""
    },
    downloadAppSection: {
        title: "Now Availible Free For Android and For IOS very soon.",
        description: "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. ",
        image: ""
    },
    recentQuestionsSection:{
        title: "Share Your Questions and let the professional doctors help pet become better",
        description: "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit.",
    },
    nearestProviderSection:{
        title: "Find the Nearest Doctor for your Pets in Seconds",
        subtitle_1:"Book your appointment now through our website",
        paragraph_1:"Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are",
        subtitle_2:"Find out about the nearest clinics and see their evaluation before you visit",
        paragraph_2:"Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are",
    }

};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOMEPAGE_HERO_SECTION:
            if (action.payload.fields.map(item => item == "undefined")) {
                return Object.keys(state.heroSection.map(item => item));
            } else {
                return {
                    ...state,
                    heroSection: new Section(action.payload)
                }
            }

        case HOMEPAGE_DOWNLOAD_APP_SECTION:
            if (action.payload.fields.map(item => item == "undefined")) {
                return Object.keys(state.downloadAppSection.map(item => item));
            } else {
                return {
                    ...state,
                    downloadAppSection: new Section(action.payload)
                }
            }

        case HOMEPAGE_RECENT_QUESTIONS_SECTION:
        if (action.payload.fields.map(item => item == "undefined")) {
            return Object.keys(state.recentQuestionsSection.map(item => item));
        } else {
            return {
                ...state,
                recentQuestionsSection: new Section(action.payload)
            }
        }

        case HOMEPAGE_NEAREST_PROVIDER_SECTION:
        if (action.payload.fields.map(item => item == "undefined")) {
            return Object.keys(state.nearestProviderSection.map(item => item));
        } else {
            return {
                ...state,
                nearestProviderSection: new Section(action.payload)
            }
        }

        default:
            break;
    }

    return state;
};

export default homePageReducer
