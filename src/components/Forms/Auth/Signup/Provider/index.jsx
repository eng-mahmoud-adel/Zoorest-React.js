import React, {Fragment, useState} from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import BasicInput from "../../../../Inputs/BasicInput";
import {SingleSelect} from "../../../../Inputs/MultiSelect";
import DropFileWithButton from "../../../DropFiles/DropFileWithButton";
import Button from "../../../../Buttons/Button/Button";
import ProviderSignUpRequest from "../../../../../model/Request/ProviderSignUpRequest";
import {getGeoLocation} from "../../../../../services/GeoLocationService";
import Modal from "react-bootstrap/Modal";
import BaseModal from "react-bootstrap/Modal";
import Location from "../../../Location";

const ProviderForm = ({currentLocale, countries, cities, districts, signup, provider_type}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userGeoLocation, setUserGeoLocation] = useState(null);

    const handleFormSubmit = (values) => {
        console.log(values)
        signup(new ProviderSignUpRequest()
            .setProviderType(provider_type)
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
        );
        //todo .setCertificates(values.certificates)
    }

    const handleLocationClicked = () => {
        //get location from device
        getGeoLocation((position) => {

            setUserGeoLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
            //open google maps modal
            setIsModalVisible(true);
        })
    }

    const handleLocationSelected = (setFieldValue, selectedLocation) => {
        console.log(selectedLocation);
        setFieldValue("geo_location", `${selectedLocation.position.lat},${selectedLocation.position.lng}`);
        setFieldValue("geo_lat", selectedLocation.position.lat);
        setFieldValue("geo_lng", selectedLocation.position.lng);
        setFieldValue("address", selectedLocation.address);
        setIsModalVisible(false);
    }

    const handleMapModalHide = () => {
        setIsModalVisible(false);
    };


    return (<Formik
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
            // password_confirmation: "",
            country_id: "",
            city_id: null,
            district_id: null,
            certificates: null,
        }}
        onSubmit={handleFormSubmit}
        validationSchema={Yup.object().shape({
            name: Yup.string().required('This field is required.'),
            email: Yup.string().email('Invalid email').required('This field is required.'),
            phone: Yup.string().nullable().required('This field is required.'),
            additional_phone_number: Yup.string().nullable(),

            official_name: Yup.string().nullable().required('This field is required.'),
            address: Yup.string().nullable().required('This field is required.'),

            geo_location: Yup.string(),
            geo_lat: Yup.number().required(),
            geo_lng: Yup.number().required(),

            password: Yup.string().required('This field is required.'),
            password_confirmation: Yup.string().nullable(),

            country_id: Yup.number().required().nullable(),
            city_id: Yup.number().nullable().nullable(),
            // district_id: Yup.number().nullable(),
        })}
        render={({values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit, isSubmitting, isValid}) =>
            <Fragment>

                {/*Map modal*/}
                <Modal show={isModalVisible} onHide={handleMapModalHide}
                       aria-labelledby="contained-modal-title-vcenter"
                       centered>
                    <BaseModal.Body>
                        <Location onLocationSelected={(state) => {
                            handleLocationSelected(setFieldValue, state)
                        }} center={userGeoLocation}/>
                    </BaseModal.Body>
                </Modal>
                {/*End Map modal*/}


                <div className="my-3">
                    <label className="font-weight-bold">Full Name</label>
                    <BasicInput
                        className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                        name="name" type="text" value={values.name} placeholder="name"
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.name && touched.name && <div style={{color: "red"}}>{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label className="font-weight-bold">Email Address</label>
                    <BasicInput
                        className={`basic-input ${values.email === "" ? "" : (!errors.email ? "is-valid" : "is-invalid")}`}
                        name="email" type="email" value={values.email} placeholder="email"
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.email && touched.email && <div style={{color: "red"}}>{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label className="font-weight-bold">Phone Number</label>
                    <BasicInput
                        className={`basic-input ${values.phone === "" ? "" : (!errors.phone ? "is-valid" : "is-invalid")}`}
                        name="phone" type="text" value={values.phone}
                        placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.phone && touched.phone &&
                    <div style={{color: "red"}}>{errors.phone}</div>}
                </div>
                <div className="mb-3">
                    <label className="font-weight-bold">Additional Phone Number</label>
                    <BasicInput
                        className={`basic-input ${values.additional_phone_number === "" ? "" : (!errors.additional_phone_number ? "is-valid" : "is-invalid")}`}
                        name="additional_phone_number" type="text" value={values.additional_phone_number}
                        placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                    {errors.additional_phone_number && touched.additional_phone_number &&
                    <div style={{color: "red"}}>{errors.additional_phone_number}</div>}
                </div>
                <div className="row mb-3 ">
                    <div className="col-md-6">
                        <label className="font-weight-bold">Password</label>
                        <BasicInput
                            className={`basic-input ${values.password === "" ? "" : (!errors.password ? "is-valid" : "is-invalid")}`}
                            name="password" type="password" value={values.password} placeholder="password"
                            handleChange={handleChange} handleBlur={handleBlur}/>
                        {errors.password && touched.password &&
                        <div style={{color: "red"}}>{errors.password}</div>}
                    </div>
                    <div className="col-md-6">
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
                <div className="row mb-3 ">
                    <div className="col-md-6">
                        <label className="font-weight-bold">Official doctor name</label>
                        <BasicInput
                            className={`basic-input ${values.official_name === "" ? "" : (!errors.official_name ? "is-valid" : "is-invalid")}`}
                            name="official_name" type="text" value={values.official_name} placeholder="name"
                            handleChange={handleChange} handleBlur={handleBlur}/>
                        {errors.official_name && touched.official_name &&
                        <div style={{color: "red"}}>{errors.official_name}</div>}
                    </div>
                    <div className="col-md-6">
                        <label className="font-weight-bold">Select your location</label>

                        <input readOnly={true}
                               type="text"
                               name="geo_location"
                               value={values.geo_location}
                               className={`basic-input ${values.geo_location === "" ? "" : (!errors.geo_location ? "is-valid" : "is-invalid")} w-100 form-control`}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               onClick={() => {
                                   handleLocationClicked(setFieldValue)
                               }}
                               placeholder={"Select your location"}/>

                        {errors.geo_location && touched.geo_location &&
                        <div style={{color: "red"}}>{errors.geo_location}</div>}
                    </div>
                </div>

                <div className="row mb-3 ">
                    <div className="col-md-6">
                        <SingleSelect name="country_id" placeholder={"Select Your Country"} options={countries}/>
                    </div>
                    <div className="col-md-6">
                        <SingleSelect name="city_id" placeholder={"Select Your City"} options={cities}/>
                    </div>
                </div>

                <div className="row mb-3 ">
                    <DropFileWithButton/>
                </div>

                <div className="mb-4 col-md-9">
                    <Button text="Sign Up" color="btn btn-info" size="btn-sm" onClick={handleSubmit}
                            disabled={/*!isValid || */isSubmitting}/>
                </div>
            </Fragment>
        }>

    </Formik>);
}

export default ProviderForm;
