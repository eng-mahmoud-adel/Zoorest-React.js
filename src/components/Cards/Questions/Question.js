import React from 'react';
import Tag from '../../Tags/Tag';
import SmallButton from '../../Buttons/SmallButtons/SmallButton';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";

const Question = (props) => {
    const question = props.question;
    return (
        <div className={props.className + " card"}>
            <div className="card-body">
                <small className="small-text">{/*{question ? question.human_created_at : }*/}2 hours ago</small>
                <h5 className="card-title">{question ? question.title : props.cardTitle}</h5>
                <p className="card-text">{question ? question.description.substring(0, 150) : props.cardText}</p>
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
            </div>
            <div className="card-footer pb-0">
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
                            <div className="col">

                                <i className="fa fa-commenting-o icon-one" aria-hidden="true"><span
                                    className="2">0</span></i>
                            </div>
                            <div className="col">
                                <i className="fa fa-eye icon-two" aria-hidden="true"><span
                                    className="3">{question ? question.views : 0}</span></i>
                            </div>
                            <div className="col">
                                <i className="fa fa-heart-o icon-two" aria-hidden="true"><span
                                    className="3">{question ? question.favourites : 0}</span></i>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <SmallButton text="Add answer" color="btn btn-info" size="btn-xs"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Question;
