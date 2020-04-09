import React, {Fragment} from 'react';
import Button from '../../components/Buttons/Button/Button';
import AnimalImage
    from '../../images/assets/images/kisspng-cat-dog-veterinarian-pet-clinique-vtrinaire-5b0b7de8a47a66.0097244915274797846737@3x.png';
import SlickSlider from '../../components/Helpers/SlickSlider';
import Question from "../../components/Cards/Questions/Question";
import Tag from "../../components/Tags/Tag";
import LazyLoad from "react-lazyload";
import { Link } from 'react-router-dom';

const RecentQuestions = (props) => {
    const slickSettings = {
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
                    slidesToShow: 2,
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
    const questions = props.questions;
    return (
        <Fragment>
            <div className="row mr-0">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 image">
                    <LazyLoad unmountIfInvisible={true} once={true}
                              placeholder={<h5 className="lazy loading">loading...</h5>}>
                        <img src={AnimalImage} alt="" className="img-fluid"/>
                    </LazyLoad>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-9 text-center wrapper">
                    <h1 className="title font-weight-bold mt-0">Share Your Questions and let the professional doctors help
                        pet become better</h1>
                    <p className="desc mb-0">Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada
                        enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                        nisi velit.</p>
                    <div className="col-lg-6 col-md-7 col-sm-5 col-11 mx-auto">
                        <Link to= "/doctor"><Button text="Find the Nearest Doctors Now" color="btn btn-info" size="btn-sm"/></Link>
                    </div>
                </div>
            </div>

            <SlickSlider settings={slickSettings}>
                {questions ? questions.map((question, index) => (
                    <Question key={index} model={question} className="question-card " tag={Tag}/>
                )) : <h1>loading</h1>}
            </SlickSlider>
        </Fragment>
    );
};

export default RecentQuestions;
