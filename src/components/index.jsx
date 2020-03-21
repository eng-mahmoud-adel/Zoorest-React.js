import React from 'react'

const RateBar = props => {
    const noOfStars = 5;
    const rate = props.rate;
    return (
        [...Array(noOfStars)].map((n, index) => (
            /*TODO: Add hover functionality*/
            /*TODO: Add State to get the selected rating*/
            <span key={index} className={"fa fa-star fa-2x p-1 " + ((index < rate) ? "text-info" : "text-secondary")}/>
        ))
    );
};

export default RateBar;