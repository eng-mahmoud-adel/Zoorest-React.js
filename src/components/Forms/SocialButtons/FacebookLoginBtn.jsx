import React from 'react'
import SocialBtn from "../../Buttons/CombinedButtons/SocialBtn";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import config from '../../../config'

const FacebookLoginBtn = ({onResponse}) => {
    return (
        //,user_birthday,user_gender
        <FacebookLogin
            appId={config.fbAppId}
            fields="name,email,picture"
            callback={onResponse}
            // autoLoad
            render={renderProps => (
                <SocialBtn onClick={renderProps.onClick} size="btn-sm" color="btn btn-light" text="Login with Facebook"
                           social_icon="fa fa-facebook-official fa-lg"/>
            )}
        />
    );
}


export default FacebookLoginBtn;
