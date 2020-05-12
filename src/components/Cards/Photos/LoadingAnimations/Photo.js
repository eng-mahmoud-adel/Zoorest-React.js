import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";

const PhotoLoadingAnimation = ({className}) => {

    return (
        <Card className={`photo-card loading-card my-2 w-100 ${className || ""}`}>
            <div className="image loading">
                <Card.Img />
            </div>
        </Card>
    )
};

export const PhotoLoadingAnimationBar = ({size, count}) => {

    return (
        <Fragment>
            {[...Array(count)].map((n, index) => (
                <div key={`photo-animation-${index}`} className={` ${size}`}>
                    <PhotoLoadingAnimation/>
                </div>
            ))}
        </Fragment>
    )
}

PhotoLoadingAnimationBar.defaultProps = {
    size: "col-lg-4",
    count: 3,
}

export default PhotoLoadingAnimation;