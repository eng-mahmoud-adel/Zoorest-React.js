import React from 'react';
import Button from '../../Buttons/Button/Button';

const LeaveComment = (props) => {
    return (
        <div className={props.className + " card"}>
            <div className= "row">
                <div className= "col-9">
                    <h5 className="card-title">{props.cardTitle}</h5>
                </div>
                <div className= "col-3">
                    <Button text= "Comment" color= "btn btn-info" size= "btn-sm" />
                </div>
            </div>
            <div className="card-body">
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>
    )
}

export default LeaveComment;
