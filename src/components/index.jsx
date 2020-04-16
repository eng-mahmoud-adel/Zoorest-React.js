import React from 'react'

const RateBar = props => {
    const noOfStars = 5;
    const rate = props.rate;
    return (
        [...Array(noOfStars)].map((n, index) => (
            /*TODO: Add hover functionality*/
            /*TODO: Add State to get the selected rating*/
            <span key={index} className={"fa fa-star fa-lg p-1 " + ((index < Math.round(rate)) ? "text-info" : "text-secondary")}/>
        ))
    );
};

export default RateBar;
