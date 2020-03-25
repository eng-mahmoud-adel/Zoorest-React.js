import React from 'react';
import Avatar from '../../Avatars/Avatar';
import Button from '../../Buttons/Button/Button';
import RateBar from '../..';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import Card from "react-bootstrap/Card";

const Provider = (props) => {
    const {provider} = props;
    return (
        <Card className={`provider-card ${props.className}`}>
            <Card.Body className="text-center">
                <div className="d-flex justify-content-center my-3">
                    {provider ?
                        <Avatar className="avatar-three" image={provider.image_url}
                                radius={70}/> :
                        <Avatar className="avatar-three" text="MA"/>
                    }
                </div>
                <Card.Title className="font-weight-bold">{provider ? provider.name : props.cardTitle}</Card.Title>
                <div className="row">
                    <div className="col-md-7">
                        <RateBar rate={provider.provider_data.rate ? provider.provider_data.rate : 5}/>
                    </div>
                    <div className="col-md-5">
                        <FontAwesomeIcon icon={faEye} size="xs"/>
                        <span> {provider ? provider.account_views : props.number} Views</span>
                    </div>
                </div>
                <Card.Text className="align-content-center">{provider ? provider.description : props.cardText}</Card.Text>
                <div className="w-75 mx-auto">
                    <Button text="View Profile" color="btn btn-light" size="btn-xs"/>
                </div>
            </Card.Body>
        </Card>
    )
};

export default Provider;
