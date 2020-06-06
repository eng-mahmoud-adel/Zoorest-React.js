import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";
import {CommentsIcon, HeartIcon} from "../../Icons";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'
import {showModal} from "../../../store/actions/modal";
import {connect} from "react-redux";
import ClampLines from 'react-clamp-lines';
import {VerticalEllipsisIcon} from '../../Icons/index';
import DropdownActions from "../../DropdownActions";
import {likeArticle, unlikeArticle} from "../../../store/actions/articles";

const DropDownOptions = [
    {
        title: "Edit", actions: () => {
        }
    },
    {
        title: "remove", actions: () => {
        }
    },
    {
        title: "report", actions: () => {
        }
    },
];

const Article = ({model: article, like, unlike, currentLocale}) => {

    const showDropdown = () => {
        document.getElementById(`article${article.id}`).classList.toggle("show");

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
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

    const handleLike = (is_liked, setIsLiked) => {
        console.log("handleLike")
        if (is_liked) {
            unlike(article.id);
        } else {
            like(article.id);
        }
    }

    return (
        <Card className="article-card m-1">
            <div className="d-flex">
                <Card.Title>
                    <Link to={article.getPageRoute(currentLocale)} className="card-link">

                        <ClampLines
                            text={article.getLocalizedTitle(currentLocale)}
                            id={`recent-article-title-${article.getKey()}`}
                            lines={2}
                            ellipsis="..."
                            buttons={false}
                            className="m-0"
                            innerElement="h4"
                        />
                    </Link>
                </Card.Title>

                <VerticalEllipsisIcon className="ml-auto dropbtn mt-3 mr-3" style={{cursor: "pointer"}}
                                      onClick={showDropdown}/>

                <DropdownActions id={`article_${article.id}`} options={DropDownOptions}/>

            </div>
            <small className="small-text">
                <p className="small created-at">{article.humanizedCreatedAt()}</p>
            </small>

            <div className="img-container">
                <LazyLoad unmountIfInvisible={true} once={true}>

                    {article.hasVideo() ?
                        <ReactPlayer
                            url={article.video}
                            loop={false}
                            light={true}
                            width='100%'
                            height="100%"
                            playing
                            // playIcon={}
                        />

                        :
                        <Link to={article.getPageRoute(currentLocale)} className="card-link">

                            <Card.Img variant={null} src={article.photo ? article.photo.path_small : ""}
                                      className="img-fluid h-100 w-100"
                                      alt=""/>
                        </Link>
                    }

                </LazyLoad>
            </div>
            <Card.Body>
                <Link to={article.getPageRoute(currentLocale)} className="card-link">

                    <ClampLines
                        text={article.getLocalizedCleanedBody(currentLocale)}
                        id={`recent-article-short-description-${article.getKey()}`}
                        lines={3}
                        ellipsis="..."
                        buttons={false}
                        className="label font-regular card-text"
                    />
                </Link>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={9} md={7} lg={7} xl={8}>
                        <Link to={article.getPageRoute(currentLocale)} className="card-link">
                            <p className="label font-regular read-more"> Read More </p>
                        </Link>
                    </Col>

                    <Col xs={3} md={5} lg={5} xl={4} className="text-right">
                        <div className="icons">
                            <div className="row">

                                <div className="col-4">
                                    <CommentsIcon value={article.comments_count}/>

                                </div>

                                <div className="col-4">
                                    <HeartIcon onClick={handleLike} is_active={article.is_liked}
                                               value={article.likes_count}/>
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
    like: (id) => {
        dispatch(likeArticle(id));
    },
    unlike: (id) => {
        dispatch(unlikeArticle(id));
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(Article);
