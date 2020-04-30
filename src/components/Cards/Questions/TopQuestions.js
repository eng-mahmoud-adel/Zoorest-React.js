import React, {useEffect} from 'react';
import {getTopQuestions} from "../../../store/actions/questions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Text14Bold, Text14Regular} from "../../UI/Typography";

const TopQuestions = ({className, getTopQuestions, top_questions}) => {

    useEffect(() => {
        getTopQuestions()
    }, [getTopQuestions]);

    return (
        <div className={`top-membes-card card ${className || ""}`}>
            <h5 className="card-title">
                <Text14Bold>
                    Top Questions
                </Text14Bold>
            </h5>
            <div className="card-body">
                {
                    top_questions.data.map(question => <p key={"top_question" + question.getKey()}
                                                          className="card-text">

                        <Link to={`/question/${question.getKey()}`}>
                            <Text14Regular className="text-muted">{question.getLocalizedTitle()}</Text14Regular>
                        </Link>
                    </p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    top_questions: state.questions.top,
});

const mapDispatchToProps = dispatch => ({
    getTopQuestions: () => {
        dispatch(getTopQuestions());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(TopQuestions);
