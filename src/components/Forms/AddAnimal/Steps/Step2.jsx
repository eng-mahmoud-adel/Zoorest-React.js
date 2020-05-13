import React from 'react';
import DropFile from '../../DropFiles/DropFile';
import Avatar from '../../../Avatars/Avatar';

const Step2 = (props) => {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div>
            <div className="row avatars justify-content-center mb-5">
                <div className="col-4">
                    <Avatar className="avatar-one" text="1" name="Name and photos"/>
                </div>
                <div className="col-5">
                    <Avatar className="avatar-one" text="2" name="Certificates & Prescriptions"/>
                </div>
                <div className="col-3">
                    <Avatar className="avatar-one" text="3" name="Vaccinations"/>
                </div>
            </div>
            <div className="col-3 offset-1 pl-0 my-5">
                <label>Upload Certificates</label>
                <DropFile/>
            </div>
            <hr/>
            <div className="col-3 offset-1 pl-0 my-5">
                <label>Upload Prescriptions</label>
                <DropFile/>
            </div>
        </div>
    );
}

export default Step2;
