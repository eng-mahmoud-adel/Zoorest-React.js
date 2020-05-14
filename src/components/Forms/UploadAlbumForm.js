import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';

const UploadAlbumForm = (props) => {
    return (
        <form>
            <div className="form-group album-form col-8">
                <h3 className= "title text-center my-4">{props.title}</h3>
                <p className= "text text-center col-10 mx-auto mb-5">{props.text}</p>

                <div className= "col-10 my-5">
                    <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Title of your album" />
                </div>
                <div className= "col-4 my-5">
                    <label>Upload photos</label>
                    <DropFile />
                </div>
                <div className= "row">
                    <div className= "ml-auto col-4">
                        <Button text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                    </div>
                    <div className= "mr-auto col-4">
                        <Button text= "Add" color= "btn btn-info" size= "btn-sm" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UploadAlbumForm;
