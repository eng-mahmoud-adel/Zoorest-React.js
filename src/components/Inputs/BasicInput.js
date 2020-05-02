import React from 'react';

const BasicInput = ({
                        left_icon, right_icon, type, name, value,
                        className, valid, invalid, handleChange,
                        handleBlur, placeholder, readOnly, onClick
                    }) => {
    return (
        <div className="input-group">
            {left_icon && <div className="input-group-prepend">
                <span className="input-group-text icon"><i className={left_icon} aria-hidden="true"/></span>
            </div>}
            <input readOnly={readOnly} type={type} name={name} value={value}
                   className={`${className || ""} ${valid || ""} w-100 ${invalid || ""} form-control`}
                   onChange={handleChange}
                   onClick={onClick}
                   onBlur={handleBlur} placeholder={placeholder}/>
            {right_icon && <div className="input-group-append">
                <span className="input-group-text icon"><i className={right_icon} aria-hidden="true"/></span>
            </div>}
        </div>
    )
}

export default BasicInput;
