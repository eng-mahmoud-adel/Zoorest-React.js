import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Question from '../../components/Cards/Questions/Question';
import Tag from '../../components/Tags/Tag';
import { connect } from "react-redux";

class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
    const questions= this.props.recentQuestions;
    return (
      <div>
        <Slider {...settings}>
          {questions? questions.map((question, index) => (
              <div className= "my-5 col-md-12" key= {index}>
              <Question questions= {questions} className= "card-four" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" tag= {Tag} />
            </div>
          )) : <h1>loading</h1>}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    recentQuestions: state.questions.recent
})

export default connect(mapStateToProps)(Responsive);