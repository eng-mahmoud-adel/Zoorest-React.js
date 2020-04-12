import React, {useState} from 'react';
import Size from '../Buttons/CombinedButtons/Size';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';
import MultiSelect from '../Inputs/MultiSelect';
import DropFileWithButton from './DropFiles/DropFileWithButton';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignUpForm = (props) => {

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    const [active, setActive] = useState("user");

    return (
        <Formik
            initialValues={{
                name: "",
                password: "",
                confirmPassword: "",
                email: "",
                phone_number_one: "",
                phone_number_two: ""
            }}
            onSubmit={handleFormSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('This field is required.'),
                password: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('This field is required.'),
                confirmPassword: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('This field is required.'),
                phone_number_one: Yup.string().min(11, 'Too Short!').max(11, 'Too Long!').required('This field is required.'),
                phone_number_two: Yup.string().min(11, 'Too Short!').max(11, 'Too Long!').required('This field is required.'),
                email: Yup.string().email('Invalid email').required('This field is required.'),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid}) =>
                <form>
                    <div className="form-group signup-form">
                        <div className="text-right">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" onClick={props.onLoginClicked}>Login</a>
                        </div>
                        <h3 className="title text-center mt-3 mb-5 pt-0 font-weight-bold">Sign Up with Us</h3>
                        <div className="my-2 mx-auto col-md-10">
                            <Size size="btn-group-lg" tabs={["user", "doctor", "clinic"]}
                                  onTabClick={(item) => setActive(item)}/>
                        </div>
                        <div className="row justify-content-center">
                            <div className="my-3 col-md-10">
                                <label className="font-weight-bold">Full Name</label>
                                <BasicInput
                                    className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                                    name="name" type="text" value={values.name} placeholder="name"
                                    handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.name && touched.name && <div style= {{color: "red"}}>{errors.name}</div>}
                            </div>
                            <div className="mb-3 col-md-10">
                                <label className="font-weight-bold">Email Address</label>
                                <BasicInput
                                    className={`basic-input ${values.email === "" ? "" : (!errors.email ? "is-valid" : "is-invalid")}`}
                                    name="email" type="email" value={values.email} placeholder="email"
                                    handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.email && touched.email && <div style= {{color: "red"}}>{errors.email}</div>}
                            </div>
                            <div className="mb-3 col-md-10">
                                <label className="font-weight-bold">Phone Number</label>
                                <BasicInput
                                    className={`basic-input ${values.phone_number_one === "" ? "" : (!errors.phone_number_one ? "is-valid" : "is-invalid")}`}
                                    name="phone_number_one" type="text" value={values.phone_number_one}
                                    placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.phone_number_one && touched.phone_number_one && <div style= {{color: "red"}}>{errors.phone_number_one}</div>}
                            </div>
                            <div className="mb-3 col-md-10">
                                <label className="font-weight-bold">Additional Phone Number</label>
                                <BasicInput
                                    className={`basic-input ${values.phone_number_two === "" ? "" : (!errors.phone_number_two ? "is-valid" : "is-invalid")}`}
                                    name="phone_number_two" type="text" value={values.phone_number_two}
                                    placeholder="number" handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.phone_number_two && touched.phone_number_two && <div style= {{color: "red"}}>{errors.phone_number_two}</div>}
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
                                    className={`basic-input ${values.confirmPassword === "" ? "" : (!errors.confirmPassword ? "is-valid" : "is-invalid")}`}
                                    name="password" type="password" value={values.confirmPassword}
                                    placeholder="password" handleChange={handleChange} handleBlur={handleBlur}/>
                                {errors.confirmPassword && touched.confirmPassword &&
                                <div style={{color: "red"}}>{errors.confirmPassword}</div>}
                            </div>

                            {active === "user" ?
                                (
                                    <div className="row justify-content-center w-100">
                                        <div className="mb-3 col-md-5">
                                            <MultiSelect/>
                                        </div>
                                        <div className="mb-3 col-md-5">
                                            <MultiSelect/>
                                        </div>
                                        <div className="mb-3 col-md-10">
                                            <MultiSelect/>
                                    </div>
                                </div>
                                )
                                :
                                (active === "doctor" || active ==="clinic") ?
                                (
                                    <div className= "row justify-content-center w-100">
                                        <div className="mb-3 col-md-5">
                                            <label className="font-weight-bold">Official doctor name</label>
                                            <BasicInput
                                                className={`basic-input ${values.name === "" ? "" : (!errors.name ? "is-valid" : "is-invalid")}`}
                                                name="name" type="text" value={values.name} placeholder="name"
                                                handleChange={handleChange} handleBlur={handleBlur}/>
                                            {errors.name && touched.name && <div style= {{color: "red"}}>{errors.name}</div>}
                                        </div>
                                        <div className="mb-3 col-md-5">
                                            <label className= "font-weight-bold">Select your location</label>
                                            <BasicInput className="input-icon-left" type="text" right_icon="fa fa-commenting-o fa-lg"
                                                placeholder="Input name" />
                                        </div>
                                        <div className="mb-3 col-md-5">
                                            <MultiSelect/>
                                        </div>
                                        <div className="mb-3 col-md-5">
                                            <MultiSelect/>
                                        </div>
                                        <div className="mb-3 col-md-10">
                                            <DropFileWithButton/>
                                        </div>
                                    </div>
                                )
                                :
                                ""
                            }

                            <div className="mb-4 col-md-9">
                                <Button text="Sign Up" color="btn btn-info" size="btn-sm" onClick= {handleSubmit} disabled= {!isValid || isSubmitting} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <span className="line col-md-3 mb-3"></span>
                            <span className="line col-md-3 offset-1 mb-3"></span>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4 text-right pr-2">
                                <SocialBtn size="btn-sm" color="btn btn-light" text="Login with Facebook"
                                        social_icon="fa fa-facebook-official fa-lg"/>
                            </div>
                            <div className="col-md-4 pl-2">
                                <SocialBtn size="btn-sm" color="btn btn-light" text="Login with Google"
                                        social_icon="fa fa-google fa-lg"/>
                            </div>
                        </div>
                    </div>
                </form>
            }
        >
        </Formik>
    )
};
export default SignUpForm;
