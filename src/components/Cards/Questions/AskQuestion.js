import React, {useEffect} from 'react';
import Button from '../../Buttons/Button/Button';
import {Card} from "react-bootstrap";
import {getQuestionsAnalytics} from "../../../store/actions/questions";
import {connect} from "react-redux";
import {Text14Regular, Text24Bold} from "../../UI/Typography";

const AskQuestion = ({className, getQuestionsAnalytics, analytics}) => {

    useEffect(() => {
        getQuestionsAnalytics()
    }, [getQuestionsAnalytics]);

    return (
        <Card className={`ask-question-card w-100 ${className || ""}`}>
            <div className="row">
                <div className="col-10 mx-auto mb-5 mt-3">
                    <Button text="Ask a question" variant={"danger"} size="btn-sm"/>
                </div>
            </div>
            <div className="row text-center justify-content-center pb-4">
                <div className="col-5 wrapper-one pb-2">
                    <p className="small-text">
                        <Text14Regular className="text-muted">Questions</Text14Regular>
                    </p>
                    <Card.Text>
                        <Text24Bold>{analytics.total}</Text24Bold>
                    </Card.Text>
                </div>
                <div className="col-5 wrapper-two pb-2">
                    <p className="small-text">
                        <Text14Regular className="text-muted">Answers</Text14Regular>
                    </p>
                    <Card.Text>
                        <Text24Bold>
                            {analytics.answers}
                        </Text24Bold>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(AskQuestion);
