import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import InlineDateTimePickerDemo from '../DropDowns/DatePickerOne';

const ReminderForm = (props) => {
    return (
        <form>
            <div className="form-group reminder-form">
                <h3 className= "title mt-0 pt-0">Add reminders to your calendar</h3>
                <p className= "text">Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the elastic properties of available materials </p>
                <div className= "row my-5">
                    <div className= "col-6">
                        <label>Title of your reminder</label>
                        <BasicInput className= "basic-input" type= "text" placeholder= "name" />
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

export default ReminderForm;
