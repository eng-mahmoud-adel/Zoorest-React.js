import React from 'react';

function SmallButton(props) {
    return (
        <button type="button" className= {props.size + " " + props.color} disabled= {props.disabled}>
            {props.left_icon && <i className={props.left_icon+" left-icon"} aria-hidden="true"></i>}
            {props.text}
            {props.right_icon && <i className={props.right_icon+" right-icon"} aria-hidden="true"></i>}
        </button>
    )
}

export default SmallButton;
