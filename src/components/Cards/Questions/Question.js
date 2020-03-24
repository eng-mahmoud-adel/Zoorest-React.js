import React from 'react';
import Tag from '../../Tags/Tag';
import SmallButton from '../../Buttons/SmallButtons/SmallButton';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";

const Question = (props) => {
    const {questions}= props;
    return (
        <div className={props.className + " card"}>
            <div className="card-body">
                <small className="small-text">{props.cardTime}</small>
                <h5 className="card-title">{questions? questions[0].title :props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <div className= "row mb-3">
                    <div className= "col-2">
                        <Tag className= "tag-one" text= "Tag" />
                    </div>
                    <div className= "col-2">
                        <Tag className= "tag-one" text= "Tag" />
                    </div>
                    <div className= "col-2">
                        <Tag className= "tag-one" text= "Tag" />
                    </div>
                </div>
            </div>
            <div className="card-footer pb-0">
                <div className= "row align-items-center">
                    <div className= "col-3">
                        <Avatar className= "avatar-four" name = "Terry Williams" span= "Manager" image= {image} />
                    </div>
                    <div className= "icons col-6">
                        <div className= "row">
                            <div className= "offset-1 col-1">
                                <i className={props.icon_one + " icon-one"} aria-hidden="true"><span className= {props.number_one}>2</span></i>
                            </div>
                            <div className= "offset-1 col-1">
                                <i className={props.icon_two + " icon-two"} aria-hidden="true"><span className= {props.number_two}>3</span></i>
                            </div>
                            <div className= "offset-1 col-1">
                                <i className={props.icon_two + " icon-two"} aria-hidden="true"><span className= {props.number_two}>3</span></i>
                            </div>
                        </div>
                    </div>
                    <div className= "col-3">
                        <SmallButton text= "Add answer" color= "btn btn-info" size= "btn-sm" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;
