import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";
import {CommentsIcon, HeartIcon} from "../../Icons";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'
import {Text12, Text14Regular, Text24} from "../../UI/Typography";
import {showModal} from "../../../store/actions/modal";
import {connect} from "react-redux";

const Article = ({model: article, currentLocale}) => {

    return (
        <Card className={"article-card m-1"}>
            <Card.Title>

                <Text24>
                    {article.getLocalizedTitle(currentLocale)}
                </Text24>
            </Card.Title>
            <small className="small-text">
                <Text12 className="created-at">{article.humanizedCreatedAt()}</Text12>
            </small>
            <div className="img-container">
                <LazyLoad unmountIfInvisible={true} once={true}>

                    {article.hasVideo() ?
                        <ReactPlayer
                            url={article.video}
                            loop={false}
                            light={true}
                            width='100%'
                            playing
                            // playIcon={}
                        />

                        :
                        <Card.Img variant={null} src={article.photo ? article.photo.path_small : ""}
                                  className="img-fluid h-100 w-100"
                                  alt=""/>

                    }

                </LazyLoad>
            </div>
            <Card.Body>
                <Card.Text>

                    <Text14Regular className="short-description">
                        {article.getLocalizedCleanedBody(currentLocale)}
                    </Text14Regular>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={9} md={7} lg={7} xl={8}>
                        <Link to={`/article/${article.getKey(currentLocale)}`} className="card-link">
                            <Text14Regular className="read-more">
                                Read More
                            </Text14Regular>
                        </Link>
                    </Col>

                    <Col xs={3} md={5} lg={5} xl={4} className= "text-right">
                        <div className="icons">
                            <div className="row">

                                <div className="col-4">
                                    <CommentsIcon value={article.comments_count}/>

                                </div>

                                <div className="col-4">
                                    <HeartIcon value={article.likes_count}/>
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

const mapStateToProps = (state) => ({
    authUser: state.authUser,
    currentLocale: state.i18n.value,
})

const mapDispatchToProps = (dispatch) => ({
    showModal: (component) => {
        dispatch(showModal(component));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);
