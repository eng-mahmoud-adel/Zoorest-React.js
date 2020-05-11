import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";

const PetLoadingAnimation = ({className}) => {

    return (
        <Card className={`pet-card loading-card my-2 w-100 ${className || ""}`}>
            <Card.Img />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export const PetLoadingAnimationBar = ({size, count}) => {

    return (
        <Fragment>
            {[...Array(count)].map((n, index) => (
                <div key={`photo-animation-${index}`} className={` ${size}`}>
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