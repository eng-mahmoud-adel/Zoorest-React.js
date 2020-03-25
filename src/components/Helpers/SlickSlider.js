import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SlickSlider extends Component {
    render() {
        var settings = {
            rtl: false,//todo use variable when site localization is added
            dots: true,
            infinite: true,
            arrows: false,
            initialSlide: 0,
            // autoplay: true,
            // autoplaySpeed: 5000,
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '200px',
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '60px',
                        slidesToShow: 1,
                        centerMode: true,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '40px',
                    }
                }
            ]
        };
        const slides = this.props.children;
        return (
            <div className="my-5">
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div>
        );
    }
}

export default SlickSlider;
