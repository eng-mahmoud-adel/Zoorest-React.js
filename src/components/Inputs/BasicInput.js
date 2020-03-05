import React from 'react';

const BasicInput = (props) => {
    return (
        <div>
            {props.left_icon && <i className= {props.left_icon + " icon-left"} aria-hidden="true"></i>}
            <input className= {props.className} type= {props.type} placeholder= {props.placeholder} />
            {props.right_icon && <i className= {props.right_icon + " icon-right"} aria-hidden="true"></i>}
        </div>
    )
}

export default BasicInput;
