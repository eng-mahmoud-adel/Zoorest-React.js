import React, {useEffect} from 'react';
import {getTopQuestions} from "../../../store/actions/questions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const TopQuestions = ({className, getTopQuestions, top_questions}) => {

    useEffect(() => {
        getTopQuestions()
    }, [getTopQuestions]);

    return (
        <div className={`top-membes-card card ${className || ""}`}>
            <h5 className="card-title">
                <p className="label font-bold">
                    Top Questions
                </p>
            </h5>
            <div className="card-body">
                {
                    top_questions.data.map(question => <p key={"top_question" + question.getKey()}
                                                          className="card-text">

                        <Link to={`/questions/${question.id}/${question.getKey()}`}>
                            <label className="font-regular text-muted">{question.getLocalizedTitle()}</label>
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
