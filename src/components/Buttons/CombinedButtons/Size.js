import React from 'react';

const Size = (props) => {
    return (
        <div className={props.size + " btn-group w-100"} role="group">
            <button type="button" className="btn btn-info">{props.textOne}</button>
            <button type="button" className="btn btn-info">{props.textTwo}</button>
            <button type="button" className="btn btn-info">{props.textThree}</button>
        </div>
    )
}

export default Size;