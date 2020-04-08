import React, { useState } from 'react';

const Size = (props) => {
    const [user, setUser] = useState(["user", "doctor", "clinic"]);

    return (
        <div className={props.size + " btn-group w-100"} role="group">
            {user.map(item => (
                <button type="button" className="btn btn-info" onClick= {props.showComponent}>{item.charAt(0).toUpperCase() + item.slice(1)}</button>
            ))}
        </div>
    )
}

export default Size;