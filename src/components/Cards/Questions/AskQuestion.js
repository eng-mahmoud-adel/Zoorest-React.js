import React, {useEffect} from 'react';
import Button from '../../Buttons/Button/Button';
import {Card} from "react-bootstrap";
import {getQuestionsAnalytics} from "../../../store/actions/questions";
import {connect} from "react-redux";
import {showModal} from "../../../store/actions/modal";
import AddQuestion from "../../Forms/AddQuestion";

const AskQuestion = ({className, getQuestionsAnalytics, analytics, showModal}) => {

    useEffect(() => {
        getQuestionsAnalytics()
    }, [getQuestionsAnalytics]);

    const showAddQuestionModal = () => {
        showModal(AddQuestion);
    };

    return (
        <Card className={`ask-question-card w-100 ${className || ""}`}>
            <div className="row">
                <div className="col-10 mx-auto mb-5 mt-3">
                    <Button text="Ask a question"
                            variant={"danger"}
                            size="btn-sm"
                            onClick={showAddQuestionModal}
                    />
                </div>
            </div>
            <div className="row text-center justify-content-center pb-4">
                <div className="col-5 ask-wrapper-one pb-2">
                    <p className="small-text font-regular text-muted">
                        Questions
                    </p>
                    <Card.Text className="header-4 font-bold">
                        {analytics.total}
                    </Card.Text>
                </div>
                <div className="col-5 ask-wrapper-two pb-2">
                    <p className="small-text font-regular text-muted">
                        Answers
                    </p>
                    <Card.Text className="header-4 font-bold">
                        {analytics.answers}
                    </Card.Text>
                </div>
            </div>
        </Card>
    )
};

const mapStateToProps = (state) => ({
    analytics: state.questions.analytics,
});

const mapDispatchToProps = dispatch => ({
    getQuestionsAnalytics: () => {
        dispatch(getQuestionsAnalytics());
    },
    showModal: (component) => {
        dispatch(showModal(component));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(AskQuestion);
