import React, {Fragment} from 'react';
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

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
                <img src={user.photo.path_medium} width={radius} alt="avatar"/>
            </LazyLoad>
        </div>;
    }

    return (
        <Fragment>
            <Fragment>
                <div className="avatar-four">
                    {ImageOrInitialsComponent}

                    {withName && <h6>{user.name}</h6>}
                    {withJoiningDate && <span>{`Joined Since ${user.getJoiningDateString()}`}</span>}
                </div>
            </Fragment>
        </Fragment>
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
