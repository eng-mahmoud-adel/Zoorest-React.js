import React from 'react';
import {Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import LazyList from "../../DataList";
import LazyLoad from "react-lazyload";

const Article = (props) => {
    const model = props.article;
    return (
        <Card className={"article-card m-1"}>
            <Card.Title>{model.getLocalizedTitle()}</Card.Title>
            <small className="small-text">{model.human_created_at}</small>
            <div className="img-container">
                <LazyLoad unmountIfInvisible={true} once={true}>
                    <Card.Img variant={null} src={model.photo.path_small} className="img-fluid h-100 w-100"
                              alt=""/>
                </LazyLoad>
            </div>
            <Card.Body>
                <Card.Text>{model.getLocalizedCleanedBody()}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs="8">
                        <Link to={`/article/${model.getLocalizedSlug()}`} className="card-link">Read More</Link>
                    </Col>

                    <Col xs="4">
                        <div className="icons">

                            <i className="fa fa-commenting-o icon-one" aria-hidden="true">
                                <span>{model.comments_count}</span>
                            </i>

                            {/*Todo: add hover and favorite action when clicked*/}
                            <i className="fa fa-heart-o icon-two" aria-hidden="true">
                                <span>{model.favorites}</span>
                            </i>
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
