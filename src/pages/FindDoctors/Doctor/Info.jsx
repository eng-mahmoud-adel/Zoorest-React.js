import React, {Fragment} from 'react';
import {Card} from 'react-bootstrap';
import Booking from '../../../components/Cards/Booking/Booking';

const Info = ({user}) => {

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-7">
                    <Card className="doctor-info mb-4">
                        <Card.Body>
                            <Card.Title className="font-weight-bold">About The Doctor</Card.Title>

                            <Card.Text>
                                {user.description}{/*<a href="#" className="font-weight-bold">See More</a>*/}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card className= "doctor-info">
                        <Card.Body>
                            <Card.Title className="font-weight-bold">Certificates</Card.Title>
                            {(user.provider.certificates.length > 0) &&
                            <div className="row">
                                {
                                    user.provider.certificates.map(certificate => (
                                        <div className="col-md-3 mb-md-0 mb-2">
                                            <img src={user.provider.certificate_url} alt=""/>
                                        </div>))

                                }
                            </div>
                            }
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-5 mt-md-0 mt-4">
                    {user.provider.has_appointments && <Booking model={user}/>}
                </div>
            </div>
        </Fragment>
    )
}

export default Info;
