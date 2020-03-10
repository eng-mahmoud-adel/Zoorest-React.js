import React from 'react';
import img from '../../images/placeholders/100X100.png';

const AvatarTwo = (props) => {
    return (
        <div className= {props.className}>
            <div className= "img-container">
                <img src= {img} />
            </div>
            <h6>{props.name}</h6>
            {props.span && <span>{props.span}</span>}
        </div>
    )
}

export default AvatarTwo;