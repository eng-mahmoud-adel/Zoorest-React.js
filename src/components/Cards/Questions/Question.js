import React from 'react';
import Tag from '../../Tags/Tag';
import Button from '../../Buttons/Button/Button';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";
import Card from "react-bootstrap/Card";

const Question = (props) => {
    const model = props.model;
    return (
        <Card className={`question-card my-2 w-100 ${props.className ? props.className : ""}`}>
            <Card.Body>
                <Card.Subtitle className="small-text">{model ? model.created_at : "x hours ago"}</Card.Subtitle>
                <Card.Title>{model ? model.title : props.cardTitle}</Card.Title>
                <Card.Text>{model ? model.description.substring(0, 150) : props.cardText}</Card.Text>
                <div className="row mb-3">
                    <div className="col-2">
                        <Tag className="tag-two" text="#Tag"/>
                    </div>
                    <div className="col-2">
                        <Tag className="tag-one" text="#Tag"/>
                    </div>
                    <div className="col-2">
                        <Tag className="tag-two" text="#Tag"/>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="pb-0">
                <div className="row align-items-center">
                    <div className="col">
                        {model ?
                            <Avatar className="avatar-four" name={model.author.name} radius={70}
                                    image={model.author.image_url}/>
                            :
                            <Avatar className="avatar-four" name="Terry Williams" span="Manager" image={image}/>
                        }
                    </div>
                    <div className="icons col">
                        <div className="row">
                            <div className="col-4">

                                <i className="fa fa-commenting-o icon-one" aria-hidden="true"><span
                                    className="2">{model ? model.replies_count : 0}</span></i>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-eye icon-two" aria-hidden="true"><span
                                    className="3">{model ? model.views : 0}</span></i>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-heart-o icon-two" aria-hidden="true"><span
                                    className="3">{model ? model.favourites : 0}</span></i>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <Button text="Add answer" color="btn btn-info" size="btn-xs"/>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
};

export default Question;
