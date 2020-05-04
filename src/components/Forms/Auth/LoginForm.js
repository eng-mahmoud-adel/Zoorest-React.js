import React from 'react';
import BasicInput from '../../Inputs/BasicInput';
import CheckBox from '../../Buttons/CheckBoxes/CheckBox';
import Button from '../../Buttons/Button/Button';
import FacebookLoginBtn from "../SocialButtons/FacebookLoginBtn";
import GoogleLoginBtn from "../SocialButtons/GoogleLoginBtn";
import LoginRequest from "../../../model/Request/LoginRequest";
import {login} from "../../../store/actions/auth";
import {connect} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";

const LoginForm = ({login, onSignupClicked}) => {

    const handleLogin = (loginRequest) => {
        login(loginRequest)
    }

    const handleNormalLogin = (data) => {
        console.log(data)
        handleLogin(new LoginRequest()
            .setUserEmail(data.email)
            .setUserPassword(data.password)
            .setRememberMe(false)
        )
    }

    const handleFacebookLogin = (data) => {
        console.log(data)

        if (data && !data.error && data !== "unknown") {
            handleLogin(
                new LoginRequest()
                    .setProviderKey(data.id)
                    .setFacebookLogin()
                    .setRawResponse(data)
                    .setRememberMe(false)
                    .setUserEmail(data.email)
                    .setUserName(data.name)
                    .setUserImage(data.picture.data.url)
            )
        }

    }

    const handleGoogleLogin = (data) => {
        console.log(data)
        if (data && !data.error) {

            handleLogin(
                new LoginRequest()
                    .setProviderKey(data.googleId)
                    .setGoogleLogin()
                    .setRawResponse(data)
                    .setRememberMe(false)
                    .setUserEmail(data.profileObj.email)
                    .setUserName(data.profileObj.name)
                    .setUserImage(data.profileObj.image)
            )
        }
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleNormalLogin}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email').required('This field is required.'),
                password: Yup.string().required('This field is required.'),
            })}
            render={({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, handleReset}) =>
                <form onSubmit={handleSubmit}>
                    <div className="form-group login-form">
                        <div className="text-right">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" onClick={onSignupClicked}>Sign up</a>
                        </div>
                        <div className="container">
                            <div className="wrapper">
                                <div className="overlay"/>
                                <div className="title pt-0 mt-0">
                                    <h3 className="text-center font-weight-bold">Login to your account</h3>
                                </div>
                                <div className="mb-2 col-11 mx-auto">
                                    <BasicInput
                                        className={`basic-input ${values.email === "" ? "" : (!errors.email ? "is-valid" : "is-invalid")}`}
                                        name="email" type="email" value={values.email} placeholder="Email"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.email && touched.email && <div style={{color: "red"}}>{errors.email}</div>}
                                </div>
                                <div className="mb-2 col-11 mx-auto">
                                    <BasicInput
                                        className={`basic-input ${values.password === "" ? "" : (!errors.password ? "is-valid" : "is-invalid")}`}
                                        name="password" type="password" value={values.password} placeholder="Password"
                                        handleChange={handleChange} handleBlur={handleBlur}/>
                                    {errors.password && touched.password &&
                                    <div style={{color: "red"}}>{errors.password}</div>}
                                </div>
                            </div>
                            <div className="mb-2 col-11 mx-auto">
                                <CheckBox text="Remember me" id="customCheck1"/>
                            </div>
                            <div className="mb-2 col-11 mx-auto">
                                <Button onClick={() => {
                                    handleNormalLogin({
                                        email: values.email,
                                        password: values.password
                                    });
                                    handleReset();
                                }} text="Login" color="btn btn-info" size="btn-sm"
                                        disabled={!isValid || (values.email === "" && values.password === "" ? isSubmitting = true : isSubmitting = false)}/>
                            </div>
                            <div className="mb-2 col-11 mx-auto">
                                <a href="#">Forgot password?</a>
                            </div>
                            <hr/>
                            <div className="row justify-content-center col-11 mx-auto px-0">
                                <div className="col-md-5 text-right pr-2 pl-0">
                                    <FacebookLoginBtn onResponse={handleFacebookLogin}/>
                                </div>
                                <div className="col-md-5 pl-2 pr-0">
                                    <GoogleLoginBtn onResponse={handleGoogleLogin}/>
                                    {/*<SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Google" social_icon= "fa fa-google fa-lg" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            }
        >
        </Formik>
    )

};

const mapDispatchToProps = dispatch => ({
    login: (request) => {
        dispatch(login(request))
    },
});
export default connect(null, mapDispatchToProps)(LoginForm);
