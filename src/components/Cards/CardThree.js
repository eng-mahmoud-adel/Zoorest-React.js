import React from 'react';
import Tag from '../Tags/Tag';
import SmallButton from '../Buttons/SmallButtons/SmallButton';
import AvatarTwo from '../Avatars/AvatarTwo';

const CardThree = (props) => {
    return (
        <div className={props.className + " card"}>
            <div className="card-body">
                <small className="small-text">{props.cardTime}</small>
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <div className= "row tags">
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
            <div className="card-footer">
                <div className= "row">
                    <div className= "col-3">
                        <AvatarTwo className= "avatar-four" name = "Terry Williams" span= "Manager" />
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

export default CardThree;
