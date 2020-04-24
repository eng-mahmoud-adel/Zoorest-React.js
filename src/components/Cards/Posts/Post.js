import React from 'react';
import img from '../../../images/article-cover.png';
import Avatar from '../../Avatars/Avatar';
import Button from '../../Buttons/Button/Button';
import image from "../../../images/placeholders/100X100.png";
import {Card, Col, Row} from "react-bootstrap";
import {CommentsIcon, HeartIcon} from "../../Icons";


const Post = (props) => {
    return (
        <Card className={`${props.className} post-card`}>
            <div className="img-container">
                {/*todo make this a carousal*/}
                <Card.Img variant="top"
                          src={props.data ? props.data.images[0].path_large : img}/>

            </div>
            <Card.Body>
                <Card.Title>{props.data ? props.data.name : props.cardTitle}</Card.Title>
                <Card.Text>{props.data ? props.data.description : props.cardText}</Card.Text>
            </Card.Body>
            <Card.Footer className="mt-5">
                <Row className= "justify-content-between">
                    <div className="col-xl-4 col-lg-5 col-sm-5 col-7 mb-2 mb-xl-0">
                        <Avatar className="avatar-four" name="Terry Williams" span="Manager" image={image}/>
                    </div>
                    <div className="icons col-xl-3 col-lg-4 col-sm-3 col-5">
                        <Row>
                            <div>
                                <CommentsIcon value={2}/>

                            </div>
                            <div className="offset-4">
                                <HeartIcon value={3}/>
                            </div>
                        </Row>
                    </div>
                    <Col xs={6} sm={5} lg={5} xl={4}>
                        <Button text="Contact owner" color="btn btn-info" size="btn-sm"/>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default Post;
