import React from 'react';
import Button from '../../Buttons/Button/Button';
import {Card} from "react-bootstrap";

const AddPost = ({onButtonClicked}) => {
    return (
        <Card className="add-post-card">
            <Card.Title>Do you have something to post?</Card.Title>
            <Card.Body>
                <Card.Text>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet. </Card.Text>
                <Button text= "Add post" color= "btn btn-danger" size= "btn-sm" onClick={onButtonClicked} />
            </Card.Body>
        </Card>
    )
}

export default AddPost;
