import React from 'react';
import {Card, Row} from "react-bootstrap";
import {HeartIcon} from "../../Icons";
import ProfileAvatar, {ProfileAvatarLoadingAnimation} from "../../Avatars/ProfileAvatar";

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
export const CommentLoadingAnimation = ({className}) => {

    return (
        <Card className={`comment-card loading-card ${className || ""}`}>
            <Card.Body>
                <Card.Subtitle className="small-text">
                    <div className="bars">
                        <div className="bar loading-time loading"/>
                    </div>
                </Card.Subtitle>
                <Card.Text className="m-0">
                    <div className="bars">
                        <div className="bar bar1 loading"/>
                        <div className="bar bar1 loading"/>
                        <div className="bar bar2 loading"/>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="pb-0">
                <div className="row">
                    <div className="col-xl-4 col-md-6 mb-3 mb-xl-0">

                        <ProfileAvatarLoadingAnimation/>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
};

export default Comment;
