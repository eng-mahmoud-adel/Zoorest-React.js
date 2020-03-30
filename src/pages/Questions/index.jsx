import React from 'react'

import BannerImage from '../../images/assets/images/Bg@3x.png';
import AskQuestion from "../../components/Cards/Questions/AskQuestion";
import TopQuestionsMembers from "../../components/Cards/Questions/TopQuestionsMembers";
import Avatar from "../../components/Avatars/Avatar";

import {connect} from "react-redux";

const QuestionBasePage = props => {

    const pageData = props.pageData;

    return (
        <div id="questions-index">
            <div className="jumbotron jumbotron-fluid " style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="container text-center">
                    <h3 className="banner-title">{pageData.banner_title}</h3>
                    <p>{pageData.banner_description}</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        {props.children}
                    </div>
                    <div className="col-3 px-5 d-none d-lg-block">
                        <div className="row mb-3">
                            <AskQuestion cardTextOne="Questions" cardTextTwo="Answers"
                                         numberOne="33333" numberTwo="33333"/>
                        </div>
                        <div className="row mb-3 d-none d-lg-block">
                            <TopQuestionsMembers className="top-membes-card" cardTitle="Top Questions"
                                                 cardText="How to approach applying for a job at a company ?"/>
                        </div>
                        <div className="row mb-3 d-none d-lg-block">
                            <TopQuestionsMembers className="top-membes-card" cardTitle="Top Members"
                                                 avatar={Avatar}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => ({
    pageData: state.questionsPage,
});

const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionBasePage);

