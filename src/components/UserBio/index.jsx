import React, {Fragment} from 'react'
import ProfileAvatar from "../Avatars/ProfileAvatar";
import RateBar from "../index";
import {CallIcon, ViewsIcon} from "../Icons";

const UserBio = ({user: model}) => {
    return (
        <div className="row" key={model.id}>
            <div className="provider-image col-xl-2 col-md-3 col-sm-3 col-12">
                <ProfileAvatar model={model} withName={false} withJoiningDate={false}/>
            </div>

            <div className="col-xl-10 col-md-9 col-sm-9 col-12">
                <h2 className="mt-xl-0 mt-lg-2">
                    {model.official_name || model.name}
                </h2>

                {
                    model.isProvider() ?
                        <Fragment>
                            <div className="d-flex">
                                <div>
                                    <RateBar rate={model.provider.average_rating}/>
                                </div>
                                <div className="views ml-5">
                                    <ViewsIcon
                                        text={"Views"}
                                        className={"mr-2"}
                                        value={model.views_count}/>
                                </div>
                            </div>


                            <div className="d-flex">
                                <div className="contact">
                                    <CallIcon className="mr-2 text-info" value={model.phone}/>
                                </div>
                                {
                                    model.additional_phone_number &&
                                    <div className="contact ml-5">
                                        <CallIcon className="mr-2 text-info"
                                                  value={model.additional_phone_number}/>
                                    </div>
                                }
                            </div>

                            <div className="address mt-2">
                                <p className="header-5 font-bold">{model.provider.address}</p> | <a
                                href={`https://www.google.com/maps/@${model.provider.latitude()},${model.provider.longitude()},15z`}
                                className="font-weight-bold" target="_blank" rel="noopener noreferrer">
                                <p className="header-5 font-bold text-info">Show on Maps</p>
                            </a>
                            </div>

                        </Fragment>
                        :
                        <Fragment>
                            <h5 className="font-regular text-muted">
                                {`Joined Since ${model.getJoiningDateString()}`}
                            </h5>

                            <p className="header-5 font-regular">
                                {model.description}
                            </p>

                        </Fragment>
                }


            </div>
        </div>
    );
};

export const UserBioLoadingAnimation = () => {
    return (
        <div className="row loading-avatar">
            <div className="provider-image col-xl-2 col-md-3 col-sm-3 col-12">
                <div className="img-container">
                    <div className="image loading"/>
                </div>
            </div>

            <div className="col-xl-10 col-md-9 col-sm-9 col-12">
                <h2 className="mt-xl-0 mt-lg-2 bar">
                    <div className="bar bar1 loading"/>
                </h2>

                <div className="bars">

                    <div className="bar bar1 loading"/>
                    <div className="bar bar1 loading"/>
                    <div className="bar bar2 loading"/>
                </div>

            </div>
        </div>
    );
};

export default UserBio;
