import React, {Fragment} from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import BasicInput from "../../../../Inputs/BasicInput";
import {MultiSelect} from "../../../../Inputs/MultiSelect";
import DropFileWithButton from "../../../DropFiles/DropFileWithButton";
import Button from "../../../../Buttons/Button/Button";
import ProviderSignUpRequest from "../../../../../model/Request/ProviderSignUpRequest";

const ProviderForm = ({currentLocale, countries, cities, districts}) => {
    const handleFormSubmit = (values) => {
        let providerSignUpRequest = new ProviderSignUpRequest()
            .setUserName(values.name)
            .setUserEmail(values.email)
            .setPhone(values.phone)
            .setAdditionalPhoneNumber(values.additional_phone_number)
            .setOfficialProviderName(values.official_name)
            .setAddress(values.address)
            .setGeoLat(values.geo_lat)
            .setGeoLng(values.geo_lng)
            .setPassword(values.password)
            .setPasswordConfirmation(values.password_confirmation)
            .setCountryId(values.country_id)
            .setCityId(values.city_id)
            .setDistrictId(values.district_id)
        //todo .setCertificates(values.certificates)
    }

    return <Formik
        initialValues={{
            name: "",
            email: "",
            phone: "",
            additional_phone_number: "",
            official_name: "",
            address: "",
            geo_lat: "",
            geo_lng: "",

            password: "",
            password_confirmation: "",
            country_id: "",
            city_id: null,
            district_id: null,
            certificates: null,
        }}
        onSubmit={handleFormSubmit}
        validationSchema={Yup.object().shape({
            name: Yup.string().required('This field is required.'),
            email: Yup.string().email('Invalid email').required('This field is required.'),
            phone: Yup.string().required('This field is required.'),
            additional_phone_number: Yup.string().nullable(),

            official_name: Yup.string().required('This field is required.'),
            address: Yup.string().required('This field is required.'),

            geo_lat: Yup.number().required(),
            geo_lng: Yup.number().required(),

            password: Yup.string().required('This field is required.'),
            password_confirmation: Yup.string().required('This field is required.'),

            country_id: Yup.number().required(),
            city_id: Yup.number().nullable(),
            district_id: Yup.number().nullable(),
        })}
        render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid}) =>
            <Fragment>
                <div className="my-3 col-md-10">
                    <label className="font-weight-bold">Full Name</label>
                    <BasicInput
                        className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                        name="name" type="text" value={values.name} placeholder="name"
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.name && touched.name && <div style={{color: "red"}}>{errors.name}</div>}
                </div>
                <div className="mb-3 col-md-10">
                    <label className="font-weight-bold">Email Address</label>
                    <BasicInput
                        className={`basic-input ${values.email === "" ? "" : (!errors.email ? "is-valid" : "is-invalid")}`}
                        name="email" type="email" value={values.email} placeholder="email"
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.email && touched.email && <div style={{color: "red"}}>{errors.email}</div>}
                </div>
                <div className="mb-3 col-md-10">
                    <label className="font-weight-bold">Phone Number</label>
                    <BasicInput
                        className={`basic-input ${values.phone === "" ? "" : (!errors.phone ? "is-valid" : "is-invalid")}`}
                        name="phone" type="text" value={values.phone}
                        placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.phone && touched.phone &&
                    <div style={{color: "red"}}>{errors.phone}</div>}
                </div>
                <div className="mb-3 col-md-10">
                    <label className="font-weight-bold">Additional Phone Number</label>
                    <BasicInput
                        className={`basic-input ${values.additional_phone_number === "" ? "" : (!errors.additional_phone_number ? "is-valid" : "is-invalid")}`}
                        name="additional_phone_number" type="text" value={values.additional_phone_number}
                        placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.additional_phone_number && touched.additional_phone_number &&
                    <div style={{color: "red"}}>{errors.additional_phone_number}</div>}
                </div>
                <div className="mb-3 col-md-5">
                    <label className="font-weight-bold">Password</label>
                    <BasicInput
                        className={`basic-input ${values.password === "" ? "" : (!errors.password ? "is-valid" : "is-invalid")}`}
                        name="password" type="password" value={values.password} placeholder="password"
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.password && touched.password &&
                    <div style={{color: "red"}}>{errors.password}</div>}
                </div>
                <div className="mb-3 col-md-5">
                    <label className="font-weight-bold">Confirm Password</label>
                    <BasicInput
                        className={`basic-input ${values.password_confirmation === "" ? "" : (!errors.password_confirmation ? "is-valid" : "is-invalid")}`}
                        name="password_confirmation" type="password_confirmation" value={values.password_confirmation}
                        placeholder="password_confirmation" handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.password_confirmation && touched.password_confirmation &&
                    <div style={{color: "red"}}>{errors.password_confirmation}</div>}
                </div>

                <div className="row justify-content-center w-100">
                    <div className="mb-3 col-md-5">
                        <label className="font-weight-bold">Official doctor name</label>
                        <BasicInput
                            className={`basic-input ${values.official_name === "" ? "" : (!errors.official_name ? "is-valid" : "is-invalid")}`}
                            name="official_name" type="text" value={values.official_name} placeholder="name"
                            handleChange={handleChange} handleBlur={handleBlur}/>
                        {errors.official_name && touched.official_name &&
                        <div style={{color: "red"}}>{errors.official_name}</div>}
                    </div>
                    <div className="mb-3 col-md-5">
                        <label className="font-weight-bold">Select your location</label>
                        <MultiSelect options={countries}/>
                    </div>
                    <div className="mb-3 col-md-5">
                        <MultiSelect options={cities}/>
                    </div>
                    <div className="mb-3 col-md-5">
                        <MultiSelect options={districts}/>
                    </div>
                    <div className="mb-3 col-md-10">
                        <DropFileWithButton/>
                    </div>
                </div>

                <div className="mb-4 col-md-9">
                    <Button text="Sign Up" color="btn btn-info" size="btn-sm" onClick={handleSubmit}
                            disabled={!isValid || isSubmitting}/>
                </div>
            </Fragment>
        }>

    </Formik>;
}


export default ProviderForm;
