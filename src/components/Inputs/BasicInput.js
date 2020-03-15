import React from 'react';

const BasicInput = (props) => {
    return (
        <div>
            {props.left_icon && <i className= {props.left_icon + " icon-left"} aria-hidden="true"></i>}
            {props.label && <label>{props.label}</label>}
            <input type= {props.type} className={props.className + " " + props.valid + " " + props.invalid} placeholder= {props.placeholder} />
            {props.feedback && <div className="valid-feedback">{props.feedback}</div>}
            {props.right_icon && <i className= {props.right_icon + " icon-right"} aria-hidden="true"></i>}
        </div>
    )
}

export default BasicInput;
