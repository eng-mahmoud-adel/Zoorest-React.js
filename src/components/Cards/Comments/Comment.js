import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {HeartIcon} from "../../Icons";
import ProfileAvatar from "../../Avatars/ProfileAvatar";

const Comment = (props) => {
    const {model} = props;
    return (
        <Card className={`comment-card ${props.className || ""}`}>
            <Card.Body>
                <small className="small-text">{model && model.human_created_at}</small>
                <Card.Text>
                    {model && (model.body || model.text)}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={10}>
                        <ProfileAvatar model={model.author}/>

                    </Col>
                    <Col xs={2} className="icon">
                        <HeartIcon value={model.likes_count}/>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default Comment;
