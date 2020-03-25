import React from 'react';
import BasicInput from '../Inputs/BasicInput';
import CheckBox from '../Buttons/CheckBoxes/CheckBox';
import Button from '../Buttons/Button/Button';
import SocialBtn from '../Buttons/CombinedButtons/SocialBtn';
import {Modal} from "react-bootstrap";

const LoginForm = (props) => {
    return (
        <form>
            <div className="form-group login-form col-8">
                <div className= "text-right">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href= "#" onClick={props.onSignupClicked}>Sign up</a>
                </div>
                <div className= "background">
                    <h3 className= "title text-center">{props.title}</h3>
                </div>
                <div className= "text-center">
                    <div className= "my-2 mx-auto col-10">
                        <BasicInput className= "basic-input" type= "email" placeholder= "Email" />
                    </div>
                    <div className= "mb-2 mx-auto col-10">
                        <BasicInput className= "basic-input" type= "password" placeholder= "Password" />
                    </div>
                    <div className= "mb-2 offset-1 col-3 text-left">
                        <CheckBox text= "Remember me" id= "customCheck1" />
                    </div>
                    <div className= "mb-2 mx-auto col-10">
                        <Button text= "Login" color= "btn btn-info" size= "btn-sm" />
                    </div>
                    <div className= "offset-1 col-10 text-left">
                        <a href= "#">Forgot password?</a>
                    </div>
                    <hr />
                </div>
                <div className= "row justify-content-center">
                    <div className= "col-4 text-right pr-2">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
                    </div>
                    <div className= "col-4 pl-2">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text= "Login with Google" social_icon= "fa fa-google fa-lg" />
                    </div>
                </div>
            </div>
        </form>
    )
};

export const LoginFormModal = props => {
    return (
        <Modal {...props} onHide={props.onHide}
               aria-labelledby="contained-modal-title-vcenter"
               centered>
            <Modal.Body>
                <LoginForm onSignupClicked={props.onSignupClicked}/>
            </Modal.Body>
        </Modal>
    );
};

export default LoginForm;
