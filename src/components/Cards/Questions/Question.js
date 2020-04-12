import React from 'react';
import Tag from '../../Tags/Tag';
import Button from '../../Buttons/Button/Button';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {CommentsIcon, HeartIcon, ViewsIcon} from "../../Icons";

const Question = (props) => {
    const model = props.model;
    return (
        <Card className={`question-card my-2 w-100 ${props.className ? props.className : ""}`}>
            <Card.Body>
                <Card.Subtitle className="small-text">{model ? model.human_created_at : "x hours ago"}</Card.Subtitle>
                <Card.Title>{model ? model.title : props.cardTitle}</Card.Title>
                <Card.Text>{model ? model.description.substring(0, 150) : props.cardText}</Card.Text>
                <div className="row mb-3">
                    <div className="col-xl-3 col-md-4 col-sm-5 mb-1 mb-md-0">
                        <Tag className="tag-two" text="#Tag"/>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-5 mb-1 mb-md-0">
                        <Tag className="tag-one" text="#Tag"/>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-5 mb-1 mb-md-0">
                        <Tag className="tag-two" text="#Tag"/>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="pb-0">
                <div className="row">
                    <div className="col-xl-4 col-md-6 mb-3 mb-xl-0">
                        {model ?
                            <Avatar className="avatar-four" name={model.author.name} radius={70}
                                    image={model.author.image_url}/>
                            :
                            <Avatar className="avatar-four" name="Terry Williams" span="Manager" image={image}/>
                        }
                    </div>
                    <div className="icons col-xl-4 col-md-6 mb-3 mb-xl-0">
                        <div className="row">
                            <div className="col-4">
                                <CommentsIcon value={model ? model.replies_count || 0 : 0}/>
                            </div>
                            <div className="col-4">
                                <ViewsIcon value={model ? model.views || 0 : 0}/>
                            </div>
                            <div className="col-4">
                                <HeartIcon value={model ? model.favourites || 0 : 0}/>
                            </div>
                        </div>
                    </div>

                    {/*todo hide this button when in details page*/}
                    <div className="col-xl-4 col-md-6 text-center">
                        {!props.hide_add_answer &&
                        <Link to={`/question/${model && model.id}`}>
                            <Button text="Add Answer" variant={"info"} size="btn-sm"/>
                        </Link>}
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
};

export default Question;
