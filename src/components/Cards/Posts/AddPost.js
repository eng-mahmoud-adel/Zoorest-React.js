import React from 'react';
import SmallButton from '../../Buttons/SmallButtons/SmallButton';

const AddPost = (props) => {
    return (
        <div className={props.className + " card"}>
            <h5 className="card-title">{props.cardTitle}</h5>
            <div className="card-body">
                <p className="card-text">{props.cardText}</p>
                <SmallButton text= "Add post" color= "btn btn-danger" size= "btn-sm" />
            </div>
        </div>
    )
}

export default AddPost;
