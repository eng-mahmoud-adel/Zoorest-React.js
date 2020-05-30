import React, {Fragment, useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Button from '../../Buttons/Button/Button';
import {SearchIcon} from "../../Icons";
import moment from "moment";
import {connect} from 'react-redux';
import {bookAppointment, getProviderAppointments} from "../../../store/actions/providers";
import PropTypes from "prop-types";
import LoginForm from "../../Forms/Auth/LoginForm";
import {showModal} from "../../../store/actions/modal";

const Booking = ({model: user, getAppointments, bookAppointment, showModal, authUser, stateData, currentLocale, withTitle}) => {

    const dateformat = "D-MM-Y";
    const {id, provider} = user;
    const [selectedDate, setSelectedDate] = useState(moment().format(dateformat));
    const [selectedAppointment, setSelectedAppointment] = useState(null);


    const handleDaySelected = (formatted_date) => {
        setSelectedDate(formatted_date);
    }

    const handleAppointmentSelected = (appointment_id) => {
        console.log(appointment_id)
        setSelectedAppointment(appointment_id);
    }

    const handleBookButton = () => {

        if ("undefined" === typeof authUser.accessToken || null === authUser.accessToken) {
            showModal(LoginForm);
        } else {
            bookAppointment(selectedAppointment);
        }
    }

    const getMonthAndYear = () => {
        return moment().format("MMMM Y");
    }

    const populateWeekDays = () => {
        const weekDays = [];

        let day = moment();
        for (let i = 0; i < 7; i++) {
            let dayOfMonth = day.format("D").padStart(2, '0');
            let dayShortName = day.format("ddd");
            let DD_MMM_YYYY_Date = day.format(dateformat);

            let key = `${day.format("dddd").toLowerCase()}_enabled`;
            let is_day_enabled = provider.schedule[key] === true;
            let is_today = moment().isSame(day);
            weekDays.push(
                <Col key={dayShortName} xs={3} sm={4} lg={3} xl={2} className="day">
                    <Button disabled={!is_day_enabled}
                            variant="outline-info" size="sm"
                            onClick={handleDaySelected.bind(this, DD_MMM_YYYY_Date)}>

                        <b>{dayShortName}</b>
                        <br/>
                        {is_day_enabled ? <b>{dayOfMonth}</b> : <span className="text-muted">{dayOfMonth}</span>}
                        {is_today && (
                            <Fragment>
                                <br/>
                                <small>Today</small>
                            </Fragment>
                        )}


                    </Button>
                </Col>
            )

            day = day.add(1, 'days');
        }
        return weekDays;
    }

    const populateAppointments = () => {
        const appointments = [];

        for (let i = 0; i < stateData.appointments.length; i++) {
            let appointment = stateData.appointments[i];

            let text = appointment.start_time.format("h:mm a");
            let color = "btn-outline-info text-white";
            let disabled = true;

            switch (appointment.status) {
                default:
                case "free":
                    disabled = false;
                    color = "btn-outline-info"
                    break;
                case "pending":
                    color = "btn-warning"
                    break;
                case "approved":
                    color = "btn-success"
                    break;
                case "declined":
                case "closed":
                    color = "btn-danger text-white"
                    break;
            }


            //dont add any appointments that has passed in time,
            //this filters appointments
            if (moment().isBefore(appointment.start_time)) {
                appointments.push(
                    <Col xs={4} className="mb-2 pr-1" key={"appointment_" + appointment.id}>
                        <Button text={`${text}`}
                                className={`btn-sm ${color}`}
                                disabled={disabled}
                                onClick={handleAppointmentSelected.bind(this, appointment.id)}/>
                    </Col>
                )
            }
        }
        return appointments;
    }

    const canSubmit = () => {
        return selectedAppointment != null;
    }

    useEffect(() => {
        getAppointments(id, selectedDate);
    }, [getAppointments, id, selectedDate]);

    return (
        <Card className={"booking-card m-1"}>
            {withTitle && <Card.Title className="py-3"/>}
            <Card.Body>
                <h5>Do you need to pay a visit to this doctor ?</h5>
                <span className="date font-weight-bold">{getMonthAndYear()}</span>
                <div className="week mt-2 mb-4 text-center">
                    <Row>
                        {populateWeekDays()}
                    </Row>
                </div>
                <h5 className="font-weight-bold">Available Start Time</h5>
                <Card.Text className="font-weight-bold">
                    <SearchIcon className={"mr-2"} text={`Examination Fee : ${provider.examination_price} EGP`}/>
                </Card.Text>
                <div className="time mb-3">
                    <Row>
                        {/*todo add loading animation*/}
                        {!stateData.loadingAppointments ? populateAppointments() : ""}
                    </Row>
                </div>
                <Button text="Confirm your booking" variant="info" size="lg"
                        onClick={handleBookButton}
                        style={{cursor: canSubmit() ? "pointer" : "not-allowed"}}
                        disabled={canSubmit() ? "" : "disabled"}
                />
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
    currentLocale: state.i18n.value,
    stateData: state.singleProviderPage,
});

const mapDispatchToProps = (dispatch) => ({

    getAppointments: (provider_id, datestring) => {
        dispatch(getProviderAppointments(provider_id, datestring));
    },

    bookAppointment: (appointment_id) => {
        dispatch(bookAppointment(appointment_id));
    },

    showModal: (component) => {
        dispatch(showModal(component));
    },

});

Booking.propTypes = {
    model: PropTypes.object.isRequired,
    getAppointments: PropTypes.func,
    bookAppointment: PropTypes.func,
    stateData: PropTypes.object,
    currentLocale: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
