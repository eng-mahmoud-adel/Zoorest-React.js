import {HOMEPAGE_TESTIMONIALS} from '../actions/home';
import Testimonials from "../../model/Testimonials";

const initialState = [];

const testimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case HOMEPAGE_TESTIMONIALS:
            return action.payload.map(item => new Testimonials(item));
    }
};

export default testimonialsReducer;
