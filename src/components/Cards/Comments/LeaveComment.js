import React from 'react';
import Button from '../../Buttons/Button/Button';
import {Card, Col, Row} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import DropZone from "../../Forms/DropFiles/DropFile";
import PropTypes from "prop-types";

const LeaveCommentForm = ({onSubmit, withImages}) => {
    return (
        <Card className="leave-comment-card w-100">
            <Formik
                initialValues={{body: '', images: []}}
                onSubmit={onSubmit}
                validationSchema={Yup.object().shape({
                    body: Yup.string().nullable().required('This field is required.'),
                    images: Yup.array(),
                })}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Row>
                            <Col xs="9">
                                <Card.Title className="card-title">
                                    <p className="header-4">Leave a comment</p>
                                </Card.Title>
                            </Col>
                            <Col xs="3">
                                <Button type="submit" text="Comment" variant="info" size="sm"
                                        disabled={isSubmitting}/>
                            </Col>
                        </Row>

                        <Card.Body className={"my-3"}>

                            <div className="form-group ">
                                <Field
                                    as="textarea"
                                    rows={3}
                                    placeholder={"Leave a comment..."}
                                    type="textarea"
                                    name="body"
                                    className="form-control"
                                />
                                <ErrorMessage  name="body" component="div"/>
                            </div>

                            {
                                withImages && (
                                    <div className="form-group">
                                        <DropZone/>
                                    </div>
                                )
                            }
                        </Card.Body>
                    </Form>
                )}

            </Formik>

        </Card>
    )
};

LeaveCommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    withImages: PropTypes.bool,
};

export default LeaveCommentForm;
