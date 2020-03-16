import React from 'react';
import Size from '../Buttons/CombinedButtons/Size';
import BasicInput from '../Inputs/BasicInput';
import SmallButton from '../Buttons/SmallButtons/SmallButton';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';
import MultiSelect from '../Inputs/MultiSelect';

const SignUp = (props) => {
    return (
        <form>
            <div className="form-group signup-form col-8">
                <div className= "text-right">
                    <a href= "#">Login</a>
                </div>
                <h3 className= "title text-center mb-5 mt-3">{props.title}</h3>
                <div className= "my-2 mx-auto col-10">
                    <Size size= "btn-group-lg" textOne= "User" textTwo= "Doctor" textThree= "Clinic" />
                </div>
                <div className= "text-left">
                    <div className= "my-3 mx-auto col-10">
                        <BasicInput className= "basic-input w-100" type= "text" placeholder= "name" label= "First Name" />
                    </div>
                    <div className= "mb-3 mx-auto col-10">
                        <BasicInput className= "basic-input w-100" type= "email" placeholder= "email" label= "Email Address" />
                    </div>
                    <div className= "mb-3 mx-auto col-10">
                        <BasicInput className= "basic-input w-100" type= "text" placeholder= "number" label= "Phone Number" />
                    </div>
                    <div className= "mb-3 mx-auto col-10">
                        <BasicInput className= "basic-input w-100" type= "text" placeholder= "number" label= "Additional Phone Number" />
                    </div>
                    <div className= "mb-3 offset-1 col-5 d-inline-block">
                        <BasicInput className= "basic-input" type= "passwrod" placeholder= "password" label= "Password" />
                    </div>
                    <div className= "mb-3 col-5 d-inline-block">
                        <BasicInput className= "basic-input" type= "passwrod" placeholder= "password" label= "Confirm Password" />
                    </div>
                    <div className= "mb-3 offset-1 col-5 d-inline-block">
                        <MultiSelect />
                    </div>
                    <div className= "mb-3 col-5 d-inline-block">
                        <MultiSelect />
                    </div>
                    <div className= "mb-3 mx-auto col-10">
                        <MultiSelect />
                    </div>
                    <div className= "mb-5 mx-auto col-10">
                        <SmallButton text= "Sign Up" color= "btn btn-info" size= "btn-sm" />
                    </div>
                    <hr />
                </div>
                <div className= "text-center">
                    <div className= "d-inline-block pr-0 col-4">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Sign up with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
                    </div>
                    <div className= "d-inline-block pl-0 col-4">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Sign Up with Google" social_icon= "fa fa-google fa-lg" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp;
