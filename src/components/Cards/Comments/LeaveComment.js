import React from 'react';
import Button from '../../Buttons/Button/Button';
import {Card, Col, Row} from "react-bootstrap";
import {Form} from "redux-form";
import TextArea from "../../Inputs/TextArea";

const LeaveComment = (props) => {
    return (
        <Card className={"leave-comment-card w-100"}>
            <Row>
                <Col xs="9">
                    <Card.Title className="card-title">Leave a comment</Card.Title>
                </Col>
                <Col xs="3">
                    <Button text="Comment" color="btn btn-info" size="btn-sm"/>
                </Col>
            </Row>
            <Card.Body>
                <Card.Text>
                    <TextArea rows={5}/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default LeaveComment;
