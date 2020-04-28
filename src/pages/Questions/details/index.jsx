import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    addComment,
    getMoreQuestionComments,
    getQuestionComments,
    getSingleQuestion,
    setSingleQuestion,
    viewQuestion
} from "../../../store/actions/questions";

import Question from "../../../components/Cards/Questions/Question";
import {Breadcrumb} from "react-bootstrap";
import LeaveCommentForm from "../../../components/Cards/Comments/LeaveComment";
import Comment from "../../../components/Cards/Comments/Comment";
import LazyList from "../../../components/DataList";
import QuestionBasePage from "../_layout";
import {showModal} from "../../../store/actions/modal";
import LoginForm from "../../../components/Forms/Auth/LoginForm";
import {Helmet} from "react-helmet";

const SingleQuestionContainer = (
    {
        getSingleQuestion, getComments, getMoreComments, setSingleQuestion,
        incrementViews, leaveComment, showModal,
        questions, stateData, authUser,
        match
    }) => {

    const {id} = match.params;
    const cached_question = questions.find(question => ((question.id = id) || (question.slug = id)))

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

            {
                stateData.loading === false &&
                <Helmet>
                    <meta property="og:title" content={stateData.model.title}/>
                    <meta name="description" content={stateData.model.description}/>
                    <meta name="og:description" content={stateData.model.description}/>
                    <link itemProp="thumbnailUrl" href={stateData.model.image_url || stateData.model.author.image_url}/>
                    <meta content={stateData.model.image_url || stateData.model.author.image_url} property="og:image"/>
                    <meta content={stateData.model.image_url || stateData.model.author.image_url}
                          property="og:image:secure_url"/>
                    <meta property="og:updated_time" content={stateData.model.updated_at}/>
                </Helmet>
            }

            {/*breadcrumbs*/}
            <div className="row">
                <Breadcrumb className={"w-100"}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/question">
                        Questions
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

            {(!stateData.loading && !stateData.model.isClosed()) && <div className="row">
                <LeaveCommentForm onSubmit={handleCommentSubmitted} withImages/>
            </div>}

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
    incrementViews: (question_id) => {
        dispatch(viewQuestion(question_id))
    },
    favorite: () => {
        //todo implement
    },
    showModal: (component) => {
        dispatch(showModal(component));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestionContainer);

