import React from 'react';
import {Card} from "react-bootstrap";
import SlickSlider from "../../Helpers/SlickSlider";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ProfileAvatar from "../../Avatars/ProfileAvatar";
import {Text16Regular, Text18Bold} from "../../UI/Typography";
import Button from "../../Buttons/Button/Button";
import {CommentsIcon, HeartIcon} from "../../Icons";


const Post = ({id, className, model: post}) => {
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
        <div className="card post-card">
            <div className="row">
                <div className="col-md-4 wrapthumbnail">
                    <Link to={`post/${post.id}`}>
                        <div className="img-container">
                            <SlickSlider settings={slickSettings}>
                                {post.images && post.images.map((image, index) => (
                                    <Card.Img variant="top"
                                              key={index}
                                              src={image.path_large}/>
                                ))}
                            </SlickSlider>
                        </div>
                    </Link>
                </div>
                <div className="col-md-8">
                    <Card.Title>
                        <Text18Bold>{post.name}</Text18Bold>
                    </Card.Title>

                    <h4 className="card-text">
                        <Text16Regular className="text-muted">{post.description}</Text16Regular>
                    </h4>

                    <Card.Footer className="mt-5 mx-2    px-0">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-5 col-sm-5 col-7 mb-2 mb-xl-0">
                                <ProfileAvatar model={post.user}/>
                            </div>
                            <div className="icons col-xl-3 col-lg-4 col-sm-3 col-5">
                                <div className="row">
                                    <div>
                                        <CommentsIcon value={post.comments_count}/>
                                    </div>
                                    <div className="offset-4">
                                        <HeartIcon value={post.likes_count}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-5 col-lg-5 col-xl-4">
                                <Link to={`post/${post.id}`}>
                                    <Button text="Contact owner" color="btn btn-info" size="btn-sm"/>
                                </Link>
                            </div>
                        </div>
                    </Card.Footer>

                </div>
            </div>
        </div>
    );

    // return (
    //     <Card className={`${className || ""} post-card`}>
    //         <div className="img-container">
    //
    //             <SlickSlider settings={slickSettings}>
    //                 {post.images && post.images.map((image, index) => (
    //                     <Card.Img variant="top"
    //                               key={index}
    //                               src={image.path_large}/>
    //                 ))}
    //             </SlickSlider>
    //         </div>
    //         <Card.Body>
    //             <Card.Title>{post.name}</Card.Title>
    //             <Card.Text>{post.description}</Card.Text>
    //         </Card.Body>
    //         <Card.Footer className="mt-5">
    //             <Row className="justify-content-between">
    //                 <div className="col-xl-4 col-lg-5 col-sm-5 col-7 mb-2 mb-xl-0">
    //                     <ProfileAvatar model={post.user}/>
    //                 </div>
    //                 <div className="icons col-xl-3 col-lg-4 col-sm-3 col-5">
    //                     <Row>
    //                         <div>
    //                             <CommentsIcon value={post.comments_count}/>
    //                         </div>
    //                         <div className="offset-4">
    //                             <HeartIcon value={post.likes_count}/>
    //                         </div>
    //                     </Row>
    //                 </div>
    //                 <Col xs={6} sm={5} lg={5} xl={4}>
    //                     <Link to= {`post/${post.id}`}>
    //                         <Button text="Contact owner" color="btn btn-info" size="btn-sm"/>
    //                     </Link>
    //                 </Col>
    //             </Row>
    //         </Card.Footer>
    //     </Card>
    // )
};

Post.propTypes = {
    model: PropTypes.object.isRequired,
}

export default Post;
