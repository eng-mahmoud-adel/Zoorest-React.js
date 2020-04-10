import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    addComment,
    getMoreQuestionComments,
    getQuestionComments,
    getSingleQuestion, setSingleQuestion
} from "../../../store/actions/questions";

import Question from "../../../components/Cards/Questions/Question";
import {Breadcrumb} from "react-bootstrap";
import LeaveCommentForm from "../../../components/Cards/Comments/LeaveComment";
import Comment from "../../../components/Cards/Comments/Comment";
import LazyList from "../../../components/DataList";
import QuestionBasePage from "../_layout";
import {showModal} from "../../../store/actions/modal";
import LoginForm from "../../../components/Forms/LoginForm";

const SingleQuestionContainer = props => {
    const {
        getSingleQuestion,
        getComments,
        getMoreComments,
        setSingleQuestion,
        incrementViews,
        leaveComment,
        showModal
    } = props;

    const {questions, stateData, authUser} = props;
    const {id} = props.match.params;
    const cached_question = questions.find(question => question.id = id)

    useEffect(() => {
        if (cached_question) {
            setSingleQuestion(cached_question)
        } else {
            getSingleQuestion(id);
        }
    }, [setSingleQuestion, getSingleQuestion, id, cached_question]);

    useEffect(() => {
        getComments(id);
    }, [getComments, id]);

    useEffect(() => {
        incrementViews(id);
    }, [incrementViews, id]);

    const handleCommentSubmitted = (values, {setSubmitting}) => {
        console.log(authUser);
        debugger;
        if ("undefined" === typeof authUser.accessToken) {

            setSubmitting(false)
            showModal(LoginForm);

        } else {

            leaveComment(id, values, () => {
                setSubmitting(false)
            });

        }

    };

    return (

        <QuestionBasePage>

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
                {stateData.loading === false &&
                <Question model={stateData.model} hide_add_answer={true}/>}
            </div>
            {/*comments*/}

            <div className="row mx-2 my-4">
                <h4>{stateData.model.replies_count} Answers</h4>
            </div>

            <div className="row">
                <LeaveCommentForm onSubmit={handleCommentSubmitted} withImages/>
            </div>

            <div className="row my-3">
                <div className="col-12 mx-0">
                    {!stateData.loadingComments ?
                        <LazyList
                            data={stateData.comments}
                            component={Comment}
                            placeholderComponent={Comment}
                            fetchMoreData={getMoreComments}
                            refresh={getComments}
                        /> : <h2>No Comments</h2>}
                </div>
            </div>
        </QuestionBasePage>
    );
};
const mapStateToProps = (state) => ({
    pageData: state.questionsPage,
    questions: state.questions.all,
    stateData: state.singleQuestionPage,
    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getSingleQuestion: (slug) => {
        dispatch(getSingleQuestion(slug));
    },
    setSingleQuestion: (question) => {
        dispatch(setSingleQuestion(question));
    },
    getComments: (slug) => {
        dispatch(getQuestionComments(slug));
    },
    getMoreComments: (nextPageUrl) => {
        dispatch(getMoreQuestionComments(nextPageUrl));
    },
    leaveComment: (question_id, data, callback) => {
        dispatch(addComment(question_id, data, callback));
    },
    incrementViews: () => {
        //todo implement
    },
    favorite: () => {
        //todo implement
    },
    showModal: (component) => {
        dispatch(showModal(component));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestionContainer);

