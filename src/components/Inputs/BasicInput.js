import React from 'react';

const BasicInput = (props) => {
    return (
        <div className="input-group mb-3">
            {props.left_icon && <div className="input-group-prepend">
                <span className="input-group-text icon"><i className= {props.left_icon} aria-hidden="true"></i></span>
            </div>}
            <input type= {props.type} className= {props.className + " " + props.valid + " w-100 " + props.invalid + " form-control"} value= {props.value} onChange= {props.validation} placeholder= {props.placeholder} />
            {props.right_icon && <div className="input-group-append">
                <span className="input-group-text icon"><i className= {props.right_icon} aria-hidden="true"></i></span>
            </div>}
        </div>
    )
}

export default BasicInput;
