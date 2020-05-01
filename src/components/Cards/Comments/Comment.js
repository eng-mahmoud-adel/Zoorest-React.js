import React from 'react';
import {Card, Row} from "react-bootstrap";
import {HeartIcon} from "../../Icons";
import ProfileAvatar from "../../Avatars/ProfileAvatar";

const Comment = (props) => {
    const {model} = props;
    return (
        <Card className={`comment-card ${props.className || ""}`}>
            <Card.Body>
                <small className="small-text">{model.humanizedCreatedAt()}</small>
                <Card.Text>
                    {model && (model.body || model.text)}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <div className="col-10 p-0">
                        <ProfileAvatar model={model.author}/>
                    </div>
                    <div className="p-0 icon align-self-end pull-right">

                        <HeartIcon value={model.likes_count}/>
                    </div>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default Comment;
