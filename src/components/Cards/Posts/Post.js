import React from 'react';
import img from '../../../images/article-cover.png';
import Avatar from '../../Avatars/Avatar';
import Button from '../../Buttons/Button/Button';
import image from "../../../images/placeholders/100X100.png";
import {Card, Col, Row} from "react-bootstrap";


const Post = (props) => {
    return (
        <Card className={`${props.className} post-card`}>
            <div className="img-container">
                {/*todo make this a carousal*/}
                <Card.Img variant="top"
                          src={props.data ? props.data.images[0].path_medium : img}/>

            </div>
            <Card.Body>
                <Card.Title>{props.data ? props.data.name : props.cardTitle}</Card.Title>
                <Card.Text>{props.data ? props.data.description : props.cardText}</Card.Text>
            </Card.Body>
            <Card.Footer className="mt-5">
                <Row>
                    <div className="col-3">
                        <Avatar className="avatar-four" name="Terry Williams" span="Manager" image={image}/>
                    </div>
                    <div className="icons col-6">
                        <Row>
                            <div className="offset-1 col-2">
                                <i className="fa fa-commenting-o icon-one" aria-hidden="true"><span
                                    className="2">2</span></i>
                            </div>
                            <div className="offset-2 col-1">
                                <i className="fa fa-heart-o icon-two" aria-hidden="true"><span
                                    className="3">3</span></i>
                            </div>
                        </Row>
                    </div>
                    <Col xs={3}>
                        <Button text="Contact owner" color="btn btn-info" size="btn-sm"/>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default Post;
