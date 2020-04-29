import React from 'react'
import {StarIcon} from "./Icons";

const RateBar = props => {
    const noOfStars = 5;
    const rate = props.rate;
    return (
        [...Array(noOfStars)].map((n, index) => (
            <StarIcon key={index} is_active={index < Math.round(rate)}/>
            // <span key={index} className={"fa fa-star fa-lg p-1 " + ((index < Math.round(rate)) ? "text-info" : "text-secondary")}/>
        ))
    );
};

export default RateBar;
