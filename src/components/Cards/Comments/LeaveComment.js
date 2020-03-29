import React from 'react';
import Button from '../../Buttons/Button/Button';
import {Card, Col, Form} from "react-bootstrap";
import {reduxForm, Field} from "redux-form";

const LeaveCommentForm = ({pristine,handleSubmit}) => {
    return (
        <Card className={"leave-comment-card w-100"}>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col xs="9">
                        <Card.Title className="card-title">Leave a comment</Card.Title>
                    </Col>
                    <Col xs="3">
                        <Button type="submit" text="Comment" variant="info" size="btn-sm"
                                disabled={pristine}/>
                    </Col>
                </Form.Row>

            </Form>
            <Card.Body>
                <Card.Text>

                    <Field as="textarea"
                           name={"body"}
                           component="input"
                           type="textarea"
                           className={"form-control"}
                           rows="5"/>
                    {/*<Form.Control as={"textarea"} rows={"5"}/>*/}

                </Card.Text>
            </Card.Body>
        </Card>
    )
};


// export default LeaveCommentForm;
export default reduxForm({
    form: 'leave-comment-form'
})(LeaveCommentForm);
