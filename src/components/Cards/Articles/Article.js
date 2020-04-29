import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";
import {CommentsIcon, HeartIcon} from "../../Icons";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'
import {Text12, Text14, Text24} from "../../UI/Typography";

const Article = ({model}) => {

    return (
        <Card className={"article-card m-1"}>
            <Card.Title>

                <Text24>
                    {model.getLocalizedTitle()}
                </Text24>
            </Card.Title>
            <small className="small-text">
                <Text12 className="created-at">{model.created_at}</Text12>
            </small>
            <div className="img-container">
                <LazyLoad unmountIfInvisible={true} once={true}>

                    {model.video ?
                        <ReactPlayer
                            url={model.video}
                            loop={false}
                            light={true}
                            width='100%'
                            playing
                            // playIcon={}
                        />

                        :
                        <Card.Img variant={null} src={model.photo ? model.photo.path_small : ""}
                                  className="img-fluid h-100 w-100"
                                  alt=""/>

                    }

                </LazyLoad>
            </div>
            <Card.Body>
                <Card.Text>

                    <Text14 className="short-description">
                        {model.getLocalizedCleanedBody()}
                    </Text14>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={9} md={7} lg={7} xl={8}>
                        <Link to={`/article/${model.id}`} className="card-link">
                            <Text14 className="read-more">
                                Read More
                            </Text14>
                        </Link>
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
