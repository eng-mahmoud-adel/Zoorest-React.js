import {HOMEPAGE_RECENT_QUESTIONS} from '../../actions/home';

import Question from '../../../model/Question';

const initialState = {
    banner_image: "",
    banner_title: "Share Your Questions and let the professional doctors help pet become better",
    banner_description: "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit.",
};


const questionsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_RECENT_QUESTIONS:
            return action.payload.map(item => new Question(item))

        default:
            break;
    }

    return state;
};

export default questionsPageReducer;
