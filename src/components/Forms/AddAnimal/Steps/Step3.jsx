import React from 'react';
import DropFile from '../../DropFiles/DropFile';
import Avatar from '../../../Avatars/Avatar';
import InlineDateTimePickerDemo from '../../../DropDowns/DatePickerOne';
import BasicInput from '../../../Inputs/BasicInput';
import Button from '../../../Buttons/Button/Button';
import {withTranslation} from 'react-i18next';
import {connect} from "react-redux";

const Step3 = ({currentStep, values, errors, touched, handleChange, handleBlur, t}) => {

    if (currentStep !== 3) {
        return null
    }

    return (
        <div>
            <div className="text-center">
                <h4 className="font-weight-bold">Add Animal</h4>
                <p className="px-5">Occasionally he inserts a comment of his own, either linking it into the main trail
                    or joining it by a side trail to a particular item. When it becomes evident that the</p>
            </div>

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
            <h6 className="offset-1">Add the animal Vaccinations</h6>
            <div className="row justify-content-center">

                <div className="col-5 my-2">
                    <label>{t('vaccination_name')}</label>
                    <BasicInput
                        className={`basic-input ${values.vaccinationsName === "" ? "" : (!errors.vaccinationsName ? "is-valid" : "is-invalid")}`}
                        name="vaccinationsName" type="text" value={values.vaccinationsName} placeholder="name"
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.vaccinationsName && touched.vaccinationsName &&
                    <div style={{color: "red"}}>{errors.vaccinationsName}</div>}
                </div>
                <div className="col-5 my-2">
                    <label>{t('vaccination_date')}</label>
                    <InlineDateTimePickerDemo/>
                </div>
            </div>
            <div className="col-10 mx-auto pl-0 my-2">
                <label>{t('upload_photos')}</label>
                <DropFile/>
            </div>
            <div className="col-8 mx-auto my-5">
                <Button text="+ Add another Vaccinations" variant="info" size="sm"/>
            </div>
        </div>
    );
}

export default connect(null)(withTranslation()(Step3));
