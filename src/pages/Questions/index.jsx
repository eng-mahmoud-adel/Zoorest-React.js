import React, {Fragment, useState,useEffect} from 'react'
import {connect} from "react-redux";
import './styles/index.scss';

import BannerImage from '../../images/assets/Bg@3x.png';
import Question from "../../components/Cards/Questions/Question";
import AskQuestion from "../../components/Cards/Questions/AskQuestion";
import TopQuestionsMembers from "../../components/Cards/Questions/TopQuestionsMembers";
import Avatar from "../../components/Avatars/Avatar";

import {FormControl, Row} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import LazyList from "../../components/DataList";
import {getMostCommonQuestions, getNotAnsweredQuestions, getRecentQuestions} from "../../store/actions/questions";

const QuestionIndex = props => {
    const pageData = props.pageData;

    const [key, setKey] = useState("recent_questions");


    useEffect(() => {
        props.getRecentQuestions();
        props.getNotAnsweredQuestions();
        props.getMostCommonQuestions();
    }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid " style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="container ">
                    <h3 className="banner-title">{pageData.banner_title}</h3>
                    <p>{pageData.banner_description}</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-9">
                        <Row className="mb-3" size="xl">
                            <FormControl
                                required
                                type="text"
                                placeholder="Type Something"
                                size="lg"
                            />
                        </Row>

                        <Tabs id="controlled-tab-example"
                              activeKey={key}
                              onSelect={(k) => setKey(k)}>

                            <Tab eventKey="recent_questions" title="Recent Questions">
                                <LazyList
                                    data={props.recent_questions}
                                    loadMoreMessage={"Load More Questions"}
                                    component={Question}
                                />
                            </Tab>

                            <Tab eventKey="not_answered" title="Not Answered">

                                <LazyList
                                    data={[]}
                                    component={Question}
                                />
                            </Tab>

                            <Tab eventKey="" title="Most Common">
                                <LazyList
                                    data={props.most_common}
                                    component={Question}/>
                            </Tab>


                        </Tabs>
                    </div>
                    <div className="col-3 px-5">
                        <div className="row mb-3">
                            <AskQuestion cardTextOne="Questions" cardTextTwo="Answers"
                                         numberOne="33333" numberTwo="33333"/>
                        </div>
                        <div className="row mb-3">
                            <TopQuestionsMembers className="top-membes-card" cardTitle="Top Questions"
                                                 cardText="How to approach applying for a job at a company ?"/>
                        </div>
                        <div className="row mb-3">
                            <TopQuestionsMembers className="top-membes-card" cardTitle="Top Members"
                                                 avatar={Avatar}/>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    pageData: state.questionsPage,
    recent_questions: state.questions.recent,
    not_answered: state.questions.not_answered,
    most_common: state.questions.most_common,

    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getRecentQuestions: () => {
        dispatch(getRecentQuestions());
    },
    getNotAnsweredQuestions: () => {
        dispatch(getNotAnsweredQuestions());
    },
    getMostCommonQuestions: () => {
        dispatch(getMostCommonQuestions());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
