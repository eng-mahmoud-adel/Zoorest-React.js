import React, {useEffect, useState} from 'react'
import Tab from "react-bootstrap/Tab";
import LazyList from "../../components/DataList";
import Question from "../../components/Cards/Questions/Question";
import {
    getMoreMostCommonQuestions,
    getMoreNotAnsweredQuestions,
    getMoreRecentQuestions,
    getMostCommonQuestions,
    getNotAnsweredQuestions,
    getRecentQuestions
} from "../../store/actions/questions";
import Tabs from "react-bootstrap/Tabs";
import {connect} from "react-redux";
import {FormControl, Row} from "react-bootstrap";
import QuestionBasePage from "./_layout";
import QuestionLoadingAnimation from "../../components/Cards/Questions/LoadingAnimations/Question";

const AllQuestionsContainer = props => {

    const [key, setKey] = useState("recent_questions");

    const {getRecentQuestions, getNotAnsweredQuestions, getMostCommonQuestions, getMoreRecentQuestions} = props;
    useEffect(() => {
        getRecentQuestions();
        getNotAnsweredQuestions();
        getMostCommonQuestions();
    }, [getRecentQuestions, getNotAnsweredQuestions, getMostCommonQuestions]);

    return (
        <QuestionBasePage>
            <Row className="mb-3" size="xl">
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
                        placeholderComponent={QuestionLoadingAnimation}
                        fetchMoreData={getMoreRecentQuestions}
                        refresh={getRecentQuestions}

                    />
                </Tab>

                <Tab eventKey="not_answered" title="Not Answered">

                    <LazyList
                        data={props.not_answered_data}
                        loadMoreMessage={"Load More Questions"}
                        component={Question}
                        placeholderComponent={QuestionLoadingAnimation}
                        fetchMoreData={getMoreNotAnsweredQuestions}
                        refresh={getNotAnsweredQuestions}
                    />
                </Tab>

                <Tab eventKey="most_common" title="Most Common">
                    <LazyList
                        data={props.most_common_data}
                        loadMoreMessage={"Load More Questions"}
                        component={Question}
                        placeholderComponent={QuestionLoadingAnimation}
                        fetchMoreData={getMoreMostCommonQuestions}
                        refresh={getMostCommonQuestions}
                    />
                </Tab>


            </Tabs>
        </QuestionBasePage>
    );
};

const mapStateToProps = (state) => ({
    recent_questions_data: state.questions.recent,
    not_answered_data: state.questions.not_answered,
    most_common_data: state.questions.most_common,
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
