import React, {useState} from 'react';

function CounterTwo() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <input type="text" className="counter-two" value= {count} />
            <button className= "increase" onClick= {() => setCount(count + 1)}>
                <i className="fa fa-chevron-up increase-icon" aria-hidden="true"></i>
            </button>
            <button className= "decrease" onClick= {() => setCount(count - 1)}>
                <i className="fa fa-chevron-down decrease-icon" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default CounterTwo;
