import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    getMoreQuestionComments,
    getQuestionComments,
    getSingleQuestion
} from "../../../store/actions/questions";

import Question from "../../../components/Cards/Questions/Question";
import {Breadcrumb} from "react-bootstrap";
import BannerImage from "../../../images/assets/Bg@3x.png";
import AskQuestion from "../../../components/Cards/Questions/AskQuestion";
import TopQuestionsMembers from "../../../components/Cards/Questions/TopQuestionsMembers";
import Avatar from "../../../components/Avatars/Avatar";
import LeaveComment from "../../../components/Cards/Comments/LeaveComment";
import Comment from "../../../components/Cards/Comments/Comment";
import LazyList from "../../../components/DataList";

const SingleQuestionContainer = props => {
    const pageData = props.pageData;

    const {getSingleQuestion, getComments, getMoreComments} = props;
    const {id} = props.match.params;
    console.log(props.singleQuestion);

    useEffect(() => {
        //todo load model only if its not passed as object (opening url directly)
        getSingleQuestion(id);
        getComments(id);
    }, [getSingleQuestion, id]);

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

                        {/*breadcrumbs*/}
                        <div className="row">
                            <Breadcrumb className={"w-100"}>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/questions">
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Question {id}</Breadcrumb.Item>
                            </Breadcrumb>

                        </div>

                        {/*post Item*/}

                        <div className="row">
                            {props.singleQuestion.loading === false &&
                            <Question model={props.singleQuestion.model} hide_add_answer={true}/>}
                        </div>
                        {/*comments*/}

                        <div className="row mx-2 my-4">
                            <h4>X Answers</h4>
                        </div>

                        <div className="row">
                            <LeaveComment/>
                        </div>


                        <div className="row my-3">
                            {!props.singleQuestion.loadingComments ? <LazyList
                                data={props.singleQuestion.comments}
                                component={Comment}
                                placeholderComponent={Comment}
                                fetchMoreData={getMoreComments}
                                refresh={getComments}
                                endMessage={
                                    <p style={{textAlign: 'center'}}>
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                                pullDownToRefresh
                                pullDownToRefreshContent={
                                    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                                }
                                releaseToRefreshContent={
                                    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                                }

                            /> : <h2>No Comments</h2>}
                        </div>
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
    singleQuestion: state.singleQuestionPage,
    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getSingleQuestion: (slug) => {
        dispatch(getSingleQuestion(slug));
    },
    getComments: (slug) => {
        dispatch(getQuestionComments(slug));
    },
    getMoreComments: (nextPageUrl) => {
        dispatch(getMoreQuestionComments(nextPageUrl));
    },
    leaveComment: () => {
        //todo implement
    },
    incrementViews: () => {
        //todo implement
    },
    favorite: () => {
        //todo implement
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestionContainer);

