import React from 'react';
import TimeInputOne from '../Inputs/TimeInputOne';
import CounterOne from '../Inputs/CounterOne';
import {connect} from "react-redux";
import {withTranslation} from 'react-i18next';

const Appointment = withTranslation()(({t}) => {
    return (
        <form>
            <div className="form-group appointment-form col-12">
                <h3 className= "title my-4">Appointments</h3>
                <div className= "row">
                    <div className= "col-7">
                        <label>{t('availability')}</label>
                        <TimeInputOne type= "text" className= "input-time-one" icon= "fa fa-clock-o clock-icon fa-lg" />
                    </div>
                    <div className= "col-3">
                        <label>{t('availability')}</label>
                        <CounterOne />
                    </div>
                </div>
                
            </div>
        </form>
    )
})

export default connect(null)(withTranslation()(Appointment));
