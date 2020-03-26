import React from 'react';
import Button from '../../Buttons/Button/Button';
import {Card} from "react-bootstrap";

const AskQuestion = (props) => {
    return (
        <Card className={`ask-question-card w-100 ${props.className}`}>
            <div className="row">
                <div className="col-10 mx-auto mb-5 mt-3">
                    <Button text="Ask a question" variant={"danger"} size="btn-sm"/>
                </div>
            </div>
            <div className="row text-center justify-content-center pb-4">
                <div className="col-5 wrapper-one pb-2">
                    <p className="small-text">Questions</p>
                    <Card.Text>{props.numberOne}</Card.Text>
                </div>
                <div className="col-5 wrapper-two pb-2">
                    <p className="small-text">Answers</p>
                    <Card.Text>{props.numberTwo}</Card.Text>
                </div>
            </div>
        </Card>
    )
};

export default AskQuestion;
