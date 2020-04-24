import React, {useEffect} from 'react'

import BannerImage from '../../../images/assets/images/Bg@3x.png';
import AskQuestion from "../../../components/Cards/Questions/AskQuestion";
import TopQuestionsMembers from "../../../components/Cards/Questions/TopQuestionsMembers";
import Avatar from "../../../components/Avatars/Avatar";

import {connect} from "react-redux";
import {getQuestionsPage} from "../../../store/actions/pages";

const QuestionBasePage = ({page, children, getPage, currentLocale}) => {

    useEffect(() => {
        getPage();
    }, [getPage]);

    return (
        <div id="questions-index">
            <div className="jumbotron jumbotron-fluid " style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="container text-center">
                    <h3 className="banner-title">{page.bannerSection.getFiledValueByName("title", currentLocale)}</h3>
                    <p>{page.bannerSection.getFiledValueByName("description", currentLocale)}</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        {children}
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
    page: state.pages.questions,
    currentLocale: state.i18n.value,

});

const mapDispatchToProps = dispatch => ({
    getPage: () => {
        dispatch(getQuestionsPage());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionBasePage);

