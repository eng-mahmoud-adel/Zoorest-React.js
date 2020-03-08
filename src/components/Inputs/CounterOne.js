import React, {useState} from 'react';

function CounterOne() {
    const [count, setCount] = useState(0);
    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <button className="minus" onClick= {() => setCount(count - 1)}>-</button>
            </div>
            <input type="text" className="counter-one" value= {count} />
            <div className="input-group-prepend">
                <button className="plus" onClick= {() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}

export default CounterOne;
