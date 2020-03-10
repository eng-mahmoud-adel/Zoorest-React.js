import React from 'react';

function TimeInputTwo(props) {
    return (
        <div className="input-group input-group-sm mb-3">
            <i className="fa fa-clock-o clock-icon fa-lg" aria-hidden="true"></i>
            <input type= {props.type} className="input-time-two left" placeholder= {props.startPlaceHolder} onFocus= {props.onFocus} onBlur= {props.onBlur} />
            <div className="input-group-prepend">
                <span className="text-inbetween">to</span>
            </div>
            <input type= {props.type} className="input-time-two right" placeholder= {props.endPlaceHolder} onFocus= {props.onFocus} onBlur= {props.onBlur} />
        </div>
    )
}

export default TimeInputTwo;
