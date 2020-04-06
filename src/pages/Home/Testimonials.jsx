import React, { Fragment } from 'react';
import Testimonial from '../../components/Cards/Testimonials/Testimonial';
import SlickSlider from "../../components/Helpers/SlickSlider";

const Testimonials = (props) => {
    const {testimonials}= props;
    const slickSettings = {
        rtl: false,//todo use variable when site localization is added
        dots: true,
        infinite: true,
        arrows: false,
        initialSlide: 0,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <Fragment>
            <h1 className= "font-weight-bold text-center">Special quotes<br /> from our customer about us</h1>
            
                <SlickSlider settings={slickSettings}>
                    {testimonials && testimonials.map((testimonial, index) => (
                        <Testimonial testimonial= {testimonial} key= {index} />
                    ))}
                </SlickSlider>
            
        </Fragment>
    );
};

export default Testimonials;
