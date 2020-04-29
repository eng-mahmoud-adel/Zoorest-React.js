import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import TextArea from '../Inputs/TextArea';
import {MultiSelect} from '../Inputs/MultiSelect';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';

const AddPostForm = (props) => {
    return (
        <form>
            <div className="form-group post-form col-8">
                <h3 className= "title text-center my-4">{props.title}</h3>
                <div className= "row justify-content-center">
                    <div className= "col-5">
                        <div className= "mb-3">
                            <label>Post Type</label>
                            <MultiSelect />
                        </div>
                        <div className= "mb-3">
                            <label>Animal Type</label>
                            <MultiSelect />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Color" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Price" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "License Number" />
                        </div>
                    </div>
                    <div className= "col-5">
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Post Title" />
                        </div>
                        <div className= "mb-3">
                            <label>Gender</label>
                            <MultiSelect />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Classification" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Currency" />
                        </div>
                        <div className= "mb-3">
                            <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Vaccination" />
                        </div>
                    </div>
                </div>
                <div className= "mb-3 mx-auto col-10 p-0">
                    <label>Purity of the platoon</label>
                    <TextArea />
                </div>
                <div className= "mb-3 mx-auto col-10 p-0">
                    <label>Distincitve signs</label>
                    <TextArea />
                </div>
                <div className= "mb-3 col-4">
                    <DropFile />
                </div>
                <div className= "mb-5 mx-auto text-center col-4">
                    <Button text= "Add post" color= "btn btn-info" size= "btn-sm" />
                </div>
            </div>
        </form>
    )
}

export default AddPostForm;
