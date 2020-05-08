import React from 'react';

const Tag = (props) => {
    return (
        <div className= {props.className}>
            <small className="text-white">{props.text}</small>
        </div>
    )
}

export default Tag;
