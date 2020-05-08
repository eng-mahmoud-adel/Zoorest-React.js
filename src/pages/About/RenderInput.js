import React from 'react';
import BasicInput from '../../components/Inputs/BasicInput';
import TextArea from '../../components/Inputs/TextArea';
import UrlInput from '../../components/Inputs/UrlInput';
import CounterOne from '../../components/Inputs/CounterOne';
import CounterTwo from '../../components/Inputs/CounterTwo';
import TimeInputOne from '../../components/Inputs/TimeInputOne';
import TimeInputTwo from '../../components/Inputs/TimeInputTwo';
import {MultiSelect} from '../../components/Inputs/MultiSelect';

function RenderInput() {
    return (
        <div>
            <hr />
            <h1>Inputs</h1>
            <hr />
            <div className= "row">

                <div className= "col-8">
                    <div className= "row">

                        <div className= "col-3">
                            <CounterOne />
                        </div>
                        <div className= "col-2">
                            <CounterTwo />
                        </div>
                        <div className= "offset-1 col-6">
                            <BasicInput className= "basic-input" type= "text" placeholder= "Input name" />
                        </div>

                        <div className= "col-5 mb-2">
                            <MultiSelect />
                        </div>
                        <div className= "offset-1 col-6">
                            <BasicInput className= "basic-input" type= "text" placeholder= "Input name" invalid= "form-control is-invalid" />
                        </div>

                        <div className= "col-6">
                            <UrlInput />
                        </div>
                        <div className= "col-6">
                            <BasicInput className= "basic-input" type= "text" placeholder= "Input name" valid= "form-control is-valid" feedback= "Looks good!" />
                        </div>

                        <div className= "col-6">
                            <BasicInput className= "basic-input" type= "text" left_icon= "fa fa-commenting-o fa-lg" placeholder= "Input name" />
                        </div>

                        <div className= "col-6">
                            <BasicInput className= "basic-input" type= "text" right_icon= "fa fa-commenting-o fa-lg" placeholder= "Input name" />
                        </div>

                        {/* there is an error here in width of inputs ************************************* */}

                        <div className= "col-6">
                            <TimeInputTwo type= "text" startPlaceHolder="Start date" endPlaceHolder="End date" onFocus= {(e) => e.target.type = "date"} onBlur= {(e) => e.target.type = "text"} />
                        </div>
                        <div className= "col-6">
                            <TimeInputOne type= "text" className= "input-time-one" icon= "fa fa-clock-o clock-icon fa-lg" />
                        </div>
                        <div className= "col-6">
                            <TimeInputTwo type= "time" />
                        </div>

                    </div>
                </div>

                <div className= "col-4">
                    <div className= "row">
                        <div className= "col-12">
                            <TextArea rows= "10" />
                        </div>
                        <div className= "col-12">
                            <TextArea rows= "10" invalid= "is-invalid" text= "This filed is requiered" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderInput;
