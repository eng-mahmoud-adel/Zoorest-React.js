import React from 'react';
import {Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import LazyList from "../../DataList";
import LazyLoad from "react-lazyload";
import {MdComment} from "react-icons/all";
import {CommentsIcon, HeartIcon} from "../../Icons";

const Article = (props) => {
    const model = props.article;
    return (
        <Card className={"article-card m-1"}>
            <Card.Title>{model ? model.getLocalizedTitle() : ""}</Card.Title>
            <small className="small-text">{model ? model.human_created_at : ""}</small>
            <div className="img-container">
                <LazyLoad unmountIfInvisible={true} once={true}>
                    <Card.Img variant={null} src={model ? model.photo.path_small : ""} className="img-fluid h-100 w-100"
                              alt=""/>
                </LazyLoad>
            </div>
            <Card.Body>
                <Card.Text>{model ? model.getLocalizedCleanedBody():""}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs="8">
                        <Link to={`/article/${model ? model.getLocalizedSlug():""}`} className="card-link">Read More</Link>
                    </Col>

                    <Col xs="4">
                        <div className="icons">
                            <div className="row">

                                <div className="col-4">
                                    <CommentsIcon value={model ? model.comments_count : 0}/>

                                </div>

                                {/*Todo: add hover and favorite action when clicked*/}
                                <div className="col-4">
                                    <HeartIcon value={model ? model.favourites : 0}/>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};
LazyList.propTypes = {
    article: PropTypes.object.isRequired,
};

export default Article;
