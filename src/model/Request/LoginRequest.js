import Request from "./Request";


class LoginRequest extends Request {

    constructor() {
        super();
        // this.raw_response = {};
        // this.profile = {};
        this.social = {};
    }

    static createInstance() {
        return new LoginRequest()
    }

    setRawResponse(raw_response) {
        this.raw_response = raw_response
        return this;
    }

    setProviderKey(provider_key) {
        this.provider_key = provider_key;
        this.social = {
            ...this.social,
            provider_key
        }
        return this;
    }

    setGoogleLogin() {
        return this.setProviderType("google");
    }

    setFacebookLogin() {
        return this.setProviderType("facebook");
    }

    setProviderType(provider_type) {
        this.provider_type = provider_type;

        this.social = {
            ...this.social,
            provider_type
        }
        return this;
    }

    setUserImage(image) {

        this.image = image

        // this.profile = {
        //     ...this.profile,
        //     image
        // }
        return this;
    }

    setUserName(name) {
        this.name = name
        // this.profile = {
        //     ...this.profile,
        //     name
        // }
        return this;
    }

    setUserEmail(email) {
        this.email = email

        // this.profile = {
        //     ...this.profile,
        //     email
        // }
        return this;
    }

    setUserPassword(password) {
        this.password = password

        // this.profile = {
        //     ...this.profile,
        //     password
        // }
        return this;
    }

    setRememberMe(remember_me_checked) {
        this.remember_me_checked = remember_me_checked
        return this;
    }

    isRememberMeChecked() {
        return this.remember_me_checked;
    }


    toJSON() {

        let json = {
            // "raw_response": JSON.stringify(this.raw_response),
            // "social": this.social,
            "name": this.name,
            "image": this.image,
            "email": this.email,
            "password": this.password,
        };


        //only add social object if both objects exists
        if (this.provider_type && this.provider_key) {
            json["social"] = this.social
        }

        return json;
    }

    isValidate() {
        //todo validate objects
        return true;
    }
}

export default LoginRequest;
