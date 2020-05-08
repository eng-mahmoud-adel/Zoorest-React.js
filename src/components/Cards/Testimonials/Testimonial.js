import React from 'react';
import Card from "react-bootstrap/Card";
import QuoteImage from '../../../images/assets/images/quotation-mark@3x.png'

const Testimonial = ({className, testimonial}) => {

    return (
        <Card className={`testimonial-card my-4 ${className || ""}`}>
            <Card.Title className="mx-auto mb-0">
                <img src={QuoteImage} className="img-fluid" alt="quote"/>
            </Card.Title>
            <Card.Body className="py-0">
                <Card.Text className="header-6 font-regular text ">
                    {testimonial.getLocalizedText()}

                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <h5 className="client_name">{testimonial.getLocalizedClientName()}</h5>

                <small className="date">{testimonial.date}</small>

            </Card.Footer>
        </Card>
    )
}

export default Testimonial;
