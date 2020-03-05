import React from 'react';

const DangerAlert = () => {
    return (
        <div className="alert alert-danger" role="alert">
            <i className="fa fa-times-circle fa-lg" aria-hidden="true"></i>
            Error! Your range of IP addresses is blocked.
        </div>
    )
}

export default DangerAlert;
