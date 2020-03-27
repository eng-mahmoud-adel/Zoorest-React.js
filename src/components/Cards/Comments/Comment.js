import React from 'react';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";
import {Card, Col, Row} from "react-bootstrap";

const Comment = (props) => {
    return (
        <Card className={`comment-card ${props.className || ""}`}>
            <Card.Body>
                <small className="small-text">2 hours ago</small>
                <Card.Text>
                    If a Google employee reveals that he or she intends to leave because they have *accepted*–not received–an offer from a talent competitor like Facebook, in some cases they will be “walked off” so that they will no longer have access to Google’s proprietary information. More important than having that employee leave the physical building is shutting off their employee account; and most tech knowledge workers can’t perform their jobs without access to the company’s Intranet, VPN, or email."
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={10}>
                        <Avatar className="avatar-four" name="Terry Williams" span="Manager" image={image}/>
                    </Col>
                    <Col xs={2} className="icon">
                        <i className={"icon fa fa-heart-o"} aria-hidden="true"><span
                            className={5555}>5555</span></i>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default Comment;
