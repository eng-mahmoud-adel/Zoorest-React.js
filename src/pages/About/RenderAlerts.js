import React from 'react';
import Alert from '../../components/Alerts/Alert';

function RenderAlerts() {
    return (
        <div>
            <hr />
            <h1>Alerts</h1>
            <hr />
            <div className= "row">
                <div className= "col-4">
                    <Alert color= "alert alert-warning" text= "Alert! You almost run out of free space." left_icon= "fa fa-exclamation-triangle fa-lg" />
                </div>
                <div className= "col-4">
                    <Alert color= "alert alert-info" text= "Info! Checked for you new updates." left_icon= "fa fa-info-circle fa-lg" />
                </div>
                <div className= "col-4">
                    <Alert color= "alert alert-success" text= "Congratulations! All files successfully copied." left_icon= "fa fa-check-circle fa-lg" />
                </div>
                <div className= "col-4">
                    <Alert color= "alert alert-danger" text= "Error! Your range of IP addresses is blocked." left_icon= "fa fa-times-circle fa-lg" />
                </div>
            </div>
        </div>
    )
}

export default RenderAlerts;
