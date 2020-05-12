import React from 'react';
import Card from "react-bootstrap/Card";

const Photo = ({model}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <Card className="photo-card">
                <div>
                    <Card.Img src={model.path_small} />
                </div>
            </Card>
        </div>
    )
}

export default Photo;
