import React from 'react';
import Card from "react-bootstrap/Card";
import LazyLoad from "react-lazyload";

const Photo = ({model}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <Card className="photo-card">
                <div>
                    <LazyLoad unmountIfInvisible={true} once={true}>
                        <Card.Img src={model.path_small} />
                    </LazyLoad>
                </div>
            </Card>
        </div>
    )
}

export default Photo;
