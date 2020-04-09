import React, { useState } from 'react';

const Size = (props) => {
    const {tabs}= props;

    return (
        <div className={props.size + " btn-group w-100"} role="group">
            {tabs.map(item => (
                <button type="button" className="btn btn-info" onClick= {() => props.onTabClick(item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</button>
            ))}
        </div>
    )
}

export default Size;