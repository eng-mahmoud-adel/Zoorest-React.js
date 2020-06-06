import React, {Fragment, useEffect} from 'react'

import BannerImage from '../../../images/assets/images/Bg@3x.png';
import AskQuestion from "../../../components/Cards/Questions/AskQuestion";
import TopQuestionsMembers from "../../../components/Cards/Questions/TopQuestionsMembers";
import Avatar from "../../../components/Avatars/Avatar";

import {connect} from "react-redux";
import {getQuestionsPage} from "../../../store/actions/pages";
import TopQuestions from "../../../components/Cards/Questions/TopQuestions";

import {Helmet} from "react-helmet";


const QuestionBasePage = ({page: {bannerSection, seo}, children, getPage, currentLocale}) => {

    useEffect(() => {
        getPage();
    }, [getPage]);

    return (
        <Fragment>
            {
                <Helmet>
                    {seo.title && <title>{seo.getLocalizedTitle(currentLocale)}</title>}

                    {seo.meta_keywords &&
                    <meta name="keywords" content={seo.getLocalizedKeywords(currentLocale)}/>}

                    {seo.meta_description &&
                    <meta name="description" content={seo.getLocalizedDescription(currentLocale)}/>}

                    {seo.updated_at && <meta name="og:updated_time" content={seo.updated_at}/>}
                </Helmet>
            }
            <div id="questions-index">
                <div className="jumbotron jumbotron-fluid " style={{backgroundImage: `url(${BannerImage})`}}>
                    <div className="container text-center">
                        <h2 className="text-white">{bannerSection.getFiledValueByName("title", currentLocale)}</h2>

                        <h5 className="font-regular text-white">{bannerSection.getFiledValueByName("description", currentLocale)}</h5>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row px-2 px-sm-0">
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
        </Fragment>
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

