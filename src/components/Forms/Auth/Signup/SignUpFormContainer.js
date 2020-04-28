import React, {useState} from 'react';
import Size from '../../../Buttons/CombinedButtons/Size';
import UserForm from "./User";
import ProviderForm from "./Provider";
import FacebookLoginBtn from "../../SocialButtons/FacebookLoginBtn";
import GoogleLoginBtn from "../../SocialButtons/GoogleLoginBtn";
import {connect} from 'react-redux';


const SignUpFormContainer = ({onLoginClicked, currentLocale, countries, cities, districts}) => {

    const [selectedTab, setSelectedTab] = useState("user");

    const handleFacebookSignUp = (data) => {
        console.log(data)

        if (!data.error) {
            // let loginRequest = new LoginRequest()
            //     .setProviderKey(data.id)
            //     .setFacebookLogin()
            //     .setRawResponse(data)
            //     .setRememberMe(false)
            //     .setUserEmail(data.email)
            //     .setUserName(data.name)
            //     .setUserImage(data.picture.data.url)
        }

    }

    const handleGoogleSignUp = (data) => {
        console.log(data)
        if (!data.error) {

            // handleLogin(
            //     new LoginRequest()
            //         .setProviderKey(data.googleId)
            //         .setGoogleLogin()
            //         .setRawResponse(data)
            //         .setRememberMe(false)
            //         .setUserEmail(data.profileObj.email)
            //         .setUserName(data.profileObj.name)
            //         .setUserImage(data.profileObj.image)
            // )
        }
    }

    const getCountries = () => {
        // if(data[0])
        //     setSelectedCountry(data[0].value)
        return countries.map(country => ({
            value: country.id,
            label: country.getLocalizedName(currentLocale),
        }));
    }

    const getCities = () => {
        // if(data[0])
        //     setSelectedCountry(data[0].value)
        return cities.map(city => ({
            value: city.id,
            label: city.getLocalizedName(currentLocale),
        }));
    }

    const getDistricts = () => {
        // if(data[0])
        //     setSelectedCountry(data[0].value)
        return districts.map(district => ({
            value: district.id,
            label: district.getLocalizedName(currentLocale),
        }));
    }


    return <div className="form-group signup-form">
        <div className="text-right">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={onLoginClicked}>Login</a>
        </div>
        <h3 className="title text-center mt-3 mb-5 pt-0 font-weight-bold">Sign Up with Us</h3>
        <div className="my-2 mx-auto col-md-10">
            <Size size="btn-group-lg" tabs={["user", "doctor", "clinic"]}
                  onTabClick={(item) => setSelectedTab(item)}/>
        </div>

        <form autoComplete="off">
            <div className="form-group signup-form">
                <div className="row justify-content-center">
                    {
                        selectedTab === "user" ?
                            <UserForm
                                currentLocale={currentLocale}
                                countries={getCountries()}
                                cities={getCities()}
                                districts={getDistricts()}
                            /> :
                            <ProviderForm
                                currentLocale={currentLocale}
                                countries={getCountries()}
                                cities={getCities()}
                                districts={getDistricts()}
                            />
                    }
                </div>

                <div className="row justify-content-center">
                    <span className="line col-md-3 mb-3"/>
                    <span className="line col-md-3 offset-1 mb-3"/>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-right pr-2">
                        <FacebookLoginBtn onResponse={handleFacebookSignUp}/>
                    </div>
                    <div className="col-md-4 pl-2">
                        <GoogleLoginBtn onResponse={handleGoogleSignUp}/>

                    </div>
                </div>
            </div>
        </form>
    </div>

};

const mapStateToProps = (state) => ({
    countries: state.globals.countries,
    cities: state.globals.cities,
    districts: state.globals.districts,
    currentLocale: state.i18n.value,
});
export default connect(mapStateToProps)(SignUpFormContainer);
