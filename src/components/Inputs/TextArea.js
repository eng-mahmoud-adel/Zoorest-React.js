import React from 'react';

const TextArea = (props) => {
    return (
        <div className="mb-3">
            <textarea className={props.invalid + " form-control text-area"} id="validationTextarea" placeholder="Input name" required></textarea>
            <div className="invalid-feedback">
                {props.text}
            </div>
        </div>
    )
}

export default TextArea;
