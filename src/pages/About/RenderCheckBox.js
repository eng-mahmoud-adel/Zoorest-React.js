import React from 'react';
import CheckBox from '../../components/Buttons/CheckBoxes/CheckBox';

function RenderCheckBox() {
    return (
        <div>
            <hr />
            <h1>Check Boxes</h1>
            <hr />
            <div className= "row">
                <div className= "col-2">
                    <CheckBox text= "Version #1" id= "customCheck1" />
                </div>
                <div className= "col-2">
                    <CheckBox text= "Version #2" id= "customCheck2" />
                </div>
                <div className= "col-2">
                    <CheckBox text= "Version #3" id= "customCheck3" />
                </div>
                <div className= "col-4 row">
                    <CheckBox id= "customCheck4" />
                    <CheckBox id= "customCheck5" />
                    <CheckBox id= "customCheck6" />
                </div>
            </div>
        </div>
    )
}

export default RenderCheckBox;
