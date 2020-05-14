import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";

const AlbumLoadingAnimation = ({className}) => {

    return (
        <Card className={`album-card loading-card my-2 w-100 ${className || ""}`}>
            <div className="image loading">
                <Card.Img />
            </div>
        </Card>
    )
};

export const AlbumLoadingAnimationBar = ({size, count}) => {

    return (
        <Fragment>
            {[...Array(count)].map((n, index) => (
                <div key={`album-animation-${index}`} className={` ${size}`}>
                    <AlbumLoadingAnimation/>
                </div>
            ))}
        </Fragment>
    )
}

AlbumLoadingAnimationBar.defaultProps = {
    size: "col-lg-6",
    count: 2,
}

export default AlbumLoadingAnimationBar;