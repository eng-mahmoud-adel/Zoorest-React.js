import React, {useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Button from '../../Buttons/Button/Button';
import {SearchIcon} from "../../Icons";
import moment from "moment";

const Booking = ({model: provider}) => {

    const [disable, setDisable] = useState("disabled");
    const [selectedDate, setSelectedDate] = useState(moment().format("dd-mm-yyyy"));
    // const handleDisable = (e) => {
    //     (e.target.value !== "") ? setDisable("") : setDisable("disabled");
    // }

    const getMonthAndYear = () => {
        return moment().format("MMMM Y");
    }

    const handleDaySelected = (formatted_date) => {

        console.log(formatted_date);
        setSelectedDate(formatted_date);
        //todo populate the time section
    }

    const getWeekDays = () => {
        const weekDays = [];

        let day = moment();
        for (let i = 0; i < 7; i++) {
            let dayOfMonth = day.format("D").padStart(2, '0');
            let dayShortName = day.format("ddd");
            let DD_MMM_YYYY_Date = day.format("D-MM-Y");

            let is_day_enabled = provider.schedule[`${day.format("dddd").toLowerCase()}_enabled`] === true

            weekDays.push(
                <Col xs={3} sm={4} lg={3} xl={2} className="day">
                    <Button text={`${dayShortName} ${dayOfMonth}`} disabled={!is_day_enabled}
                            color="btn btn-outline-info" size="btn-sm"
                            onClick={handleDaySelected.bind(this, DD_MMM_YYYY_Date)}
                    />
                </Col>
            )

            day = day.add(1, 'days');
        }
        return weekDays;
    }

    return (
        <Card className={"booking-card m-1"}>
            <Card.Title className="py-3"/>
            <Card.Body>
                <h5>Do you need to pay a visit to this doctor ?</h5>
                <span className="date font-weight-bold">{getMonthAndYear()}</span>
                <div className="week mt-2 mb-4 text-center">
                    <Row>
                        {getWeekDays()}
                    </Row>
                </div>
                <h5 className="font-weight-bold">Available Start Time</h5>
                <Card.Text className="font-weight-bold">
                    <SearchIcon className={"mr-2"} text={"Examination Fee : 200 EGP"}/>
                </Card.Text>
                <div className="time mb-3">
                    <Row>
                        <Col xs={4} className="mb-2 pr-1">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"
                                    onClick={() => setDisable("")}/>
                        </Col>
                        <Col xs={4} className="mb-2 px-2">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 pl-1">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 pr-1">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 px-2">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 pl-1">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 pr-1">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 px-2">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 pl-1">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 pr-1">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                        <Col xs={4} className="mb-2 px-2">
                            <Button text="10-11 AM" color="btn btn-outline-info" size="btn-sm"/>
                        </Col>
                    </Row>
                </div>
                <Button text="Confirm your booking" color="btn btn-info" size="btn-lg" disabled= {disable}/>
            </Card.Body>
        </Card>
    )
}

export default Booking;
