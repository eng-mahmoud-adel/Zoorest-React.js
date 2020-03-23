import React from 'react';

function BigButton(props) {
    return (
        <button  type="button" {...props} className={"btn " + props.size + " " + props.color + " w-100"} >
            {props.left_icon && <i className={props.left_icon + " left-icon"} aria-hidden="true"/>}
            {props.text}
            {props.right_icon && <i className={props.right_icon + " right-icon"} aria-hidden="true"/>}
        </button>
    )
}

export default BigButton;
