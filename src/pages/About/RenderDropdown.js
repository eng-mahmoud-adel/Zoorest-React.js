import React from 'react';
import DropDownOne from '../../components/DropDowns/DropDownOne';
import DropDownTwo from '../../components/DropDowns/DropDownTwo';
import InlineDateTimePickerDemo from '../../components/DropDowns/DatePickerOne';

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
                    <DropDownTwo variant= "light" size= "w-100"/>
                </div>
                <div className= "col-4">
                    <InlineDateTimePickerDemo />
                </div>
            </div>


        </div>
    )
}

export default RenderDropdown;
