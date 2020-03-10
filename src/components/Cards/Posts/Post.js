import React from 'react';
import img from '../../../images/article-cover.png';
import AvatarTwo from '../../Avatars/AvatarTwo';
import SmallButton from '../../Buttons/SmallButtons/SmallButton';

const Post = (props) => {
    return (
        <div className={props.className + " card"}>
            <div className= "img-container">
                <img src= {img} className="card-img-top card-image" alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
            <div className="card-footer">
                <div className= "row">
                    <div className= "col-3">
                        <AvatarTwo className= "avatar-four" name = "Terry Williams" span= "Manager" />
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
