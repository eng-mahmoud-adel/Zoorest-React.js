import React from 'react';
import DropFile from '../../DropFiles/DropFile';
import Avatar from '../../../Avatars/Avatar';
import InlineDateTimePickerDemo from '../../../DropDowns/DatePickerOne';
import BasicInput from '../../../Inputs/BasicInput';

const Step1 = (props) => {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
        <div>
            <div className="text-center">
                <h4 className="font-weight-bold">Add Animal</h4>
                <p className="px-5">Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the</p>
            </div>

            <div className="row avatars justify-content-center mb-5">
                <div className="col-4">
                    <Avatar className="avatar-one" text="1" name="Name and photos"/>
                </div>
                <div className="col-5">
                    <Avatar className="avatar-one" text="2" name="Certificates & Prescriptions"/>
                </div>
                <div className="col-3">
                    <Avatar className="avatar-one" text="3" name="Vaccinations"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-5 my-5">
                    <label>Animal name</label>
                    <BasicInput className="basic-input" type="text" placeholder="name"/>
                </div>
                <div className="col-5 my-5">
                    <label>Date of birth</label>
                    <InlineDateTimePickerDemo/>
                </div>
            </div>
            <div className="col-3 offset-1 pl-0 my-5">
                <label>Upload photos</label>
                <DropFile/>
            </div>
        </div>
    );
  }

export default Step1;