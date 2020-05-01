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
import {Text12, Text14Regular, Text16Medium, Text18Black} from "../../UI/Typography";
import ClampLines from "react-clamp-lines";

const Question = ({model, className, hide_add_answer, currentLocale = "ar", like, unlike}) => {

    const handleLike = (is_liked, setIsLiked) => {
        if (is_liked) {
            unlike(model.getKey());
        } else {
            like(model.getKey());
        }
    }

    return (
        <Card className={`question-card my-2 w-100 ${className || ""}`}>
            <Card.Body>
                <Card.Subtitle className="small-text">
                    <Text12 className="text-muted">
                        {model.humanizedCreatedAt()}
                    </Text12>
                </Card.Subtitle>
                <Card.Title>
                    <Text18Black>
                        <ClampLines
                            text={model.title}
                            id={`recent-question-title-${model.getKey()}`}
                            lines={1}
                            ellipsis="..."
                            buttons={false}
                            className="m-0"
                        />
                    </Text18Black>
                </Card.Title>
                <Card.Text className="m-0">
                    <Text14Regular className="text-muted">
                        <ClampLines
                            text={model.description}
                            id={`recent-question--short-description-${model.getKey()}`}
                            lines={3}
                            ellipsis="..."
                            buttons={false}
                            className="m-0"
                        />

                    </Text14Regular>
                </Card.Text>
                <div className="row mb-3">
                    {
                        model.tags.map((tag, index) => (
                            <div className="col-xl-3 col-md-4 col-sm-5 mb-1 mb-md-0">
                                <Tag className={`${index % 2 === 0 ? "tag-two" : "tag-one"}`} text="#Tag"/>
                            </div>
                        ))
                    }
                </div>
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
                        <Link to={`/question/${model.id/*getLocalizedSlug(currentLocale)*/}`}>
                            <Button className="px-3 py-1" variant="info" size="sm">
                                <Text16Medium className="text-white">Add Answer</Text16Medium>
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
