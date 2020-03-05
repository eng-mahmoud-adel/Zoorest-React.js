import React from 'react';
import MaterialUIPickers from '../../components/DropDowns/DatePickerOne';
import DropDownOne from '../../components/DropDowns/DropDownOne';
import DropDownTwo from '../../components/DropDowns/DropDownTwo';

function RenderDropdown() {
    return (
        <div>
            <hr />
            <h1>Dropdowns</h1>
            <hr />
            <div className= "row">
                <div className= "col-4">
                    <DropDownOne />
                </div>
                <div className= "col-4">
                    <DropDownTwo />
                </div>
                <div className= "col-4">
                    <MaterialUIPickers />
                </div>
            </div>
            
            
        </div>
    )
}

export default RenderDropdown;
