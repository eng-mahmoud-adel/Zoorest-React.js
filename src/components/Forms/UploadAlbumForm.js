import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';

const UploadAlbumForm = (props) => {
    return (
        <form>
            <div className="form-group album-form col-md-12">
                <h3 className= "title text-center my-4 pt-0">Upload Album </h3>
                <p className= "text text-center col-10 mx-auto mb-5">Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the </p>

                <div className= "col-10 my-5">
                    <label>Title of your album</label>
                    <BasicInput className= "basic-input" type= "text" placeholder= "name" />
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
