import React from 'react';

function Counter() {
    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="minus">-</span>
            </div>
            <input type="text" className="counter" />
            <div className="input-group-prepend">
                <span className="plus">+</span>
            </div>
        </div>
    )
}

export default Counter;
