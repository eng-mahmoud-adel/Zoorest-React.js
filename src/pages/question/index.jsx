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
import QuestionBasePage from "./_layout";
import QuestionLoadingAnimation, {QuestionLoadingAnimationBar} from "../../components/Cards/Questions/LoadingAnimations/Question";
import SearchBar from "../../components/SearchBar";

const AllQuestionsContainer = (
    {
        getRecentQuestions, getNotAnsweredQuestions, getMostCommonQuestions,
        getMoreRecentQuestions, recent_questions_data, not_answered_data,
        most_common_data
    }
) => {

    const [key, setKey] = useState("recent_questions");

    useEffect(() => {
        getRecentQuestions();
        getNotAnsweredQuestions();
        getMostCommonQuestions();
    }, [getRecentQuestions, getNotAnsweredQuestions, getMostCommonQuestions]);

    return (
        <QuestionBasePage>
            <SearchBar
                placeholder="Type Something"
                size="lg"
                className="mb-5 "
                onInputChange={(query) => {
                    console.log(query);
                }}/>

            <Tabs id="recent_question"
                  variant="tabs"
                  className="nav-fill"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}>

                <Tab eventKey="recent_questions" title="Recent Questions">
                    {recent_questions_data.data.length !== 0 ? <LazyList
                            data={recent_questions_data}
                            loadMoreMessage={"Load More question"}
                            component={Question}
                            placeholderComponent={QuestionLoadingAnimation}
                            fetchMoreData={getMoreRecentQuestions}
                            refresh={getRecentQuestions}

                        /> :
                        <div className="row">
                            <QuestionLoadingAnimationBar count={3} size="col-12"/>
                        </div>
                    }
                </Tab>

                <Tab eventKey="not_answered" title="Not Answered">

                    <LazyList
                        data={not_answered_data}
                        loadMoreMessage={"Load More question"}
                        component={Question}
                        placeholderComponent={QuestionLoadingAnimation}
                        fetchMoreData={getMoreNotAnsweredQuestions}
                        refresh={getNotAnsweredQuestions}
                    />
                </Tab>

                <Tab eventKey="most_common" title="Most Common">
                    <LazyList
                        data={most_common_data}
                        loadMoreMessage={"Load More question"}
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
