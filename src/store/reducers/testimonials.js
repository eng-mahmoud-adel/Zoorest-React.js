import {GET_TESTIMONIALS} from '../actions/home';
import Testimonials from "../../model/Testimonials";
import { dummyTestimonials } from '../DummyData/testimonials';

const initialState = [];

const testimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TESTIMONIALS:
            return action.payload.map(item => new Testimonials(item));
    }

    return state;
};

export default testimonialsReducer;
