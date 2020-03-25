import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import TextArea from '../Inputs/TextArea';
import MultiSelect from '../Inputs/MultiSelect';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';

const AddQuestion = (props) => {
    return (
        <form>
            <div className="form-group question-form col-8">
                <h3 className= "title text-center my-4">{props.title}</h3>
                <div className= "text-left">
                    <div className= "my-3 mx-auto col-10">
                        <BasicInput className= "basic-input" type= "text" placeholder= "name" label= "Title" />
                    </div>
                    <div className= "mb-3 mx-auto col-10">
                        <label>Body</label>
                        <TextArea />
                    </div>
                    <div className= "mb-3 mx-auto col-10">
                        <label>Tags</label>
                        <MultiSelect />
                    </div>
                    <div className= "mb-5 mx-auto text-center col-4">
                        <Button text= "Ask a question" color= "btn btn-danger" size= "btn-sm" />
                    </div>
                    <div className= "col-4">
                        <DropFile />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddQuestion;
