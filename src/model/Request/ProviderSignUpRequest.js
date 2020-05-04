import Request from "./Request";


class ProviderSignUpRequest extends Request {

    constructor() {
        super();
        // this.raw_response = {};
        // this.profile = {};
        this.provider = {};
        this.user = {
            name: ""
        }
    }

    static createInstance() {
        return new ProviderSignUpRequest()
    }


    _setProviderType(type) {
        this.provider.type = type;
        return this;
    }

    setProviderType(type) {
        return this._setProviderType(type);
    }

    setProviderTypeClinic() {
        return this._setProviderType("clinic");
    }

    setProviderTypeDoctor() {
        return this._setProviderType("doctor");
    }

    setUserName(name) {
        this.user.name = name
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone
        return this;
    }

    setAdditionalPhoneNumber(additional_phone_number) {
        this.user.additional_phone_number = additional_phone_number
        return this;
    }

    setOfficialProviderName(official_name) {
        this.provider.official_name = official_name

        return this;
    }

    setUserEmail(email) {
        this.user.email = email
        return this;
    }

    setPassword(password) {
        this.user.password = password

        return this;
    }

    setPasswordConfirmation(password_confirmation) {
        this.user.password_confirmation = password_confirmation

        return this;
    }

    setAddress(address) {
        this.provider.address = address

        return this;
    }

    setGeoLat(geo_lat) {
        this.provider.geo_lat = geo_lat

        return this;
    }

    setGeoLng(geo_lng) {
        this.provider.geo_lng = geo_lng

        return this;
    }

    setCountryId(country_id) {
        this.user.country_id = country_id

        return this;
    }

    setCityId(city_id) {
        this.user.city_id = city_id

        return this;
    }

    setDistrictId(district_id) {
        this.user.district_id = district_id

        return this;
    }

    toJSON() {

        return {
            ...this.user,
            provider: this.provider
        };
    }

    isValidate() {
        //todo validate objects
        return true;
    }
}

export default ProviderSignUpRequest;
