import React from 'react';
import Card from "react-bootstrap/Card";

const Photo = ({model}) => {
    return (
        <Card>
            <Card.Img src={model.path_large} />
        </Card>
    )
}

export default Photo;
