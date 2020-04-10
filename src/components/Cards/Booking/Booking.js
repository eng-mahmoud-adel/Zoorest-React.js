import React, { useState } from 'react';
import {Card,Row,Col} from "react-bootstrap";
import Button from '../../Buttons/Button/Button';
import {SearchIcon} from "../../Icons";

const Booking = () => {
    // const [time, setTime]= useState("");
    const [disable, setDisable]= useState("disabled");

    // const handleDisable = (e) => {
    //     (e.target.value !== "") ? setDisable("") : setDisable("disabled");
    // }

    return (
        <Card className={"booking-card m-1"}>
            <Card.Title className= "py-3"></Card.Title>
            <Card.Body>
                <h5>Do you need to pay a visit to this doctor ?</h5>
                <span className="date font-weight-bold">January 2020</span>
                <div className= "week mt-2 mb-4 text-center">
                    <Row>
                        <Col md= {2} className= "day">
                            <Button text= "Mon 21" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {2} className= "day">
                            <Button text= "Mon 21" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {2} className= "day">
                            <Button text= "Mon 21" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {2} className= "day">
                            <Button text= "Mon 21" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {2} className= "day">
                            <Button text= "Mon 21" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {2} className= "day">
                            <Button text= "Mon 21" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                    </Row>
                </div>
                <h5 className= "font-weight-bold">Available Start Time</h5>
                <Card.Text className= "font-weight-bold">
                    <SearchIcon className={"mr-2"} text={"Examination Fee : 200 EGP"}/>
                </Card.Text>
                <div className= "time mb-3">
                    <Row>
                        <Col md= {4} className= "mb-2 pr-1">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" onClick= {() => setDisable("")} />
                        </Col>
                        <Col md= {4} className= "mb-2 px-2">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 pl-1">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 pr-1">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 px-2">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 pl-1">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 pr-1">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 px-2">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 pl-1">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 pr-1">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                        <Col md= {4} className= "mb-2 px-2">
                            <Button text= "10-11 AM" color= "btn btn-outline-info" size= "btn-sm" />
                        </Col>
                    </Row>
                </div>
                <Button text="Confirm your booking" color="btn btn-info" size="btn-lg" disabled= {disable}/>
            </Card.Body>
        </Card>
    )
}

export default Booking;
