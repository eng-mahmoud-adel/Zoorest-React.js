import React from 'react';
import {Text12} from "../UI/Typography";

const Tag = (props) => {
    return (
        <div className= {props.className}>
            <Text12 className="text-white">{props.text}</Text12>
        </div>
    )
}

export default Tag;
