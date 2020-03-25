import React from 'react';
import Tag from '../../Tags/Tag';
import Button from '../../Buttons/Button/Button';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";
import Card from "react-bootstrap/Card";

const Question = (props) => {
    const question = props.question;
    return (
        <Card className={props.className}>
            <Card.Body>
                <Card.Subtitle className="small-text">{/*{question ? question.human_created_at : }*/}2 hours ago</Card.Subtitle>
                <Card.Title>{question ? question.title : props.cardTitle}</Card.Title>
                <Card.Text>{question ? question.description.substring(0, 150) : props.cardText}</Card.Text>
                <div className="row mb-3">
                    <div className="col">
                        <Tag className="tag-two" text="#Tag"/>
                    </div>
                    <div className="col">
                        <Tag className="tag-one" text="#Tag"/>
                    </div>
                    <div className="col">
                        <Tag className="tag-two" text="#Tag"/>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="pb-0">
                <div className="row align-items-center">
                    <div className="col">
                        {question ?
                            <Avatar className="avatar-four" name={question.author.name} radius={70}
                                    image={question.author.image_url}/>
                            :
                            <Avatar className="avatar-four" name="Terry Williams" span="Manager" image={image}/>
                        }
                    </div>
                    <div className="icons col">
                        <div className="row">
                            <div className="col-4">

                                <i className="fa fa-commenting-o icon-one" aria-hidden="true"><span
                                    className="2">0</span></i>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-eye icon-two" aria-hidden="true"><span
                                    className="3">{question ? question.views : 0}</span></i>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-heart-o icon-two" aria-hidden="true"><span
                                    className="3">{question ? question.favourites : 0}</span></i>
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
