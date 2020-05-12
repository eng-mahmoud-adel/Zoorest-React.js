import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";

const PetLoadingAnimation = ({className}) => {

    return (
        <Card className={`pet-card loading-card my-2 w-100 ${className || ""}`}>
            <div className="image loading">
                <Card.Img />
            </div>
            <Card.Body className="bars">
                <Card.Title className="bar bar1 loading"></Card.Title>
                <Card.Text className="bar bar2 loading"></Card.Text>
            </Card.Body>
        </Card>
    )
};

export const PetLoadingAnimationBar = ({size, count}) => {

    return (
        <Fragment>
            {[...Array(count)].map((n, index) => (
                <div key={`pet-animation-${index}`} className={` ${size}`}>
                    <PetLoadingAnimation/>
                </div>
            ))}
        </Fragment>
    )
}

PetLoadingAnimationBar.defaultProps = {
    size: "col-lg-4",
    count: 3,
}

export default PetLoadingAnimation;