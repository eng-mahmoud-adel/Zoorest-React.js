import React from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import BasicInput from "../../../../Inputs/BasicInput";
import {SingleSelect} from "../../../../Inputs/MultiSelect";
import Button from "../../../../Buttons/Button/Button";
import {registerUser} from "../../../../../store/actions/auth";
import {connect} from "react-redux";
import {HIDE_MODAL} from "../../../../../store/actions/modal";

const UserForm = ({
                      currentLocale, countries, cities, districts, register, hideModal,
                  }) => {

    const handleSubmissionSuccess = (handleReset) => {
        //Close Modal After A successful signup
        handleReset();
        hideModal();
    }

    const handleFormSubmit = (values, resetForm) => {
        console.log(values);
        register({
            apiErrors: {},
            name: values.name,
            email: values.email,
            phone: values.phone,
            type: "دكتور",
            additional_phone_number: values.additional_phone_number,
            password: values.password,
            password_confirmation: values.password_confirmation,
            country_id: values.country_id,
            city_id: values.city_id,
            district_id: values.district_id,
        }, handleSubmissionSuccess.bind(this, resetForm), () => {
        }, () => {
            // debugger
            // actions.setSubmitting(false);

        });
    }

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                additional_phone_number: "",
                password: "",
                password_confirmation: "",
                country_id: "",
                city_id: null,
                district_id: null,
            }}
            onSubmit={async (values, {setStatus, resetForm}) => {
                handleFormSubmit(values, resetForm)
            }
            }
            validationSchema={Yup.object().shape({
                name: Yup
                    .string()
                    .required('This field is required.'),
                email: Yup
                    .string()
                    .email('Invalid email')
                    .required('This field is required.'),
                phone: Yup
                    .string()
                    .required('This field is required.'),
                additional_phone_number: Yup
                    .string()
                    .nullable(),
                password: Yup
                    .string()
                    .required('This field is required.'),
                password_confirmation: Yup
                    .string()
                    .required('This field is required.')
                    .when("password", {
                        is: val => (val && val.length > 0),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                        )
                    }),


                country_id: Yup
                    .number()
                    .required(),
                city_id: Yup
                    .number()
                    .nullable(),
                district_id: Yup
                    .number()
                    .nullable(),
            })}
            render={({
                         values,
                         dirty,
                         touched,
                         errors,
                         handleChange,
                         handleBlur,
                         handleSubmit, isSubmitting,
                         isValid,
                         handleReset,
                         setErrors,
                         status,

                     }) =>
                <form onSubmit={handleSubmit} autoComplete="off">

                    <div className="my-3">
                        <label className="font-medium"><span style={{color: "red"}}>*</span>Full Name</label>
                        <BasicInput
                            className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                            name="name" type="text" value={values.name} placeholder="name"
                            handleChange={handleChange} handleBlur={handleBlur}/>
                        {errors.name && touched.name && <div style={{color: "red"}}>{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="font-medium"><span style={{color: "red"}}>*</span>Email Address</label>
                        <BasicInput
                            className={`basic-input ${values.email === "" ? "" : (!errors.email ? "is-valid" : "is-invalid")}`}
                            name="email" type="email" value={values.email} placeholder="email"
                            handleChange={handleChange} handleBlur={handleBlur}/>
                        {errors.email && touched.email && <div style={{color: "red"}}>{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="font-medium"><span style={{color: "red"}}>*</span>Phone Number</label>
                        <BasicInput
                            className={`basic-input ${values.phone === "" ? "" : (!errors.phone ? "is-valid" : "is-invalid")}`}
                            name="phone" type="text" value={values.phone}
                            placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                        {errors.phone && touched.phone &&
                        <div style={{color: "red"}}>{errors.phone}</div>}
                    </div>
                    <div className="mb-3">
                        <label className="font-medium">Additional Phone Number</label>
                        <BasicInput
                            className={`basic-input ${values.additional_phone_number === "" ? "" : (!errors.additional_phone_number ? "is-valid" : "is-invalid")}`}
                            name="additional_phone_number" type="text" value={values.additional_phone_number}
                            placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                        {errors.additional_phone_number && touched.additional_phone_number &&
                        <div style={{color: "red"}}>{errors.additional_phone_number}</div>}
                    </div>

                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label className="font-medium"><span style={{color: "red"}}>*</span>Password</label>
                            <BasicInput
                                className={`basic-input ${values.password === "" ? "" : (!errors.password ? "is-valid" : "is-invalid")}`}
                                name="password" type="password" value={values.password} placeholder="password"
                                handleChange={handleChange} handleBlur={handleBlur}/>
                            {errors.password && touched.password &&
                            <div style={{color: "red"}}>{errors.password}</div>}
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="font-medium"><span style={{color: "red"}}>*</span>Confirm Password</label>
                            <BasicInput
                                className={`basic-input ${values.password_confirmation === "" ? "" : (!errors.password_confirmation ? "is-valid" : "is-invalid")}`}
                                name="password_confirmation" type="password" value={values.password_confirmation}
                                placeholder="password" handleChange={handleChange} handleBlur={handleBlur}/>
                            {errors.password_confirmation && touched.password_confirmation &&
                            <div style={{color: "red"}}>{errors.password_confirmation}</div>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <SingleSelect name="country_id" options={countries}/>
                        </div>
                        <div className="mb-3 col-md-6">
                            <SingleSelect name="city_id" options={cities}/>
                        </div>
                    </div>

                    <div className="mb-3">
                        <SingleSelect name="district_id" options={districts}/>
                    </div>

                    <div className="mb-4 col-md-11 mx-auto">
                        <Button type="submit" text="Sign Up" color="btn btn-info" size="btn-sm" onClick={() => {
                            handleFormSubmit(values, setErrors, handleReset);
                        }}
                                disabled={isSubmitting}/>
                    </div>

                </form>
            }
        >
        </Formik>
    );
}
const mapDispatchToProps = (dispatch) => ({
    register: (request, onSuccess, onFail, onFinally) => {
        dispatch(registerUser(request, onSuccess, onFail, onFinally))
    },
    hideModal: (request) => {
        dispatch({type: HIDE_MODAL, payload: null})
    }
});

export default connect(null, mapDispatchToProps)(UserForm);
