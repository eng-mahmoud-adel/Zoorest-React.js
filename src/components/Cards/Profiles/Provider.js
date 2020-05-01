import React from 'react';
import Button from '../../Buttons/Button/Button';
import RateBar from '../..';
import Card from "react-bootstrap/Card";
import Tag from '../../Tags/Tag';
import {Link} from 'react-router-dom';
import Booking from '../Booking/Booking';
import {ViewsIcon} from "../../Icons";
import PropTypes from 'prop-types';
import LoginForm from '../../Forms/Auth/LoginForm';
import {connect} from "react-redux";
import {bookAppointment, getProviderAppointments} from "../../../store/actions/providers";
import {showModal} from "../../../store/actions/modal";
import Avatar from "../../Avatars/Avatar";

const Provider = ({model: user, showModal, className, authUser}) => {

    const showAppointmentModal = () => {
        if ("undefined" === typeof authUser.accessToken || null === authUser.accessToken) {
            showModal(LoginForm);
        } else {
            showModal(<Booking model={user}/>);
        }
    };

    return (
        <Card className={`provider-card ${className || ""}`}>
            <Card.Body className="text-center">
                {<div className="row">
                    {user.provider.sponsored_until !== null &&
                    <div className="col-8 pro-title">Pro</div>
                    }

                    {user.provider.is_nearby === true ?
                        <div className="col-4">
                            <Tag className="tag-one" text="Nearby"/>
                        </div> : ""
                    }
                </div>}
                <div className="d-flex justify-content-center my-3">
                    <Avatar className="avatar-three" image={user.image_url}
                            radius={70}/>
                </div>
                <Card.Title className="font-weight-bold">{user.name}</Card.Title>
                <div className="row mb-2">
                    <div className="col-md-7">
                        <RateBar rate={user.provider.average_rating}/>
                    </div>
                    <div className="col-md-5">
                        <ViewsIcon value={user.views_count} text={"Views"}/>
                    </div>
                </div>
                <Card.Text className="align-content-center mb-1">{user.description}</Card.Text>
                {user.provider.is_on_payed_plane ?
                    <p>Examination Fee: <span className="price">{user.provider.examination_price}</span></p> : ""}
                {user.provider.has_appointments ?
                    <div className="row">
                        <div className="col-xl-4 pl-xl-2 pr-xl-0 mb-2 mb-xl-0">
                            <Link to={`/doctor/profile/${user.getKey()}`}>
                                <Button text="View Profile" color="btn btn-light" size="btn-xs"/>
                            </Link>
                        </div>
                        <div className="col-xl-8">
                            <Button text="Make an Appointment" color="btn btn-info" size="btn-xs"
                                    onClick={showAppointmentModal}/>
                        </div>
                    </div> : <div className="w-75 mx-auto">
                        <Link to={`/doctor/profile/${user.getKey()}`}>
                            <Button text="View Profile" color="btn btn-light" size="btn-xs"/>
                        </Link>
                    </div>}
            </Card.Body>
        </Card>
    )
};

Provider.propTypes = {
    model: PropTypes.object.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(Provider);
