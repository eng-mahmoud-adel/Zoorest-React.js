import React, {useEffect} from 'react'

import BannerImage from '../../../images/assets/images/Bg@3x.png';
import AskQuestion from "../../../components/Cards/Questions/AskQuestion";
import TopQuestionsMembers from "../../../components/Cards/Questions/TopQuestionsMembers";
import Avatar from "../../../components/Avatars/Avatar";

import {connect} from "react-redux";
import {getQuestionsPage} from "../../../store/actions/pages";
import TopQuestions from "../../../components/Cards/Questions/TopQuestions";
import {Text18Regular, Text48} from "../../../components/UI/Typography";

const QuestionBasePage = ({page, children, getPage, currentLocale}) => {

    useEffect(() => {
        getPage();
    }, [getPage]);

    return (
        <div id="questions-index">
            <div className="jumbotron jumbotron-fluid " style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="container text-center">
                    <h3 className="banner-title">
                        <Text48
                            className="text-white">{page.bannerSection.getFiledValueByName("title", currentLocale)}</Text48>
                    </h3>
                    <br/>
                    <Text18Regular
                        className="text-white">{page.bannerSection.getFiledValueByName("description", currentLocale)}</Text18Regular>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        {children}
                    </div>
                    <div className="col-3 px-5 d-none d-lg-block">
                        <div className="row mb-3">
                            <AskQuestion/>
                        </div>
                        <div className="row mb-3 d-none d-lg-block">
                            <TopQuestions/>
                        </div>
                        <div className="row mb-3 d-none d-lg-block">
                            <TopQuestionsMembers cardTitle="Top Members"
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

