import React from 'react';

const SuccessAlert = () => {
    return (
        <div className="alert alert-success" role="alert">
            <i className="fa fa-check-circle fa-lg" aria-hidden="true"></i>
            Congratulations! All files successfully copied.
        </div>
    )
}

export default SuccessAlert;
