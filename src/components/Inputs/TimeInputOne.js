import React from 'react';

const TimeInputOne = () => {
    return (
        <div>
            <i className="fa fa-clock-o clock-icon fa-lg" aria-hidden="true"></i>
            <input className="input-time-one" type="time" placeholder="Start time" />
            <span className="hyphen">-</span> 
            <i className="fa fa-clock-o clock-icon fa-lg" aria-hidden="true"></i>
            <input className="input-time-one" type="time" placeholder="End time" />
        </div>
    )
}

export default TimeInputOne;
