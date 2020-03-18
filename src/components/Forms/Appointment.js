import React from 'react';
import TimeInputOne from '../Inputs/TimeInputOne';
import CounterOne from '../Inputs/CounterOne';


const Appointment = (props) => {
    return (
        <form>
            <div className="form-group appointment-form col-12">
                <h3 className= "title my-4">{props.title}</h3>
                <div className= "row">
                    <div className= "col-7">
                        <label>Availability</label>
                        <TimeInputOne type= "text" className= "input-time-one" icon= "fa fa-clock-o clock-icon fa-lg" />
                    </div>
                    <div className= "col-3">
                        <label>Availability</label>
                        <CounterOne />
                    </div>
                </div>
                
            </div>
        </form>
    )
}

export default Appointment;
