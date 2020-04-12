import React from 'react';
import Card from "react-bootstrap/Card";
import QuoteImage from '../../../images/assets/images/quotation-mark@3x.png'

const Testimonial = (props) => {
    const {testimonial}= props;
    return (
        <Card className={`testimonial-card my-4 ${props.className ? props.className : ""}`}>
            <Card.Title className= "mx-auto mb-0">
                <img src={QuoteImage} className="img-fluid" alt="quote"/>
            </Card.Title>
            <Card.Body className= "py-0">
                <Card.Text>{testimonial ? testimonial.text.substring(0, 220) : ""}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <p className= "mb-0">{testimonial ? testimonial.author_name : ""}</p>
                <span>{testimonial ? testimonial.date : ""}</span>
            </Card.Footer>
        </Card>
    )
}

export default Testimonial;
