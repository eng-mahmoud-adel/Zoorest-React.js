import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import InlineDateTimePickerDemo from '../DropDowns/DatePickerOne';

const Reminder = (props) => {
    return (
        <form>
            <div className="form-group reminder-form col-7">
                <h3 className= "title">{props.title}</h3>
                <p className= "text">{props.text}</p>
                <div className= "row my-5">
                    <div className= "col-6">
                        <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Title of your reminder" />
                    </div>
                    <div className= "col-6">
                        <label>Date and time</label>
                        <InlineDateTimePickerDemo />
                    </div>
                </div>
                <div className= "row">
                    <div className= "col-6">
                        <Button text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                    </div>
                    <div className= "col-6">
                        <Button text= "Add" color= "btn btn-info" size= "btn-sm" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Reminder;
