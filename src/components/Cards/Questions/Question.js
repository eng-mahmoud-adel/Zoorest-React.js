import React from 'react';
import Tag from '../../Tags/Tag';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {CommentsIcon, HeartIcon, ViewsIcon} from "../../Icons";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {likeQuestion, unlikeQuestion} from "../../../store/actions/questions";
import ProfileAvatar from "../../Avatars/ProfileAvatar";
import ClampLines from "react-clamp-lines";
import {VerticalEllipsisIcon} from '../../Icons/index';
import {useTranslation} from 'react-i18next';


const Question = ({model, className, hide_add_answer, currentLocale = "ar", like, unlike}) => {
    const {t} = useTranslation();

    const handleLike = (is_liked, setIsLiked) => {
        if (is_liked) {
            unlike(model.getKey());
        } else {
            like(model.getKey());
        }
    }

    const showDropdown = () => {
        document.getElementById(`question_${model.id}`).classList.toggle("show");

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
        <Card className={`question-card my-2 w-100 ${className || ""}`}>
            <Card.Body>
                <Link to={`/question/${model.getLocalizedSlug(currentLocale)}`}>
                    <div className="d-flex">
                        <Card.Subtitle className="small-text">
                            <small className="text-muted">
                                {model.humanizedCreatedAt()}
                            </small>
                        </Card.Subtitle>
                        <VerticalEllipsisIcon className="ml-auto dropbtn" style={{cursor: "pointer"}}
                                              onClick={showDropdown}/>
                        <div id={`question_${model.id}`} className="dropdown-content">
                            <a href="#edit">Edit</a>
                            <a href="#remove">Remove</a>
                            <a href="#report">Report</a>
                        </div>
                    </div>
                    <Card.Title>
                        <ClampLines
                            text={model.title}
                            id={`recent-question-title-${model.getKey()}`}
                            lines={1}
                            ellipsis="..."
                            buttons={false}
                            className="font-black"
                            innerElement="h5"

                        />
                    </Card.Title>

                    <ClampLines
                        text={model.description}
                        id={`recent-question--short-description-${model.getKey()}`}
                        lines={3}
                        ellipsis="..."
                        buttons={false}
                        className="label text-muted card-text m-0"
                        // innerElement="p"
                    />

                    <div className="row mb-3">
                        {
                            // model.tags
                            [1, 2, 3].map((tag, index) => (
                                <div className="col-xl-3 col-md-4 col-sm-5 mb-1 mb-md-0">
                                    <Tag className={`${index % 2 === 0 ? "tag-two" : "tag-one"}`} text="#Tag"/>
                                </div>
                            ))
                        }
                    </div>
                </Link>
            </Card.Body>
            <Card.Footer className="pb-0">
                <div className="row">
                    <div className="col-xl-4 col-md-6 mb-3 mb-xl-0">
                        {model &&
                        <ProfileAvatar model={model.author}/>
                        }
                    </div>
                    <div className="col-xl-4 col-md-6 mb-3 mb-xl-0 icons align-self-center">
                        <div className="row">
                            <div className="col-4">
                                <CommentsIcon value={model.replies_count}/>
                            </div>
                            <div className="col-4">
                                <ViewsIcon value={model.views_count}/>
                            </div>
                            <div className="col-4">
                                <HeartIcon onClick={handleLike} is_active={model.is_liked} value={model.likes_count}/>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-md-6 text-center align-content-center align-items-center align-self-center">
                        {(!hide_add_answer || !model.isClosed()) &&
                        <Link to={`/question/${model.getLocalizedSlug(currentLocale)}`}>
                            <Button className="px-3 py-1" variant="info" size="sm">
                                {t('see_more')}
                            </Button>
                        </Link>}
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
};

Question.propTypes = {
    model: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
    like: (id) => {
        dispatch(likeQuestion(id));
    },
    unlike: (id) => {
        dispatch(unlikeQuestion(id));
    }
});

export default connect(null, mapDispatchToProps)(Question);
