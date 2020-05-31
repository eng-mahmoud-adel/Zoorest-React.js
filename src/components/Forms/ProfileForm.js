import React, {Fragment} from 'react';
import BasicInput from '../Inputs/BasicInput';
import TextArea from '../Inputs/TextArea';
import {MultiSelect} from '../Inputs/MultiSelect';
import Button from '../Buttons/Button/Button';
import DropFile from './DropFiles/DropFile';
import {Formik} from "formik";
import * as Yup from "yup";
import {connect} from 'react-redux';
import {updateProfile} from '../../store/actions/auth';
import User from '../../model/User';
import TimeInputOne from '../../components/Inputs/TimeInputOne';
import CounterOne from '../../components/Inputs/CounterOne';
import {withTranslation} from 'react-i18next';

const ProfileForm = withTranslation()(({countries, cities, currentLocale, updateProfile, t}) => {

    const handleFormSubmit = (values) => {
        console.log(values);
        updateProfile(new User({
                name: values.name,
                email: values.email,
                phone: values.phone,
                additional_phone_number: values.additional_phone_number,
                official_name: values.official_name,

                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
                password_confirmation: values.password_confirmation,
            })
        )
    }

    const getCountries = () => {
        return countries.map(country => ({
            value: country.id,
            label: country.getLocalizedName(currentLocale),
        }));
    }

    const getCities = () => {
        return cities.map(city => ({
            value: city.id,
            label: city.getLocalizedName(currentLocale),
        }));
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
                name: Yup.string().required('This field is required.'),
                email: Yup.string().email('Invalid email').required('This field is required.'),
                phone: Yup.string().nullable().required('This field is required.'),
                additional_phone_number: Yup.string().nullable(),
                official_name: Yup.string().nullable().required('This field is required.'),

                oldPassword: Yup.string().required('This field is required.'),
                newPassword: Yup.string().required('This field is required.'),
                password_confirmation: Yup.string().required('This field is required.').when("newPassword", {
                    is: val => (!!(val && val.length > 0)),
                    then: Yup.string().oneOf(
                        [Yup.ref("newPassword")],
                        "Both password need to be the same"
                    )
                }),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, handleReset}) =>

                <Fragment>
                    <section className="wrapper-one container">
                        <h1 className="font-weight-bold">Edit your Profile</h1>
                        <div className="row">
                            <p className="col-md-9">Audit Bureau of Circulations integrated the definition of this
                                medium in its
                                latest report. Legal rights are at least unclear for many common Internet activities,
                                such as
                                posting a picture that belongs</p>
                            <div className="col-md-3">
                                <Button text="Save all changes" variant="info" size="sm"
                                        onClick={() => handleFormSubmit({
                                            name: values.name,
                                            email: values.email,
                                            phone: values.phone,
                                            additional_phone_number: values.additional_phone_number,
                                            official_name: values.official_name,
                                            oldPassword: values.oldPassword,
                                            newPassword: values.newPassword,
                                            password_confirmation: values.password_confirmation,
                                        })}
                                        disabled={isSubmitting}/>
                            </div>
                        </div>
                    </section>

                    <form onSubmit={handleSubmit} className="container">
                        <div className="form-group profile-form col-12">
                            <h3 className="title font-weight-bold mt-0 pt-0">Account information</h3>
                            <div className="row my-5">
                                <div className="col-2">
                                    <DropFile/>
                                </div>
                                <div className="col-3 mt-3">
                                    <Button text="Upload your profile picture" variant="info" size="sm"/>
                                    <p className="text mt-2">At least 800x800 PNG</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('full_name')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                                            name="name" type="text" value={values.name} placeholder="name"
                                            handleChange={handleChange} handleBlur={handleBlur}/>
                                        {errors.name && touched.name && <div style={{color: "red"}}>{errors.name}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('email')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.email === "" ? "" : (!errors.email ? "is-valid" : "is-invalid")}`}
                                            name="email" type="email" value={values.email} placeholder="email"
                                            handleChange={handleChange} handleBlur={handleBlur}/>
                                        {errors.email && touched.email &&
                                        <div style={{color: "red"}}>{errors.email}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('phone')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.phone === "" ? "" : (!errors.phone ? "is-valid" : "is-invalid")}`}
                                            name="phone" type="text" value={values.phone}
                                            placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                                        {errors.phone && touched.phone &&
                                        <div style={{color: "red"}}>{errors.phone}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('additional_phone')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.additional_phone_number === "" ? "" : (!errors.additional_phone_number ? "is-valid" : "is-invalid")}`}
                                            name="additional_phone_number" type="text"
                                            value={values.additional_phone_number}
                                            placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                                        {errors.additional_phone_number && touched.additional_phone_number &&
                                        <div style={{color: "red"}}>{errors.additional_phone_number}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('doctor_name')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.official_name === "" ? "" : (!errors.official_name ? "is-valid" : "is-invalid")}`}
                                            name="official_name" type="text" value={values.official_name}
                                            placeholder="name"
                                            handleChange={handleChange} handleBlur={handleBlur}/>
                                        {errors.official_name && touched.official_name &&
                                        <div style={{color: "red"}}>{errors.official_name}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('old_password')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.oldPassword === "" ? "" : (!errors.oldPassword ? "is-valid" : "is-invalid")}`}
                                            name="oldPassword" type="password" value={values.oldPassword}
                                            placeholder="oldPassword"
                                            handleChange={handleChange} handleBlur={handleBlur}/>
                                        {errors.oldPassword && touched.oldPassword &&
                                        <div style={{color: "red"}}>{errors.oldPassword}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('new_password')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.newPassword === "" ? "" : (!errors.newPassword ? "is-valid" : "is-invalid")}`}
                                            name="newPassword" type="password" value={values.newPassword}
                                            placeholder="password"
                                            handleChange={handleChange} handleBlur={handleBlur}/>
                                        {errors.newPassword && touched.newPassword &&
                                        <div style={{color: "red"}}>{errors.newPassword}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('confirm_password')}</label>
                                        <BasicInput
                                            className={`basic-input ${values.password_confirmation === "" ? "" : (!errors.password_confirmation ? "is-valid" : "is-invalid")}`}
                                            name="password_confirmation" type="password"
                                            value={values.password_confirmation}
                                            placeholder="confirm password" handleChange={handleChange}
                                            handleBlur={handleBlur}/>
                                        {errors.password_confirmation && touched.password_confirmation &&
                                        <div style={{color: "red"}}>{errors.password_confirmation}</div>}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('location')}</label>
                                        <BasicInput className="input-icon-left" type="text"
                                                    right_icon="fa fa-commenting-o fa-lg" placeholder="maadi street"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('country')}</label>
                                        <MultiSelect options={getCountries()}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('region')}</label>
                                        <MultiSelect options={getCities()}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="font-weight-bold">{t('about_doctor')}</label>
                                        <TextArea rows="14"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <section className="wrapper-two container my-5">
                        <h3 className="font-weight-bold mb-5">Appointment management</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <label className="font-weight-bold">{t('availability')}</label>
                                <TimeInputOne type="text" className="input-time-one"
                                              icon="fa fa-clock-o clock-icon fa-lg"/>
                            </div>

                            <div className="col-md-6">
                                <label className="font-weight-bold">{t('examination_duration')}</label>
                                <CounterOne/>
                            </div>
                        </div>
                    </section>

                    <section className="wrapper-three container my-5">
                        <h3 className="font-weight-bold">Certificates</h3>
                        <img src="" alt="alt"/>
                    </section>

                    <section className="wrapper-four container my-5">
                        <h3 className="font-weight-bold">Articles status</h3>
                    </section>
                </Fragment>
            }
        >
        </Formik>
    )
})

const mapStateToProps = (state) => ({
    countries: state.globals.countries,
    cities: state.globals.cities,
    currentLocale: state.i18n.value,
});

const mapDispatchToProps = (dispatch) => ({
    updateProfile: (request) => {
        dispatch(updateProfile(request));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ProfileForm));
