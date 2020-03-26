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
        default:
            break;
    }

    return state;
};

export default homePageReducer
