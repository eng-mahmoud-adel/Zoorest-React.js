import React from 'react'
import {GoogleLogin} from 'react-google-login';
import SocialBtn from "../../Buttons/CombinedButtons/SocialBtn";
import config from '../../../config'


//https://developers.google.com/identity/sign-in/web/people
const GoogleLoginBtn = ({onResponse}) => {
    return (
        <GoogleLogin
            clientId={config.googleClientId}
            render={renderProps => (
                <SocialBtn onClick={renderProps.onClick} disabled={renderProps.disabled} size="btn-sm"
                           color="btn btn-light" text="Login with Google" social_icon="fa fa-google fa-lg"/>

            )}
            scope='https://www.googleapis.com/auth/user.birthday.read'
            buttonText="Login"
            onSuccess={onResponse}
            onFailure={onResponse}
            // isSignedIn={true}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default GoogleLoginBtn;
