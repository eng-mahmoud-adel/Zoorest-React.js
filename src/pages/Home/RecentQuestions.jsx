import React from 'react';
import SmallButton from '../../components/Buttons/SmallButtons/SmallButton';
import AnimalImage
    from '../../images/assets/kisspng-cat-dog-veterinarian-pet-clinique-vtrinaire-5b0b7de8a47a66.0097244915274797846737@3x.png';
import SlickSlider from '../../components/Helpers/SlickSlider';
import Question from "../../components/Cards/Questions/Question";
import Tag from "../../components/Tags/Tag";

const RecentQuestions = (props) => {
    const questions = props.questions;
    return (
        <div>
            <div className="row">
                <div className="col-md-3 image">
                    <img src={AnimalImage} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-8 text-center wrapper">
                    <h1 className="title font-weight-bold">Share Your Questions and let the professional doctors help
                        pet become better</h1>
                    <p className="desc">Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada
                        enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                        nisi velit.</p>
                    <div className="w-25 mx-auto">
                        <SmallButton text="Find the Nearest Doctors Now" color="btn btn-info" size="btn-sm"/>
                    </div>
                </div>
            </div>

            <SlickSlider>
                {questions ? questions.map((question, index) => (
                    <Question key={index} question={question} className="question-card shadow-sm" tag={Tag}/>
                )) : <h1>loading</h1>}
            </SlickSlider>
        </div>
    );
};

export default RecentQuestions;
