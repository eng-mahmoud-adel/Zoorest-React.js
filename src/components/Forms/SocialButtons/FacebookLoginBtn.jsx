import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import config from '../../../config'

import {FacebookIcon} from "../../Icons";
import Button from "../../Buttons/Button/Button";

const FacebookLoginBtn = ({onResponse}) => {
    return (
        //,user_birthday,user_gender
        <FacebookLogin
            appId={config.fbAppId}
            fields="name,email,picture"
            callback={onResponse}
            // autoLoad
            render={renderProps => (
                // <SocialBtn onClick={renderProps.onClick} size="sm" variant="light" text="login with Facebook"
                //            social_icon="fa fa-facebook-official fa-lg"/>

                <Button onClick={renderProps.onClick} variant={"light"} type="button" size={"sm"} color={"light"}
                        className={"btn-social w-100"}>
                    <FacebookIcon/>
                    <span>Login with Facebook</span>
                </Button>
            )}
        />
    );
}


export default FacebookLoginBtn;
