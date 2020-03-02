import React from 'react';

const CheckBoxOne = () => {
    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" for="customCheck1">Version #1</label>
        </div>
    )
}

export default CheckBoxOne;
