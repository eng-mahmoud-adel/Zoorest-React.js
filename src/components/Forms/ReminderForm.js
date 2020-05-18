import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import InlineDateTimePickerDemo from '../DropDowns/DatePickerOne';
import {Formik} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";

const ReminderForm = (props) => {

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={{
                name: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string().required(),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit}) =>
                <form>
                    <div className="form-group reminder-form">
                        <h3 className= "title mt-0 pt-0">Add reminders to your calendar</h3>
                        <p className= "text">Occasionally he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the elastic properties of available materials </p>
                        <div className= "row my-5">
                            <div className= "col-6">
                                <label>Title of your reminder</label>
                                <BasicInput
                                        className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                                        name="name" type="name" value={values.name} placeholder="name"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.name && touched.name && <div style={{color: "red"}}>{errors.name}</div>}
                            </div>
                            <div className= "col-6">
                                <label>Date and time</label>
                                <InlineDateTimePickerDemo />
                            </div>
                        </div>
                        <div className= "row">
                            <div className= "col-6">
                                <Button text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                            </div>
                            <div className= "col-6">
                                <Button text= "Add" color= "btn btn-info" size= "btn-sm" onClick={handleSubmit} />
                            </div>
                        </div>
                    </div>
                </form>
            }
        >
        </Formik>
    )
}

const mapDispatchToProps = dispatch => ({
    // add reminder here
});

export default connect(null, mapDispatchToProps)(ReminderForm);
