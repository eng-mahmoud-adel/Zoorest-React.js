import React from 'react';
import BaseButton from "react-bootstrap/Button";

function Button(props) {
    return (
        <BaseButton {...props} className={`btn ${props.size} ${props.color} w-100`}>
            {props.left_icon && <i className={props.left_icon + " left-icon"} aria-hidden="true"/>}
            {props.text}
            {props.right_icon && <i className={props.right_icon + " right-icon"} aria-hidden="true"/>}
        </BaseButton>
    )
}

export default Button;
