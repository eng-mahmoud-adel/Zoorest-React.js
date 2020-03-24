import React from 'react';
import Avatar from '../../Avatars/Avatar';
import SmallButton from '../../Buttons/SmallButtons/SmallButton';
import RateBar from '../..';

const Profile = (props) => {
    return (
        <div className={props.className + " card"}>
            <div className="card-body text-center">
                <div className= "d-flex justify-content-center my-5">
                    <Avatar className= "avatar-three" text= "MA" />
                </div>
                <h5 className="card-title font-weight-bold">{props.cardTitle}</h5>
                <div className= "row">
                    <div className= "col-md-7">
                        <RateBar />
                    </div>
                    <div className= "col-md-5">
                        <i className= {props.icon} aria-hidden="true">{props.number}</i>
                    </div>
                </div>
                <p className="card-text">{props.cardText}</p>
                <div className= "w-75 mx-auto">
                    <SmallButton text= "View Profile" color= "btn btn-light" size= "btn-sm" />
                </div>
            </div>
        </div>
    )
}

export default Profile;
