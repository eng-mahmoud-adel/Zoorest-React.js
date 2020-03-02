import React from 'react'

const BaseButton = props => {
    return (
        <button type="button" className={"btn"} onClick={props.onClick}>{props.text}</button>
    );
};

export default BaseButton;
