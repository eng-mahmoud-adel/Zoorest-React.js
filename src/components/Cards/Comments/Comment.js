import React from 'react';
import Avatar from '../../Avatars/Avatar';
import {Card, Col, Row} from "react-bootstrap";
import {CommentsIcon} from "../../Icons";

const Comment = (props) => {
    const {model} = props;
    return (
        <Card className={`comment-card ${props.className || ""}`}>
            <Card.Body>
                <small className="small-text">{model && model.human_created_at}</small>
                <Card.Text>
                    {model && model.body}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={10}>
                        <Avatar className="avatar-four" user={model.author}
                                name={model && model.author.name}
                                span="Manager" image={model.author.image_url}/>
                    </Col>
                    <Col xs={2} className="icon">
                        <CommentsIcon value={0}/>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default Comment;
