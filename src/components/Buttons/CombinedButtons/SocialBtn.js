import React from 'react';

//TODO refactor this Component so that it reuses Our Button Component
function SocialBtn({size, color, social_icon, text, onClick, disabled}) {
    return (
        <button onClick={onClick} type="button" disabled={disabled}
                className={size + " " + color + " btn-social w-100"}>
            {social_icon && <i className={social_icon} aria-hidden="true"/>}
            <span>{text}</span>
        </button>
    )
}

export default SocialBtn;
