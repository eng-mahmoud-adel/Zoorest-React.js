import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import TextArea from '../Inputs/TextArea';
import {MultiSelect} from '../Inputs/MultiSelect';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';

const Profile = (props) => {
    return (
        <form>
            <div className="form-group profile-form col-12">
                <h3 className= "title">{props.title}</h3>
                <div className= "row my-5">
                    <div className= "col-2">
                        <DropFile />
                    </div>
                    <div className= "col-3 mt-3">
                        <Button text= "Upload your profile picture" color= "btn btn-info" size= "btn-sm" />
                        <p className= "text mt-2">{props.text}</p>
                    </div>
                </div>
                <div className= "row">
                    <div className= "col-6">
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Full name" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "email" placeholder= "name" label= "Email address" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Phone number" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Additional phone number" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Official doctor name" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "password" placeholder= "name" label= "Old password" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "password" placeholder= "name" label= "New password" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "password" placeholder= "name" label= "Confirm new password" />
                        </div>
                    </div>
                    <div className= "col-6">
                        <div className= "mb-3">
                            <BasicInput className= "input-icon-left" type= "text" right_icon= "fa fa-commenting-o fa-lg" placeholder= "maadi street" label= "Select your location"/>
                        </div>
                        <div className= "mb-3">
                            <label>Country</label>
                            <MultiSelect />
                        </div>
                        <div className= "mb-3">
                            <label>Region</label>
                            <MultiSelect />
                        </div>
                        <div className= "mb-3">
                            <label>About doctor</label>
                            <TextArea rows= "6" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Profile;
