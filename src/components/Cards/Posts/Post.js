import React from 'react';
import img from '../../../images/article-cover.png';
import Avatar from '../../Avatars/Avatar';
import SmallButton from '../../Buttons/SmallButtons/SmallButton';
import image from "../../../images/placeholders/100X100.png";


const Post = (props) => {
    return (
        <div className={props.className + " card"}>
            <div className= "img-container">
                <img src= {img} className="card-img-top img-fluid h-100" alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
            <div className="card-footer">
                <div className= "row">
                    <div className= "col-3">
                        <Avatar className= "avatar-four" name = "Terry Williams" span= "Manager" image= {image} />
                    </div>
                    <div className= "icons col-6">
                        <div className= "row">
                            <div className= "offset-1 col-2">
                                <i className={props.icon_one + " icon-one"} aria-hidden="true"><span className= {props.number_one}>2</span></i>
                            </div>
                            <div className= "offset-2 col-1">
                                <i className={props.icon_two + " icon-two"} aria-hidden="true"><span className= {props.number_two}>3</span></i>
                            </div>
                        </div>
                    </div>
                    <div className= "col-3">
                        <SmallButton text= "Contact owner" color= "btn btn-info" size= "btn-sm" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
