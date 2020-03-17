import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import SmallButton from '../Buttons/SmallButtons/SmallButton';
import DropFile from './DropFiles/DropFile';
import MaterialUIPickers from '../DropDowns/DatePickerOne';
import Avatar from '../Avatars/Avatar';

const AddAnimal = (props) => {
    return (
        <form>
            <div className="form-group add-animal-form col-10">
                <h3 className= "title text-center mt-4">{props.title}</h3>
                <p className= "text text-center col-10 mx-auto mb-5">{props.text}</p>

                {/* step one */}
                {props.stepOne && 
                <div className= {props.stepOne}>
                    <div className= "row avatars justify-content-center mb-5">
                        <div className= "col-3">
                            <Avatar className= "avatar-one" text= "1" name= "Name and photos" />
                        </div>
                        <div className= "col-4">
                            <Avatar className= "avatar-one" text= "2" name= "Certificates & Prescriptions" />
                        </div>
                        <div className= "col-2">
                            <Avatar className= "avatar-one" text= "3" name= "Vaccinations" />
                        </div>
                    </div>
                    <div className= "row justify-content-center">
                        <div className= "col-5 my-5">
                            <BasicInput className= "basic-input w-100" type= "text" placeholder= "name" label= "Animal name" />
                        </div>
                        <div className= "col-5 my-5">
                            <label>Date of birth</label>
                            <MaterialUIPickers />
                        </div>
                    </div>
                    <div className= "col-3 offset-1 pl-0 my-5">
                        <label>Upload photos</label>
                        <DropFile />
                    </div>
                    <div className= "row">
                        <div className= "col-3 offset-1 mt-5">
                            <SmallButton text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                        </div>
                        <div className= "col-3 offset-1 mt-5">
                            <SmallButton text= "Back" color= "btn btn-secondary" size= "btn-sm" />
                        </div>
                        <div className= "col-3 mt-5">
                            <SmallButton text= "Next" color= "btn btn-info" size= "btn-sm" />
                        </div>
                    </div>
                </div>}

                 {/* step two */}
                 {props.stepTwo && 
                <div className= {props.stepTwo}>
                    <div className= "row avatars justify-content-center mb-5">
                        <div className= "col-3">
                            <Avatar className= "avatar-one" text= "1" name= "Name and photos" />
                        </div>
                        <div className= "col-4">
                            <Avatar className= "avatar-one" text= "2" name= "Certificates & Prescriptions" />
                        </div>
                        <div className= "col-2">
                            <Avatar className= "avatar-one" text= "3" name= "Vaccinations" />
                        </div>
                    </div>
                    <div className= "col-3 offset-1 pl-0 my-5">
                        <label>Upload Certificates</label>
                        <DropFile />
                    </div>
                    <hr />
                    <div className= "col-3 offset-1 pl-0 my-5">
                        <label>Upload Prescriptions</label>
                        <DropFile />
                    </div>
                    <div className= "row">
                        <div className= "col-3 offset-1 mt-5">
                            <SmallButton text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                        </div>
                        <div className= "col-3 offset-1 mt-5">
                            <SmallButton text= "Back" color= "btn btn-danger" size= "btn-sm" />
                        </div>
                        <div className= "col-3 mt-5">
                            <SmallButton text= "Next" color= "btn btn-info" size= "btn-sm" />
                        </div>
                    </div>
                </div>}

                {/* step three */}
                {props.stepThree && 
                <div className= {props.stepThree}>
                    <div className= "row avatars justify-content-center mb-5">
                        <div className= "col-3">
                            <Avatar className= "avatar-one" text= "1" name= "Name and photos" />
                        </div>
                        <div className= "col-4">
                            <Avatar className= "avatar-one" text= "2" name= "Certificates & Prescriptions" />
                        </div>
                        <div className= "col-2">
                            <Avatar className= "avatar-one" text= "3" name= "Vaccinations" />
                        </div>
                    </div>
                    <h6 className= "offset-1">Add the animal Vaccinations</h6>
                    <div className= "row justify-content-center">
                        
                        <div className= "col-5 my-2">
                            <BasicInput className= "basic-input w-100" type= "text" placeholder= "name" label= "Vaccinations name" />
                        </div>
                        <div className= "col-5 my-2">
                            <label>Vaccinations Date</label>
                            <MaterialUIPickers />
                        </div>
                    </div>
                    <div className= "col-10 mx-auto pl-0 my-2">
                        <label>Upload photos</label>
                        <DropFile />
                    </div>
                    <div className= "col-8 mx-auto my-5">
                        <SmallButton text= "+ Add another Vaccinations" color= "btn btn-info" size= "btn-sm" />
                    </div>
                    <div className= "row">
                        <div className= "col-3 offset-1 mt-5">
                            <SmallButton text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                        </div>
                        <div className= "col-3 offset-1 mt-5">
                            <SmallButton text= "Back" color= "btn btn-danger" size= "btn-sm" />
                        </div>
                        <div className= "col-3 mt-5">
                            <SmallButton text= "Finish" color= "btn btn-info" size= "btn-sm" />
                        </div>
                    </div>
                </div>}
            </div>
        </form>
    )
}

export default AddAnimal;
