import React from 'react'
import SocialBtn from "../../Buttons/CombinedButtons/SocialBtn";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const FacebookLoginBtn = ({onResponse}) => {
    return (
        <FacebookLogin
            appId={"961048337408846"}
            fields="name,email,picture,user_birthday,user_gender"
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
