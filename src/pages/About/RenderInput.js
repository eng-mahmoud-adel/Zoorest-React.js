import React from 'react';
import BasicInput from '../../components/Inputs/BasicInput';
import TextArea from '../../components/Inputs/TextArea';
import UrlInput from '../../components/Inputs/UrlInput';
import Counter from '../../components/Inputs/Counter';
import TimeInputOne from '../../components/Inputs/TimeInputOne';
import TimeInputTwo from '../../components/Inputs/TimeInputTwo';

function RenderInput() {
    return (
        <div>
            <hr />
            <h1>Inputs</h1>
            <hr />
            <div className= "row">


                <div className= "col-2">
                    <Counter />
                </div>
                <div className= "col-2">
                    <BasicInput className= "basic-counter" type= "number" />
                </div>
                <div className= "col-3">
                    <BasicInput className= "basic-input" type= "text" placeholder= "Input name" />
                </div>
                <div className= "col-5">
                    <TextArea />
                </div>



                <div className= "col-2">
                    <Counter />
                </div>
                <div className= "col-2">
                    <BasicInput className= "basic-counter" type= "number" />
                </div>


                <div className= "col-3">
                    <BasicInput className= "basic-input" type= "text" placeholder= "Input name" />
                </div>
                <div className= "col-5">
                    <TextArea invalid= "is-invalid" text= "This filed is requiered" />
                </div>


                <div className= "col-4">
                    <UrlInput />
                </div>
                <div className= "col-4">
                    <BasicInput className= "basic-input" type= "text" placeholder= "Input name" />
                </div>

                <div className= "col-4">
                    <BasicInput className= "input-icon" type= "text" left_icon= "fa fa-commenting-o fa-lg" placeholder= "Input name" />
                </div>

                <div className= "col-4">
                    <BasicInput className= "input-icon-left" type= "text" right_icon= "fa fa-commenting-o fa-lg" placeholder= "Input name" />
                </div>

                <div className= "col-4">
                    <TimeInputOne type= "time" />
                </div>

                <div className= "col-4">
                    <TimeInputTwo type= "time" />
                </div>
                
                <div className= "col-4">
                    <TimeInputTwo type= "date" />
                </div>
                
                
                
                
                
                
                
            </div>
        </div>
    )
}

export default RenderInput;
