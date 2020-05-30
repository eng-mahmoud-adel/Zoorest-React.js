import React, {Fragment} from 'react';
import Button from '../../components/Buttons/Button/Button';
import AnimalImage
    from '../../images/assets/images/kisspng-cat-dog-veterinarian-pet-clinique-vtrinaire-5b0b7de8a47a66.0097244915274797846737@3x.png';
import SlickSlider from '../../components/Helpers/SlickSlider';
import Question from "../../components/Cards/Questions/Question";
import LazyLoad from "react-lazyload";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

const RecentQuestions = ({questions, section, currentLocale}) => {

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

    return (
        <Fragment>
            <div className="row mr-0">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 image">
                    <LazyLoad unmountIfInvisible={true} once={true}
                              placeholder={<h5 className="lazy loading">loading...</h5>}>
                        <img src={AnimalImage} alt="" className="img-fluid"/>
                    </LazyLoad>
                </div>
                {section && <div className="col-xl-7 col-lg-8 col-md-9 text-center wrapper">
                    <div className="title mt-0">
                        <h3>
                            {section.getFiledValueByName("title", currentLocale)}
                        </h3>

                    </div>
                    <h5 className="font-regular">{section.getFiledValueByName("description", currentLocale)}</h5>

                    <div className="col-lg-6 col-md-7 col-sm-5 col-11 mx-auto">
                        <Link to={section.getFiledValueByName("button_actions", currentLocale)}><Button
                            text={section.getFiledValueByName("button_text", currentLocale)} variant="info"
                            size="sm"/></Link>
                    </div>
                </div>}
            </div>

            {
                (questions && questions.length > 0) && <SlickSlider settings={slickSettings}>
                    {questions.map((question, index) => (
                        <Question key={`home_recent_question_${index}`} model={question} className="question-card "/>
                    ))}
                </SlickSlider>
            }
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    questions: state.questions.recent_questions,
    section: state.pages.homepage.recentQuestionsSection,

    currentLocale: state.i18n.value,
});
export default connect(mapStateToProps)(RecentQuestions);
