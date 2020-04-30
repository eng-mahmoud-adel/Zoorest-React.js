import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

const SlickSlider = ({children, className, settings}) => {
    return (
        <div className={`${className || ""} my-3`}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};

SlickSlider.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    settings: PropTypes.object.isRequired,

};

export default SlickSlider;
