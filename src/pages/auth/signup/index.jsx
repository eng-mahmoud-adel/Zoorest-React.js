import React from 'react'
import SignUpFormContainer from "../../../components/Forms/Auth/Signup/SignUpFormContainer";

const SignUpPage = props => {
    return (
        <div className="row">
            <div className="col-8">
                <SignUpFormContainer onLoginClicked={() => {
                    //go to login page
                }}/>
            </div>
        </div>
    );
};

export default SignUpPage;
