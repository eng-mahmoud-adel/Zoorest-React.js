import React from 'react'
import {GoogleLogin} from 'react-google-login';
import SocialBtn from "../../Buttons/CombinedButtons/SocialBtn";


//https://developers.google.com/identity/sign-in/web/people
const GoogleLoginBtn = ({onResponse}) => {
    return (
        <GoogleLogin
            clientId="924742163414-ds5occ9n2lp7hl2f3skemotibeo3jn45.apps.googleusercontent.com"
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
