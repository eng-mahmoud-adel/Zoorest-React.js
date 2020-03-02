import React from 'react';

const EmptyCheckBox = () => {
    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck" />
            <label className="custom-control-label" for="customCheck"></label>
        </div>
    )
}

export default EmptyCheckBox;
