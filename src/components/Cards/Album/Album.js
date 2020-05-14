import React from 'react';
import Card from "react-bootstrap/Card";

const Album = ({model}) => {
    return (
        <Card className="album-card">
            {model.images &&  model.images.map(image => 
                <div>
                    <Card.Img src={image.path_large} />
                </div>)}
        </Card>
    )
}

export default Album;
