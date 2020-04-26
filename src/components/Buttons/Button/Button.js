import React from 'react';
import BaseButton from "react-bootstrap/Button";

function Button(props) {
    const {className, size, color, left_icon, text, right_icon, children} = props
    return (
        <BaseButton {...props} className={`btn ${className || ""} ${size || ""} ${color || ""} w-100`}>
            {left_icon && <i className={left_icon + " left-icon"} aria-hidden="true"/>}
            {text}
            {children}
            {right_icon && <i className={right_icon + " right-icon"} aria-hidden="true"/>}
        </BaseButton>
    )
}

export default Button;
