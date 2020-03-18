import React from 'react';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";

const Comment = (props) => {
    return (
        <div className={props.className + " card"}>
            <div className="card-body">
                <small className="small-text">{props.cardTime}</small>
                <p className="card-text">{props.cardText}</p>
            </div>
            <div className="card-footer">
                <div className= "row">
                    <div className= "col-10">
                        <Avatar className= "avatar-four" name = "Terry Williams" span= "Manager" image= {image} />
                    </div>
                    <div className= "icon col-2">
                        <i className={props.icon + " icon"} aria-hidden="true"><span className= {props.number}>{props.number}</span></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;
