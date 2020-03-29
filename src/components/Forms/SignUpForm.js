import React from 'react';
import Size from '../Buttons/CombinedButtons/Size';
import BasicInput from '../Inputs/BasicInput';
import Button from '../Buttons/Button/Button';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';
import MultiSelect from '../Inputs/MultiSelect';
import DropFileWithButton from './DropFiles/DropFileWithButton';

const SignUpForm = (props) => {
    return (
        <form>
            <div className="form-group signup-form">
                <div className="text-right">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" onClick={props.onLoginClicked}>Login</a>
                </div>
                <h3 className="title text-center mb-5 mt-3 font-weight-bold">Sign Up with Us</h3>
                <div className="my-2 mx-auto col-md-10">
                    <Size size="btn-group-lg" textOne="User" textTwo="Doctor" textThree="Clinic"/>
                </div>
                <div className="row justify-content-center">
                    <div className="my-3 col-md-10">
                        <label className= "font-weight-bold">Full Name</label>
                        <BasicInput className="basic-input" type="text" placeholder="name" />
                    </div>
                    <div className="mb-3 col-md-10">
                        <label className= "font-weight-bold">Email Address</label>
                        <BasicInput className="basic-input" type="email" placeholder="email" />
                    </div>
                    <div className="mb-3 col-md-10">
                        <label className= "font-weight-bold">Phone Number</label>
                        <BasicInput className="basic-input" type="text" placeholder="number" />
                    </div>
                    <div className="mb-3 col-md-10">
                        <label className= "font-weight-bold">Additional Phone Number</label>
                        <BasicInput className="basic-input" type="text" placeholder="number" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label className= "font-weight-bold">Password</label>
                        <BasicInput className="basic-input" type="password" placeholder="password" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label className= "font-weight-bold">Confirm Password</label>
                        <BasicInput className="basic-input" type="password" placeholder="password" />
                    </div>
                    {props.user &&
                    <div className={props.user}>
                        <div className="mb-3 col-md-5">
                            <MultiSelect/>
                        </div>
                        <div className="mb-3 col-md-5">
                            <MultiSelect/>
                        </div>
                        <div className="mb-3 col-md-10">
                            <MultiSelect/>
                        </div>
                    </div>}
                    {props.doctor &&
                    <div className={props.doctor}>
                        <div className="mb-3 col-md-5">
                            <label className= "font-weight-bold">Official doctor name</label>
                            <BasicInput className="basic-input" type="text" placeholder="name" />
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
                    </div>}
                    <div className="mb-4 col-md-9">
                        <Button text="Sign Up" color="btn btn-info" size="btn-sm"/>
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
    )
};
export default SignUpForm;
