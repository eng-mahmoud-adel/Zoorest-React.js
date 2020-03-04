import React from 'react';

function SocialBtn(props) {
    return (
        <button type="button" className={props.size + " " + props.color + " btn-social"}>
            {props.social_icon && <i className= {props.social_icon} aria-hidden="true"></i>}
            <span>{props.text}</span>
        </button>
    )
}

export default SocialBtn;
