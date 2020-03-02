import React from 'react';

const WarningAlert = () => {
    return (
        <div className="alert alert-warning" role="alert">
            <i class="fa fa-exclamation-triangle fa-lg" aria-hidden="true"></i>
            Alert! You almost run out of free space.
        </div>
    )
}

export default WarningAlert;
