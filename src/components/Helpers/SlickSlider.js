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
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const questions = this.props.recentQuestions;
        return (
            <div className="my-5">
                <Slider {...settings}>
                    {questions ? questions.map((question, index) => (
                        <div className=" col" key={index}>
                            <Question question={question} className="card-four" tag={Tag}/>
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
