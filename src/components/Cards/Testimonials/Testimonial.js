import React from 'react';
import Card from "react-bootstrap/Card";

const Testimonial = (props) => {
    const {testimonial}= props;
    return (
        <Card className={`testimonial-card my-2 w-100 ${props.className ? props.className : ""}`}>
            <Card.Title className= "mx-auto mb-0">
                <i className="fa fa-quote-right fa-2x" aria-hidden="true"></i>
            </Card.Title>
            <Card.Body className= "py-0">
                <Card.Text>{testimonial ? testimonial.text.substring(0, 235) : ""}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <p className= "mb-0">{testimonial ? testimonial.author_name : ""}</p>
                <span>{testimonial ? testimonial.date : ""}</span>
            </Card.Footer>
        </Card>
    )
}

export default Testimonial;
