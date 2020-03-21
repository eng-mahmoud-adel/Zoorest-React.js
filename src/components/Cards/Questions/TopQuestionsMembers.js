import React, { Fragment } from 'react';
import Avatar from '../../Avatars/Avatar';


const TopQuestionsMembers = (props) => {
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
                <div className= "pb-4"><Avatar className= "avatar-two" text= "MA" name= "Terry Williams" span= "Manager" /></div>
                <div className= "pb-4"><Avatar className= "avatar-two" text= "MA" name= "Terry Williams" span= "Manager" /></div>
                <div className= "pb-4"><Avatar className= "avatar-two" text= "MA" name= "Terry Williams" span= "Manager" /></div>
                <div className= "pb-4"><Avatar className= "avatar-two" text= "MA" name= "Terry Williams" span= "Manager" /></div>
            </Fragment>
            }
        </div>
    )
}

export default TopQuestionsMembers;
