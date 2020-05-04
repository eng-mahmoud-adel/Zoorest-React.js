import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import TextArea from '../Inputs/TextArea';
import {MultiSelect} from '../Inputs/MultiSelect';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';
import {Formik} from "formik";
import * as Yup from "yup";

const ProfileForm = (props) => {

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                additional_phone_number: "",
                official_name: "",

                oldPassword: "",
                newPassword: "",
                password_confirmation: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email').required('This field is required.'),
                password: Yup.string().required('This field is required.'),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, handleReset}) =>

            // <section>
            //     <h1>Edit your Profile</h1>
            //     <p>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs</p>
            //     <Button text= "Save all changes" color= "btn btn-info" size= "btn-sm" />
            // </section>


            <form onSubmit={handleSubmit}>
                <div className="form-group profile-form col-12">
                    <h3 className= "title">{props.title}</h3>
                    <div className= "row my-5">
                        <div className= "col-2">
                            <DropFile />
                        </div>
                        <div className= "col-3 mt-3">
                            <Button text= "Upload your profile picture" color= "btn btn-info" size= "btn-sm" />
                            <p className= "text mt-2">{props.text}</p>
                        </div>
                    </div>
                    <div className= "row">
                        <div className= "col-6">
                            <div className= "mb-3">
                                <label className="font-weight-bold">Full Name</label>
                                <BasicInput
                                    className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                                    name="name" type="text" value={values.name} placeholder="name"
                                    handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.name && touched.name && <div style={{color: "red"}}>{errors.name}</div>}
                            </div>

                            <div className= "mb-3">
                                <label className="font-weight-bold">Email Address</label>
                                <BasicInput
                                    className={`basic-input ${values.email === "" ? "" : (!errors.email ? "is-valid" : "is-invalid")}`}
                                    name="email" type="email" value={values.email} placeholder="email"
                                    handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.email && touched.email && <div style={{color: "red"}}>{errors.email}</div>}
                            </div>

                            <div className= "mb-3">
                                <label className="font-weight-bold">Phone Number</label>
                                <BasicInput
                                    className={`basic-input ${values.phone === "" ? "" : (!errors.phone ? "is-valid" : "is-invalid")}`}
                                    name="phone" type="text" value={values.phone}
                                    placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.phone && touched.phone &&
                                <div style={{color: "red"}}>{errors.phone}</div>}
                            </div>

                            <div className= "mb-3">
                                <label className="font-weight-bold">Additional Phone Number</label>
                                <BasicInput
                                    className={`basic-input ${values.additional_phone_number === "" ? "" : (!errors.additional_phone_number ? "is-valid" : "is-invalid")}`}
                                    name="additional_phone_number" type="text" value={values.additional_phone_number}
                                    placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.additional_phone_number && touched.additional_phone_number &&
                                <div style={{color: "red"}}>{errors.additional_phone_number}</div>}
                            </div>

                            <div className= "mb-3">
                                <label className="font-weight-bold">Official doctor name</label>
                                <BasicInput
                                    className={`basic-input ${values.official_name === "" ? "" : (!errors.official_name ? "is-valid" : "is-invalid")}`}
                                    name="official_name" type="text" value={values.official_name} placeholder="name"
                                    handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.official_name && touched.official_name &&
                                <div style={{color: "red"}}>{errors.official_name}</div>}
                            </div>

                            <div className= "mb-3">
                                <label className="font-weight-bold">Old Password</label>
                                    <BasicInput
                                        className={`basic-input ${values.oldPassword === "" ? "" : (!errors.oldPassword ? "is-valid" : "is-invalid")}`}
                                        name="oldPassword" type="password" value={values.oldPassword} placeholder="oldPassword"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.oldPassword && touched.oldPassword &&
                                    <div style={{color: "red"}}>{errors.oldPassword}</div>}
                            </div>

                            <div className= "mb-3">
                                <label className="font-weight-bold">New Password</label>
                                <BasicInput
                                    className={`basic-input ${values.password === "" ? "" : (!errors.password ? "is-valid" : "is-invalid")}`}
                                    name="password" type="password" value={values.password} placeholder="password"
                                    handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.password && touched.password &&
                                <div style={{color: "red"}}>{errors.password}</div>}
                            </div>

                            <div className= "mb-3">
                                <label className="font-weight-bold">Confirm Password</label>
                                <BasicInput
                                    className={`basic-input ${values.password_confirmation === "" ? "" : (!errors.password_confirmation ? "is-valid" : "is-invalid")}`}
                                    name="password_confirmation" type="password"
                                    value={values.password_confirmation}
                                    placeholder="confirm password" handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.password_confirmation && touched.password_confirmation &&
                                <div style={{color: "red"}}>{errors.password_confirmation}</div>}
                            </div>
                        </div>
                        <div className= "col-6">
                            <div className= "mb-3">
                                <BasicInput className= "input-icon-left" type= "text" right_icon= "fa fa-commenting-o fa-lg" placeholder= "maadi street" label= "Select your location"/>
                            </div>
                            <div className= "mb-3">
                                <label>Country</label>
                                <MultiSelect />
                            </div>
                            <div className= "mb-3">
                                <label>Region</label>
                                <MultiSelect />
                            </div>
                            <div className= "mb-3">
                                <label>About doctor</label>
                                <TextArea rows= "6" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            }
            >
        </Formik>
    )
}

export default ProfileForm;
