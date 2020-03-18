import React from 'react';

const Alert = (props) => {
    return (
        <div className={props.color + " w-100"} role="alert">
            {props.left_icon && <i className= {props.left_icon} aria-hidden="true"></i>}
            {props.text}
        </div>
    )
}

export default Alert;
