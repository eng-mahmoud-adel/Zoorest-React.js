import React, {Fragment} from 'react';
import Testimonial from '../../components/Cards/Testimonials/Testimonial';
import SlickSlider from "../../components/Helpers/SlickSlider";
import {Text32} from "../../components/UI/Typography";

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
            <div className="font-weight-bold text-center">
                <Text32>
                    Special quotes<br/> from our customer about us
                </Text32>
            </div>

            <SlickSlider settings={slickSettings}>
                {testimonials && testimonials.map((testimonial, index) => (
                    <Testimonial testimonial={testimonial} key={index}/>
                ))}
            </SlickSlider>

        </Fragment>
    );
};

export default Testimonials;
