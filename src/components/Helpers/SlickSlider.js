import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Question from '../../components/Cards/Questions/Question';
import Tag from '../../components/Tags/Tag';
import {connect} from "react-redux";
class Responsive extends Component {
    render() {
        var settings = {
            rtl: false,//todo use variable when site localization is added
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '60px',
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '40px',
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
        const questions = this.props.recentQuestions;
        return (
            <div className="my-5">
                <Slider {...settings}>
                    {questions ? questions.map((question, index) => (
                        <div className="slick-slide" key={index}>
                            <Question key={index} question={question} className="card-four" tag={Tag}/>
                        </div>
                    )) : <h1>loading</h1>}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    recentQuestions: state.questions.recent
});

export default connect(mapStateToProps)(Responsive);
