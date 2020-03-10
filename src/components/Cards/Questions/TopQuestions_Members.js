import React, { Fragment } from 'react';
import AvatarTwo from '../../Avatars/AvatarTwo';


const TopQuestions_Members = (props) => {
    return (
        <div className={props.className + " card"}>
            <h5 className="card-title">{props.cardTitle}</h5>
            {props.cardText && <div className="card-body">
                <p className="card-text">{props.cardText}</p>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text">{props.cardText}</p>
            </div>}
            {props.avatar && 
            <Fragment>
                <AvatarTwo className= "avatar-four pb-4" name = "Terry Williams" span= "Manager" />
                <AvatarTwo className= "avatar-four pb-4" name = "Terry Williams" span= "Manager" />
                <AvatarTwo className= "avatar-four pb-4" name = "Terry Williams" span= "Manager" />
                <AvatarTwo className= "avatar-four" name = "Terry Williams" span= "Manager" />
            </Fragment>
                }
        </div>
    )
}

export default TopQuestions_Members;
