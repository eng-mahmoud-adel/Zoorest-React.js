import React from 'react';

const TimeInputOne = (props) => {
    return (
        <div>
            <i className= {props.icon} aria-hidden="true"></i>
            <input className= {props.className} type= {props.type} placeholder="Start time" onFocus= {(e) => e.target.type = "time"} onBlur= {(e) => e.target.type = "text"} />
            <span className="hyphen">-</span> 
            <i className= {props.icon} aria-hidden="true"></i>
            <input className= {props.className} type= {props.type} placeholder="End time" onFocus= {(e) => e.target.type = "time"} onBlur= {(e) => e.target.type = "text"} />
        </div>
    )
}

export default TimeInputOne;
