import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import CheckBox from '../Buttons/CheckBoxes/CheckBox';
import Button from '../Buttons/Button/Button';
import FacebookLoginBtn from "./SocialButtons/FacebookLoginBtn";
import GoogleLoginBtn from "./SocialButtons/GoogleLoginBtn";
import LoginRequest from "../../model/Request/LoginRequest";
import {login} from "../../store/actions/auth";
import {connect} from "react-redux";

const LoginForm = ({login, onSignupClicked}) => {

    const handleLogin = (loginRequest: LoginRequest) => {
        login(loginRequest)
    }

    const handleNormalLogin = (data) => {
        console.log(data)
        handleLogin(new LoginRequest()
            .setUserEmail(data.email)
            .setUserPassword(data.password)
        )
    }

    const handleFacebookLogin = (data) => {
        console.log(data)

        handleLogin(
            new LoginRequest()
                .setProviderKey(data.googleId)
                .setFacebookLogin()
                .setRawResponse(data)
                .setUserEmail(data.profileObj.email)
                .setUserName(data.profileObj.name)
                .setUserImage(data.profileObj.image)
        )
    }

    const handleGoogleLogin = (data) => {
        console.log(data)

        handleLogin(
            new LoginRequest()
                .setProviderKey(data.googleId)
                .setGoogleLogin()
                .setRawResponse(data)
                .setUserEmail(data.profileObj.email)
                .setUserName(data.profileObj.name)
                .setUserImage(data.profileObj.image)
        )
    }

    return (
        <form>
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
                            <BasicInput className="basic-input" type="email" placeholder="Email"/>
                        </div>
                        <div className="mb-2 col-11 mx-auto">
                            <BasicInput className="basic-input" type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="mb-2 col-11 mx-auto">
                        <CheckBox text="Remember me" id="customCheck1"/>
                    </div>
                    <div className="mb-2 col-11 mx-auto">
                        <Button onClick={() => {
                            handleNormalLogin({
                                "email": "rami.amro.ahmed@gmail.com",
                                "password": "123456"
                            })
                        }} text="Login" color="btn btn-info" size="btn-sm"/>
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
    )
};

const mapDispatchToProps = dispatch => ({
    login: (request) => {
        dispatch(login(request))
    },
});
export default connect(null, mapDispatchToProps)(LoginForm);
