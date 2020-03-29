import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import CheckBox from '../Buttons/CheckBoxes/CheckBox';
import Button from '../Buttons/Button/Button';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';

const LoginForm = (props) => {
    return (
        <form>
            <div className="form-group login-form">
                <div className= "text-right">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href= "#" onClick={props.onSignupClicked}>Sign up</a>
                </div>
                <div className= "container">
                    <div className= "wrapper">
                        <div className= "overlay"></div>
                        <h3 className= "title text-center font-weight-bold">Login to your account</h3>
                        <div>
                            <BasicInput className= "basic-input" type= "email" placeholder= "Email" />
                        </div>
                        <div>
                            <BasicInput className= "basic-input" type= "password" placeholder= "Password" />
                        </div>
                    </div>
                        <div className= "mb-2">
                            <CheckBox text= "Remember me" id= "customCheck1" />
                        </div>
                        <div className= "mb-2">
                            <Button text= "Login" color= "btn btn-info" size= "btn-sm" />
                        </div>
                        <div>
                            <a href= "#">Forgot password?</a>
                        </div>
                        <hr />
                    <div className= "row justify-content-center">
                        <div className= "col-md-5 text-right pr-2">
                            <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
                        </div>
                        <div className= "col-md-5 pl-2">
                            <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Google" social_icon= "fa fa-google fa-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
};
export default LoginForm;
