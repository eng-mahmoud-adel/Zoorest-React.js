import React from 'react';

const TextArea = () => {
    return (
        // <textarea className="text-area" placeholder="Input name"></textarea>
        <div className="mb-3">
            <textarea className="form-control text-area is-invalid" id="validationTextarea" placeholder="Input name" required></textarea>
            <div className="invalid-feedback">
                This filed is requiered
            </div>
        </div>
    )
}

export default TextArea;
