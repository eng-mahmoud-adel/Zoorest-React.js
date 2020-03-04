import React from 'react';

const TimeInput = () => {
    return (
        <div>
            <i className="fa fa-clock-o clock-icon fa-lg" aria-hidden="true"></i>
            <input className="input-time" type="time" placeholder="Start time" />
            <span className="hyphen">-</span> 
            <i className="fa fa-clock-o clock-icon fa-lg" aria-hidden="true"></i>
            <input className="input-time" type="time" placeholder="End time" />
        </div>
    )
}

export default TimeInput;
