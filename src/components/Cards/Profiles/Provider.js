import React from 'react';
import Avatar from '../../Avatars/Avatar';
import Button from '../../Buttons/Button/Button';
import RateBar from '../..';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import Card from "react-bootstrap/Card";
import Tag from '../../Tags/Tag';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

const Provider = (props) => {
    const {provider, showModal} = props;

    const showAppointmentModal = () => {
        showModal(Booking);
    };

    return (
        <Card className={`provider-card ${props.className}`}>
            <Card.Body className="text-center">
                {<div className= "row">
                    {provider.provider_data.sponsored_until === null ?
                        <div className= "col-8 pro-title">Pro</div> 
                        : ""
                    }

                    {provider.provider_data.nearby === true ? 
                        <div className= "col-4">
                            <Tag className= "tag-one" text= "Nearby" />
                        </div> : ""
                    }
                </div>}
                <div className="d-flex justify-content-center my-3">
                    {provider ?
                        <Avatar className="avatar-three" image={provider.image_url}
                                radius={70}/> :
                        <Avatar className="avatar-three" text="MA"/>
                    }
                </div>
                <Card.Title className="font-weight-bold">{provider ? provider.name : props.cardTitle}</Card.Title>
                <div className="row mb-2">
                    <div className="col-md-7">
                        <RateBar rate={provider.provider_data.rate ? provider.provider_data.rate : 5}/>
                    </div>
                    <div className="col-md-5">
                        <FontAwesomeIcon icon={faEye} size="xs"/>
                        <span> {provider ? provider.account_views : props.number} Views</span>
                    </div>
                </div>
                <Card.Text className="align-content-center mb-1">{provider ? provider.description : props.cardText}</Card.Text>
                {provider.provider_data.examination_price ? <p>Examination Fee: <span className= "price">{provider.provider_data.examination_price}</span></p> : ""}
                    {provider.has_appointments ?
                    <div className= "row">
                        <div className= "col-xl-4 pl-xl-2 pr-xl-0 mb-2 mb-xl-0">
                            <Link to= {`/doctor/profile/${provider.id}`}>
                                <Button text="View Profile" color="btn btn-light" size="btn-xs"/>
                            </Link>
                        </div>
                        <div className= "col-xl-8">
                            <Button text="Make an Appointment" color="btn btn-info" size="btn-xs" onClick= {showAppointmentModal}/>
                        </div>
                    </div> : <div className="w-75 mx-auto">
                    <Link to= {`/doctor/profile/${provider.id}`}>
                        <Button text="View Profile" color="btn btn-light" size="btn-xs"/>
                    </Link>
                </div>}
            </Card.Body>
        </Card>
    )
};

export default Provider;
