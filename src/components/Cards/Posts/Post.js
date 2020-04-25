import React from 'react';
import Avatar from '../../Avatars/Avatar';
import Button from '../../Buttons/Button/Button';
import {Card, Col, Row} from "react-bootstrap";
import {CommentsIcon, HeartIcon} from "../../Icons";
import SlickSlider from "../../Helpers/SlickSlider";
import PropTypes from "prop-types";


const Post = ({className, model: post}) => {
    const slickSettings = {
        rtl: false,//todo use variable when site localization is added
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 1,
    };


    return (
        <Card className={`${className || ""} post-card`}>
            <div className="img-container">

                <SlickSlider settings={slickSettings}>
                    {post.images && post.images.map((image, index) => (
                        <Card.Img variant="top"
                                  key={index}
                                  src={image.path_large}/>
                    ))}
                </SlickSlider>
            </div>
            <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="mt-5">
                <Row className="justify-content-between">
                    <div className="col-xl-4 col-lg-5 col-sm-5 col-7 mb-2 mb-xl-0">
                        <Avatar className="avatar-four"
                                user={post.user}
                                name={post.user.name}
                                image={post.user.image_url}/>
                    </div>
                    <div className="icons col-xl-3 col-lg-4 col-sm-3 col-5">
                        <Row>
                            <div>
                                <CommentsIcon value={post.comments_count}/>
                            </div>
                            <div className="offset-4">
                                <HeartIcon value={post.likes_count}/>
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

Post.propTypes = {
    model: PropTypes.object.isRequired,
}

export default Post;
