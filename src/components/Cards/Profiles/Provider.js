import React from 'react';
import Avatar from '../../Avatars/Avatar';
import Button from '../../Buttons/Button/Button';
import RateBar from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Provider = (props) => {
    const {provider} = props;
    return (
        <div className={props.className + " card"}>
            <div className="card-body text-center">
                <div className="d-flex justify-content-center my-3">
                    {provider ?
                        <Avatar className="avatar-three" image={provider.image_url}
                                radius={70}/> :
                        <Avatar className="avatar-three" text="MA"/>
                    }
                </div>
                <h5 className="card-title font-weight-bold">{provider ? provider.name : props.cardTitle}</h5>
                <div className="row">
                    <div className="col-md-7">
                        <RateBar rate={provider.provider_data.rate ? provider.provider_data.rate : 5}/>
                    </div>
                    <div className="col-md-5">
                        <FontAwesomeIcon icon={faEye} size="xs"/>
                        <span> {provider ? provider.account_views : props.number} Views</span>
                    </div>
                </div>
                <p className="card-text align-content-center">{provider ? provider.description : props.cardText}</p>
                <div className="w-75 mx-auto">
                    <Button text="View Profile" color="btn btn-light" size="btn-xs"/>
                </div>
            </div>
        </div>
    )
};

export default Provider;
