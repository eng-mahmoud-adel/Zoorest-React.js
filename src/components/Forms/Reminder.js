import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import SmallButton from '../Buttons/SmallButtons/SmallButton';
import MaterialUIPickers from '../DropDowns/DatePickerOne';

const Reminder = (props) => {
    return (
        <form>
            <div className="form-group reminder-form col-7">
                <h3 className= "title">{props.title}</h3>
                <p>{props.text}</p>
                <div className= "d-flex my-5">
                    <div className= "col-6">
                        <BasicInput className= "basic-input w-100" type= "text" placeholder= "name" label= "Title of your reminder" />
                    </div>
                    <div className= "col-6">
                        <label>Date and time</label>
                        <MaterialUIPickers />
                    </div>
                </div>
                <div className= "d-flex">
                    <div className= "col-6">
                        <SmallButton text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                    </div>
                    <div className= "col-6">
                        <SmallButton text= "Add" color= "btn btn-info" size= "btn-sm" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Reminder;
