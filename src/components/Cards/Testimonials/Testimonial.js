import React from 'react';
import Card from "react-bootstrap/Card";
import QuoteImage from '../../../images/assets/images/quotation-mark@3x.png'
import {Text12, Text16Regular, Text18Medium} from "../../UI/Typography";

const Testimonial = ({className, testimonial}) => {

    return (
        <Card className={`testimonial-card my-4 ${className || ""}`}>
            <Card.Title className="mx-auto mb-0">
                <img src={QuoteImage} className="img-fluid" alt="quote"/>
            </Card.Title>
            <Card.Body className="py-0">
                <Card.Text>

                    <Text16Regular className="text">
                        {testimonial.getLocalizedText()}
                    </Text16Regular>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Text18Medium className="client_name">{testimonial.getLocalizedClientName()}</Text18Medium>
                <br/>
                <Text12 className="date">{testimonial.date}</Text12>

            </Card.Footer>
        </Card>
    )
}

export default Testimonial;
