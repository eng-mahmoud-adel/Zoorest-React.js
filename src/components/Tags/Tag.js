import React from 'react';

const Tag = (props) => {
    return (
        <div className= {props.className}>
            {props.text}
        </div>
    )
}

export default Tag;
