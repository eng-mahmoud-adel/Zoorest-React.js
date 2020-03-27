import React, {useEffect, useState} from 'react'
import Tab from "react-bootstrap/Tab";
import LazyList from "../../../components/DataList";
import Question from "../../../components/Cards/Questions/Question";
import {
    getMoreMostCommonQuestions,
    getMoreNotAnsweredQuestions,
    getMoreRecentQuestions, getMostCommonQuestions, getNotAnsweredQuestions,
    getRecentQuestions
} from "../../../store/actions/questions";
import Tabs from "react-bootstrap/Tabs";
import {connect} from "react-redux";
import {FormControl, Row} from "react-bootstrap";
import BannerImage from "../../../images/assets/Bg@3x.png";
import AskQuestion from "../../../components/Cards/Questions/AskQuestion";
import TopQuestionsMembers from "../../../components/Cards/Questions/TopQuestionsMembers";
import Avatar from "../../../components/Avatars/Avatar";

const AllQuestionsContainer = props => {
    const pageData = props.pageData;
    const [key, setKey] = useState("recent_questions");

    const {getRecentQuestions, getNotAnsweredQuestions, getMostCommonQuestions, getMoreRecentQuestions} = props;
    useEffect(() => {
        getRecentQuestions();
        getNotAnsweredQuestions();
        getMostCommonQuestions();
    }, [getRecentQuestions, getNotAnsweredQuestions, getMostCommonQuestions]);

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
                    <div className="col-12 col-lg-9"><Row className="mb-3" size="xl">
                        <FormControl
                            required
                            type="text"
                            placeholder="Type Something"
                            size="lg"
                        />
                    </Row>

                        <Tabs id="recent_question"
                              activeKey={key}
                              onSelect={(k) => setKey(k)}>

                            <Tab eventKey="recent_questions" title="Recent Questions">
                                <LazyList
                                    data={props.recent_questions_data}
                                    loadMoreMessage={"Load More Questions"}
                                    component={Question}
                                    placeholderComponent={Question}
                                    fetchMoreData={getMoreRecentQuestions}
                                    refresh={getRecentQuestions}
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

                                />
                            </Tab>

                            <Tab eventKey="not_answered" title="Not Answered">

                                <LazyList
                                    data={props.not_answered_data}
                                    loadMoreMessage={"Load More Questions"}
                                    component={Question}
                                    placeholderComponent={Question}
                                    fetchMoreData={getMoreNotAnsweredQuestions}
                                    refresh={getNotAnsweredQuestions}
                                    endMessage={
                                        <p style={{textAlign: 'center'}}>
                                            {/*todo update or remove*/}
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

                                />
                            </Tab>

                            <Tab eventKey="most_common" title="Most Common">
                                <LazyList
                                    data={props.most_common_data}
                                    loadMoreMessage={"Load More Questions"}
                                    component={Question}
                                    placeholderComponent={Question}
                                    fetchMoreData={getMoreMostCommonQuestions}
                                    refresh={getMostCommonQuestions}
                                    endMessage={
                                        <p style={{textAlign: 'center'}}>
                                            {/*todo update or remove*/}
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

                                />
                            </Tab>


                        </Tabs>
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
    recent_questions_data: state.questions.recent,
    not_answered_data: state.questions.not_answered,
    most_common_data: state.questions.most_common,

    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getRecentQuestions: () => {
        dispatch(getRecentQuestions());
    },
    getMoreRecentQuestions: (url) => {
        dispatch(getMoreRecentQuestions(url));
    },
    getNotAnsweredQuestions: () => {
        dispatch(getNotAnsweredQuestions());
    },
    getMoreNotAnsweredQuestions: (url) => {
        dispatch(getMoreNotAnsweredQuestions(url));
    },
    getMostCommonQuestions: () => {
        dispatch(getMostCommonQuestions());
    },
    getMoreMostCommonQuestions: (url) => {
        dispatch(getMoreMostCommonQuestions(url));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(AllQuestionsContainer);
