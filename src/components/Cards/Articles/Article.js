import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";
import {CommentsIcon, HeartIcon} from "../../Icons";
import PropTypes from "prop-types";

const Article = ({model}) => {

    return (
        <Card className={"article-card m-1"}>
            <Card.Title>{model ? model.getLocalizedTitle() : ""}</Card.Title>
            <small className="small-text">{model.human_created_at}</small>
            <div className="img-container">
                <LazyLoad unmountIfInvisible={true} once={true}>
                    <Card.Img variant={null} src={model.photo.path_small} className="img-fluid h-100 w-100"
                              alt=""/>
                </LazyLoad>
            </div>
            <Card.Body>
                <Card.Text>{model ? model.getLocalizedCleanedBody():""}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={9} md={7} lg={7} xl={8}>
                        <Link to={`/article/${model.id}`} className="card-link">Read More</Link>
                    </Col>

                    <Col xs={3} md={5} lg={5} xl={4} className= "text-right">
                        <div className="icons">
                            <div className="row">

                                <div className="col-4">
                                    <CommentsIcon value={model ? model.comments_count : 0}/>

                                </div>

                                {/*Todo: add hover and favorite action when clicked*/}
                                <div className="col-4">
                                    <HeartIcon value={model ? model.likes_count : 0}/>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};
Article.propTypes = {
    model: PropTypes.object.isRequired,
};

export default Article;
