import React from 'react';
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const ProfileAvatar = ({model: user, className, radius, withName, withJoiningDate}) => {


    let imageUrl = user.image_url || user.image;


    let ImageOrInitialsComponent = (<div className="img-container">
        <LazyLoad unmountIfInvisible={true} once={true}>
            {
                imageUrl ?
                    <img src={imageUrl} width={radius} alt="avatar"/> :
                    <div className="avatar-two">{user.getNameInitials()}</div>
            }
        </LazyLoad>
    </div>);


    if (user.photo && user.photo.path_icon) {
        ImageOrInitialsComponent = <div className="img-container">
            <LazyLoad unmountIfInvisible={true} once={true}>
                <img src={imageUrl || user.photo.path_medium} width={radius} alt="avatar"/>
            </LazyLoad>
        </div>;
    }

    let profile_url = user.getProfileRoute();

    return (
        <Link to={profile_url}>
            <div className="avatar-four">
                {ImageOrInitialsComponent}

                {withName && <p className="font-medium label mb-0">{user.name}</p>}
                {withJoiningDate &&
                <p className="small text-muted">{`Joined Since ${user.getJoiningDateString()}`}</p>}
            </div>
        </Link>
    )
};

export const ProfileAvatarLoadingAnimation = () => {

    return (
        <div className="avatar-four loading-avatar">
            <div className="img-container">
                <div className="image loading"/>
            </div>
            <div className="bars">
                <div className="bar bar1 loading"/>
                <div className="bar bar2 loading"/>
            </div>
        </div>
    )
};

ProfileAvatar.propType = {
    user: PropTypes.object.isRequired,
};

ProfileAvatar.defaultProps = {
    radius: 70,
    withName: true,
    withJoiningDate: true,
};

export default ProfileAvatar;
