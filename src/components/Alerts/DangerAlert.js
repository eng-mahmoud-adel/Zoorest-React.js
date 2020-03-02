import React from 'react';

const DangerAlert = () => {
    return (
        <div class="alert alert-danger" role="alert">
            <i class="fa fa-times-circle fa-lg" aria-hidden="true"></i>
            Error! Your range of IP addresses is blocked.
        </div>
    )
}

export default DangerAlert;
