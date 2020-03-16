import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import CheckBox from '../Buttons/CheckBoxes/CheckBox';
import SmallButton from '../Buttons/SmallButtons/SmallButton';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';

const Login = (props) => {
    return (
        <form>
            <div className="form-group login-form col-8">
                <div className= "text-right">
                    <a href= "#">Sign up</a>
                </div>
                <div className= "background">
                    <h3 className= "title text-center">{props.title}</h3>
                </div>
                <div className= "text-center">
                    <div className= "my-2 mx-auto col-10">
                        <BasicInput className= "basic-input w-100" type= "email" placeholder= "Email" />
                    </div>
                    <div className= "mb-2 mx-auto col-10">
                        <BasicInput className= "basic-input w-100" type= "password" placeholder= "Password" />
                    </div>
                    <div className= "mb-2 offset-1 col-3 text-left">
                        <CheckBox text= "Remember me" id= "customCheck1" />
                    </div>
                    <div className= "mb-2 mx-auto col-10">
                        <SmallButton text= "Login" color= "btn btn-info" size= "btn-sm" />
                    </div>
                    <div className= "offset-1 col-10 text-left">
                        <a href= "#">Forgot password?</a>
                    </div>
                    <hr />
                </div>
                <div className= "text-center">
                    <div className= "d-inline-block pr-0 col-4">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
                    </div>
                    <div className= "d-inline-block pl-0 col-4">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Google" social_icon= "fa fa-google fa-lg" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;
