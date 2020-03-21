import React from 'react';

function BigButton(props) {
    return (
        <button type="button" className={"btn " + props.size + " " + props.color + " w-100"}
                disabled={props.disabled}>
            {props.left_icon && <i className={props.left_icon + " left-icon"} aria-hidden="true"></i>}
            {props.text}
            {props.right_icon && <i className={props.right_icon + " right-icon"} aria-hidden="true"></i>}
        </button>
    )
}

export default BigButton;
