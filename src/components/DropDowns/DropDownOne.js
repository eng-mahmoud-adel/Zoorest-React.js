import React from 'react';

const DropDownOne = () => {
    return (
        <select className= "dropdown w-100">
            <optgroup label="Graphic Resources">
                <option value="First Point">First Point</option>
                <option value="Second Point">Second Point</option>
                <option value="Third Point">Third Point</option>
                <option value="Fourth Point">Fourth Point</option>
            </optgroup>
            <optgroup label="Graphic Resources">
                <option value="Fifth Point">Fifth Point</option>
            </optgroup>
        </select>

    )
}

export default DropDownOne;
