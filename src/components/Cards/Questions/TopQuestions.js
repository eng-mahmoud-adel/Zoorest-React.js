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
            <h5 className="card-title">Top Questions</h5>
            <div className="card-body">
                {
                    top_questions.data.map(question => <p key={"top_question" + question.getKey()}
                                                          className="card-text">

                        <Link to={`/question/${question.getKey()}`}>
                            {question.getLocalizedTitle()}
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
