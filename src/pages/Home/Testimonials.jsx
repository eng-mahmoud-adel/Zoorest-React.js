import React, { Fragment } from 'react';
import Testimonial from '../../components/Cards/Testimonials/Testimonial';

const Testimonials = (props) => {
    const {testimonials}= props;
    
    return (
        <Fragment>
            <h1 className= "font-weight-bold text-center mb-5">Special quotes<br /> from our customer about us</h1>
            <div className= "row">
            {testimonials && testimonials.map((testimonial, index) => (
                <div className= "col-md-3">
                    <Testimonial testimonial= {testimonial} key= {index} />
                </div>
            ))}
            </div>
        </Fragment>
    );
};

export default Testimonials;
