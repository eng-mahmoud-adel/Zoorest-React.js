import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";

const Album = ({model}) => {
    return (
        <Fragment>
            {model.images &&  model.images.map(image => 
                <div className="col-md-6 mb-4">
                    <Card className="album-card">
                        <Card.Img src={image.path_large} />
                    </Card>
                </div>)}
        </Fragment>
    )
}

export default Album;
