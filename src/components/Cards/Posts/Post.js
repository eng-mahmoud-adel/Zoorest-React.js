import React from 'react';
import {Card} from "react-bootstrap";
import SlickSlider from "../../Helpers/SlickSlider";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ProfileAvatar from "../../Avatars/ProfileAvatar";
import Button from "../../Buttons/Button/Button";
import {CommentsIcon, HeartIcon} from "../../Icons";
import {VerticalEllipsisIcon} from '../../Icons/index';

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

const showDropdown = () => {
    document.getElementById(`post_${post.id}`).classList.toggle("show");

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                console.log(openDropdown)
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
        }

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
                    <div className="d-flex">
                        <Card.Title>
                            <h5 className="font-bold">{post.name}</h5>
                        </Card.Title>

                        <VerticalEllipsisIcon className="ml-auto dropbtn mt-3 mr-3" style={{cursor: "pointer"}}
                                              onClick={showDropdown}/>
                        <div id={`post_${post.id}`} className="dropdown-content">
                            <a href="#edit">Edit</a>
                            <a href="#remove">Remove</a>
                            <a href="#report">Report</a>
                        </div>
                    </div>

                    <h6 className="font-regular card-text text-muted">{post.description}</h6>

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
