import React from 'react'
import LoginForm from "../../../components/Forms/Auth/LoginForm";

const LoginPage = props => {
    return (
        <div className="row">

            <div className="col-8">

                <LoginForm onSignupClicked={() => {
                    //todo open signUp page
                }}/>
            </div>

        </div>
    );
};

export default LoginPage;
