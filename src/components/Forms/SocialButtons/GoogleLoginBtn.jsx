import React from 'react'
import {GoogleLogin} from 'react-google-login';
import config from '../../../config'
import Button from "../../Buttons/Button/Button";
import {GoogleIcon} from "../../Icons";


//https://developers.google.com/identity/sign-in/web/people
const GoogleLoginBtn = ({onResponse}) => {
    return (
        <GoogleLogin
            clientId={config.googleClientId}
            render={renderProps => (
                // <SocialBtn onClick={renderProps.onClick} disabled={renderProps.disabled} size="sm"
                //            variant="light" text="" social_icon="fa fa-google fa-lg"/>

                <Button onClick={renderProps.onClick} variant={"light"} type="button" size={"sm"} color={"light"}
                        className={"btn-social w-100"}>
                    <GoogleIcon/>
                    <span>Login with Google</span>
                </Button>
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
