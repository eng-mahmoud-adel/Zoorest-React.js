import React, {Fragment} from 'react';
import {Card} from 'react-bootstrap';
import Booking from '../../../components/Cards/Booking/Booking';

const Info = (props) => {

    const {provider} = props;

    return (
        <Fragment>
            {provider.map(data => <div className="row">
                <div className="col-md-7">
                    <Card className= "doctor-info mb-4">
                        <Card.Body>
                            <Card.Title className="font-weight-bold">About The Doctor</Card.Title>
                        
                            <Card.Text>
                                {data.description}<a href= "#" className= "font-weight-bold">See More</a>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>

                    <Card className= "doctor-info">
                        <Card.Body>
                            <Card.Title className= "font-weight-bold">Certificates</Card.Title>
                            {data.provider.certificate_url !== null ?
                                <div className= "row">
                                    <div className= "col-md-3 mb-md-0 mb-2">
                                        <img src={data.provider.certificate_url} alt=""/>
                                    </div>
                                </div> : ""}
                        </Card.Body>
                    </Card>
                </div>

                <div className= "col-md-5 mt-md-0 mt-4">
                    <Booking provider= {provider} />
                </div>
            </div>)}
        </Fragment>
    )
}

export default Info;
