import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import CheckBox from '../Buttons/CheckBoxes/CheckBox';
import SmallButton from '../Buttons/SmallButtons/SmallButton';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';

const Login = (props) => {
    return (
        <form>
            <div className="form-group login-form">
                <a className= "sign-up" href= "#">Sign up</a>
                <div className= "background">
                    <h3 className= "title text-center">Login to your account</h3>
                </div>
                <div className= "text-center">
                    <div className= "mb-2">
                        <BasicInput className= "basic-input" type= "email" placeholder= "Email" />
                    </div>
                    <div className= "mb-2">
                        <BasicInput className= "basic-input" type= "password" placeholder= "Password" />
                    </div>
                    <div className= "mb-2">
                        <CheckBox text= "Remember me" id= "customCheck1" />
                    </div>
                    <div className= "mb-2">
                        <SmallButton text= "Login" color= "btn btn-info" size= "btn-sm" />
                    </div>
                    <a href= "#">Forgot password?</a>
                    <hr />
                </div>
                <div className= "row">
                    <div className= "offset-2 col-4">
                    <SocialBtn size= "btn-sm" color= "btn btn-light" text = "Login with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
                    </div>
                    <div className= "col-4">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text = "Login with Google" social_icon= "fa fa-google fa-lg" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;
